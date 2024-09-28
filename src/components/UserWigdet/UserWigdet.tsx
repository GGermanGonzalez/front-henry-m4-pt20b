"use client";
import { AuthContext } from "@/contexts/authContext";
import Link from "next/link";
import {  useContext, useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaRegMehBlank } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

const UserWidget = ()=>{
   const { user, logout}= useContext(AuthContext);
   const [cart,setCart]= useState(
      typeof window !=="undefined"
      ? JSON.parse(localStorage.getItem("cart") || "[]"):[]
   );
    useEffect(()=>{
      typeof window !== "undefined" &&
      setCart (JSON.parse(localStorage.getItem("cart") || "[]"))

    },[]);

   if (user?.login){
   return(
     <div className="flex items-center gap-4">
      <Link href="/dashboard">
      <FaRegUser/>
      </Link>
      <Link href="/cart">
      <div className="flex items-center gap-1">
       <FaCartArrowDown/>
      </div>
      </Link>
      <button onClick={logout}>
        <FaSignOutAlt/>
        </button>

     </div>
   );
}
return <Link href="/login">
    <FaRegMehBlank />
    </Link>
}
export default UserWidget