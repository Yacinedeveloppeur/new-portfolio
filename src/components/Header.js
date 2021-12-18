// components/Header.js

import React from "react";
import logo from "../images/logo-yacine-developpeur.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img
          src={logo}
          alt="yacine développeur"
          className="header__logo-container__logo"
        />
      </div>
      <div className="header__title-container">
        <h1 className="header__title-container__title">Yacine Développeur</h1>
      </div>
    </header>
  );
}

export default Header;
