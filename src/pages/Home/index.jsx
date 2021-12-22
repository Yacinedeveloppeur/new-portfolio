// src/pages/Home/index.jsx

import { Fragment } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import "../../style/sass/main.scss";

function Home() {
  return (
    <Fragment>
      <Header />
      <Navbar />

      <main className="main">
        <div className="main__container">
          <div className="main__container__presentation">
            <h2 className="main__container__presentation__title">
              Présentation
            </h2>
            <p className="main__container__presentation__text">
              "Webmaster, graphiste et développeur web. J'utilise principalement
              les technologies Wordpress, inkscape et react js"
            </p>
          </div>
          <h2>Skills</h2>
        </div>
      </main>
    </Fragment>
  );
}

export default Home;
