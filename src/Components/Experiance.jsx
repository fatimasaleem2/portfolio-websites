import { motion } from "framer-motion";
import '../App.css';
import { Education, Suitcase } from "./Icons";

export const Experiance = () => {
    const TimelineItem = ({ title, company,description, duration, icon }) => {
        return (
          <div className="timeline-item">
            <div className="timeline-icon">{icon}</div>
            <div className="timeline-content">
              <h3>{title} <span className="duration">({duration})</span></h3>
              <h4>{company}</h4>
              
            </div>
          </div>
        );
    };
  
    return (
        <section id="experiance" style={{ paddingTop: 60 }}>
            <div className="main_title">
                <span>Resume</span>
                <h3>I Worked for Some Big Companies</h3>
            </div>
            <div className="experience-education-container">
                <div className="timeline-grid">
                    {/* Experience Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: -100 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-title">Experience</h2>
                        <TimelineItem title="Quality Assurance" company="Intelvue" duration="2023 - 2024" icon={<Suitcase />} />
                        <TimelineItem title="Frontend Developer" company="Intelvue" duration="2024 - 2025" icon={<Suitcase />} />
                    </motion.div>
                    {/* Education Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: 100 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-title">Education</h2>
                        <TimelineItem title="Bachelor of Commerce" company="University of Karachi" duration="2021" icon={<Education />} />
                        <TimelineItem title="Secondary School" company="Lady Mariam Adamjee Girls School" duration="2017" icon={<Education />} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
