"use client";
import { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { menu } from "@/data";
import Card from "../Molecules/Card";

function Menu() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDraggingRef = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const [isDragging, setIsDragging] = useState(false); // drives cursor style
    const [dragged, setDragged] = useState(false); // drives click-suppression

    const onMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        isDraggingRef.current = true;
        setIsDragging(true);
        setDragged(false);
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const onMouseLeaveOrUp = () => {
        isDraggingRef.current = false;
        setIsDragging(false);
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDraggingRef.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - startX.current;
        if (Math.abs(walk) > 5) setDragged(true);
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const onClickCapture = (e: React.MouseEvent) => {
        if (dragged) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 min-w-0 overflow-hidden w-full">
            <Tabs defaultValue={menu[0].slug} className="w-full" dir="rtl">
                <div
                    ref={scrollRef}
                    className="mb-6 sm:mb-8 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 select-none"
                    style={{ cursor: isDragging ? "grabbing" : "grab" }}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseLeaveOrUp}
                    onMouseLeave={onMouseLeaveOrUp}
                    onClickCapture={onClickCapture}
                >
                    <TabsList
                        className="w-max min-w-full sm:min-w-0 justify-start
                        flex-nowrap gap-1 sm:gap-2 h-auto p-1 bg-transparent"
                    >
                        {menu.map((category) => (
                            <TabsTrigger
                                key={category.id}
                                value={category.slug}
                                className="flex-none whitespace-nowrap font-bold text-base sm:text-xl md:text-1xl
                                cursor-pointer text-zinc-600 transition-colors duration-300
                                data-[state=active]:text-primary
                                data-[state=inactive]:hover:text-primary
                                px-3 py-2"
                            >
                                {category.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {menu.map((category) => (
                    <TabsContent key={category.id} value={category.slug}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {category.items.map((item) => (
                                <Card
                                    key={item.id}
                                    {...item}
                                    img={item.image}
                                    categorySlug={category.slug}
                                />
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}

export default Menu;