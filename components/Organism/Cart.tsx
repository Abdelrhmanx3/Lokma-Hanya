"use client";
import { useState } from "react";
import {
    ShoppingCart02Icon,
    Cancel01Icon,
    Delete02Icon,
    Add01Icon,
    MinusSignIcon,
} from "hugeicons-react";
import { useCart } from "@/app/providers/CartContext";
import { Button } from "../ui/button";
import Typography from "../Atoms/Typography";
import Image from "next/image";
import CheckoutPage from "./CheckoutPage";

function Cart() {
    const { isOpen, setIsOpen, items, removeFromCart, updateQuantity } =
        useCart();

    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false); // 👈 new



    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative group cursor-pointer p-1.5! flex items-end hover:bg-muted dark:hover:bg-muted/50 rounded-full -translate-y-px"
            >
                <ShoppingCart02Icon className="size-5! text-foreground  group-hover:text-primary transition-colors duration-300 " />
                {items.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                        {items.length}
                    </span>
                )}
            </button>

            {/* 👇 new: checkout modal, sits outside the sidebar so it can render on top of it */}

        </div>
    );
}

export default Cart;
