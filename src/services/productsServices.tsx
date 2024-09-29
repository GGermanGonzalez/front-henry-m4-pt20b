/*
import { IProduct } from "@/interfaces/product";

export const getProductsService= async (url:string)=>{
    const response = await fetch(url, {next:{ revalidate:0}});
    const products = await response.json();
    
    return products
}
export const getProductById = async (url:string, id: string)=>{
 const response = await getProductsService(url)
 const product =response.filter(
   (item: IProduct)=> item.id.toString()===id

 )[0];
 return product

}*/

import { IProduct } from "@/interfaces/product";
import { products } from "@/mocks/products"; // Asegúrate de importar correctamente el archivo donde defines `products`

export const getProductsService = async () => {
    // En este caso, simplemente retornamos el array de productos directamente
    return products;
};

export const getProductById = async (id: string) => {
    const product = products.find((item: IProduct) => item.id.toString() === id);
    return product;
};

