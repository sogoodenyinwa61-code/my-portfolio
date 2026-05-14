import { useState } from "react";

function Navbar({ toggleTheme, lightMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        Sogood<span>Enyinwa</span>
      </a>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#services" onClick={closeMenu}>
            What I Do
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>
            Work
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>

      <div className="nav-actions">
        <button className="theme-btn" onClick={toggleTheme}>
          {lightMode ? "🌙" : "☀️"}
        </button>

        <button className="menu-btn" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;