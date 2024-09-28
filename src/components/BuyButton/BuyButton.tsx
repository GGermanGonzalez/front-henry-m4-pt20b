
"use client";

import { AuthContext } from "@/contexts/authContext";
import { IProduct } from "@/interfaces/product";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import Button from "../Button/Button";

interface BuyButtonProps {
    product: IProduct;
}

const BuyButton = ({ product }: BuyButtonProps) => {
    const { user } = useContext(AuthContext);
    const router = useRouter();
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

    const handleBuy = () => {
        if (!user?.login) {
            router.push("/login");
        } else {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            if (!cart.some((p: IProduct) => p.id === product?.id)) {
                cart.push(product);
                localStorage.setItem("cart", JSON.stringify(cart));
                setAlertMessage(`${product?.name} added to your cart`);
                setAlertType("success");
            } else {
                setAlertMessage(`${product?.name} is already in your cart`);
                setAlertType("error");
            }
        }
    };

    const handleCloseAlert = () => {
        setAlertMessage("");
        setAlertType(null);
    };

    return (
        <div className="relative">
            <Button variant="quinary" className="" onClick={handleBuy}>
                Buy
            </Button>
            {alertMessage && (
                <div className={`mt-2 w-[50%] p-2 border rounded-md text-white shadow-md ${alertType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                    <p>{alertMessage}</p>
                    <button 
                        className="mt-2 px-4 py-1 bg-green-400 text-white rounded hover:bg-gray-100" 
                        onClick={handleCloseAlert}
                    >
                        Accept
                    </button>
                </div>
            )}
        </div>
    );
};

export default BuyButton;

