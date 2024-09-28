
import NotFound from "@/app/not-found";
import BuyButton from "@/components/BuyButton/BuyButton";
import { getProductById } from "@/services/productsServices";

const page = async ({ params }: { params: { id: string } }) => {
  const url = `${process.env.API_URL}/products`;
  const product = await getProductById(url, params.id);

  if (product === undefined) {
    return NotFound();
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-6 bg-green-100">
      <img src={product.image} alt={product.name} className="w-full lg:w-1/3 h-auto rounded-lg shadow-lg" />
      <div className="flex-1 mt-4 lg:mt-0 lg:ml-6">
        <h2 className="text-3xl font-bold text-green-600">{product.name}</h2>
        <p className="text-lg text-green-700 mt-2">Precio: <span className="font-semibold">${product.price}</span></p>
        <p className="text-md text-green-600 mt-1">Stock: <span className="font-semibold">{product.stock}</span></p>
        <BuyButton product={product} />
        <p className="text-green-600 mt-4 font-semibold">{product.description}</p>
      </div>
    </div>
  );
};

export default page;
/*
import NotFound from "@/app/not-found";
import BuyButton from "@/components/BuyButton/BuyButton";
import { getProductById } from "@/services/productsServices";

const page = async ({ params }: { params: { id: string } }) => {
    // No es necesario construir una URL para productos
    const product = await getProductById(params.id);

    if (product === undefined) {
        return NotFound(); // Maneja el caso donde el producto no se encuentra
    }

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center p-6 bg-green-100">
            <img 
                src={product.image} 
                alt={product.name} 
                className="w-full lg:w-1/3 h-auto rounded-lg shadow-lg" 
            />
            <div className="flex-1 mt-4 lg:mt-0 lg:ml-6">
                <h2 className="text-3xl font-bold text-green-600">{product.name}</h2>
                <p className="text-lg text-green-700 mt-2">
                    Precio: <span className="font-semibold">${product.price}</span>
                </p>
                <p className="text-md text-green-600 mt-1">
                    Stock: <span className="font-semibold">{product.stock}</span>
                </p>
                <BuyButton product={product} />
                <p className="text-green-600 mt-4 font-semibold">{product.description}</p>
            </div>
        </div>
    );
};

export default page;*/
/*
import NotFound from "@/app/not-found";
import BuyButton from "@/components/BuyButton/BuyButton";
import { getProductById } from "@/services/productsServices";

const page = async ({ params }: { params: { id: string } }) => {
    const product = await getProductById(params.id);

    if (product === undefined) {
        return NotFound();
    }

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center bg-transparent">
            <img 
                src={product.image} 
                alt={product.name} 
                className="w-full lg:w-1/3 h-auto rounded-lg shadow-none" // Elimina el borde de la sombra
            />
            <div className="flex-1 mt-4 lg:mt-0 lg:ml-6">
                <h2 className="text-3xl font-bold text-green-600">{product.name}</h2>
                <p className="text-lg text-green-700 mt-2">
                    Precio: <span className="font-semibold">${product.price}</span>
                </p>
                <p className="text-md text-green-600 mt-1">
                    Stock: <span className="font-semibold">{product.stock}</span>
                </p>
                <BuyButton product={product} />
                <p className="text-green-600 mt-4 font-semibold">{product.description}</p>
            </div>
        </div>
    );
};

export default page;*/






