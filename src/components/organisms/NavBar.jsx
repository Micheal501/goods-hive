import NavLinkList from "../molecules/NavLinkList";
import { Home } from "lucide-react";
import { AlignLeft } from "lucide-react";
import { CircleUser } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <a href="/">
          <Home className="w-10 h-10" />
        </a>
        <NavLinkList
          navLinkTitle="Home"
          navLinkUrl="/"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <a href="/category">
          <AlignLeft className="w-10 h-10" />
        </a>
        <NavLinkList
          navLinkTitle="Category"
          navLinkUrl="/category"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <a href="/login">
          <CircleUser className="w-10 h-10" />
        </a>
        <NavLinkList
          navLinkTitle="Login"
          navLinkUrl="/login"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <a href="/cart">
          <ShoppingCart className="w-10 h-10" />
        </a>
        <NavLinkList
          navLinkTitle="Cart"
          navLinkUrl="/cart"
        />
      </div>
    </>
  );
};

export default NavBar;
