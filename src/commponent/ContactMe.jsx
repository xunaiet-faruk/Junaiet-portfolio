import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane,
    FaCheckCircle, FaGithub, FaLinkedin, FaFacebook,
    FaRegSmile, FaRegClock, FaUser, FaComment,
    FaSpinner, FaWhatsapp
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const ContactMe = () => {
    const ref = useRef(null);
    const formRef = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const SERVICE_ID = 'service_g84zacm'; 
    const TEMPLATE_ID = 'template_eptvhry'; 
    const PUBLIC_KEY = 'XawkCasZRx1zgag4J'; 

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: "Email Me",
            info: "xunaiet28@gmail.com",
            link: "mailto:xunaiet28@gmail.com",
            color: "#ef4444"
        },
        {
            icon: FaPhone,
            title: "Call Me",
            info: "+8801882239828",
            link: "tel:+8801882239828",
            color: "#10b981"
        },
        {
            icon: FaWhatsapp,
            title: "WhatsApp",
            info: "+8801882239828",
            link: "https://wa.me/8801882239828",
            color: "#25D366"
        },
        {
            icon: FaMapMarkerAlt,
            title: "Location",
            info: "Raozan, Chattogram, Bangladesh",
            link: null,
            color: "#f59e0b"
        },
        {
            icon: FaRegClock,
            title: "Response Time",
            info: "Within 24 hours",
            link: null,
            color: "#06b6d4"
        }
    ];

 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrorMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        // EmailJS configuration
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'xunaiet28@gmail.com',
            reply_to: formData.email
        };

        try {
            // Send email using EmailJS
            const response = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );

            if (response.status === 200) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setIsSubmitted(false), 4000);
            }
        } catch (error) {
            console.error('Email sending failed:', error);
            setErrorMessage('Failed to send message. Please try again or contact me directly via email.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    const formVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.3 }
        }
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="contact" ref={ref}>
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-40 right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-40 left-20 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"></div>
                </div>

                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `radial-gradient(circle, #a855f7 2px, transparent 2px)`,
                    backgroundSize: '50px 50px'
                }}></div>

                {/* Floating Particles */}
                <div className="absolute top-20 left-10 text-2xl opacity-20 animate-float hidden lg:block">✨</div>
                <div className="absolute bottom-20 right-10 text-2xl opacity-20 animate-float-delayed hidden lg:block">⭐</div>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="text-center mb-12"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="inline-block mb-4"
                    >
                        <div className="w-20 h-20 rounded-full backdrop-blur-3xl  bg-white/5 shadow-xl  flex items-center justify-center shadow-xl">
                            <motion.span
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 10, repeat: Infinity }}
                                className="text-3xl"
                            >
                                📧
                            </motion.span>
                        </div>
                    </motion.div>

                    <motion.h2
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                        style={{ backgroundSize: "200% auto" }}
                    >
                        Get In Touch
                    </motion.h2>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100px" } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"
                    ></motion.div>

                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind? Let's discuss! I'm always open to new opportunities and collaborations.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* LEFT SIDE - Contact Info */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-6"
                    >
                        {/* Contact Cards */}
                        {contactInfo.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                                    <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                                        <div className="flex items-center gap-4">
                                            <motion.div
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.5 }}
                                                className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center"
                                            >
                                                <Icon className="text-2xl" style={{ color: item.color }} />
                                            </motion.div>
                                            <div>
                                                <h3 className="text-white font-semibold">{item.title}</h3>
                                                {item.link ? (
                                                    <a
                                                        href={item.link}
                                                        target={item.title === "WhatsApp" ? "_blank" : "_self"}
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
                                                    >
                                                        {item.info}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-400 text-sm">{item.info}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}

                      

                    
                    </motion.div>

                    {/* RIGHT SIDE - Contact Form */}
                    <motion.div
                        variants={formVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <div className="relative">
                          
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="relative rounded-2xl p-8 space-y-6 bg-transparent"
                                style={{
                                    background: 'transparent',
                                    border: '2px solid transparent',
                                    backgroundImage: `linear-gradient(#0a0a0a, #0a0a0a), linear-gradient(135deg, #8b5cf6, #ec4899, #06b6d4, #f59e0b, #10b981, #8b5cf6)`,
                                    backgroundOrigin: 'border-box',
                                    backgroundClip: 'padding-box, border-box',
                                    animation: 'borderRotate 4s linear infinite',
                                    backgroundSize: '200% 200%'
                                }}
                            >
                                {/* Animated Inner Glow */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl pointer-events-none"
                                    animate={{
                                        boxShadow: [
                                            `0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(236, 72, 153, 0.2)`,
                                            `0 0 30px rgba(236, 72, 153, 0.4), 0 0 60px rgba(6, 182, 212, 0.3)`,
                                            `0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(236, 72, 153, 0.2)`
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />                                {isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="bg-green-500/20 border border-green-500 rounded-xl p-4 flex items-center gap-3"
                                    >
                                        <FaCheckCircle className="text-green-500 text-xl" />
                                        <p className="text-green-400">Message sent successfully! I'll get back to you soon.</p>
                                    </motion.div>
                                )}

                                {errorMessage && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-red-500/20 border border-red-500 rounded-xl p-4"
                                    >
                                        <p className="text-red-400 text-sm">{errorMessage}</p>
                                    </motion.div>
                                )}

                                <div className="space-y-2">
                                    <label className="text-white text-sm font-semibold flex items-center gap-2">
                                        <FaUser className="text-purple-400" />
                                        Your Name
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02, borderColor: "#8b5cf6" }}
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white text-sm font-semibold flex items-center gap-2">
                                        <FaEnvelope className="text-purple-400" />
                                        Your Email
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02, borderColor: "#8b5cf6" }}
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white text-sm font-semibold flex items-center gap-2">
                                        <FaComment className="text-purple-400" />
                                        Your Message
                                    </label>
                                    <motion.textarea
                                        whileFocus={{ scale: 1.02, borderColor: "#8b5cf6" }}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-3 mt-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <FaSpinner className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>

                                <p className="text-gray-500 text-xs text-center mt-4">
                                    I'll respond to your message within 24 hours
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>

               
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(20px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 5s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default ContactMe;