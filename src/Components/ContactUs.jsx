import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../App.css';
import { motion } from "framer-motion";
import { Close, Location, Message, Phone } from './Icons';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [alertMessage, setAlertMessage] = useState(null);
    const [show, setShow] = useState(true);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send("service_0cvpnvh", "template_8e0m8ix", formData, "mQk5b8-ssfm6kvxeU")
            .then(() => {
                setAlertMessage({ type: "success", text: "Message sent successfully!" });
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            })
            .catch(() => {
                setAlertMessage({ type: "error", text: "Failed to send message." });
            });
    };

    return (
        <section id='contact-us' style={{ paddingTop: 60 }}>
            <div className="main_title">
                <span>Contact</span>
                <h3>I Want to Hear from You</h3>
            </div>
            <div className='experience-education-container'>
                <div className="contact-container">
                    <div className="contact-info">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="info-item">
                                <div className='icon'><Location /></div>
                                <div>
                                    <h3>Address</h3>
                                    <p>Karachi,Pakistan</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className='icon'><Message /></div>
                                <div>
                                    <h3>Email</h3>
                                    <p>
                                        <a href="mailto:fatimasaleem.20feb@gmail.com" className="email-link">
                                            fatimasaleem.20feb@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className='icon'><Phone /></div>
                                <div>
                                    <h3>Phone</h3>
                                    <p>
                                        <a href="tel:03352104071" className="phone-link">
                                            03352104071
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>

                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="form-row">
                                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-row">
                                <input type="text" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} />
                                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                            </div>
                            <div className="form-row">
                                <textarea name="message" placeholder="Write your message here" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <div className="form-row">
                                <button type='submit' className="main-button"><a>Submit</a></button>
                            </div>
                             {alertMessage && (
                                <div className={`alert ${alertMessage.type}`}>{alertMessage.text}
                                <div style={{cursor : 'pointer'}} onClick={() => setAlertMessage(null)}>
                                    <Close></Close>
                                </div>
                                </div> 
                            )} 
                            
                        </motion.div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;