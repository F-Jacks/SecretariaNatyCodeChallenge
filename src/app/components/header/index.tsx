import CarLogo from "./logo";
import SideMenu from "./nav";

const Header = () => {
    return (
        <header
            className="h-[calc(3.25rem-2px)] fixed top-0 left-0 w-full px-[1.5%] z-50 flex items-center justify-between backdrop-blur-xl border"
        >
            <SideMenu />
            <CarLogo />
        </header>
    );
};


export default Header;