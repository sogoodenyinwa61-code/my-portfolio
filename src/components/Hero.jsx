import myPhoto from "../assets/my-photo.jng.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text reveal">
        <p className="eyebrow">Frontend Developer</p>

        <h1>
           Hi, its<span> <br /> Sogood</span>
        </h1>

        <p className="hero-description">
          I create responsive, smooth, and visually clean websites using React,
          JavaScript, HTML, and CSS. I enjoy turning ideas into interfaces that
          feel simple, modern, and useful.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="flip-btn">
            <span>View Work</span>
          </a>

          <a href="#contact" className="flip-btn outline">
            <span>Let’s Talk</span>
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/sogoodenyinwa61-code/" target="_blank" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sogood-enyinwa/" target="_blank" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="mailto:sogoodenyinwa61@gmail.com" aria-label="Email">
            <MdEmail />
          </a>
        </div>
      </div>

    <div className="hero-image-area reveal delay">
  <div className="image-glow"></div>

  <div className="image-frame">
    <img src={myPhoto} alt="Sogood Enyinwa" className="hero-image" />
  </div>
</div>
    </section>
  );
}

export default Hero;