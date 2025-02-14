import { motion } from "framer-motion";
import "../App.css";
import { CreativeWork, DeeperSkills, StrongDedication } from "./Icons";
import PortfolioImage from '../assets/portfolio-main-image.png';
import { useEffect, useState } from "react";

export const Hero = () => {
    const headings = ["Web Developer", "App Developer", "Frontend Developer"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % headings.length);
        }, 3000); // Change heading every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <motion.section id="hero" className="experience-education-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="hero-container">
                    <div className="hero-text">
                        <h1>Fatima <span className="hero-text-2">Saleem</span></h1>
                        {/* <p>Frontend Developer</p> */}

                        <motion.div
                            key={index} // Key change triggers animation
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.5 }}
                            className="heading-text"
                        >
                            {headings[index]}
                        </motion.div>
                        <button onClick={() => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' })} className="main-button"><a>Get Connected</a></button>

                    </div>
                    <motion.div
                        className="hero-image"
                        whileHover={{ rotateY: 10, rotateX: 10 }}
                        style={{
                            perspective: 300,

                        }}
                    >
                        <img src={PortfolioImage} alt="portfolio image" />
                    </motion.div>
                </div>



                <div className="card-section">
                    <motion.div
                        whileHover={{ scale: 1.05, rotateY: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className="card">
                        <DeeperSkills></DeeperSkills>
                        <h2>Deeper Skillset</h2>
                        <p>Mastering software development, requires more than just technical knowledge adaptability, and problem-solving skills.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05, rotateY: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className="card">
                        <CreativeWork></CreativeWork>
                        <h2>Creative Work</h2>
                        <p>Creativity is at the heart of innovative software, engaging web applications, and intuitive mobile experiences. </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05, rotateY: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className="card">
                        <StrongDedication></StrongDedication>
                        <h2>Strong Dedication</h2>
                        <p>Dedication fuels continuous learning, attention to detail, and long-term success in the tech industry.</p>
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}