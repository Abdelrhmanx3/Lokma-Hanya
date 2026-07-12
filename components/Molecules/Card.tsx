import Image from "next/image";
import Typography from "../Atoms/Typography";
import Link from "next/link";

type CardProps = {
    id: string;
    img?: string;
    name: string;
    price?: number;
    categorySlug?: string;
};

function Card({ id, img, name, price, categorySlug }: CardProps) {
    return (
        <Link href={`/menu/${categorySlug}/${id}`}>
            <div className="group w-full rounded-3xl overflow-hidden hover:border-2 hover:border-primary transition-all duration-300 h-full bg-background">
                <div>
                    <div className="border-b-4 border-primary">
                        <Image
                            src={img ?? "/images/placeholder.png"}
                            alt={name}
                            height={300}
                            width={300}
                            className="h-70 mx-auto  brightness-80 scale-105 transition-all duration-300 group-hover:brightness-100 group-hover:scale-100 object-contain"
                        />
                    </div>
                    <div className="p-8">
                        <div className="flex items-center justify-between mb-3">
                            <Typography size="xl" weight="bold">
                                {name}
                            </Typography>
                            <div className="flex gap-1">
                                <Typography
                                    color="primary"
                                    size="xl"
                                    weight="semibold"
                                >
                                    {price}
                                </Typography>
                                <Typography color="primary" weight="semibold">
                                    ج.م
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;
