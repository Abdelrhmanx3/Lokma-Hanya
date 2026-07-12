"use client";
import {
    createContext,
    useContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
} from "react";

export interface CartItem {
    id: string;
    categorySlug: string;
    name: string;
    price: number;
    img: string;
    quantity: number;
}

interface CartContextType {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    items: CartItem[];
    addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
    removeFromCart: (id: string, categorySlug: string) => void;
    updateQuantity: (id: string, categorySlug: string, quantity: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);
const STORAGE_KEY = "cart-items";

function loadCart(): CartItem[] {
    if (typeof window === "undefined") return [];
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error("Failed to load cart from localStorage:", error);
        return [];
    }
}

function saveCart(items: CartItem[]) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
        console.error("Failed to save cart to localStorage:", error);
    }
}

export function CartProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState<CartItem[]>(() => loadCart());

    function addToCart(item: Omit<CartItem, "quantity">, quantity: number = 1) {
        setItems((prev) => {
            const existing = prev.find(
                (i) => i.id === item.id && i.categorySlug === item.categorySlug
            );

            const next = existing
                ? prev.map((i) =>
                      i.id === item.id && i.categorySlug === item.categorySlug
                          ? { ...i, quantity: i.quantity + quantity }
                          : i
                  )
                : [...prev, { ...item, quantity }];

            saveCart(next);
            return next;
        });
        setIsOpen(true);
    }

    function removeFromCart(id: string, categorySlug: string) {
        setItems((prev) => {
            const next = prev.filter(
                (i) => !(i.id === id && i.categorySlug === categorySlug)
            );
            saveCart(next);
            return next;
        });
    }

    function updateQuantity(id: string, categorySlug: string, quantity: number) {
        if (quantity <= 0) {
            removeFromCart(id, categorySlug);
            return;
        }
        setItems((prev) => {
            const next = prev.map((i) =>
                i.id === id && i.categorySlug === categorySlug
                    ? { ...i, quantity }
                    : i
            );
            saveCart(next);
            return next;
        });
    }

    function clearCart() {
        setItems([]);
        saveCart([]);
    }

    return (
        <CartContext.Provider
            value={{
                isOpen,
                setIsOpen,
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart(): CartContextType {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}