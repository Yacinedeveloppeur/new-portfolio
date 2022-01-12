// src/pages/Contact/index.jsx

import { Fragment } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Contact() {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <main className="main">
        <div className="main__container">
          <div className="main__container__article">
            <form className="contact-form">
              <label htmlFor="email" className="contact-form__label">
                Email :
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="contact-form__label__input"
                />
              </label>
              <label htmlFor="message" className="contact-form__label">
                Message :
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="contact-form__label__input"
                ></textarea>
              </label>
              <input type="submit" value="Envoyer" />
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Contact;
