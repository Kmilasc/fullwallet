import { PropsWithChildren } from "react";
// import { Header } from "./Header";

function Layout({ children }: PropsWithChildren<unknown>) {
    return (
        <div className="bg-white">
            {/* <Header /> */}
            {children}
        </div>
    );
}

export default Layout;
