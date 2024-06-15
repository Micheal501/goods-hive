/* eslint-disable react/prop-types */
const NavLink = ({ NavLinkUrl, NavLinkTitle }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href={NavLinkUrl}>{NavLinkTitle}</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavLink;
