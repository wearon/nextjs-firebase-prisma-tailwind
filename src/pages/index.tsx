import React from "react";
import {Disclosure} from '@headlessui/react'
import {MinusSmallIcon, PlusSmallIcon} from '@heroicons/react/24/outline'
import {CheckIcon} from '@heroicons/react/20/solid'
import {features} from '@/data/features'
import {tiers} from '@/data/tiers'
import {faqs} from '@/data/faqs'
import {classNames} from '@/utils/classNames'
import Link from 'next/link'
import {SIGNUP_PAGE} from '@/data/urls'

import {LayoutVisitor} from "@/components/layouts/LayoutVisitor";


export default function HomePage() {
    return (
            <LayoutVisitor>
                {/* Hero section */}
                <div className="relative isolate overflow-hidden bg-gray-900 pt-14 pb-16 sm:pb-20">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                        alt=""
                        className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    <div
                        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                        <svg
                            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                            viewBox="0 0 1155 678"
                        >
                            <path
                                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                                fillOpacity=".2"
                                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                            />
                            <defs>
                                <linearGradient
                                    id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                                    x1="1155.49"
                                    x2="-78.208"
                                    y1=".177"
                                    y2="474.645"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9089FC"/>
                                    <stop offset={1} stopColor="#FF80B5"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                                <div
                                    className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                                    Announcing our next round of funding.{' '}
                                    <a href="#" className="font-semibold text-white">
                                        <span className="absolute inset-0" aria-hidden="true"/>
                                        Read more <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                            <div className="text-center">
                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                    Deploy to the cloud with confidence
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                                    commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <Link
                                        href={SIGNUP_PAGE}
                                        className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                                    >
                                        Get started
                                    </Link>
                                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                                        View demo <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Logo cloud */}
                        <div
                            className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <img
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                                alt="Transistor"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                                alt="Reform"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                                alt="Tuple"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                                alt="SavvyCal"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                                src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                                alt="Statamic"
                                width={158}
                                height={48}
                            />
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                        <svg
                            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                            viewBox="0 0 1155 678"
                        >
                            <path
                                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                                fillOpacity=".2"
                                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                            />
                            <defs>
                                <linearGradient
                                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                    x1="1155.49"
                                    x2="-78.208"
                                    y1=".177"
                                    y2="474.645"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9089FC"/>
                                    <stop offset={1} stopColor="#FF80B5"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                {/* Feature section */}
                <div className="mt-32 sm:mt-56">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl sm:text-center">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                No server? No problem.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                                suscipit eaque, iste dolor cupiditate blanditiis.
                            </p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden pt-16">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <img
                                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                                alt="App screenshot"
                                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                                width={2432}
                                height={1442}
                            />
                            <div className="relative" aria-hidden="true">
                                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]"/>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <feature.icon
                                            className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                                            aria-hidden="true"
                                        />
                                        {feature.name}
                                    </dt>
                                    {' '}
                                    <dd className="inline">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>

                {/* Testimonial section */}
                <div className="relative z-10 mt-32 bg-gray-900 pb-20 sm:mt-56 sm:pb-24 xl:pb-0">
                    <div className="absolute inset-0 overflow-hidden">
                        <svg
                            viewBox="0 0 1097 1023"
                            aria-hidden="true"
                            className="absolute top-[calc(50%-36rem)] left-[calc(50%-19rem)] w-[68.5625rem] transform-gpu blur-3xl"
                        >
                            <path
                                fill="url(#a)"
                                fillOpacity=".25"
                                d="M301.174 782.617 193.541 1022.43 0 661.021l301.174 121.596 193.845-431.895c1.241 199.565 42.802 522.762 199.124 219.035 195.402-379.66 143.295-711.863 284.729-507.43 113.148 163.545 124.068 445.37 115.378 565.839L811.753 450.894l20.102 545.98-530.681-214.257Z"
                            />
                            <defs>
                                <linearGradient
                                    id="a"
                                    x1="1097.04"
                                    x2="-173.036"
                                    y1=".267"
                                    y2="307.794"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#776FFF"/>
                                    <stop offset={1} stopColor="#FF4694"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div
                        className="mx-auto flex max-w-7xl flex-col items-center gap-y-10 gap-x-8 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                        <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                                <img
                                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:py-24 xl:px-16">
                            <figure className="relative isolate pt-6 sm:pt-12">
                                <svg
                                    viewBox="0 0 162 128"
                                    fill="none"
                                    aria-hidden="true"
                                    className="absolute top-0 left-0 -z-10 h-32 stroke-white/20"
                                >
                                    <path
                                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                                    />
                                    <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86}/>
                                </svg>
                                <blockquote
                                    className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                                    <p>
                                        Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim
                                        nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque
                                        interdum eget tellus non nibh scelerisque bibendum.
                                    </p>
                                </blockquote>
                                <figcaption className="mt-8 text-base">
                                    <div className="font-semibold text-white">Judith Black</div>
                                    <div className="mt-1 text-gray-400">CEO of Tuple</div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>

                {/* Pricing section */}
                <div className="relative isolate mt-32 bg-white px-6 sm:mt-56 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
                        aria-hidden="true"
                    >
                        <svg className="mx-auto w-[72.1875rem]" viewBox="0 0 1155 678">
                            <path
                                fill="url(#083c110e-60c8-42bb-a9db-29bba74cc569)"
                                fillOpacity=".3"
                                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                            />
                            <defs>
                                <linearGradient
                                    id="083c110e-60c8-42bb-a9db-29bba74cc569"
                                    x1="1155.49"
                                    x2="-78.208"
                                    y1=".177"
                                    y2="474.645"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9089FC"/>
                                    <stop offset={1} stopColor="#FF80B5"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            The right price for you, whoever you are
                        </p>
                    </div>
                    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                        Qui iusto aut est earum eos quae. Eligendi est at nam aliquid ad quo reprehenderit in aliquid
                        fugiat dolorum voluptatibus.
                    </p>
                    <div
                        className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                        {tiers.map((tier, tierIdx) => (
                            <div
                                key={tier.id}
                                className={classNames(
                                    tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                                    tier.featured
                                        ? ''
                                        : tierIdx === 0
                                            ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                                            : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                                    'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
                                )}
                            >
                                <h3
                                    id={tier.id}
                                    className={classNames(
                                        tier.featured ? 'text-indigo-400' : 'text-indigo-600',
                                        'text-base font-semibold leading-7'
                                    )}
                                >
                                    {tier.name}
                                </h3>
                                <p className="mt-4 flex items-baseline gap-x-2">
                                    <span
                                        className={classNames(
                                            tier.featured ? 'text-white' : 'text-gray-900',
                                            'text-5xl font-bold tracking-tight'
                                        )}
                                    >
                                        {tier.priceMonthly}
                                    </span>
                                    <span
                                        className={classNames(
                                            tier.featured ? 'text-gray-400' : 'text-gray-500',
                                            'text-base'
                                        )}
                                    >
                                        /month
                                    </span>
                                </p>
                                <p
                                    className={classNames(
                                        tier.featured ? 'text-gray-300' : 'text-gray-600',
                                        'mt-6 text-base leading-7'
                                    )}
                                >
                                    {tier.description}
                                </p>
                                <ul
                                    role="list"
                                    className={classNames(
                                        tier.featured ? 'text-gray-300' : 'text-gray-600',
                                        'mt-8 space-y-3 text-sm leading-6 sm:mt-10'
                                    )}
                                >
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <CheckIcon
                                                className={classNames(
                                                    tier.featured ? 'text-indigo-400' : 'text-indigo-600',
                                                    'h-6 w-5 flex-none'
                                                )}
                                                aria-hidden="true"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={tier.href}
                                    aria-describedby={tier.id}
                                    className={classNames(
                                        tier.featured
                                            ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                                            : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600',
                                        'mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
                                    )}
                                >
                                    Get started today
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
                    <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                            Frequently asked questions
                        </h2>
                        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                            {faqs.map((faq) => (
                                <Disclosure as="div" key={faq.question} className="pt-6">
                                    {({open}) => (
                                        <>
                                            <dt>
                                                <Disclosure.Button
                                                    className="flex w-full items-start justify-between text-left text-gray-900">
                                                    <span className="text-base font-semibold leading-7">
                                                        {faq.question}
                                                    </span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        {open ? (
                                                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true"/>
                                                        ) : (
                                                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true"/>
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>
            </LayoutVisitor>

    )
}

