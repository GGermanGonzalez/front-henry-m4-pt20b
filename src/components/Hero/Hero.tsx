
import Link from "next/link";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <>
      <div className="h-[45vh] bg-quinary text-primary flex flex-col justify-center items-center gap-2">
        <h1 className="mb-4">Welcome to my online shop!</h1>
        <Link href="/products">
          <Button variant="quinary">
            Shop NOW
          </Button>
        </Link>
      </div>
      <div className="flex justify-center py-8">
        <div className="bg-gradient-to-r from-green-300 to-green-500 text-white py-4 px-6 rounded-md shadow-md text-center">
          <h2 className="text-3xl font-bold">Featured Products</h2>
        </div>
      </div>
    </>
  );
};

export default Hero;



