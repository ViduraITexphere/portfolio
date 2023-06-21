import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: "Home",
      url: "#",
    },
    {
      id: 2,
      name: "About",
      url: "#",
    },
    {
      id: 3,
      name: "Skills",
      url: "#",
    },
    {
      id: 4,
      name: "Technologies",
      url: "#",
    },
    {
      id: 5,
      name: "Projects",
      url: "#",
    },
    {
      id: 6,
      name: "Contact",
      url: "#",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar__container ${scrolled ? "scrolled" : ""}`}>
      <div className={`logo ${scrolled ? "zoom" : ""}`}>
        <h2>(`vR`)</h2>
      </div>
      <ul className={`navbar ${scrolled ? "zoom" : ""}`}>
        {menuItems.map((menu) => (
          <li>
            <Link to={menu.name} smooth={true} duration={1000} offset={-80}>
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
