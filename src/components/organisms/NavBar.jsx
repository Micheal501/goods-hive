import NavLinkList from "../molecules/NavLinkList";
const NavBar = () => {
  return (
    <>
      <div>
        <NavLinkList
          NavLinkTitle="Home"
          NavLinkUrl="/"
        />
        <NavLinkList
          NavLinkTitle="Category"
          NavLinkUrl="/category"
        />
        <NavLinkList
          NavLinkTitle="Login"
          NavLinkUrl="/login"
        />
        <NavLinkList
          NavLinkTitle="Cart"
          NavLinkUrl="/cart"
        />
      </div>
    </>
  );
};

export default NavBar;
