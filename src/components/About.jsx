function About() {
  return (
    <section className="about section" id="about">
      <div className="section-heading reveal">
        <p className="section-label">About Me</p>
        <h2>Clean. Curious. Creative.</h2>
      </div>

      <div className="about-wrapper">
       <div className="about-text reveal">
          <p>
            I am Sogood, a frontend developer focused on building clean,
            responsive, and visually appealing web interfaces. I enjoy turning
            ideas into websites that feel smooth, modern, and easy to use.
          </p>

          <p>
            I am currently growing my skills in React, JavaScript, UI design,
            and real-world frontend projects. My goal is to become a strong
            software engineer who can build useful digital products that solve
            real problems.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card reveal">
            <h3>01</h3>
            <p>Frontend Development</p>
          </div>

          <div className="stat-card reveal">
            <h3>02</h3>
            <p>Responsive Design</p>
          </div>

         <div className="stat-card reveal">
            <h3>03</h3>
            <p>React Interfaces</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;