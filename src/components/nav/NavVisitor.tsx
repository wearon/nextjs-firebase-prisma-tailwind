import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { visitorNav } from '@/data/visitorNav'
import { Dialog } from '@headlessui/react'
import { LinkTopNav } from '@/components/nav/LinkTopNav'
import Link from 'next/link'
import { LOGIN_PAGE } from '@/data/urls'

type TNavVisitorProps = {
    hide?: boolean
}

export const NavVisitor = (props:TNavVisitorProps) => {
    const { hide } = props
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    if (hide) return null

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav
                className="flex items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">
                            {process.env.NEXT_PUBLIC_APP_NAME}
                        </span>
                        <img
                            className="h-8 w-auto"
                            src={process.env.NEXT_PUBLIC_APP_LOGO}
                            alt={process.env.NEXT_PUBLIC_APP_NAME}
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {visitorNav.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-white"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        href={LOGIN_PAGE}
                        className="text-sm font-semibold leading-6 text-white"
                    >
                        Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">
                                {process.env.NEXT_PUBLIC_APP_NAME}
                            </span>
                            <img
                                className="h-8 w-auto"
                                src={process.env.NEXT_PUBLIC_APP_LOGO}
                                alt=""
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {visitorNav.map((item) => (
                                    <LinkTopNav key={item.name} item={item} />
                                ))}
                            </div>
                            <div className="py-6">
                                <Link
                                    href={LOGIN_PAGE}
                                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
