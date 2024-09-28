
"use client";

import { AuthContext } from "@/contexts/authContext";
import { Order } from "@/interfaces/forms";
import { IProduct } from "@/interfaces/product";
import { useContext, useState, useEffect } from "react";
import Alert from "@/components/Alert/Alert"; 

const Page = () => {
  const { user, setUser } = useContext(AuthContext);
  const [cart, setCart] = useState<IProduct[]>(typeof window !== "undefined" ? JSON.parse(localStorage.getItem("cart") || "[]") : []);

  const [totalPrice, setTotalPrice] = useState(0);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    setTotalPrice(total);
  }, [cart]);

  const handleOrder = () => {
    if (cart.length === 0) {
      setAlertMessage("Your cart is empty!");
      setAlertType("error");
      setShowAlert(true);
      return;
    }

    const url = process.env.NEXT_PUBLIC_API_URL + "/orders" || "http://localhost:3001/orders";
    const products = cart.map((product: IProduct) => product.id);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: user?.token as string,
      },
      body: JSON.stringify({
        userId: user?.user.userId, 
        products: products,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("cart", JSON.stringify([]));
        setCart([]);
        const userWithNewOrder = user;
        userWithNewOrder?.user.orders?.push({
          id: json.id,
          date: json.date,
        } as Order);
        setUser(userWithNewOrder);

        setAlertMessage("Order placed successfully!");
        setAlertType("success");
        setShowAlert(true);
      })
      .catch((error) => {
        console.error(error);
        setAlertMessage("Failed to place order!");
        setAlertType("error");
        setShowAlert(true);
      });
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertMessage("");
    setAlertType(null);
  };

  return (
    <main className="w-full max-w-3xl mx-auto mt-12 mb-10 p-8 bg-gradient-to-r from-green-400 to-green-600 border border-green-700 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Cart</h1>

      {showAlert && alertMessage && alertType && (
        <Alert message={alertMessage} type={alertType} onClose={handleCloseAlert} />
      )}

      <div className="flex justify-between items-center text-xl text-white mb-4">
        <h6>Total products: {cart.length}</h6>
        <h6>Total US$: {totalPrice.toFixed(2)}</h6>
        <button
          className="bg-quinary text-primary p-4 rounded-lg hover:bg-quinary-dark transition ease-in-out duration-150"
          onClick={handleOrder}
        >
          Finish order
        </button>
      </div>
      
      {cart.length === 0 ? (
        <div className="text-xl text-white text-center">Your cart is empty!</div>
      ) : (
        <div className="mt-8 text-2xl text-green-600 flex flex-col gap-4">
          {cart.map((product: IProduct, i: number) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-md">
              {`${i + 1}) ${product.name} (US$ ${product.price.toFixed(2)})`}
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Page;





