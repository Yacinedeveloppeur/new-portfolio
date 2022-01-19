import React, { Fragment, useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import { works } from "../../data/works";

import RadioForm from "../../components/RadioForm";

function Works() {
  const [radioValue, setRadioValue] = useState("all");

  function handleChange(value) {
    setRadioValue(value);
  }

  const filteredWorks = works.filter(function (work) {
    if (radioValue === "all") {
      return work;
    } else return work.technology === radioValue;
  });

  const displayWorks = filteredWorks.map(function (work, index) {
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

  return (
    <Fragment>
      <Header />
      <Navbar />
      <main className="main">
        <div className="main__container">
          <div className="main__container__radio-form">
            <RadioForm handleChange={handleChange} />
          </div>
          <div className="main__container__article main__container__article--cards">
            {displayWorks}
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Works;
