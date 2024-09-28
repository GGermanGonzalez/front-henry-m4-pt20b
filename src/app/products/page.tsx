
import Card from "@/components/Card/Card";
import { IProduct } from "@/interfaces/product";
import { getProductsService } from "@/services/productsServices";

const page = async () => {
  const url = process.env.API_URL + "/products";
  const products = await getProductsService(url);

  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"> 
        {products.map((product: IProduct, i: number) => (
          <Card key={i} product={product} />
        ))}
      </div>
    </main>
  );
};

export default page;


