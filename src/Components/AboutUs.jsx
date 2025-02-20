import { motion } from "framer-motion";
import "../App.css";
import AboutUsImage from '../assets/about-us.png';

export const AboutUs = () => (

    <section id="about" className="about_main_container">
        <div className="main_title">
            <span>About Us</span>
            <h3>A Passionate Developer Who Loves to Code</h3>
        </div>
        <div className="experience-education-container">
            <div className="about_container">
              
                <motion.div
                    whileHover={{ rotateY: 5, rotateX: 5 }}
                    style={{
                        perspective: 300,

                    }}
                >
                    <img style={{height : 300, width : 300}} src={AboutUsImage} alt="About us" />
                </motion.div>
                <div className="about_content">
                    <h3>About Me</h3>
                    <p style={{ textAlign: 'left' }}>I am a passionate and detail-oriented Frontend Developer with a strong background in software quality assurance. With expertise in web and app development, I specialize in building intuitive, high-performance digital experiences using modern technologies like React,React Native Adobe React Spectrum, and Tailwind CSS. My journey from quality assurance to frontend development has given me a keen eye for detail, ensuring that every project I work on meets the highest standards of usability, performance, and accessibility.</p>
                    <button className="main-button"><a style={{ color: 'black' }} href="/cv.pdf" download="Resume.pdf">Download Cv</a></button>

                </div>
            </div>

        </div>
        <div />
    </section>

);