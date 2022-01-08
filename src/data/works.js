import portfolio from "../images/portfolio.jpg";
import websiteDesign from "../images/websiteDesign.jpg";
import { FaReact, FaWordpress } from "react-icons/fa";

export const works = [
  {
    title: "Portfolio React",
    image: portfolio,
    description:
      "Portfolio développé avec le framwork React et le préprocesseur SASS en respectant l'architecture de dossier 7-1 et la covention BEM",
    github: "https://github.com/Yacinedeveloppeur/new-portfolio.git",
    link: "https://www.ab-developpement.fr/",
    tools: <FaReact />,
  },
  {
    title: "Site Wordpress Web-design",
    image: websiteDesign,
    description:
      "Site wordpress regroupant une partie de mes créations en matière de web-design.",
    github: "",
    link: "https://simplewebdesign.fr/",
    tools: <FaWordpress />,
  },
];
