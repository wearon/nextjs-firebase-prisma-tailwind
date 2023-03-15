import React, {useEffect} from 'react';
import {NavVisitor} from "@/components/nav/NavVisitor";
import {Footer} from "@/components/nav/Footer";

type TLayoutProps = {
    children: React.ReactNode;
    hideNavFooter?: boolean;
}

export const LayoutVisitor = ({children,hideNavFooter}:TLayoutProps) => {
    return (
        <div className="bg-white">
            {!hideNavFooter && <NavVisitor />}
            <main>{children}</main>
            {!hideNavFooter && <Footer />}
        </div>
    )
  }
