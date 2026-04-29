import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100, damping: 12 }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0, rotateY: -180 },
        visible: {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                duration: 0.8
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(139, 92, 246, 0.6)",
            transition: { type: 'spring', stiffness: 400, damping: 10 }
        },
        tap: { scale: 0.95 }
    };

    const iconVariants = {
        hover: {
            y: -5,
            scale: 1.1,
            transition: { type: 'spring', stiffness: 400 }
        },
        tap: { scale: 0.9 }
    };

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const socialLinks = [
        { icon: FaGithub, link: "https://github.com/xunaiet-faruk", color: "#ffffff", label: "GitHub" },
        { icon: FaLinkedin, link: "https://www.linkedin.com/in/junaiet-faruk/?isSelfProfile=true", color: "#0077b5", label: "LinkedIn" },
        { icon: FaFacebook, link: "https://www.facebook.com/junaiet.faruk", color: "#1877f2", label: "Facebook" },
        { icon: FaEnvelope, link: "mailto:xunaiet28@gmail.com", color: "#ea4335", label: "Email" }
    ];

    return (
        <section
            ref={ref}
            className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden"
            id="home"
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container px-12 py-20 mx-auto w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* LEFT SIDE - Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="flex-1 text-center lg:text-left z-10"
                    >
                        {/* Greeting */}
                        <motion.div variants={itemVariants} className="mb-4">
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-purple-400 text-sm font-semibold backdrop-blur-sm border border-purple-500/30">
                                👋 Welcome to my Portfolio
                            </span>
                        </motion.div>

                        {/* Name with gradient */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                        >
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                                Hi, I'm Junaiet Faruk
                            </span>
                        </motion.h1>

                        {/* Animated typing effect */}
                        <motion.div variants={itemVariants} className="mb-6">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300">
                                I'm{" "}
                                <TypeAnimation
                                    sequence={[
                                        'a Full Stack Developer',
                                        2000,
                                        'a React Expert',
                                        2000,
                                        'a Next.js Developer',
                                        2000,
                                        'a UI/UX Enthusiast',
                                        2000,
                                        'a Problem Solver',
                                        2000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                    className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                                />
                            </h2>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-gray-400 text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                        >
                            Passionate developer with 1+ years of experience building exceptional
                            web applications. Specialized in React, Next.js, and modern JavaScript frameworks.
                            Let's bring your ideas to life!
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
                        >
                            <motion.a
                                href="/resume.pdf" 
                                download
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-xl transition-all duration-300"
                            >
                                <FaDownload className="text-lg" />
                                Download Resume
                            </motion.a>

                            <motion.a
                                href="#contact"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm text-white font-semibold rounded-lg border border-purple-500/30 hover:border-purple-500 transition-all duration-300"
                            >
                                Contact Me
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex gap-4 justify-center lg:justify-start"
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={iconVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                                    <div className="relative w-12 h-12 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 group-hover:border-purple-500 transition-all duration-300">
                                        <social.icon
                                            className="text-2xl transition-all duration-300 group-hover:scale-110"
                                            style={{ color: social.color }}
                                        />
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>

                       
                    </motion.div>

                    {/* RIGHT SIDE - Image with animations */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate={controls}
                        className="flex-1 flex justify-center items-center relative"
                    >
                        {/* Animated rings around image */}
                        <motion.div
                            animate={{
                                rotate: 360,
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border-4 border-purple-500/30 border-t-purple-500 border-r-pink-500"
                        />

                        <motion.div
                            animate={{
                                rotate: -360,
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                                scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                            }}
                            className="absolute w-96 h-96 sm:w-[450px] sm:h-[450px] rounded-full border-2 border-pink-500/20 border-b-cyan-500"
                        />

                        {/* Glowing dots around image */}
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full"
                                style={{
                                    background: `radial-gradient(circle, ${['#8b5cf6', '#ec4899', '#06b6d4'][i % 3]}, transparent)`,
                                    left: `calc(50% + ${Math.cos(i * Math.PI * 2 / 12) * 220}px)`,
                                    top: `calc(50% + ${Math.sin(i * Math.PI * 2 / 12) * 220}px)`,
                                }}
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            />
                        ))}

                        {/* Main Image Container */}
                        <motion.div
                            animate={floatingAnimation}
                            className="relative z-10"
                        >
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 via-pink-500 to-purple-500 shadow-2xl shadow-purple-500/50">
                                {/* Image with gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 z-10"></div>
                                <img
                                    src="/junaiet.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                                />

                                {/* Shine effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 z-20"></div>
                            </div>

                            {/* Floating tech badges */}
                            <motion.div
                                initial={{ x: -50, y: -50, opacity: 0 }}
                                animate={{ x: 0, y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, type: "spring" }}
                                className="absolute -top-5 -left-5 bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-lg shadow-lg z-20"
                            >
                                <span className="text-white text-sm font-semibold">React ⚛️</span>
                            </motion.div>

                            <motion.div
                                initial={{ x: 50, y: -50, opacity: 0 }}
                                animate={{ x: 0, y: 0, opacity: 1 }}
                                transition={{ delay: 1, type: "spring" }}
                                className="absolute -top-5 -right-5 bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-1 rounded-lg shadow-lg z-20"
                            >
                                <span className="text-white text-sm font-semibold">Next.js ▲</span>
                            </motion.div>

                            <motion.div
                                initial={{ x: -50, y: 50, opacity: 0 }}
                                animate={{ x: 0, y: 0, opacity: 1 }}
                                transition={{ delay: 1.2, type: "spring" }}
                                className="absolute -bottom-5 -left-5 bg-gradient-to-r from-green-600 to-emerald-600 px-3 py-1 rounded-lg shadow-lg z-20"
                            >
                                <span className="text-white text-sm font-semibold">Node.js 💚</span>
                            </motion.div>

                            <motion.div
                                initial={{ x: 50, y: 50, opacity: 0 }}
                                animate={{ x: 0, y: 0, opacity: 1 }}
                                transition={{ delay: 1.4, type: "spring" }}
                                className="absolute -bottom-5 -right-5 bg-gradient-to-r from-orange-600 to-red-600 px-3 py-1 rounded-lg shadow-lg z-20"
                            >
                                <span className="text-white text-sm font-semibold">MongoDB 🍃</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-purple-500 rounded-full mt-2 animate-scroll"></div>
                </div>
            </motion.div>

            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    background-size: 200% auto;
                    animation: gradient 3s linear infinite;
                }
                @keyframes scroll {
                    0% { transform: translateY(0); opacity: 1; }
                    100% { transform: translateY(10px); opacity: 0; }
                }
                .animate-scroll {
                    animation: scroll 1.5s ease-in-out infinite;
                }
                .delay-1000 {
                    animation-delay: 1s;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;