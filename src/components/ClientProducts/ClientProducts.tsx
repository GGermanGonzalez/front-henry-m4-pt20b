"use client";

import { IProduct } from "@/interfaces/product";
import { products} from "@/mocks/products";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const ClientProducts = ()=> {
   const [data,setData] = useState<IProduct[]>([]);
   const [isLoading, setIsLoading] = useState(true);
   const [hasError, setHasError]= useState(false);

   useEffect (()=>{
    setIsLoading(true);
    setTimeout (()=>{
    setData(products);
    setIsLoading(false);
    setHasError(false);

    },2000);
    
   },[]);

   if(isLoading)return<h1>Loading...</h1>;
   if(hasError)return<h1>Ups!</h1>;

   return (
    
    <main className="container grid grid-cols-1 md:grid-cols-2
    lg:grid-cols-3  gap-2">
    {data.map((product,i)=>(
     <Card key={i}product={product}/>

    ))}
   
   </main>
  )

}

export default ClientProducts;