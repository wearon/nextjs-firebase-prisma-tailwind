import { NextApiRequest, NextApiResponse } from 'next'
import { UnauthorizedException } from 'next-api-handler'
import { auth } from '@/lib/firebase-admin'
import { logger } from '@/lib/logger'

async function getUser(token: string) {
    let decodedToken
    try {
        decodedToken = await auth.verifyIdToken(token)
        if (!decodedToken || !decodedToken.uid) return null
        return {
            id: decodedToken.uid,
            email: decodedToken.email
        }
    } catch (e) {
        logger.error(e)
        return false
    }
}

export const authMiddleware = async (req: NextApiRequest, res: NextApiResponse) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    const token = authHeader.split(' ')[1]

    const user = await getUser(token) // some async service to check apiKey

    if (!user) {
        throw new UnauthorizedException()
    }

    return {
        user
    }
}
