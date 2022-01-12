// src/pages/Home/index.jsx

import { Fragment, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ProgressBar from "../../components/ProgressBar";

function Home() {
  const [skill, setSkill] = useState([
    "Reacts / React native",
    "Wordpress",
    "Inkscape",
    "Figma",
    "Php",
  ]);

  const [skillLvl, setSkillLvl] = useState({
    React: "80%",
    Worpress: "85%",
    Inkscape: "90%",
    Figma: "80%",
    Php: "50%",
  });

  return (
    <Fragment>
      <Header />
      <Navbar />
      <main className="main">
        <div className="main__container">
          <div className="main__container__article">
            <h2 className="main__container__article__title">Bienvenue</h2>
            <p className="main__container__article__text">
              <p>
                Salut, je m'appelle Yacine. Je suis un véritable passionné de
                technologie Web, mais aussi d'art (peinture et sculpture).
                Chaque jours j'essaie d'apprendre de nouvelles compétences. Pour
                ce faire, je me lance régulièrement des petits défis afin de me
                surpasser, tout en conservant la notion du plaisir.
              </p>{" "}
              <p>
                Le partage est également une notion indispensable à mes yeux et
                c'est la raison pour laquelle je publie régulièrement mes
                créations sur mon site et mon comtpe Github.
              </p>
              <p>
                En tant que Webmaster, Graphiste et Développeur Web frontend, je
                m’engage à vous apporter mes compétences et connaissances afin
                de vous aider à développer vos applications et sites web.
              </p>
            </p>
          </div>
          <div className="main__container__article">
            <h2 className="main__container__article__title">Compétences</h2>
            <ProgressBar skill={skill[0]} skillLvl={skillLvl.React} />
            <ProgressBar skill={skill[1]} skillLvl={skillLvl.Worpress} />
            <ProgressBar skill={skill[2]} skillLvl={skillLvl.Inkscape} />
            <ProgressBar skill={skill[3]} skillLvl={skillLvl.Figma} />
            <ProgressBar skill={skill[4]} skillLvl={skillLvl.Php} />
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Home;
