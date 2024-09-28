"use client";
import { UserSession } from "@/interfaces/forms";
import { createContext, useEffect, useState} from "react";

interface AuthProviderProps{
    children:React.ReactNode;
}
interface AuthContextProps{
    user:UserSession | null;
    setUser:(user:UserSession | null) => void,
    logout:()=> void;
}

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    setUser:()=>{},
    logout:()=> {},
});
export const AuthProvider = ({children}:AuthProviderProps)=>{
   const [user,setUser] = useState<UserSession | null>(null);
   useEffect(()=>{
    if(user){
    localStorage.setItem("user" ,JSON.stringify(user));
    }
   },[user]);

   useEffect(()=>{
    if(typeof window !== 'undefined'&& window.localStorage){
    const localUser = JSON.parse(localStorage.getItem('user')!)
    setUser(localUser?.user);
    }
   
    
   },[])

   const logout=()=>{
    localStorage.removeItem("user");
    setUser(null);
   }
   return(
    <AuthContext.Provider value={{user,setUser, logout }}>
        {children}
    </AuthContext.Provider>
   )
   
}
