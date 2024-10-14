import React from "react";
import imgFooter from "../../public/assets/img/footer.jpg";
import Logo from "../../public/assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="relative z-10 py-10 md:py-20">
      {/* background */}
      <div className="absolute inset-0 -z-50">
        <img
          src={imgFooter}
          alt="img-footer"
          className="w-full h-full object-cover"
        />
      </div>
      {/* background end */}
      {/* logo */}
      <div className="logo flex justify-center items-center">
        <img src={Logo} alt="logo" className="w-1/6 md:w-1/12" />
      </div>
      {/* logo end */}
      {/* grid */}
      <div className="grid grid-cols-1 text-center gap-10 text-white font-semibold mt-10 justify-items-center md:grid-cols-3 md:text-left md:gap-0 md:mt-28 md:px-28 lg:px-44">
        <div className="items-1">
          <ul className="space-y-1">
            <li>Home</li>
            <li>Contact Us</li>
            <li>Terms of Services</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="items-2">
          <ul className="space-y-1">
            <li>Live</li>
            <li>FaQ</li>
            <li>Premium</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="items-3 flex items-center">
          <ul className="space-y-1">
            <li>You Must Watch</li>
            <li>Recent Release</li>
            <li>Top IMDB</li>
          </ul>
        </div>
      </div>
      {/* grid end */}
    </footer>
  );
};

export default Footer;
