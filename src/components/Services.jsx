function Services() {
  const services = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "I build clean and responsive website interfaces using HTML, CSS, JavaScript, and React.",
    },
    {
      number: "02",
      title: "React Components",
      description:
        "I create reusable React components that make websites easier to manage and expand.",
    },
    {
      number: "03",
      title: "Responsive Web Design",
      description:
        "I design layouts that work smoothly on phones, tablets, and desktop screens.",
    },
    {
      number: "04",
      title: "JavaScript Interactions",
      description:
        "I add useful interactions such as menus, filters, forms, sliders, and theme switches.",
    },
  ];

  return (
    <section className="services section" id="services">
     <div className="section-heading reveal">
        <p className="section-label">What I Do</p>
        <h2>Building interfaces that feel smooth and useful.</h2>
      </div>

      <div className="services-grid">
        {services.map(function (service) {
          return (
           <div className="service-card reveal" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;