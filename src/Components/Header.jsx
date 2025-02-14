import { motion } from "framer-motion";
import "../App.css";
import { AboutUs, ContactUs, Experience, Home, Location, Skills, Suitcase } from "./Icons";
import { useEffect, useState } from "react";


const sections = ["home", "about", "skills", "experiance", "contact-us"];
export const Header = () => {
  const [activeSection, setActiveSection] = useState("");


  const handleScroll = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
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
        <nav>
          <ul>
            <li onClick={() => handleScroll("home")}>Home</li>
            <li onClick={() => handleScroll("about")}>About Us</li>
            <li onClick={() => handleScroll("skills")}>Skills</li>
            <li onClick={() => handleScroll("experiance")}>Experience</li>
            <li onClick={() => handleScroll("contact-us")}>Contact Us</li>
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
            {section === "contact-us" && <ContactUs />}
          </li>
        ))}
      </ul>
      </motion.nav>
    </>
  );
};
