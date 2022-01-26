// src/pages/Contact/index.jsx
import React, { Component, Fragment } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      mailSent: false,
      error: null,
    };
  }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  render() {
    const { firstName, lastName, email, subject, message } = this.state;
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
              <form
                className="contact-form"
                onSubmit={(e) => this.handleContactFormSubmit(e)}
                method="post"
                data-netlify="true"
                name="contact"
              >
                <input type="hidden" name="form-name" value="contact" />
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
                      value={firstName}
                      onChange={(e) => {
                        this.setState({ firstName: e.target.value });
                      }}
                    />
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="contact-form__label__input"
                      placeholder="Nom"
                      required
                      value={lastName}
                      onChange={(e) => {
                        this.setState({ lastName: e.target.value });
                      }}
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
                    value={email}
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                </label>
                <label htmlFor="subject" className="contact-form__label">
                  Sujet
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="contact-form__label__input"
                    placeholder="Sujet"
                    required
                    value={subject}
                    onChange={(e) => {
                      this.setState({ subject: e.target.value });
                    }}
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
                    value={message}
                    onChange={(e) => {
                      this.setState({ message: e.target.value });
                    }}
                  ></textarea>
                </label>

                <button
                  type="submit"
                  className="contact-form__submit default-btn__opacity__btn"
                >
                  Envoyer
                </button>
                <div>
                  {this.state.mailSent && <div>Message bien reçu. Merci.</div>}
                </div>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Contact;
