
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

}
/*
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

/*
import { IProduct } from "@/interfaces/product";
import { products } from "@/mocks/products"; // Ensure correct import of the file where `products` is defined

export const getProductsService = async () => {
    try {
        // In this case, we simply return the array of products directly
        if (!products || products.length === 0) {
            throw new Error('No products found');
        }
        return products;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching products:', error.message);
        } else {
            console.error('Unknown error fetching products:', error);
        }
        throw error; // Re-throw the error to handle it where called
    }
};

export const getProductById = async (id: string) => {
    try {
        const product = products.find((item: IProduct) => item.id.toString() === id);
        if (!product) {
            throw new Error(`Product with ID ${id} not found`);
        }
        return product;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching product:', error.message);
        } else {
            console.error('Unknown error fetching product:', error);
        }
        throw error; // Re-throw the error to handle it where called
    }
};*/



