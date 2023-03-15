import { auth } from '@/lib/firebase-admin'
import { NextApiRequest, NextApiResponse } from 'next'
import { logger } from '@/lib/logger'

interface IReq extends NextApiRequest {
    user: {
        uid: string
        name: string
        email: string | undefined
        emailVerified: boolean | undefined
        photoUrl: string | undefined
    }
}

export function withAuthApi(handler: { (req: NextApiRequest, res: NextApiResponse<any>): void }) {
    return async (req: IReq, res: NextApiResponse) => {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            return res.status(401).end('Not authenticated. No Auth header')
        }

        const token = authHeader.split(' ')[1]
        let decodedToken
        try {
            decodedToken = await auth.verifyIdToken(token)
            if (!decodedToken || !decodedToken.uid) return res.status(401).end('Not authenticated')
            const { name, email, email_verified, picture } = decodedToken
            logger.info('decodedToken', decodedToken)
            req.user = {
                uid: decodedToken.uid,
                name,
                email,
                emailVerified: email_verified,
                photoUrl: picture
            }
        } catch (error: any) {
            const errorCode = error.errorInfo.code
            error.status = 401
            if (errorCode === 'auth/internal-error') {
                error.status = 500
            }
            //TODO: handle firebase admin errors in more detail
            return res.status(error.status).json({ error: errorCode })
        }

        return handler(req, res)
    }
}
