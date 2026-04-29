import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    FaCode, FaUsers, FaRocket, FaHeart,
    FaBook, FaLaptopCode, FaProjectDiagram,
    FaSmile, FaStar, FaCalendarAlt,
    FaBicycle, FaTableTennis, FaFutbol,
    FaHandshake, FaLightbulb, FaAward,
    FaChalkboardTeacher, FaRunning
} from 'react-icons/fa';
import { MdSportsCricket, MdEmojiEvents } from 'react-icons/md';
import { GiFeather } from 'react-icons/gi';

const AboutMe = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const stats = [
        { value: '1.5+', label: 'Years Experience', icon: FaCalendarAlt, color: '#8b5cf6', delay: 0 },
        { value: '30+', label: 'Projects Completed', icon: FaCode, color: '#ec4899', delay: 0.1 },
        { value: '7+', label: 'Team Projects', icon: FaUsers, color: '#06b6d4', delay: 0.2 },
        { value: '10+', label: 'Technologies', icon: FaLaptopCode, color: '#10b981', delay: 0.3 },
    ];

    const hobbies = [
        { name: 'Learning New Things', icon: FaBook, color: '#8b5cf6', description: 'Always curious, always growing', emoji: '📚' },
        { name: 'Badminton', icon: GiFeather, color: '#ec4899', description: 'Quick reflexes & agility', emoji: '🏸' },        { name: 'Cricket', icon: MdSportsCricket, color: '#06b6d4', description: 'Team spirit on the field', emoji: '🏏' },
        { name: 'Tech Exploration', icon: FaRocket, color: '#f59e0b', description: 'New frameworks & tools', emoji: '🚀' },
    ];

    const achievements = [
        { title: 'Completed 30+ Projects', year: '2026', icon: FaAward, color: '#f59e0b' },
        { title: 'Team Lead Experience', year: '2025', icon: FaUsers, color: '#3b82f6' },
        { title: 'Continuous Learner', year: '2026', icon: FaBook, color: '#10b981' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100, damping: 12 }
        }
    };

    const rightVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100, damping: 12 }
        }
    };

    const cardVariants = {
        hidden: { scale: 0, rotateY: 90, opacity: 0 },
        visible: {
            scale: 1,
            rotateY: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 200, damping: 15 }
        }
    };

    const floatAnimation = {
        y: [0, -10, 0],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    };

    const pulseAnimation = {
        scale: [1, 1.05, 1],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="about" ref={ref}>
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-full">
                    <motion.div
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                        }}
                        transition={{ duration: 20, repeat: Infinity }}
                        className="absolute top-40 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
                    ></motion.div>
                    <motion.div
                        animate={{
                            x: [0, -100, 0],
                            y: [0, -50, 0],
                        }}
                        transition={{ duration: 25, repeat: Infinity }}
                        className="absolute bottom-40 right-20 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl"
                    ></motion.div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                </div>

                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `radial-gradient(circle, #a855f7 2px, transparent 2px)`,
                    backgroundSize: '50px 50px'
                }}></div>
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
                        <div className="w-20 h-20 rounded-full  backdrop-blur-3xl  bg-white/5 shadow-xl   flex items-center justify-center">
                            <motion.span
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-2xl"
                            >
                                👨‍💻
                            </motion.span>
                        </div>
                    </motion.div>

                    <motion.h2
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                        style={{ backgroundSize: "200% auto" }}
                    >
                        About Me
                    </motion.h2>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100px" } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"
                    ></motion.div>

                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Get to know me better - my journey, my passion, and my personality
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Side - Journey & Personality */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-8"
                    >
                        {/* My Journey Card */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-xl"
                        >
                            <motion.div
                                animate={floatAnimation}
                                className="absolute -top-4 -left-4 text-4xl"
                            >
                                🚀
                            </motion.div>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <motion.div animate={pulseAnimation}>
                                    <FaStar className="text-yellow-500" />
                                </motion.div>
                                My Programming Journey
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <p className="leading-relaxed">
                                    My coding journey started <span className="text-purple-400 font-semibold text-lg">1.5 years ago</span> when I built my
                                    first website. What began as curiosity quickly turned into passion.
                                    Every day, I'm amazed by how code can bring ideas to life!
                                </p>
                                <p className="leading-relaxed">
                                    From small projects to complex applications, I've grown tremendously
                                    in this short time. The learning never stops, and that's what makes
                                    programming so exciting for me.
                                </p>
                            </div>

                            {/* Animated Timeline */}
                            <div className="mt-6">
                                <div className="flex justify-between text-xs text-gray-400 mb-2">
                                    <span>Started</span>
                                    <span>Now</span>
                                </div>
                                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: "75%" } : {}}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                                    />
                                </div>
                                <div className="text-center mt-2">
                                    <span className="text-xs text-purple-400">1.5+ Years of Growth</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* What I Enjoy Working On */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"
                        >
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <FaHeart className="text-pink-500" />
                                </motion.div>
                                What I Love Working On
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { title: 'Team Projects', icon: FaUsers, desc: 'Love collaborating', color: '#8b5cf6' },
                                    { title: 'Big Projects', icon: FaProjectDiagram, desc: 'Excited by challenges', color: '#ec4899' },
                                    { title: 'Problem Solving', icon: FaCode, desc: 'Creative solutions', color: '#06b6d4' },
                                    { title: 'Innovation', icon: FaRocket, desc: 'Building meaningfully', color: '#10b981' },
                                ].map((work, idx) => {
                                    const Icon = work.icon;
                                    return (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.05, x: 5 }}
                                            className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg cursor-pointer"
                                        >
                                            <motion.div
                                                animate={{ rotate: [0, 360] }}
                                                transition={{ duration: 8, repeat: Infinity }}
                                            >
                                                <Icon className="text-xl" style={{ color: work.color }} />
                                            </motion.div>
                                            <div>
                                                <div className="text-white text-sm font-semibold">{work.title}</div>
                                                <div className="text-xs text-gray-400">{work.desc}</div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Personality Showcase */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <motion.div
                                    animate={{ rotate: [0, 20, -20, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <FaSmile className="text-yellow-500" />
                                </motion.div>
                                My Personality
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { emoji: "🤝", trait: "Team Player", color: "from-blue-500/20 to-blue-600/20" },
                                    { emoji: "💡", trait: "Creative Thinker", color: "from-purple-500/20 to-purple-600/20" },
                                    { emoji: "🎯", trait: "Goal Oriented", color: "from-green-500/20 to-green-600/20" },
                                    { emoji: "🌟", trait: "Quick Learner", color: "from-pink-500/20 to-pink-600/20" },
                                    { emoji: "🤗", trait: "Friendly", color: "from-orange-500/20 to-orange-600/20" },
                                    { emoji: "🔥", trait: "Passionate", color: "from-red-500/20 to-red-600/20" },
                                ].map((item, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: idx * 0.1 }}
                                        className={`px-3 py-2 bg-gradient-to-r ${item.color} rounded-full text-sm text-white flex items-center gap-1 cursor-pointer shadow-lg`}
                                    >
                                        <motion.span
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                                        >
                                            {item.emoji}
                                        </motion.span>
                                        {item.trait}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Stats, Hobbies & Achievements */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-6"
                    >
                        {/* Stats Grid with 3D Flip Effect */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={cardVariants}
                                        whileHover={{ y: -10, scale: 1.05 }}
                                        className="relative group cursor-pointer"
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 text-center border border-gray-700 group-hover:border-purple-500 transition-all duration-300">
                                            <motion.div
                                                className="w-12 h-12 mx-auto rounded-full bg-gray-800 flex items-center justify-center mb-3"
                                                animate={{ rotate: [0, 360] }}
                                                transition={{ duration: 10, repeat: Infinity }}
                                            >
                                                <Icon className="text-2xl" style={{ color: stat.color }} />
                                            </motion.div>
                                            <motion.div
                                                className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                                                initial={{ scale: 0 }}
                                                animate={isInView ? { scale: 1 } : {}}
                                                transition={{ delay: stat.delay, type: "spring" }}
                                            >
                                                {stat.value}
                                            </motion.div>
                                            <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Hobbies & Interests with Neon Glow */}
                        <motion.div
                            variants={rightVariants}
                            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"
                        >
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    🎯
                                </motion.div>
                                Hobbies & Interests
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                                {hobbies.map((hobby, idx) => {
                                    const Icon = hobby.icon;
                                    return (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ x: 15, scale: 1.02 }}
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg group cursor-pointer hover:bg-gray-800 transition-all duration-300"
                                        >
                                            <motion.div
                                                className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                                                animate={{ rotate: [0, 360] }}
                                                transition={{ duration: 8, repeat: Infinity }}
                                            >
                                                <Icon className="text-xl" style={{ color: hobby.color }} />
                                            </motion.div>
                                            <div>
                                                <div className="text-white font-semibold flex items-center gap-2">
                                                    {hobby.name}
                                                    <motion.span
                                                        animate={{ y: [0, -5, 0] }}
                                                        transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.3 }}
                                                    >
                                                        {hobby.emoji}
                                                    </motion.span>
                                                </div>
                                                <div className="text-xs text-gray-400">{hobby.description}</div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Achievements with Animated Border */}
                       

                       
                        {/* Connect Card */}
                        <motion.div
                            variants={rightVariants}
                            whileHover={{ scale: 1.02 }}
                            className="text-center p-4 bg-gradient-to-r from-gray-800/30 to-gray-800/10 rounded-xl"
                        >
                          
                        </motion.div>
                    </motion.div>
                </div>

                {/* Floating animated elements */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-20 right-20 text-3xl opacity-20 hidden lg:block"
                >
                    💻
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -360] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute bottom-32 left-20 text-3xl opacity-20 hidden lg:block"
                >
                    ⚡
                </motion.div>
                <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-1/2 right-10 text-2xl opacity-10 hidden lg:block"
                >
                    🚀
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;