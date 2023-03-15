import * as admin from 'firebase-admin'
import { getEnv } from '@/utils/getEnv'

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: getEnv('NEXT_PUBLIC_FIREBASE_PROJECT_ID'),
            clientEmail: getEnv('FIREBASE_CLIENT_EMAIL'),
            privateKey: getEnv('FIREBASE_PRIVATE_KEY').replace(/\\n/g, '\n')
        })
    })
}

const auth = admin.auth()

export { auth }
