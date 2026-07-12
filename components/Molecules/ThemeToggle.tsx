"use client";
import { useEffect, useState } from "react";
import { Moon02Icon, Sun03Icon } from "hugeicons-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-9 h-9" />
        );
    }

    return (
        <div>
            <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                variant={"ghost"}
                className="cursor-pointer"
            >
                {theme === "dark" ? (
                    <Sun03Icon className="w-5! h-5!" />
                ) : (
                    <Moon02Icon className="w-5! h-5!" />
                )}
            </Button>
        </div>
    );
}

export default ThemeToggle;
