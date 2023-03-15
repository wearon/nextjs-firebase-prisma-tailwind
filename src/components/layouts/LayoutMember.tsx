import React, { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'

import { Bars3BottomLeftIcon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import { classNames } from '@/utils/classNames'
import { Spinner } from '@/components/Spinner'
import { memberNav } from '@/data/memberNav'
import { NavAvatar } from '@/components/nav/NavAvatar'
import useUser from '@/hooks/useUser'

import { DASHBOARD_PAGE, HOME_PAGE, LOGIN_PAGE } from '@/data/urls'
import { Flash, TFlashProps } from '@/components/Flash'
import { getCookie } from 'cookies-next'

type TLayoutProps = {
    children: React.ReactNode
    pageTitle: string
}

export const LayoutMember = ({ children, pageTitle }: TLayoutProps) => {
    const { authUser, loading, reVerifyEmail } = useUser()
    const router = useRouter()
    const [flash, setFlash] = useState<TFlashProps | null>(null)

    // Listen for changes on loading and authUser, redirect if needed
    useEffect(() => {
        if (!loading && !authUser) {
            router.push(HOME_PAGE)
        } else if (!loading && authUser) {
            console.log('LayoutMember: User is logged in', authUser)
            if (!authUser.emailVerified) {
                setFlash({
                    message: 'Please verify your email: ' + authUser.email,
                    type: 'warning',
                    cta: {
                        label: 'Resend',
                        onClick: async () => {
                            reVerifyEmail().then(() => {
                                setFlash({ message: 'Verification email sent', type: 'success' })
                            })
                        }
                    }
                })
            }
        }
    }, [authUser, loading, reVerifyEmail,router])

    useEffect(() => {
        setFlash({
            message: 'Welcome back ' + authUser?.displayName,
            type: 'success',
            cta: {
                label: 'Resend',
                onClick: async () => {
                    //fetch with header authorization
                    fetch('/api/hello', {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + getCookie('token')
                        }
                    })
                        // fetch('/api/hello')
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data)
                        })
                }
            }
        })
    }, [router, authUser])

    const [sidebarOpen, setSidebarOpen] = useState(false)

    if (loading) return <Spinner />

    return (
        <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex flex-shrink-0 items-center px-4">
                                    <img
                                        className="h-8 w-auto"
                                        src={process.env.NEXT_PUBLIC_APP_LOGO}
                                        alt={process.env.NEXT_PUBLIC_APP_NAME}
                                    />
                                </div>
                                <div className="mt-5 h-0 flex-1 overflow-y-auto">
                                    <nav className="space-y-1 px-2">
                                        {memberNav.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-gray-900 text-white'
                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'group flex items-center rounded-md px-2 py-2 text-base font-medium'
                                                )}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        item.current
                                                            ? 'text-gray-300'
                                                            : 'text-gray-400 group-hover:text-gray-300',
                                                        'mr-4 h-6 w-6 flex-shrink-0'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        <div className="w-14 flex-shrink-0" aria-hidden="true">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
                    <Link href={DASHBOARD_PAGE} className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
                        <img
                            className="h-8 w-auto"
                            src={process.env.NEXT_PUBLIC_APP_LOGO}
                            alt={process.env.NEXT_PUBLIC_APP_NAME}
                        />
                    </Link>
                    <div className="flex flex-1 flex-col overflow-y-auto">
                        <nav className="flex-1 space-y-1 px-2 py-4">
                            {memberNav.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                                    )}
                                >
                                    <item.icon
                                        className={classNames(
                                            item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                            'mr-3 h-6 w-6 flex-shrink-0'
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:pl-64">
                <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
                    <button
                        type="button"
                        className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="flex flex-1 justify-between px-4">
                        <div className="flex flex-1">
                            <form className="flex w-full lg:ml-0" action="#" method="GET">
                                <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="search-field"
                                        className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm"
                                        placeholder="Search"
                                        type="search"
                                        name="search"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="ml-4 flex items-center lg:ml-6">
                            <button
                                type="button"
                                className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Profile dropdown */}
                            <NavAvatar />
                        </div>
                    </div>
                </div>

                <main className="flex-1">
                    {flash && <Flash {...flash} />}

                    <div className="py-6">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <h1 className="text-2xl font-semibold text-gray-900">{pageTitle}</h1>
                        </div>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
                    </div>
                </main>
            </div>
        </div>
    )
}
