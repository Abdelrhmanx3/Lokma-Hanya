"use client";
import { useEffect, useState } from "react";
import { Moon02Icon, Sun03Icon } from "hugeicons-react";
import { useTheme } from "next-themes";

function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9" />;
    }

    return (
        <div className="">
            <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="cursor-pointer hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 p-1.5 rounded-full flex items-center justify-center group"
            >
                <Sun03Icon className="size-5 hidden dark:block group-hover:text-primary" />
                <Moon02Icon className="size-5 block dark:hidden group-hover:text-primary" />
            </button>
        </div>
    );
}

export default ThemeToggle;