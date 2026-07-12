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
                <div className="flex items-center gap-3 bg-background rounded-full px-1 py-1">
                    <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background transition-colors duration-300"
                    >
                        <Add01Icon className="w-4 h-4 cursor-pointer" />
                    </button>
                    <span className="w-6 text-center font-bold">
                        {quantity}
                    </span>
                    <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background transition-colors duration-300"
                    >
                        <MinusSignIcon className="w-4 h-4 cursor-pointer" />
                    </button>
                </div>

                <Button
                    onClick={handleAdd}
                    className="flex-1 py-6 font-bold cursor-pointer"
                >
                    أضف للسلة
                </Button>
            </div>
        </div>
    );
}

export default AddToCart;
