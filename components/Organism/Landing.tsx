import Link from "next/link";
import Typography from "../Atoms/Typography";
import Icon from "../Atoms/Icon";
import { ArrowLeft02Icon } from "hugeicons-react";
import { Button } from "../ui/button";
import Image from "next/image";

function Landing() {
    return (
        <div className="relative h-[80vh]">
            <Image
                alt="hero"
                fill
                src={"/images/hero.webp"}
                preload
                fetchPriority="high"
                placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8WKReDwAF8QILlMDYSAAAAABJRU5ErkJggg=="
                className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-l from-background from-30% to-transparent" />

            <div className="relative h-full" dir="rtl">
                <div className="absolute top-1/2 -translate-y-1/2 right-10">
                    <Typography size="xxl" className=" max-md:text-3xl flex items-end">
                        <span>
                            أهلًا بيكم في
                        </span>
                        &nbsp;
                        <span className="text-primary h-[44px] [line-height:54px] text-5xl font-semibold md:text-6xl md:h-[68.8px] md:[line-height:83px]">لقمة هنيّة</span>
                    </Typography>
                    <Typography
                        className="mr-2 font-semibold max-md:text-sm max-md:mt-2"
                        size="xl"
                    >
                        مش كل أكلة بتشبع... في أكلات بترجعك لأحلى ذكريات البيت
                    </Typography>
                    <div className="mt-3 p-2  max-md:py-1  max-md:mt-1">
                        <Button
                            className="px-8 py-6 group font-bold text-xl text-white"
                            asChild
                            size={"lg"}
                        >
                            <Link href={"/menu"}>
                                استكشف المنيو
                                <Icon
                                    icon={ArrowLeft02Icon}
                                    className="transition-transform duration-300 group-hover:-translate-x-1 mr-2"
                                />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
