/* eslint-disable react/prop-types */
import NavLink from "../atoms/NavLink";
const NavLinkList = ({ navLinkUrl, navLinkTitle }) => {
  return (
    <>
      <NavLink
        navLinkTitle={navLinkTitle}
        navLinkUrl={navLinkUrl}
      />
    </>
  );
};

export default NavLinkList;
