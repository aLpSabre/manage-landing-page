
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

  const lg = "lg-toggle";
  const md = "md-toggle";

  return (
    <header>
      <nav>
        <div className="nav-md">
          <img src={logo} alt="logo" />
          {!openMenu && <img src={ (hamburger)} alt="hamburger" className="hamburger" id="hamburger-btn" onClick={toggleMenu} />}

          {openMenu &&
          <img src={(close)} alt="close" className="hamburger show-box" id="close-btn" onClick={toggleMenu}/>}

        </div>
        <div className="unordered">
          <div className={openMenu ? ("overlay") : (null)}></div>
          <ul className={openMenu ? (md) : (lg)}>
            <li><a href="#home" onClick={()=>setOpenMenu(false)}>Pricing</a></li>
            <li><a href="#home"  onClick={()=>setOpenMenu(false)}>Product</a></li>
            <li><a href="#about"  onClick={()=>setOpenMenu(false)}>About Us</a></li>
            <li><a href="#careers"  onClick={()=>setOpenMenu(false)}>Careers</a></li>
            <li><a href="#community"  onClick={()=>setOpenMenu(false)}>Community</a></li>
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