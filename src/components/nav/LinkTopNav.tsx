import Link from "next/link";

type TLinkTopNavProps = { item: { name: string; href: string } | { name: string; href: string } | { name: string; href: string } | { name: string; href: string } }
export function LinkTopNav(props:TLinkTopNavProps ) {
    return <Link

        href={props.item.href}
        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    >
        {props.item.name}
    </Link>;
}