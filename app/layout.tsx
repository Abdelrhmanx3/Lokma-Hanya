import type { Metadata } from "next";
import { Baloo_Bhaijaan_2 } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./providers/CartContext";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Organism/Navbar";
import { ThemeProvider } from "@/components/Molecules/ThemeProvider";
import CartSidebar from "@/components/Atoms/CartSidebar";
const balooBhaijaan = Baloo_Bhaijaan_2({
    subsets: ["arabic"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-baloo",
    fallback: ['Segoe UI', 'Tahoma', 'Arial', "sans-serif"],
    preload: true,
});

export const metadata: Metadata = {
    title: "لقمة هنيّة | Lokma Hanya",
    description:
        "Lokma Hanya brings traditional home-style dishes to your table — from fresh salads and stuffed vegetables to slow-cooked meats and poultry. Explore our full menu and order online.",
    icons: {
        icon: "public/logo.png",
    },
    keywords:["لقمة هنية",""]
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
            <head>
                <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="MyWebSite" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className="min-h-full flex flex-col">
                <CartProvider>
                    <ThemeProvider
                        attribute={"class"}
                        defaultTheme="system"
                        enableSystem
                    >
                        <Navbar />
                        <CartSidebar/>
                        <main className="max-md:mb-20">{children}</main>
                    </ThemeProvider>
                </CartProvider>
            </body>
        </html>
    );
}