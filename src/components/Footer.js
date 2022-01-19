import React from "react";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function Footer() {
  return (
    <>
      <footer className="footer">
        <p className="footer__icons-container">
          <a
            className="footer__icons-container__icon"
            href="https://www.linkedin.com/in/yacine-d%C3%A9veloppeur-273aa820a/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin className="" />
          </a>
          <a
            className="footer__icons-container__icon"
            href="https://github.com/Yacinedeveloppeur"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="footer__icons-container__icon"
            href="mailto:yacine.developpeur@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <GrMail />
          </a>
        </p>
        <p className="footer__text">© Yacine Développeur</p>
      </footer>
    </>
  );
}

export default Footer;
