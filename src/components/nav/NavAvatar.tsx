import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { classNames } from '@/utils/classNames'
import { avatarNav } from '@/data/avatarNav'
import useUser from '@/hooks/useUser'
import Link from 'next/link'

export function NavAvatar() {
    const { logout,authUser } = useUser()
    return (
        <Menu as="div" className="relative ml-3">
            <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">Open user menu</span>
                    <div style={{backgroundImage: `url(${authUser?.photoURL || '/images/avatar.png'})`}} className="h-10 w-10 rounded-full bg-cover bg-center"></div>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {avatarNav.map((item) => (
                        <Menu.Item key={item.name}>
                            {({ active }) => (
                                <Link
                                    href={item.href}
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </Menu.Item>
                    ))}
                    <Menu.Item>
                        <button
                            onClick={logout}
                            className="block px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Sign out
                        </button>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
