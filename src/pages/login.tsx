import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { FieldValues, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import { auth, sendPasswordResetEmail, signInWithEmailAndPassword } from '@/lib/firebase'
import { LayoutVisitor } from '@/components/layouts/LayoutVisitor'
import { ButtonGoogle } from '@/components/buttons/ButtonGoogle'
import { DASHBOARD_PAGE, SIGNUP_PAGE } from '@/data/urls'
import useUser from '@/hooks/useUser'


const LoginPage = () => {
    const [forgotMode, setForgotMode] = React.useState(false)
    const { signInWithGoogle, authUser, loading } = useUser()
    const toggleForgotMode = () => setForgotMode(!forgotMode)
    const router = useRouter()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    const onSubmit = async (data: FieldValues) => {
        const { email, password } = data

        if (!forgotMode) {
            if (!email || !password) return toast.error('Please fill all fields')
            try {
                await signInWithEmailAndPassword(auth, email, password)
            } catch (error: any) {
                switch (error?.code) {
                    case 'auth/user-not-found':
                        toast.error('User not found')
                        break
                    case 'auth/wrong-password':
                        toast.error('Wrong password')
                        break
                    default:
                        toast.error(error.message)
                        break
                }
            }
        } else {
            if (!email) return toast.error('Please fill out email field')
            try {
                await sendPasswordResetEmail(auth, email)
                toast.success('Password reset email sent')
                //reset form
                reset()
                setForgotMode(false)
            } catch (error: any) {
                toast.error(error.message)
            }
        }
    }

    useEffect(() => {
        if (!loading && authUser) router.push(DASHBOARD_PAGE)
    }, [authUser, loading, router])

    return (
        <LayoutVisitor hideNavFooter={true}>
            <div className="flex  min-h-screen">
                <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <img
                                className="h-12 w-auto"
                                src={process.env.NEXT_PUBLIC_APP_LOGO}
                                alt={process.env.NEXT_PUBLIC_APP_NAME}
                            />
                            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Or{' '}
                                <a href={SIGNUP_PAGE} className="font-medium text-indigo-600 hover:text-indigo-500">
                                    start your 14-day free trial
                                </a>
                            </p>
                        </div>

                        <div className="mt-8">
                            <div>
                                <div className="flex items-center justify-center">
                                    <ButtonGoogle onClick={signInWithGoogle} />
                                </div>

                                <div className="relative mt-6">
                                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="bg-white px-2 text-gray-500">Or continue with</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                {...register('email', {
                                                    required: {
                                                        value: true,
                                                        message: 'Please enter your email'
                                                    },
                                                    pattern: {
                                                        value: /\S+@\S+\.\S+/,
                                                        message: 'Entered value does not match email format'
                                                    }
                                                })}
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-xs italic">
                                                    {errors?.email?.message?.toString()}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    {!forgotMode && (
                                        <>
                                            <div className="space-y-1">
                                                <label
                                                    htmlFor="password"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Password
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="password"
                                                        {...register('password', {
                                                            required: {
                                                                value: true,
                                                                message: 'Please enter your password'
                                                            },
                                                            minLength: {
                                                                value: 5,
                                                                message: 'min length is 5'
                                                            }
                                                        })}
                                                        type="password"
                                                        autoComplete="current-password"
                                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                    {errors.password && (
                                                        <p className="text-red-500 text-xs italic">
                                                            {errors?.password?.message?.toString()}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center"></div>

                                                <div className="text-sm">
                                                    <button
                                                        type="button"
                                                        onClick={toggleForgotMode}
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                    >
                                                        Forgot your password?
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {forgotMode && (
                                        <>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center"></div>

                                                <div className="text-sm">
                                                    <button
                                                        type="button"
                                                        onClick={toggleForgotMode}
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                    >
                                                        Login?
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            {forgotMode ? 'Send reset link' : 'Sign in'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden w-0 flex-1 lg:block">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                        alt=""
                    />
                </div>
            </div>
        </LayoutVisitor>
    )
}

export default LoginPage
