import type { FC, ReactNode } from "react";
import Navbar from "../Navbar";

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className='App'>{children}</div>
        </>
    );
};

export default Layout;
