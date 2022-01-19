// src/pages/Home/index.jsx

import { Fragment } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ProgressBar from "../../components/ProgressBar";

const skills = [
  {
    technology: "Reacts / React native",
    lvl: "80%",
  },
  {
    technology: "Wordpress",
    lvl: "85%",
  },
  {
    technology: "Illustrator",
    lvl: "90%",
  },
  {
    technology: "Figma",
    lvl: "80%",
  },
  {
    technology: "Php",
    lvl: "50%",
  },
];

function Home() {
  const displaySkills = skills.map((skill) => (
    <ProgressBar skill={skill.technology} skillLvl={skill.lvl} />
  ));

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
                Bonjour, je m'appelle Yacine. Je suis un véritable passionné de
                technologie Web, mais aussi d'art (sculpture et peinture).
                Chaque jour j'essaie d'apprendre de nouvelles compétences. Pour
                ce faire, je me lance régulièrement des petits défis afin de me
                surpasser, tout en conservant la notion de plaisir.
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
            {displaySkills}
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Home;
