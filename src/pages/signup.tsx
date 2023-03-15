import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FieldValues, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { updateProfile } from '@firebase/auth'

import { auth, createUserWithEmailAndPassword, sendEmailVerification } from '@/lib/firebase'
import { LayoutVisitor } from '@/components/layouts/LayoutVisitor'
import useUser from '@/hooks/useUser'
import { ButtonGoogle } from '@/components/buttons/ButtonGoogle'
import { Input } from '@/components/Input'


import { DASHBOARD_PAGE, HOME_PAGE, LOGIN_PAGE } from '@/data/urls'

const Img = (props: any) => {
    if (!props.src) return null
    return <Image {...props} />
}

Img.defaultProps = {
    alt: '',
    width: 0,
    height: 0
}

type SignupType = {
    name: string
    email: string
    password: string
}

const LoginPage = () => {
    const { signInWithGoogle, authUser, loading } = useUser()
    const router = useRouter()
    const methods = useForm<SignupType>({ mode: 'onBlur' })

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = methods

    const onSubmit = async (data: FieldValues) => {
        const { email, password, name } = data

        if (!email || !password || !name) return toast.error('Please fill all fields')
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(userCred.user, { displayName: name })
            //send email verification
            await sendEmailVerification(userCred.user)
            toast.success('User created successfully')
            reset()
        } catch (error: any) {
            console.log(error.code + ' ' + error.message)
            switch (error?.code) {
                case 'auth/user-not-found':
                    toast.error('User not found')
                    break
                case 'auth/wrong-password':
                    toast.error('Wrong password')
                    break
                //weak-password
                case 'auth/weak-password':
                    toast.error('Password should be at least 6 characters')
                default:
                    toast.error(error.message)
                    break
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
                        <Link href={HOME_PAGE}>
                            <Img
                                className="h-6 w-auto ml-2"
                                src={process.env.NEXT_PUBLIC_APP_LOGO}
                                alt={process.env.NEXT_PUBLIC_APP_NAME}
                            />
                            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                                Get started for free
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">14-day free trial</p>
                        </Link>

                        <div className="mt-8">
                            <div>
                                <div className="flex items-center justify-center">
                                    <ButtonGoogle onClick={signInWithGoogle} label="Sign up with Google" />
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
                                    {/*Name Input*/}
                                    <Input
                                        id="name"
                                        label="Name"
                                        autoComplete="name"
                                        register={register}
                                        errors={errors}
                                        registerOptions={{
                                            required: {
                                                value: true,
                                                message: 'Please enter your name'
                                            }
                                        }}
                                    />
                                    <Input
                                        autoComplete="email"
                                        id="email"
                                        label="Email address"
                                        type="email"
                                        register={register}
                                        errors={errors}
                                        registerOptions={{
                                            required: {
                                                value: true,
                                                message: 'Please enter your email'
                                            },
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: 'Entered value does not match email format'
                                            }
                                        }}
                                    />
                                    <Input
                                        id="password"
                                        label="Password"
                                        register={register}
                                        errors={errors}
                                        registerOptions={{
                                            required: {
                                                value: true,
                                                message: 'Please enter your password'
                                            },
                                            minLength: {
                                                value: 5,
                                                message: 'min length is 5'
                                            }
                                        }}
                                        type="password"
                                        autoComplete="current-password"
                                    />
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm">
                                            <Link
                                                href={LOGIN_PAGE}
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                Already have an account?
                                            </Link>
                                        </div>
                                        <div></div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign up
                                    </button>
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
