import { footerNavigation } from '@/data/footerNavigation'
import { Key, ReactElement, JSXElementConstructor, ReactFragment } from 'react'
import Link from "next/link";
import {Url} from "url";

type TFooterLink = {
    name:  Key | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined
    href: string | Url
}

export function Footer() {
    const element = (item: TFooterLink) => (
        <li key={item.href.toString()}>
            <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                {item.name}
            </Link>
        </li>
    )

    return (
        <>
            {/* Footer */}
            <footer className="mt-32 bg-gray-900 sm:mt-56" aria-labelledby="footer-heading">
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <img
                            className="h-7"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                            alt="Company name"
                        />
                        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.solutions.map(element)}
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.support.map(element)}
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.company.map(element)}
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.legal.map(element)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
