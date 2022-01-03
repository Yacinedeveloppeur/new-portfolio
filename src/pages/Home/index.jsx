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
            <h2 className="main__container__article__title">Présentation</h2>
            <p className="main__container__article__text quote">
              "Webmaster, graphiste et développeur web. J'utilise principalement
              les technologies Wordpress, Inkscape et React/React-native"
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
