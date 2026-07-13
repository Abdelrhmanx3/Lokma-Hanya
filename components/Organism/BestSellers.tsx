import { topSales } from "@/data";
import Card from "../Molecules/Card";
function BestSellers() {
    return (
        // Parent component (e.g. ProductsList.tsx)
        <>
            <p className="flex justify-end p-4 text-primary font-semibold">
                <span className="p-4 text-2xl border-b-4 border-primary inline-block" dir="rtl">
                    الاكثر مبيعاً
                </span>
            </p>
            <div
                className="grid grid-cols-3 max-md:grid-cols-1 gap-8 p-4"
                dir="rtl"
            >
                {topSales.map((item) => (
                    <Card
                        key={item.id}
                        {...item}
                        img={item.image}
                    />
                ))}
            </div>
        </>
    );
}

export default BestSellers;
