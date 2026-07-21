import Image from "next/image";
import NavbarLinks from "../Molecules/NavbarLinks";
import ThemeToggle from "../Molecules/ThemeToggle";
import Cart from "./Cart";
import { cn } from "@/lib/utils";

function Navbar() {
    return (
        <header className="z-50 w-full pointer-events-none fixed lg:relative lg:mt-4">
            <div
                className={cn(
                    "pointer-events-auto fixed bottom-5 left-4 right-4",
                    "lg:static lg:top-5 lg:left-0 lg:right-0 lg:max-w-6xl lg:px-5 lg:mx-auto"
                )}
            >
                <nav
                    dir="rtl"
                    className={cn(
                        "relative flex items-center justify-between",
                        "rounded-3xl px-5 py-3 lg:rounded-full lg:px-4 lg:py-2",
                        "bg-[#e6e6e6] dark:bg-[#121212]",
                        "shadow-xl backdrop-saturate-150"
                    )}
                >
                    {/* Logo — wax-seal ring */}
                    <div
                        className={cn(
                            "relative flex items-center justify-center rounded-full",
                            "p-1 lg:p-1.5",
                            "border border-dashed border-[#D9A441]/40",
                            "hover:border-solid hover:border-[#D9A441]",
                            "transition-all duration-300"
                        )}
                    >
                        <Image
                            src="/logo.webp"
                            alt="logo"
                            width={60}
                            height={60}
                            className="rounded-full w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    <NavbarLinks />

                    <div className="flex items-center gap-1 lg:gap-2">
                        <Cart />
                        <div className="h-5 w-px bg-gradient-to-b from-transparent via-[#D9A441]/70 to-transparent" />
                        <ThemeToggle />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;