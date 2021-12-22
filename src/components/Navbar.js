// components/Navbar.js

import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list__item navigation__list__item--active">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "navigation__list__item__link--active"
                : "navigation__list__item__link "
            }
            exact
            to="/"
          >
            Accueil
          </NavLink>
        </li>
        <li className="navigation__list__item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "navigation__list__item__link--active"
                : "navigation__list__item__link "
            }
            to="/realisations"
          >
            Réalisations
          </NavLink>
        </li>
        <li className="navigation__list__item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "navigation__list__item__link--active"
                : "navigation__list__item__link "
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
