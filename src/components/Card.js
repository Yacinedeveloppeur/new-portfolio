import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineHttp } from "react-icons/md";
import photoProjet from "../images/photo-projet.jpg";

function Card() {
  return (
    <div className="card">
      <h2 className="card__title">Projet</h2>
      <img className="card__image" src={photoProjet} alt="projet" />
      <p className="card__description">
        Adipisicing irure ad est ex dolor ea reprehenderit duis commodo
        consequat minim. Voluptate esse qui dolor adipisicing sunt consequat do
        reprehenderit exercitation. Ex ipsum consequat elit occaecat. Aute magna
        voluptate laboris exercitation aliqua duis amet dolor aliquip. Laboris
        voluptate nostrud cupidatat exercitation minim est occaecat duis tempor
        sunt. Laborum aute pariatur reprehenderit aliquip enim est et est veniam
        culpa duis in.
      </p>
      <div className="card__link-container">
        <a
          className="card__link-container__link"
          href="https://github.com/Yacinedeveloppeur"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="card__link-container__link"
          href="https://github.com/Yacinedeveloppeur"
          target="_blank"
          rel="noreferrer"
        >
          <MdOutlineHttp />
        </a>
      </div>
    </div>
  );
}

export default Card;
