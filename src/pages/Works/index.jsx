import { Fragment } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

function Works() {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <main className="main">
        <div className="main__container">
          <div className="main__container__article main__container__article--cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Works;
