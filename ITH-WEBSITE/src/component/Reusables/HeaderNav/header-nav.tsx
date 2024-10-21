import { Link, NavLink } from "react-router-dom";
import { ITHLogo } from "../../../assets/images";
import { ArrowDownIcon } from "../../../assets/icons";
import { header_nav } from "./lists";

const HeaderNav = () => {
  return (
    <header className="bg-transparent z-20 fixed top-0 w-full flex justify-between items-center px-28 h-[80px]">
      {/* logo display */}
      <Link to="/home">
        <img src={ITHLogo} alt="logo" className="" />
      </Link>

      {/* header links */}
      <ul className="flex gap-10 items-center">
        {header_nav.map((item, idx) => {
          const { label, path, drop } = item;

          if (drop) {
            return (
              <li key={idx} className="">
                <div className="flex gap-[.4rem] items-center group cursor-pointer">
                  <span className="text-base font-light text-white">
                    {label}
                  </span>
                  <img
                    src={ArrowDownIcon}
                    alt="arrow down icon"
                    className="transform transition-all duration-500 group-hover:rotate-180"
                  />
                </div>

                <div className="absolute hidden group-hover:block bg-[red] shadow-md">
                  {drop.map((subItem, subIdx) => (
                    <NavLink key={subIdx} to={subItem.path}>
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              </li>
            );
          }

          return path ? (
            <NavLink
              key={idx}
              to={path}
              className={({ isActive }) =>
                `text-base font-light text-white ${isActive ? "" : ""}`
              }
            >
              {label}
            </NavLink>
          ) : null;
        })}
      </ul>
    </header>
  );
};

export default HeaderNav;
