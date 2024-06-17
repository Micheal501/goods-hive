/* eslint-disable react/prop-types */
const NavLink = ({ navLinkUrl, navLinkTitle }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a
              href={navLinkUrl}
              className="font-roboto text-[12px]"
            >
              {navLinkTitle}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavLink;
