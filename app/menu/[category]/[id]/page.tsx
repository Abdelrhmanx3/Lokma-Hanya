import { menu } from "@/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Typography from "@/components/Atoms/Typography";
import AddToCart from "@/components/Molecules/AddToCart";

type PageProps = {
    params: Promise<{ category: string; id: string }>;
};

async function Page({ params }: PageProps) {
    const { category: categorySlug, id } = await params;
    const category = menu.find((cat) => cat.slug === categorySlug);
    const item = category?.items.find((item) => item.id === id);

    if (!item) {
        notFound();
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-16" dir="rtl">
            <Link
                href={`/menu`}
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-primary transition-colors mb-6"
            >
                <ArrowRight size={40} />
                <span className="font-semibold text-2xl">العودة للمنيو</span>
            </Link>

            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                dir="ltr"
            >
                <div className="mt-10">
                    <div className="relative rounded-4xl overflow-hidden shadow-xl shadow-black/10">
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={700}
                            height={700}
                            className="w-full h-auto object-cover"
                            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8WKReDwAF8QILlMDYSAAAAABJRU5ErkJggg=="
                            preload
                            fetchPriority="high"
                        />
                    </div>
                </div>
                <div className="mt-6" dir="rtl">
                    <div className="items-center">
                        <Typography size="xxl" weight="bold">
                            {item.name}
                        </Typography>
                        <Typography
                            color="primary"
                            size="xl"
                            weight="bold"
                            className="mt-2 inline-block"
                        >
                            {item.price} ج.م
                        </Typography>
                    </div>
                    <div className="w-16 h-1 bg-primary rounded-full my-5" />
                    <Typography className="text-neutral-500 leading-relaxed mt-3">
                        {item.description}
                    </Typography>
                    <AddToCart
                        id={item.id}
                        categorySlug={categorySlug}
                        name={item.name}
                        price={item.price}
                        img={item.image}
                    />
                </div>
            </div>
        </div>
    );
}

export default Page;
