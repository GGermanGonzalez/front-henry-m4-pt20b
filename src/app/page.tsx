import Card from "@/components/Card/Card";
import Hero from "@/components/Hero/Hero"
import { IProduct } from "@/interfaces/product";
import { getProductsService } from "@/services/productsServices";

const page = async  () => {
   const url =`${process.env.API_URL }/products`;
   const products= await getProductsService(url);
   const featuredProducts=products.slice(0,3)
  return (
    <>
     <Hero/>
     <main className="container mx-auto p-4">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
     {featuredProducts.map((product:IProduct, i:number)=>(
      <Card product={product} key={i}/>

     ))}
     </div>
     </main>
    </>
  )
}

export default page