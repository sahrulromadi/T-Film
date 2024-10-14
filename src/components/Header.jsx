import React, { useState } from "react";
import Logo from "../../public/assets/img/logo.png";
import "remixicon/fonts/remixicon.css";

const Header = () => {
  const [openNavbarList, setOpenNavbarList] = useState(false);
  const toggleNavbarList = () => {
    setOpenNavbarList(!openNavbarList);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <nav
        className={`px-7 py-5 flex flex-col gap-7 ${
          openNavbarList ? "bg-white text-black rounded-b-3xl" : "text-white"
        } md:items-center md:justify-between md:flex-row md:px-20`}
      >
        {/* logo */}
        <div className="flex items-center justify-between">
          <div className="logo">
            <h1 className="md:hidden">T-Film</h1>
            <img src={Logo} alt="logo" className="w-1/6 hidden md:block" />
          </div>
          <button
            className="hamburger-menu md:hidden"
            onClick={toggleNavbarList}
          >
            <i className="ri-menu-line text-3xl"></i>
          </button>
        </div>
        {/* logo end */}
        {/* list */}
        <div
          className={`navbar-list md:block ${
            openNavbarList ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-3 md:gap-14 md:flex-row">
            <li>Home</li>
            <li>Movies</li>
            <li>Series</li>
          </ul>
        </div>
        {/* list end */}
      </nav>
    </header>
  );
};

export default Header;
