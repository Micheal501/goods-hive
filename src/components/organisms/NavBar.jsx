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
          <Home className="w-12 h-12" />
        </a>
        <NavLinkList
          NavLinkTitle="Home"
          NavLinkUrl="/"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <a href="/category">
          <AlignLeft className="w-12 h-12" />
        </a>
        <NavLinkList
          NavLinkTitle="Category"
          NavLinkUrl="/category"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <a href="/login">
          <CircleUser className="w-12 h-12" />
        </a>
        <NavLinkList
          NavLinkTitle="Login"
          NavLinkUrl="/login"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <a href="/cart">
          <ShoppingCart className="w-12 h-12" />
        </a>
        <NavLinkList
          NavLinkTitle="Cart"
          NavLinkUrl="/cart"
        />
      </div>
    </>
  );
};

export default NavBar;
