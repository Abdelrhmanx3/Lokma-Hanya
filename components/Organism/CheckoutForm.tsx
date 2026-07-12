import { useCart } from "@/app/providers/CartContext";
import { useState, FormEvent } from "react";

interface CheckoutFormProps {
    onSubmit: (data: { name: string; phone: string; address: string }) => void;
}

function CheckoutForm({ onSubmit }: CheckoutFormProps) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const { clearCart } = useCart();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit({ name, phone, address });
        clearCart()
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                    الاسم
                </label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    placeholder="اكتب اسمك"
                />
            </div>

            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                    رقم الهاتف
                </label>
                <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    placeholder="01xxxxxxxxx"
                />
            </div>

            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                    العنوان
                </label>
                <textarea
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={2}
                    className="w-full rounded-lg border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    placeholder="الحي، الشارع، رقم العمارة"
                />
            </div>

            <button
                type="submit"
                className="mt-2 rounded-lg bg-orange-500 py-2 font-semibold text-white transition hover:bg-orange-600 cursor-pointer"
            >
                تأكيد الطلب
            </button>
        </form>
    );
}

export default CheckoutForm;
