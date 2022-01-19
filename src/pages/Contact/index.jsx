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
            <h2 className="main__container__article__title">
              Contactez-moi <br />{" "}
              <span
                style={{
                  fontSize: "15px",
                  fontFamily: "arial",
                }}
              >
                Tous les champs sont obligatories{" "}
              </span>
            </h2>
            <form className="contact-form">
              <label
                htmlFor="firstName lastName"
                className="contact-form__label"
              >
                Votre identité
                <div className="contact-form__label__identityContainer">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="contact-form__label__input"
                    placeholder="Prénom"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="contact-form__label__input"
                    placeholder="Nom"
                    required
                  />
                </div>
              </label>
              <label htmlFor="email" className="contact-form__label">
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="contact-form__label__input"
                  placeholder="Email"
                  required
                />
              </label>
              <label htmlFor="topic" className="contact-form__label">
                Sujet
                <input
                  type="text"
                  name="topic"
                  id="topic"
                  className="contact-form__label__input"
                  placeholder="Sujet"
                  required
                />
              </label>
              <label htmlFor="message" className="contact-form__label">
                Votre message
                <textarea
                  name="message"
                  id="message"
                  cols="20"
                  rows="10"
                  className="contact-form__label__input"
                  required
                ></textarea>
              </label>

              <button
                type="submit"
                className="contact-form__submit default-btn__opacity__btn"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Contact;
