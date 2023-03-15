// eslint-disable-next-line import/named
import { NextApiRequestWithMiddleware, RouterBuilder } from 'next-api-handler'
import { authMiddleware } from '@/middlewares/authMiddleware'

const router = new RouterBuilder()

// or router.inject(authMiddleware) if the order of adding middleware does not matter
router.inject(authMiddleware)

// all middleware values will stay in `req.middleware`,
router.get((req: NextApiRequestWithMiddleware) => {
    const user = req.middleware?.user
    return {}
})

export default router.build()
