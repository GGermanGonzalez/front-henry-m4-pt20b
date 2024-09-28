import { products } from "@/mocks/products"
import Card from "../Card/Card";
import Grid from "../Grid/Grid";

const Featured = () => {
const featured=products.slice(0,6);
  return (
    <Grid>
     {featured.map((f,i)=>(
     <Card key={i} product={f}/>

     ))}
     </Grid>

  );
};

export default Featured