import type { Metadata } from "next";
import {Baloo_Bhaijaan_2 } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./providers/CartContext";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Organism/Navbar";
import { ThemeProvider } from "@/components/Molecules/ThemeProvider";
const balooBhaijaan = Baloo_Bhaijaan_2({
    subsets: ["arabic"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-baloo",
    preload: true,
});

export const metadata: Metadata = {
    title: "Lokma Hanya",
    description:
        "Lokma Hanya brings traditional home-style dishes to your table — from fresh salads and stuffed vegetables to slow-cooked meats and poultry. Explore our full menu and order online.",
    icons: {
        icon: "public/logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn("h-full", "antialiased", balooBhaijaan.variable)}
            suppressHydrationWarning
        >
            <body className="min-h-full flex flex-col">
                <CartProvider>
                    <ThemeProvider
                        attribute={"class"}
                        defaultTheme="system"
                        enableSystem
                    >
                        <Navbar />
                        {children}
                    </ThemeProvider>
                </CartProvider>
            </body>
        </html>
    );
}