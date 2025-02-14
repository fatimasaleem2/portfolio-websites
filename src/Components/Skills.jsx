import { motion } from "framer-motion";
import '../App.css';
import { useEffect, useState } from "react";

export const Skills = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 100); 
    }, []);

    const skills = [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 80 },
        { name: "React Native", level: 95 },
        { name: "Python", level: 60 },
      ];
  
    return (
        <section id="skills" className="skills-main-container">
        <div className="main_title">
        <span>Skills</span>
        <h3>I Work Hard to Improve My Skills Regularly</h3>
    </div>
        <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className={`progress-fill ${animate ? "animate" : ""}`}
                  style={{ width: animate ? `${skill.level}%` : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    );
  };