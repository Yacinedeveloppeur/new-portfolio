import portfolio from "../images/portfolio.jpg";
import websiteDesign from "../images/websiteDesign.jpg";
import api from "../images/api.png";
import poleEmploi from "../images/poleEmploi.jpg";
import model from "../images/model.jpg";
import { FaReact, FaWordpress, FaFigma } from "react-icons/fa";

export const works = [
  {
    title: "Portfolio",
    image: portfolio,
    description:
      "Portfolio développé avec le framwork React et le préprocesseur SASS en respectant l'architecture de dossier 7-1 et la covention BEM.",
    github: "https://github.com/Yacinedeveloppeur/new-portfolio.git",
    link: "https://www.ab-developpement.fr/",
    tools: <FaReact />,
    technology: "react",
  },
  {
    title: "Site Web-design",
    image: websiteDesign,
    description:
      "Site wordpress regroupant une partie de mes créations en matière de web-design.",
    github: "https://simplewebdesign.fr/",
    link: "https://simplewebdesign.fr/",
    tools: <FaWordpress />,
    technology: "wordpress",
  },
  {
    title: "Dashboard",
    image: api,
    description:
      "Dashboard regroupant des données de différentes API. Site développé via react et bootstrap.",
    github: "https://github.com/Yacinedeveloppeur/dashboard.git",
    link: "https://dashboard-78012.web.app/",
    tools: <FaReact />,
    technology: "react",
  },
  {
    title: "Copie Pole Emploi",
    image: poleEmploi,
    description:
      "Reproduction du site Pôle emploi (version septembre 2021) via react.",
    github: "https://github.com/Yacinedeveloppeur/pole-emploi.git",
    link: "https://copie-pole-emploi.web.app/",
    tools: <FaReact />,
    technology: "react",
  },
  {
    title: "Maquette Figma",
    image: model,
    description:
      "Réalisation d'une maquette via Figma pour mon site portfolio.",
    github: "https://www.figma.com/file/YlzRTzRGOKXPkSgbLhFPdN/portfolio",
    link: "https://www.figma.com/file/YlzRTzRGOKXPkSgbLhFPdN/portfolio",
    tools: <FaFigma />,
    technology: "graphics",
  },
];
