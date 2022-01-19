import { Fragment } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Error() {
  return (
    <Fragment>
      <Header />
      <Navbar />

      <main className="main">
        <div className="main__container">
          <div className="main__container__article">
            <h2 className="main__container__article__title">Erreur</h2>
            <p className="main__container__article__text">
              La page recherchée n'existe pas...
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Error;
