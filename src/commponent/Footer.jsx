import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    FaGithub, FaLinkedin, FaFacebook, FaEnvelope,
    FaHeart, FaArrowUp, FaCode, FaLaptopCode,
    FaTwitter, FaInstagram, FaYoutube, FaMedium
} from 'react-icons/fa';
import { SiGmail, SiWhatsapp } from 'react-icons/si';

const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const services = [
        { name: 'Web Development', icon: FaCode },
        { name: 'Full Stack Solutions', icon: FaLaptopCode },
        { name: 'UI/UX Design', icon: FaHeart },
        { name: 'API Development', icon: FaCode }
    ];

    const socialLinks = [
        { icon: FaGithub, link: "https://github.com/xunaiet-faruk", color: "#333", label: "GitHub" },
        { icon: FaLinkedin, link: "https://www.linkedin.com/in/junaiet-faruk/?isSelfProfile=true", color: "#0077b5", label: "LinkedIn" },
        { icon: FaFacebook, link: "https://www.facebook.com/junaiet.faruk", color: "#1877f2", label: "Facebook" },
        { icon: SiGmail, link: "mailto:xunaiet28@gmail.com", color: "#ea4335", label: "Gmail" },
        { icon: SiWhatsapp, link: "https://wa.me/8801882239828", color: "#25D366", label: "WhatsApp" },
        { icon: FaTwitter, link: "https://twitter.com/yourusername", color: "#1DA1F2", label: "Twitter" },
        { icon: FaInstagram, link: "https://instagram.com/xunaiet", color: "#E4405F", label: "Instagram" },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                duration: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <footer className="relative overflow-hidden mt-12" ref={ref}>
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-600/10 to-transparent"></div>
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `radial-gradient(circle, #a855f7 2px, transparent 2px)`,
                    backgroundSize: '40px 40px'
                }}></div>

                {/* Floating Particles */}
                <div className="absolute top-20 left-10 text-xl opacity-10 animate-float hidden lg:block">✨</div>
                <div className="absolute bottom-20 right-10 text-xl opacity-10 animate-float-delayed hidden lg:block">⭐</div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {/* Logo & Description */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2"
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">J</span>
                            </div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Junaiet Faruk
                            </h2>
                        </motion.div>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Full Stack Developer passionate about creating amazing web experiences
                            with modern technologies. Let's build something great together!
                        </p>

                        <div className="flex gap-3">
                            {socialLinks.slice(0, 4).map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={idx}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative group"
                                    >
                                        <div className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                                            style={{ background: `radial-gradient(circle, ${social.color}80 0%, transparent 70%)` }}
                                        />
                                        <div className="relative w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-all duration-300">
                                            <Icon className="text-lg" style={{ color: social.color }} />
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-white text-lg font-semibold relative inline-block">
                            Quick Links
                            <motion.div
                                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "100%" } : {}}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            />
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, idx) => (
                                <motion.li
                                    key={idx}
                                    whileHover={{ x: 10 }}
                                    className="group"
                                >
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                                    >
                                        <span className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-white text-lg font-semibold relative inline-block">
                            Services
                            <motion.div
                                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "100%" } : {}}
                                transition={{ delay: 0.7, duration: 0.6 }}
                            />
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service, idx) => {
                                const Icon = service.icon;
                                return (
                                    <motion.li
                                        key={idx}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
                                    >
                                        <Icon className="text-purple-500 text-sm" />
                                        <span>{service.name}</span>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-white text-lg font-semibold relative inline-block">
                            Contact Info
                            <motion.div
                                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "100%" } : {}}
                                transition={{ delay: 0.9, duration: 0.6 }}
                            />
                        </h3>
                        <ul className="space-y-3">
                            <motion.li whileHover={{ x: 10 }} className="flex items-center gap-3">
                                <FaEnvelope className="text-purple-400" />
                                <a href="mailto:xunaiet28@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    xunaiet28@gmail.com
                                </a>
                            </motion.li>
                            <motion.li whileHover={{ x: 10 }} className="flex items-center gap-3">
                                <SiWhatsapp className="text-green-500" />
                                <a href="https://wa.me/8801882239828" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    +8801882239828
                                </a>
                            </motion.li>
                            <motion.li whileHover={{ x: 10 }} className="flex items-center gap-3">
                                <FaHeart className="text-red-500" />
                                <span className="text-gray-400">Available 24/7</span>
                            </motion.li>
                        </ul>

                        {/* Newsletter Subscription */}
                        <div className="mt-4">
                            <h4 className="text-white text-sm font-semibold mb-2">Subscribe to Newsletter</h4>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500 transition-all"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white text-sm font-semibold"
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Footer Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 }}
                    className="mt-12 pt-8 border-t border-gray-800"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <span>© {new Date().getFullYear()} Junaiet Faruk.</span>
                            <span>All rights reserved.</span>
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-red-500"
                            >
                                <FaHeart className="inline" />
                            </motion.span>
                        </div>

                        

                        {/* Scroll to Top Button */}
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-purple-500"></div>
                            <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                                <FaArrowUp className="text-white text-sm" />
                            </div>
                        </motion.button>
                    </div>

                 
                </motion.div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(15px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
        }
      `}</style>
        </footer>
    );
};

export default Footer;