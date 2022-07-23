import portfolio from "../images/portfolio.jpg";
import websiteDesign from "../images/websiteDesign.jpg";
import api from "../images/api.png";
import poleEmploi from "../images/poleEmploi.jpg";
import model from "../images/model.jpg";
import redux from "../images/php.png";
import { FaReact, FaWordpress} from "react-icons/fa";

export const works = [
  {
    title: "Portfolio",
    image: portfolio,
    description:
      "Portfolio développé avec le framwork React et le préprocesseur SASS en respectant l'architecture de dossier 7-1 et la covention BEM.",
    github: "https://github.com/Yacinedeveloppeur/new-portfolio.git",
    link: "https://yacine-developpeur.netlify.app",
    tools: <FaReact />,
    technology: "react",
  },
  {
    title: "Thème WordPress",
    image: websiteDesign,
    description:
      "Création d'un thème WordPress (utilisation des blocks Gutenberg).",
    github: "https://github.com/Yacinedeveloppeur/WP_theme_Printer",
    link: "https://printer-theme.netlify.app/",
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
    title: "Thème WordPress",
    image: model,
    description:
      "Création d'un thème WordPress (utilisation du plugin ACF).",
    github: "https://github.com/Yacinedeveloppeur/wordpress-starter",
    link: "https://startertheme-wp.netlify.app/",
    tools: <FaWordpress />,
    technology: "wordpress",
  },
  {
    title: "Mini boutique Redux",
    image: redux,
    description: "Création d'un shop avec react et redux",
    github: "https://github.com/Yacinedeveloppeur/shop",
    link: "https://app.netlify.com/sites/nextjs-redux-boutique/overview",
    tools: <FaReact />,
    technology: "react",
  },
  
  {
    title: "Application de création d'avatar",
    image: redux,
    description: "Création d'une application de création d'avatar avec react",
    github: "https://github.com/Yacinedeveloppeur/lego-avatar",
    link: "https://lego-avatar.netlify.app/",
    tools: <FaReact />,
    technology: "react",
  },

];
