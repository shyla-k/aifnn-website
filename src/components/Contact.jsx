import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
