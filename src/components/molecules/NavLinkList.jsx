/* eslint-disable react/prop-types */
import NavLink from "../atoms/NavLink";
const NavLinkList = ({ NavLinkUrl, NavLinkTitle }) => {
  return (
    <>
      <NavLink
        NavLinkTitle={NavLinkTitle}
        NavLinkUrl={NavLinkUrl}
      />
    </>
  );
};

export default NavLinkList;
