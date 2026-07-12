import Modal from "../Molecules/Modal";
import CheckoutForm from "./CheckoutForm";

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface CheckoutPageProps {
    cartItems: CartItem[];
    isOpen: boolean;
    onClose: () => void;
    onOrderSuccess?: () => void;
}

const WHATSAPP_NUMBER = "201107403186";

function CheckoutPage({
    cartItems,
    isOpen,
    onClose,
    onOrderSuccess,
}: CheckoutPageProps) {
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    const buildWhatsAppMessage = (data: {
        name: string;
        phone: string;
        address: string;
    }) => {
        const itemsList = cartItems
            .map(
                (item) =>
                    `- ${item.name} × ${item.quantity} = ${item.price * item.quantity} جنيه`,
            )
            .join("\n");

        return `*طلب جديد* 🧾

*الاسم:* ${data.name}
*الهاتف:* ${data.phone}
*العنوان:* ${data.address}
*الطلب:*
${itemsList}

*الإجمالي:* ${total + 75} جنيه`;
    };

    const handleOrderSubmit = (data: {
        name: string;
        phone: string;
        address: string;
    }) => {
        const message = buildWhatsAppMessage(data);
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
        onClose();
        onOrderSuccess?.();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="بيانات الطلب">
            <CheckoutForm onSubmit={handleOrderSubmit} />
        </Modal>
    );
}

export default CheckoutPage;
