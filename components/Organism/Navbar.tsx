import Image from "next/image";
import NavbarLinks from "../Molecules/NavbarLinks";
import ThemeToggle from "../Molecules/ThemeToggle";
import Cart from "./Cart";

function Navbar() {
    return (
        <div className="relative z-20 shadow-2xl">
            <div
                className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2"
                dir="rtl"
            >
                <div className="flex items-center justify-between w-full">
                    {/* logo */}
                    <Image
                        src={"/logo.webp"}
                        alt="logo"
                        width={75}
                        height={75}
                        fetchPriority="high"
                        preload
                    />
                    <NavbarLinks />
                    <div className="flex items-center">
                        <Cart />
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
