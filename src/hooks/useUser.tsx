import { useEffect, useState } from 'react'
//prettier-ignore
import {GoogleAuthProvider,auth,sendEmailVerification,signInWithPopup,signOut} from '@/lib/firebase'
import { UserImpl } from '@firebase/auth/internal'
import { User } from '@firebase/auth-types'
import { toast } from 'react-hot-toast'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'

const formatAuthUser = (user: User | boolean) => {
    if (user && user instanceof UserImpl) {
        ;(async () => {
            try {
                let decodedToken = await user.getIdTokenResult(/*forceRefresh*/ true)
                setCookie('token', decodedToken.token, {
                    maxAge: 60 * 60 * 24 * 7 // doesn't matter cuz fb could invalidate it
                })
            } catch (error) {}
        })()

        return {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
            providerData: user.providerData,
            createdAt: user.metadata.creationTime,
            lastLogin: user.metadata.lastSignInTime
        }
    }
    return null
}

type TFormattedUser = {
    uid: string
    email: string | null // match firebase type
    displayName: string | null // match firebase type
    photoURL: string | null // match firebase type
    emailVerified: boolean
    providerData: any
    createdAt: string | undefined // match firebase type
    lastLogin: string | undefined // match firebase type
}

export default function useUser() {
    const [authUser, setAuthUser] = useState<null | TFormattedUser>(null)
    const [loading, setLoading] = useState(true)
    const [authState, setAuthState] = useState<User | null>(null)

    const getFreshToken = async () => {
        console.log('getFreshToken called', new Date())
        const currentUser = auth.currentUser
        if (currentUser) {
            const token = await currentUser.getIdToken(false)
            return `${token}`
        } else {
            return ''
        }
    }

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        try {
            await signInWithPopup(auth, provider)
        } catch (error: any) {
            const errorCode = error?.code
            const errorMessage = error?.message

            switch (errorCode) {
                case 'auth/account-exists-with-different-credential':
                    toast.error('You have already signed up with a different auth provider for that email.')
                    break
                case 'auth/invalid-credential':
                    toast.error('Error occurred while accessing Google account.')
                    break
                case 'auth/operation-not-allowed':
                    toast.error('Google sign in is not enabled.')
                    break
                case 'auth/user-disabled':
                    toast.error('Your  account has been disabled.')
                    break
                //auth/popup-closed-by-user
                case 'auth/popup-closed-by-user':
                    toast.error('You have closed the popup before completing the sign in.')
                    break
                case 'auth/unauthorized-domain':
                    toast.error(
                        'This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.'
                    )
                    break
                default:
                    toast.error(errorMessage)
            }
        }
    }

    const reVerifyEmail = async () => {
        if (auth.currentUser) {
            try {
                await sendEmailVerification(auth.currentUser)
                toast.success('Verification email sent')
            } catch (error: any) {
                toast.error(error.message)
                throw error
            }
        }
    }

    const logout: () => any = () => {
        return signOut(auth)
            .then(clear)
            .catch((error) => {
                // An error happened.
                console.error(error)
            })
    }

    const clear = () => {
        setAuthUser(null)
        setLoading(true)
        setAuthState(null)
        deleteCookie('token')
    }

    //TODO: find the right type
    const authStateChanged = async (authState: any) => {
        if (!authState) {
            setAuthUser(null)
            setLoading(false)
            return
        }

        setLoading(true)
        let formattedUser = formatAuthUser(authState)
        console.log('authState', authState)
        setAuthState(authState)
        setAuthUser(formattedUser)
        setLoading(false)
    }

    // listen for Firebase state change
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authStateChanged)
        return () => unsubscribe()
    }, [])

    return {
        authUser,
        reVerifyEmail,
        signInWithGoogle,
        loading,
        logout
    }
}
