// components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation">
      <ul className="navigation__link">
        <li className="navigation__link__item navigation__link__item--active">
          <Link exact to="/">
            Accueil
          </Link>
        </li>
        <li className="navigation__link__item">
          <Link to="realisations">Réalisations</Link>
        </li>
        <li className="navigation__link__item">
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
