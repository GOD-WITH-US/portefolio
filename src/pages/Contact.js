import React from "react";
import Navigation from "../components/Navigation";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./_contact.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9ntbaoa",
        "template_nmq3yrt",
        form.current,
        "wGnIdRInWrJPOq451"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"> <div className="title">Contact par mail  </div></div>
       
        <div className="contactBox">
          <form ref={form} onSubmit={sendEmail}>
            {/* <!-- name --> */}
            <div className="form-group">
              <label htmlFor="name">Nom ou Entreprise </label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
                placeholder="Votre nom"
              />
            </div>

            {/* <!-- email --> */}
            <div className="form-group">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Votre email"
              />
            </div>

            {/* <!-- subject --> */}
            <div className="form-group">
              <label htmlFor="subject">Objet </label>
              <input
                type="text"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="Objet de votre mail"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message </label>
              <textarea
                name="message"
                className="form-control"
                id="email_body"
                rows="7"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
