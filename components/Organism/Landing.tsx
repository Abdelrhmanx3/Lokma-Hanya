import Link from "next/link";
import Typography from "../Atoms/Typography";
import Icon from "../Atoms/Icon";
import { ArrowLeft02Icon } from "hugeicons-react";
import { Button } from "../ui/button";

function Landing() {
    return (
        <div className="relative bg-[url('/images/hero.png')] bg-cover bg-center h-[80vh]">
            <div className="absolute inset-0 bg-linear-to-l from-background from-30% to-transparent" />
            <div className="relative h-full" dir="rtl">
                <div className="absolute top-1/2 -translate-y-1/2 right-10">
                    <Typography size="xxl" className=" max-md:text-3xl">
                        <span className="text-primary font-bold">
                            {" "}
                            أهلًا بيكم
                        </span>{" "}
                        في لقمه هنيه
                    </Typography>
                    <Typography
                        className="mr-2 font-semibold max-md:text-sm max-md:mt-2"
                        size="xl"
                    >
                        مش كل أكلة بتشبع... في أكلات بترجعك لأحلى ذكريات البيت
                    </Typography>
                    <div className="mt-3 p-2  max-md:py-1  max-md:mt-1">
                        <Button
                            className="px-8 py-3 group font-bold text-lg"
                            asChild
                            size={"lg"}
                        >
                            <Link href={"/menu"}>
                                استكشف القائمة
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
