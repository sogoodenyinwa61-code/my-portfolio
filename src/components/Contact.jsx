import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setStatus("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section className="contact section" id="contact">
      <div className="section-heading reveal">
        <p className="section-label">Contact</p>
        <h2>Let’s build something clean together.</h2>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info reveal">
          <p>
            Have a project idea, collaboration, or opportunity? Send a message
            and I’ll get back to you.
          </p>

          <div className="contact-links">
            <a href="mailto:sogoodenyinwa61@gmail.com">
              sogoodenyinwa61@gmail.com
            </a>
            <a href="https://github.com/" target="_blank">
              GitHub
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="form-btn">
            Send Message
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;