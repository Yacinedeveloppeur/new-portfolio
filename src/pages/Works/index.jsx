import { Fragment } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import { works } from "../../data/works";

const displayCards = works.map(function (work, index) {
  return (
    <Card
      title={work.title}
      tools={work.tools}
      image={work.image}
      description={work.description}
      github={work.github}
      link={work.link}
      key={index.toString()}
    />
  );
});

function Works() {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <main className="main">
        <div className="main__container">
          <div className="main__container__article main__container__article--cards">
            {displayCards}
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Works;
