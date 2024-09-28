
"use client";

import { AuthContext } from "@/contexts/authContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.login) {
      router.push("/login");
    }
  }, [user]);

  const formatDateTimeToLocale = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString(); 
  };

  return (
    <main className="w-full max-w-3xl mx-auto mt-12 mb-10 p-8 bg-gradient-to-r from-green-400 to-green-600 border border-green-700 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Dashboard</h1>
      
      <div className="text-white text-xl mb-8">
        <p className="font-semibold">Name: {user?.user.name}</p>
        <p className="font-semibold">Email: {user?.user.email}</p>
      </div>

      <div className="flex flex-col gap-6">
        {user?.user.orders?.map((order, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow-md text-green-600 flex justify-between items-center">
            <p className="text-lg">Order ID: {order.id}</p>
            <p className="text-lg">{formatDateTimeToLocale(order.date)}</p> 
          </div>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;



