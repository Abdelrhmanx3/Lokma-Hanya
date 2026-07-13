"use client";
import Image from "next/image";
import NavbarLinks from "../Molecules/NavbarLinks";
import ThemeToggle from "../Molecules/ThemeToggle";
import Cart from "./Cart";
import { useMediaQuery } from "@base-ui/react/unstable-use-media-query";
import { cn } from "@/lib/utils";

function Navbar() {
    const isTablet = useMediaQuery("(max-width:1024px)", {});
    return (
        <header
            className={cn([
                "z-50 w-full pointer-events-none",
                isTablet ? "fixed" : "relative mt-4",
            ])}
        >
            <div
                className={`pointer-events-auto ${
                    isTablet
                        ? " fixed bottom-5 left-4 right-4"
                        : " top-5 left-0 right-0 max-w-6xl px-5 mx-auto"
                }`}
            >
                <nav
                    dir="rtl"
                    className={`
                        relative flex items-center justify-between
                        ${
                            isTablet
                                ? "rounded-3xl px-5 py-3"
                                : "rounded-full px-4 py-2"
                        }
                        bg-[#e6e6e6] dark:bg-[#121212]
                        shadow-xl
                        backdrop-saturate-150
                    `}
                >
                    {/* Logo — wax-seal ring */}
                    <div
                        className={`
                            relative flex items-center justify-center rounded-full
                            ${isTablet ? "p-1" : "p-1.5"}
                            border border-dashed border-[#D9A441]/40
                            hover:border-solid hover:border-[#D9A441]
                            transition-all duration-300
                        `}
                    >
                        <Image
                            src="/logo.webp"
                            alt="logo"
                            width={isTablet ? 30 : 60}
                            height={isTablet ? 30 : 60}
                            className="rounded-full transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    <NavbarLinks />

                    <div className="flex items-center gap-4 max-md:gap-1">
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
