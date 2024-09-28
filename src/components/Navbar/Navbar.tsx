
import Link from "next/link";
import UserWidget from "../UserWigdet/UserWigdet";

const Navbar = () => {
  return (
    <nav className="bg-quaternary text-primary py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="px-4">
          <h2 className="text-base">Online Shop</h2>
        </Link>
        <Link href="/products" className="px-4">
          <h2 className="text-base">Products</h2>
        </Link>
        <Link href="/cart" className="px-4">
          <h2 className="text-base">Cart</h2>
        </Link>
        <Link href="/register" className="px-4">
          <h2 className="text-base">Register</h2>
        </Link>
        <Link href="/about" className="px-4">
          <h2 className="text-base">About</h2>
        </Link>
        <div className="px-4">
          <UserWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


