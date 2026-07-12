

import "./Contact.css";
import git from "../assets/git.png";
import link from "../assets/link.png";
import mail from "../assets/mail.png";

export default function Contact() {
  return (
    <section className="contact" id="contact">

      <h1 className="contact-title">Get In Touch</h1>

      <p className="contact-subtitle">
        Have a project in mind or want to collaborate?
        I'd love to hear from you!
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <h3>📧 Email</h3>
            <p>mshreya.dev123@gmail.com</p>
          </div>

          <div className="info-card">
            <h3>📱 Phone</h3>
            <p>+91 XXXXX XXXXX</p>
          </div>

          <div className="info-card">
            <h3>📍 Location</h3>
            <p>Pune, Maharashtra, India</p>
          </div>

     
           
           <div className="social-links">

  <a
    href="https://github.com/mohiteshreya"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={git} alt="GitHub" />
  </a>

  <a
    href="https://www.linkedin.com/in/shreya-mohite"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={link} alt="LinkedIn" />
  </a>

  <a href="mailto:mshreya.dev123@gmail.com">
    <img src={mail} alt="Gmail" />
  </a>

</div>

        </div>

        <form className="contact-form" onSubmit={(e) => 
        {
         e.preventDefault();
          alert("Message sent successfully! 🎉");
          document.getElementById("home").scrollIntoView({
           behavior: "smooth",
        });
        e.target.reset();
  }}
>

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

      <footer className="footer">
        <p>© 2026 Shreya Mohite. All Rights Reserved.</p>
        <p>Built with React ❤️</p>
      </footer>

    </section>
  );
}