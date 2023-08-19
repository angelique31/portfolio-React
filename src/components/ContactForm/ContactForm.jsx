// src/components/ContactForm.js

import { useContext } from "react";
import PortfolioContext from "../../context/portfolioContext";
// import "./ContactForm.css";

function ContactForm() {
  const { isModalOpen, closeModal } = useContext(PortfolioContext);

  // Si la modale n'est pas ouverte, ne rien retourner
  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modalContent">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <form id="contact">
          <h2>Contactez-nous</h2>
          <label htmlFor="fname">Nom & Prénom</label>
          <input
            type="text"
            id="fname"
            name="fullname"
            placeholder="Votre nom complet..."
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Votre email..."
          />
          <label htmlFor="message">Votre message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Ecrivez quelque chose..."
            style={{ height: "200px" }}
          ></textarea>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
