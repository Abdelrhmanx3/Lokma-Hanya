"use client";
import { useState } from "react";
import { useCart } from "@/app/providers/CartContext";
import { Button } from "@/components/ui/button";
import { Add01Icon, MinusSignIcon } from "hugeicons-react";

interface AddToCartProps {
    id: string;
    categorySlug: string;
    name: string;
    price: number;
    img: string;
}

function AddToCart({ id, categorySlug, name, price, img }: AddToCartProps) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    function handleAdd() {
        addToCart({ id, categorySlug, name, price, img }, quantity);
        setQuantity(1);
    }

    return (
        <div className="mt-4">
            <div className="flex items-center gap-4 mt-5">
                <div className="flex items-center gap-3 bg-primary text-white shadow-sm rounded-full px-1 py-1">
                    <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="size-10 flex items-center justify-center rounded-full hover:bg-background hover:text-black dark:hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                        <Add01Icon className="size-6 pointer-events-none" />
                    </button>
                    <span className="w-6 text-center font-bold tabular-nums text-xl">
                        {quantity}
                    </span>
                    <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="size-10 flex items-center justify-center rounded-full hover:bg-background hover:text-black dark:hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                        <MinusSignIcon className="w-4 h-4 pointer-events-none" />
                    </button>
                </div>

                <Button
                    onClick={handleAdd}
                    className="flex-1 py-6 font-bold cursor-pointer text-lg text-white"
                >
                    أضف للسلة
                </Button>
            </div>
        </div>
    );
}

export default AddToCart;
