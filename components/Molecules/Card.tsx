"use client";
import Image from "next/image";
import Typography from "../Atoms/Typography";
import Link from "next/link";
import { useCart } from "@/app/providers/CartContext";
import { useState } from "react";
import { Button } from "../ui/button";
import { Add01Icon, MinusSignIcon, ShoppingCartAdd02Icon } from "hugeicons-react";

type CardProps = {
    id: string;
    img?: string;
    name: string;
    price?: number;
    categorySlug?: string;
};

function Card({ id, img = "", name, price = 800, categorySlug = "" }: CardProps) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    function handleAdd() {
        addToCart({ id, categorySlug, name, price, img }, quantity);
        setQuantity(1);
    }
    return (
        <div className="group w-full rounded-3xl overflow-hidden border-2 border-primary transition-all duration-300 h-full bg-background">
            <div>
                <Link href={`/menu/${categorySlug}/${id}`}>
                    <div className="border-b-4 border-primary">
                        <Image
                            src={img ?? "/images/placeholder.png"}
                            alt={name}
                            height={300}
                            width={300}
                            className="h-70 mx-auto  brightness-80 scale-105 transition-all duration-300 group-hover:brightness-100 group-hover:scale-100 object-contain"
                            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8WKReDwAF8QILlMDYSAAAAABJRU5ErkJggg=="
                        />
                    </div>
                    <div className="px-4 py-1.5">
                        <div className="flex items-center justify-between mb-3">
                            <Typography size="xl" weight="bold">
                                {name}
                            </Typography>
                            <div className="flex gap-1">
                                <Typography
                                    color="primary"
                                    size="xxl"
                                    weight="semibold"
                                >
                                    {price}
                                </Typography>
                                <Typography color="primary" weight="semibold" className="text-xl">
                                    ج.م
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="flex items-center px-4 mb-4 justify-between w-full">

                    <div className="flex items-center bg-primary w-fit rounded-full ">
                        <button
                            onClick={() => setQuantity((q) => q + 1)}
                            className="size-10 flex items-center justify-center transition-colors duration-300 cursor-pointer hover:bg-[#de651e] rounded-tr-full rounded-br-full text-white"
                        >
                            <Add01Icon className="size-6 pointer-events-none" />
                        </button>
                        <span className="w-6 text-center font-bold tabular-nums text-xl text-white">
                            {quantity}
                        </span>
                        <button
                            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                            className="size-10 flex items-center justify-center  text-white transition-colors duration-300 cursor-pointer  hover:bg-[#de651e] rounded-tl-full rounded-bl-full"
                        >
                            <MinusSignIcon className="w-4 h-4 pointer-events-none" />
                        </button>
                    </div>
                    <Button
                        onClick={handleAdd}
                        className="font-bold cursor-pointer text-lg text-white hover:bg-[#de651e]! p-5"
                    >
                        <ShoppingCartAdd02Icon className="size-4" />
                        <Typography size="xs">اضف للسلة</Typography>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Card;
