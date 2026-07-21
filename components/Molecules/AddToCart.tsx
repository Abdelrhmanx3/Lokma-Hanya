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
                <div className="flex items-center gap-3 bg-primary text-white shadow-sm rounded-full">
                    <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="size-10 flex items-center justify-center transition-colors duration-300 cursor-pointer hover:bg-[#de651e] rounded-tr-full rounded-br-full hover:shadow-[inset_3px_5px_6px_-6px_black]"
                    >
                        <Add01Icon className="size-6 pointer-events-none" />
                    </button>
                    <span className="w-6 text-center font-bold tabular-nums text-xl">
                        {quantity}
                    </span>
                    <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="size-10 flex items-center justify-center hover:text-black dark:hover:text-white transition-colors duration-300 cursor-pointer hover:shadow-[inset_3px_4px_10px_-6px_black] hover:bg-[#de651e] rounded-tl-full rounded-bl-full"
                    >
                        <MinusSignIcon className="w-4 h-4 pointer-events-none" />
                    </button>
                </div>

                <Button
                    onClick={handleAdd}
                    className="flex-1 py-6 font-bold cursor-pointer text-lg text-white hover:bg-[#de651e]!"
                >
                    أضف للسلة
                </Button>
            </div>
        </div>
    );
}

export default AddToCart;
