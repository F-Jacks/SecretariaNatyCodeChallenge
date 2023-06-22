"use client"

import CarLogo from "./logo";
import SideMenu from "./nav";

const Header = () => {
    return (
        <header
            className="h-[calc(3.25rem-2px)] border fixed top-0 left-0 w-[100vw] z-50 flex items-center justify-between px-[1.5%]"
        >
            <SideMenu />
            <CarLogo />
        </header>
    );
};


export default Header;