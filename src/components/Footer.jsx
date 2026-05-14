import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <a href="#home" className="footer-logo">
            Sogood<span>.</span>
          </a>

          <p>
            Frontend developer building clean, responsive, and smooth web
            experiences with React and JavaScript.
          </p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/" target="_blank" aria-label="GitHub">
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a href="mailto:sogoodenyinwa61@gmail.com" aria-label="Email">
            <MdEmail />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Sogood Enyinwa. Built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;