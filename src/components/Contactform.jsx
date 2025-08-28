import React from "react";

export default function ContactForm() {
  return (
    <section className="contact-section">      
      <form className="contact-form">
        <div className="form-main">
          <input type="text" placeholder="Your Full Name" required />
        </div>

        <div className="form-main">
          <input type="email" placeholder="Your Email" required />
        </div>

        <div className="form-main">
          <input type="tel" placeholder="Your Phone Number" />
        </div>
        <div className="form-main">
          <input type="text" placeholder="Subject" required />
        </div>

        <div className="form-main">
          <textarea placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-btn">SEND MESSAGE</button>
      </form>
    </section>
  );
}
