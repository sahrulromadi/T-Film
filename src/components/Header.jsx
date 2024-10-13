import React, { useState } from "react";
import Logo from "../../public/assets/img/logo.png";
import "remixicon/fonts/remixicon.css";

const Header = () => {
  const [openNavbarList, setOpenNavbarList] = useState(false);
  const toggleNavbarList = () => {
    setOpenNavbarList(!openNavbarList);
  };
  const funcNavbarList = openNavbarList ? "block" : "hidden";

  return (
    <header className="w-full">
      <nav className="px-7 py-5 flex flex-col gap-7 md:justify-between md:flex-row md:px-10">
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
        <div className={`navbar-list md:block ${funcNavbarList}`}>
          <ul className="flex flex-col gap-5 md:flex-row">
            <li>Home</li>
            <li>Movies</li>
            <li>TV Series</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
