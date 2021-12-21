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
    </Fragment>
  );
}

export default Home;
