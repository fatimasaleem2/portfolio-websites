import { motion } from "framer-motion";
import "../App.css";
import { CreativeWork, DeeperSkills, StrongDedication } from "./Icons";
import PortfolioImage from "../assets/portfolio-main-image.png";

export const Hero = () => {
    const handleScrollToContact = () => {
        document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
    };

    const cardData = [
        {
            Icon: DeeperSkills,
            title: "Deeper Skillset",
            description: "Mastering software development requires more than just technical knowledge—adaptability and problem-solving skills are key."
        },
        {
            Icon: CreativeWork,
            title: "Creative Work",
            description: "Creativity is at the heart of innovative software, engaging web applications, and intuitive mobile experiences."
        },
        {
            Icon: StrongDedication,
            title: "Strong Dedication",
            description: "Dedication fuels continuous learning, attention to detail, and long-term success in the tech industry."
        }
    ];

    return (
        <motion.section id="hero" className="experience-education-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="hero-container">
                <div className="hero-text">
                    <h1>Fatima <span className="hero-text-2">Saleem</span></h1>
                    <p>Frontend Developer</p>
                    <p className="hero-para">Passionate about designing web applications and bringing them <br></br> to life through code, as well as developing mobile applications.</p>
                    <button onClick={handleScrollToContact}  className="main-button"><a>Get Connected</a></button>
                </div>
                <motion.div
                    className="hero-image"
                    whileHover={{ rotateY: 10, rotateX: 10 }}
                    style={{ perspective: 300 }}
                >
                    <img src={PortfolioImage} alt="Fatima Saleem - Portfolio" />
                </motion.div>
            </div>

            <div className="card-section">
                {cardData.map(({ Icon, title, description }, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, rotateY: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className="card"
                    >
                        <Icon />
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};
