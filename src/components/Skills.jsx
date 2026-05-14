function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "Responsive Design",
    "UI Design",
    "Vercel",
    "Problem Solving",
  ];

  const skillCards = [
    {
      title: "Frontend Basics",
      tools: "HTML, CSS, JavaScript",
    },
    {
      title: "React Development",
      tools: "Components, Props, State",
    },
    {
      title: "Styling",
      tools: "Responsive Design, Animations",
    },
    {
      title: "Tools",
      tools: "Git, GitHub, Vercel",
    },
  ];

  return (
    <section className="skills section" id="skills">
     <div className="section-heading reveal">
        <p className="section-label">Skills</p>
        <h2>Tools I use to bring interfaces to life.</h2>
      </div>

<div className="marquee reveal">
        <div className="marquee-track">
          {skills.concat(skills).map(function (skill, index) {
            return <span key={index}>{skill}</span>;
          })}
        </div>
      </div>

      <div className="marquee reverse reveal">
        <div className="marquee-track">
          {skills.concat(skills).map(function (skill, index) {
            return <span key={index}>{skill}</span>;
          })}
        </div>
      </div>

      <div className="skill-card-grid">
        {skillCards.map(function (card, index) {
          return (
            <div className="skill-info-card reveal" key={index}>
              <h3>{card.title}</h3>
              <p>{card.tools}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;