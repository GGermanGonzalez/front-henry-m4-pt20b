
import { IProduct } from "@/interfaces/product";
import Link from "next/link";

interface ProductProps {
  product: IProduct;
}

const Card = ({ product }: ProductProps) => {
  return (
    <Link href={`/products/${product.id}`} className="mb-4 flex flex-col items-center"> 
      <h2 className="text-green-600 text-center">{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        className="h-auto transition-transform duration-300 transform hover:scale-105 max-w-full" 
      />
    </Link>
  );
};

export default Card;


