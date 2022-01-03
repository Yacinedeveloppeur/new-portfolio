import { Fragment } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Article from "../../components/Article";
import Footer from "../../components/Footer";

function Error() {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Article title="Erreur" text="La page recherchée n'existe pas..." />
      <Footer />
    </Fragment>
  );
}

export default Error;
