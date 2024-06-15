/* eslint-disable react/prop-types */
const NavLink = ({ NavLinkUrl, NavLinkTitle }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a
              href={NavLinkUrl}
              className="font-roboto text-[18px]"
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
