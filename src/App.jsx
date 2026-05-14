import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";

function App() {
  const [lightMode, setLightMode] = useState(false);

  function toggleTheme() {
    setLightMode(!lightMode);
  }

  useEffect(function () {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach(function (element) {
      observer.observe(element);
    });

    return function () {
      revealElements.forEach(function (element) {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className={lightMode ? "app light-mode" : "app"}>
      <Navbar toggleTheme={toggleTheme} lightMode={lightMode} />

      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <ScrollTop />
      <Footer />
    </div>
  );
}

export default App;