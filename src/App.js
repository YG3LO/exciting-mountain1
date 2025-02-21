import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import logo from "./assets/logo.png";
import background from "./assets/school.jpg";

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="LYCEUM Logo" className="navbar-logo" />
            <span className="ms-2">LYCEUM OF ALABANG</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  🏠 Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  📖 About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  📞 Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <div
      className="home-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="overlay">
        <h2>WELCOME TO LYCEUM OF ALABANG</h2>
        <p>Experience a new way of learning at LYCEUM.</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="page-content">
      <h2>📖 About LYCEUM</h2>
      <div className="about-section">
        <h3>PHILOSOPHY</h3>
        <p>
          An institution that provides quality and relevant instruction and
          innovation for the next generation to improve lives physically,
          emotionally, morally, and spiritually, adhering to the principle of
          God.
        </p>
        <blockquote>
          “I will instruct you and teach you in the way you should go; I will
          counsel you with my loving eyes on you.” – Psalm 32:8
        </blockquote>

        <h3>VISION</h3>
        <p>
          Lyceum of Alabang envisions becoming one of the nation’s leading
          educational institutions involved in the pursuit and advancement of
          knowledge, skills, and values for personal, community, and national
          development.
        </p>

        <h3>MISSION</h3>
        <p>
          Lyceum of Alabang shall provide world-class education and training
          through competent personnel, high-end facilities, advanced technology,
          and equipment, and accredited curricula of industry-based courses.
        </p>

        <h3>QUALITY POLICY</h3>
        <p>
          We, at the Lyceum of Alabang, commit ourselves to exceed the
          expectations of our stakeholders through continual improvement for
          effective and efficient provision of quality education and training.
        </p>

        <h3>GOALS AND OBJECTIVES</h3>
        <ul>
          <li>
            Impart knowledge and intellectual skills and nurture curiosity,
            critical judgment, ethical awareness, and creative imagination.
          </li>
          <li>
            Provide quality competence development programs for faculty and
            staff to ensure excellent service to all stakeholders.
          </li>
          <li>
            Offer high-end facilities and equipment instrumental to the
            advancement of learning.
          </li>
          <li>
            Develop individuals who can make informed decisions for their
            personal, social, and cultural growth.
          </li>
        </ul>

        <h3>CORE VALUES</h3>
        <ul>
          <li>
            <strong>EXCELLENT AND DYNAMIC SERVICE</strong>: We commit to
            excellence through dynamic educational programs and modernized
            resources.
          </li>
          <li>
            <strong>EDUCATIONAL PARTNERSHIP</strong>: We establish sustainable
            alliances with parents and learners to create responsible
            nation-builders.
          </li>
          <li>
            <strong>HUMAN RESOURCES DEVELOPMENT</strong>: We continuously train
            and develop our staff to keep up with modern societal demands.
          </li>
          <li>
            <strong>MORAL AND SPIRITUAL LEADERSHIP</strong>: We inspire students
            to embrace core values through moral and spiritual leadership.
          </li>
        </ul>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="page-content">
      <h2>📞 Contact Us</h2>
      <p>Email: contact@lyceum.edu | Phone: (123) 456-7890</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} LYCEUM OF ALABANG. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
