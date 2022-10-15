
import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import "../../scss/components/_header.scss"
import close from "../../images/icon-close.svg"
import React, { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const lg="lg-toggle";
  const md="md-toggle";

  return (
    <header>
      <nav>
        <div className="nav-md">
          <img src={logo} alt="logo" />
          <img src={openMenu ? (close) : (hamburger)} alt="hamburger" className="hamburger" id="hamburger-btn" onClick={toggleMenu} /
          >

        </div>
        <div className="unordered">
    	    <div className={openMenu ? ("overlay") : (null)}></div>
          <ul className={openMenu ? (md) : (lg)}>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#community">Community</a></li>
          </ul>
        </div>
    

        <div>
          <button className="get-started-btn">Get Started</button>
        </div>

      </nav>

    </header>


  )

}

export default Header