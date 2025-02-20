import { motion } from "framer-motion";
import "../App.css";
import { AboutUs, ContactUs, Experience, Home, Skills, Projects, Logo } from "./Icons";
import { useEffect, useState } from "react";
import PortfolioLogo from "../assets/portfolio-logo.png";

const sections = ["home", "about", "skills", "experiance", "projects", "contact-us"];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (section) => {
    setActiveSection(section);
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition === 0) {
        setActiveSection("home");
      } else {
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop - 200 && scrollPosition < offsetTop + offsetHeight - 200) {
              setActiveSection(section);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        className="desktop-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img style = {{ cursor: 'pointer'}}onClick={() => handleScroll("home")} src={PortfolioLogo}></img>
        <nav>
          <ul>
            <li onClick={() => handleScroll("home")} className={activeSection === "home" ? "active" : ""}>
              <p>Home</p>
            </li>
            <li onClick={() => handleScroll("about")} className={activeSection === "about" ? "active" : ""}>
            <p>About Us</p>
            </li>
            <li onClick={() => handleScroll("skills")} className={activeSection === "skills" ? "active" : ""}>
              <p>Skills</p>
            </li>
            <li onClick={() => handleScroll("experiance")} className={activeSection === "experiance" ? "active" : ""}>
              <p>Experience</p>
            </li>
            <li onClick={() => handleScroll("projects")} className={activeSection === "projects" ? "active" : ""}>
              <p>Projects</p>
            </li>
            <li onClick={() => handleScroll("contact-us")} className={activeSection === "contact-us" ? "active" : ""}>
               <p>Contact Us</p>
            </li>
          {/* <div className="line">|</div> */}
          </ul>
        </nav>
      </motion.header>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        className="mobile-header"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="nav-list">
          {sections.map((section) => (
            <li
              key={section}
              onClick={() => handleScroll(section)}
              className={`nav-item ${activeSection === section ? "active" : ""}`}
            >
              {section === "home" && <Home />}
              {section === "about" && <AboutUs />}
              {section === "skills" && <Skills />}
              {section === "experiance" && <Experience />}
              {section === "projects" && <Projects />}
              {section === "contact-us" && <ContactUs />}
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
};
