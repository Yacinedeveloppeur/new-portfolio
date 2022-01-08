import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineHttp } from "react-icons/md";

function Card({ title, tools, image, description, github, link }) {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <div className="card__tools-icons">{tools}</div>
      <img className="card__image" src={image} alt="projet" />
      <p className="card__description">{description}</p>
      <div className="card__link-container">
        <a
          className="card__link-container__link"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="card__link-container__link"
          href={link}
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
