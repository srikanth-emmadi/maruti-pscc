import Footer from "../components/Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section className="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p>Email: info@marutipscc.com</p>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>Address: Sircilla, Telangana, India</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
