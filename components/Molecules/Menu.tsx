"use client";
import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { menu } from "@/data";
import Card from "../Molecules/Card";
import { ArrowLeft01Icon, ArrowRight01Icon } from "hugeicons-react";

function AMenu() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDraggingRef = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const [isDragging, setIsDragging] = useState(false); // drives cursor style
    const [dragged, setDragged] = useState(false); // drives click-suppression
    const LeftArrow = useRef<HTMLDivElement>(null);
    const RightArrow = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleScroll = () => {
            const isEnd = Math.ceil(Math.abs(el.scrollLeft)) + 50 >= el.scrollWidth - el.clientWidth;
            const isStart = Math.floor(el.scrollLeft) === 0;

            if (LeftArrow.current) LeftArrow.current.style.display = isEnd ? "none" : "block";
            if (RightArrow.current) RightArrow.current.style.display = isStart ? "none" : "block";
        };

        handleScroll(); // set initial state
        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);
    }, []);

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

    const handleScrollButton = () => {
        scrollRef.current?.scrollBy({
            left: -45,
            behavior: "smooth",
        });
        const isEnd = Math.ceil(Math.abs(scrollRef.current?.scrollLeft ?? 0)) + 50 >= (scrollRef.current?.scrollWidth ?? 0) - (scrollRef.current?.clientWidth ?? 0)
        if (isEnd) {
            LeftArrow.current!.style.display = "none";
        }
        RightArrow.current!.style.display = "block";

    }
    const handleScrollButtonRight = () => {
        scrollRef.current?.scrollBy({
            left: 45,
            behavior: "smooth",
        });
        const isStart = Math.floor(scrollRef.current!.scrollLeft) === 0
        if (isStart) {
            RightArrow.current!.style.display = "none";
        }
        LeftArrow.current!.style.display = "block";

    }




    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 min-w-0 overflow-hidden w-full">
            <Tabs defaultValue={menu[0].slug} className="w-full" dir="rtl">
                <div
                    ref={scrollRef}
                    className="mb-6 sm:mb-8 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 select-none relative"
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
                        {/* <span className="absolute inset-0 z-10 [background:linear-gradient(270deg,transparent_57%,#0a0a0a_76%)]"></span> */}

                        <span className="fixed left-0 block md:hidden z-10 cursor-pointer pr-2 dark:[background:linear-gradient(270deg,transparent,black_40%)] [background:linear-gradient(270deg,transparent,white_40%)]"
                            onClick={handleScrollButton}
                            ref={LeftArrow}
                        >
                            <ArrowLeft01Icon strokeWidth={4} className="pointer-events-none" />
                        </span>
                        <span className="fixed right-0 hidden z-10 cursor-pointer pl-2 dark:[background:linear-gradient(270deg,black,black_40%)] [background:linear-gradient(270deg,white,white_40%)]"
                            onClick={handleScrollButtonRight}
                            ref={RightArrow}
                        >
                            <ArrowRight01Icon strokeWidth={4} className="pointer-events-none" />
                        </span>
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

export default AMenu;