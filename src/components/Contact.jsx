import React from "react";
import "./Contact.css";
import { IonIcon } from "@ionic/react";
import { callOutline, mailOutline } from "ionicons/icons";

// Import image from assets
import contactBg from "../components/assets/cf2b37be4809aae7c995fc072e9fb019.jpg";

const Contact = () => {
  return (
    <section
      className="contact-section" id="contact"
      style={{
        backgroundImage: `url(${contactBg})`, // local asset
      }}
    >
      <h2 className="contact-heading">Get in Touch</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" className="submit-btn">
          Send Message
        </button>

        {/* Contact Info Section */}
        <div className="contact-info">
          <p>
            <IonIcon icon={callOutline} className="contact-icon" />{" "}
            <a href="tel:8137098545">8137098545</a>
          </p>
          <p>
            <IonIcon icon={mailOutline} className="contact-icon" />{" "}
            <a href="mailto:thalish75@gmail.com">thalish75@gmail.com</a>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Contact;
