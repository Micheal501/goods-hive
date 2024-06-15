/* eslint-disable react/prop-types */
const NavLink = ({ NavLinkUrl, NavLinkTitle }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a
              href={NavLinkUrl}
              className="font-roboto text-[16px]"
            >
              {NavLinkTitle}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavLink;
