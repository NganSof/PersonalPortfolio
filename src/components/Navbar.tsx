import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { isNavLink, navLinks } from "../constants/index";
import { logo, menu, close } from "../assets/index";

export const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` ${
        styles.paddingX
      } w-full flex items-center !py-4 fixed top-0 z-20 ${
        scrollY ? "bg-[var(--black-200)]" : "bg-gray-800"
      } `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logoPersonal"
            className="w-16 h-16 object-contain rounded-full"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Trịnh Ngọc Kim Ngân &nbsp;
            <span className="sm:block hidden"> | &nbsp;FE Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link: isNavLink) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white"
                    : "text-[var(--secondary)]"
                }
                  cursor-pointer hover:text-white text-[18px] font-medium
                `}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menuPictute"
            className="w-[28px] h-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />
          {toggle && (
            <div className="flex absolute top-20 ring-0 mx-4 my-2 p-6 min-w-[140px] z-10 black-gradient rounded-xl">
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link: isNavLink) => {
                  return (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title
                          ? "text-white"
                          : "text-[var(--secondary)]"
                      }
                  cursor-pointer font-poppins font-medium text-[16px]
                `}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
