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

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    return (
        <div>
            <Button
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
                className="relative group cursor-pointer"
            >
                <ShoppingCart02Icon className=" w-6! h-6! text-foreground  group-hover:text-primary transition-colors duration-300" />
                {items.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                        {items.length}
                    </span>
                )}
            </Button>

            {isOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Sidebar */}
                    <div
                        dir="rtl"
                        className="fixed left-0 top-0 h-full max-md:w-[85%] w-105 bg-background z-50 flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-200">
                            <Typography size="xl" weight="bold">
                                سلة المشتريات
                            </Typography>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-zinc-500 hover:text-primary transition-colors duration-300"
                            >
                                <Cancel01Icon className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Items list */}
                        <div className="flex-1 overflow-y-auto px-6 py-4">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center gap-3">
                                    <ShoppingCart02Icon className="w-12 h-12 text-zinc-300" />
                                    <Typography className="text-zinc-500">
                                        السلة فاضية دلوقتي
                                    </Typography>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-5">
                                    {items.map((item) => (
                                        <div
                                            key={`${item.categorySlug}-${item.id}`}
                                            className="flex gap-4 pb-5 border-b border-zinc-100 last:border-0"
                                        >
                                            <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                                                <Image
                                                    src={item.img}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            <div className="flex-1 flex flex-col justify-between">
                                                <div className="flex items-start justify-between gap-2">
                                                    <Typography weight="bold">
                                                        {item.name}
                                                    </Typography>
                                                    <button
                                                        onClick={() =>
                                                            removeFromCart(
                                                                item.id,
                                                                item.categorySlug,
                                                            )
                                                        }
                                                        className="text-zinc-400 hover:text-red-500 transition-colors duration-300 shrink-0"
                                                    >
                                                        <Delete02Icon className="w-4 h-4" />
                                                    </button>
                                                </div>

                                                <div className="flex items-center justify-between mt-2">
                                                    <div className="flex items-center gap-3 bg-background rounded-full px-1 py-1">
                                                        <button
                                                            onClick={() =>
                                                                updateQuantity(
                                                                    item.id,
                                                                    item.categorySlug,
                                                                    item.quantity -
                                                                        1,
                                                                )
                                                            }
                                                            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-background transition-colors duration-300"
                                                        >
                                                            <MinusSignIcon className="w-3.5 h-3.5" />
                                                        </button>
                                                        <Typography
                                                            size="sm"
                                                            weight="semibold"
                                                            className="w-4 text-center"
                                                        >
                                                            {item.quantity}
                                                        </Typography>
                                                        <button
                                                            onClick={() =>
                                                                updateQuantity(
                                                                    item.id,
                                                                    item.categorySlug,
                                                                    item.quantity +
                                                                        1,
                                                                )
                                                            }
                                                            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-background transition-colors duration-300"
                                                        >
                                                            <Add01Icon className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>

                                                    <Typography
                                                        color="primary"
                                                        weight="bold"
                                                    >
                                                        {item.price *
                                                            item.quantity}{" "}
                                                        ج.م
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="px-6 py-5 border-t border-zinc-200 bg-background">
                                <div className="flex items-center justify-between">
                                    <Typography>قيمة الطلب</Typography>
                                    <Typography size="lg" weight="semibold">
                                        {total} ج.م
                                    </Typography>
                                </div>
                                <div className="flex items-center justify-between">
                                    <Typography>التوصيل</Typography>
                                    <Typography size="lg" weight="semibold">
                                        75 ج.م
                                    </Typography>
                                </div>
                                <div className="w-full h-px bg-zinc-200 my-2" />
                                <div className="flex items-center justify-between">
                                    <Typography size="lg" weight="bold">
                                        الإجمالي
                                    </Typography>
                                    <Typography
                                        size="xl"
                                        color="primary"
                                        weight="bold"
                                    >
                                        {total + 75} ج.م
                                    </Typography>
                                </div>
                                <Button
                                    onClick={() => setIsCheckoutOpen(true)}
                                    className="w-full py-6 font-bold text-base cursor-pointer"
                                >
                                    إتمام الطلب
                                </Button>
                            </div>
                        )}
                    </div>
                </>
            )}

            {/* 👇 new: checkout modal, sits outside the sidebar so it can render on top of it */}
            <CheckoutPage
                cartItems={items}
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
                onOrderSuccess={() => setIsOpen(false)} // also closes the cart sidebar after sending
            />
        </div>
    );
}

export default Cart;
