import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs
} from 'react-icons/fa';
import {
    SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiFirebase
} from 'react-icons/si';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const skills = [
        { name: 'HTML5', icon: FaHtml5, color: '#E44D26', level: 95 },
        { name: 'CSS3', icon: FaCss3Alt, color: '#264DE4', level: 90 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 92 },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 88 },
        { name: 'React.js', icon: FaReact, color: '#61DAFB', level: 90 },
        { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', level: 85 },
        { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 87 },
        { name: 'Express.js', icon: SiExpress, color: '#FFFFFF', level: 85 },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 86 },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', level: 88 },
    ];

    
    const jumpVariants = {
        hover: {
            y: [0, -20, -10, -5, 0],
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-2 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="skills" ref={ref}>
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block mb-4"
                    >
                        <div className="w-20 h-20 rounded-full backdrop-blur-3xl  bg-white/5 shadow-xl   flex items-center justify-center">
                            <span className="text-4xl">💪</span>
                        </div>
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                        My Skills & Expertise
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: index * 0.05 }}
                                variants={jumpVariants}
                                whileHover="hover"
                                whileTap={{ scale: 1.05 }}
                                className="relative group cursor-pointer"
                            >
                                {/* Main Card */}
                                <div
                                    className="relative bg-gray-800 rounded-2xl p-6 text-center transition-all duration-300 group-hover:shadow-2xl"
                                    style={{
                                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                        border: `1px solid transparent`,
                                        backgroundImage: `linear-gradient(#111827, #111827), linear-gradient(135deg, #8b5cf6, #ec4899, #06b6d4)`,
                                        backgroundOrigin: 'border-box',
                                        backgroundClip: 'padding-box, border-box',
                                    }}
                                >
                                    {/* 4 Corner Animations - Top Left */}
                                    <motion.div
                                        className="absolute top-0 left-0 w-8 h-8"
                                        animate={{
                                            borderTopColor: [skill.color, '#a855f7', '#ec4899', skill.color],
                                            borderLeftColor: [skill.color, '#a855f7', '#ec4899', skill.color],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        style={{
                                            borderTop: `3px solid ${skill.color}`,
                                            borderLeft: `3px solid ${skill.color}`,
                                            borderTopLeftRadius: '12px',
                                        }}
                                    />

                                    {/* 4 Corner Animations - Top Right */}
                                    <motion.div
                                        className="absolute top-0 right-0 w-8 h-8"
                                        animate={{
                                            borderTopColor: [skill.color, '#ec4899', '#a855f7', skill.color],
                                            borderRightColor: [skill.color, '#ec4899', '#a855f7', skill.color],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        style={{
                                            borderTop: `3px solid ${skill.color}`,
                                            borderRight: `3px solid ${skill.color}`,
                                            borderTopRightRadius: '12px',
                                        }}
                                    />

                                    {/* 4 Corner Animations - Bottom Left */}
                                    <motion.div
                                        className="absolute bottom-0 left-0 w-8 h-8"
                                        animate={{
                                            borderBottomColor: [skill.color, '#a855f7', '#ec4899', skill.color],
                                            borderLeftColor: [skill.color, '#a855f7', '#ec4899', skill.color],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.5
                                        }}
                                        style={{
                                            borderBottom: `3px solid ${skill.color}`,
                                            borderLeft: `3px solid ${skill.color}`,
                                            borderBottomLeftRadius: '12px',
                                        }}
                                    />

                                    {/* 4 Corner Animations - Bottom Right */}
                                    <motion.div
                                        className="absolute bottom-0 right-0 w-8 h-8"
                                        animate={{
                                            borderBottomColor: [skill.color, '#ec4899', '#a855f7', skill.color],
                                            borderRightColor: [skill.color, '#ec4899', '#a855f7', skill.color],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.5
                                        }}
                                        style={{
                                            borderBottom: `3px solid ${skill.color}`,
                                            borderRight: `3px solid ${skill.color}`,
                                            borderBottomRightRadius: '12px',
                                        }}
                                    />

                                    {/* Corner Glow Effect on Hover */}
                                    <motion.div
                                        className="absolute top-0 left-0 w-16 h-16 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        animate={{
                                            boxShadow: [
                                                `0 0 10px ${skill.color}`,
                                                `0 0 20px ${skill.color}`,
                                                `0 0 10px ${skill.color}`
                                            ]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        style={{
                                            background: `radial-gradient(circle at top left, ${skill.color}40 0%, transparent 70%)`,
                                        }}
                                    />

                                    <motion.div
                                        className="absolute top-0 right-0 w-16 h-16 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        animate={{
                                            boxShadow: [
                                                `0 0 10px ${skill.color}`,
                                                `0 0 20px ${skill.color}`,
                                                `0 0 10px ${skill.color}`
                                            ]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.2
                                        }}
                                        style={{
                                            background: `radial-gradient(circle at top right, ${skill.color}40 0%, transparent 70%)`,
                                        }}
                                    />

                                    <motion.div
                                        className="absolute bottom-0 left-0 w-16 h-16 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        animate={{
                                            boxShadow: [
                                                `0 0 10px ${skill.color}`,
                                                `0 0 20px ${skill.color}`,
                                                `0 0 10px ${skill.color}`
                                            ]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.4
                                        }}
                                        style={{
                                            background: `radial-gradient(circle at bottom left, ${skill.color}40 0%, transparent 70%)`,
                                        }}
                                    />

                                    <motion.div
                                        className="absolute bottom-0 right-0 w-16 h-16 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        animate={{
                                            boxShadow: [
                                                `0 0 10px ${skill.color}`,
                                                `0 0 20px ${skill.color}`,
                                                `0 0 10px ${skill.color}`
                                            ]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.6
                                        }}
                                        style={{
                                            background: `radial-gradient(circle at bottom right, ${skill.color}40 0%, transparent 70%)`,
                                        }}
                                    />

                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className="mb-4"
                                    >
                                        <div className="w-16 h-16 mx-auto rounded-full bg-gray-800 flex items-center justify-center">
                                            <Icon className="text-3xl" style={{ color: skill.color }} />
                                        </div>
                                    </motion.div>

                                    <h3 className="text-white font-bold mb-2">{skill.name}</h3>

                                    <div className="text-2xl font-bold" style={{ color: skill.color }}>
                                        {skill.level}%
                                    </div>

                                    {/* Radial progress */}
                                    <div className="relative w-20 h-20 mx-auto mt-3">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle
                                                cx="40"
                                                cy="40"
                                                r="35"
                                                stroke="#374151"
                                                strokeWidth="4"
                                                fill="none"
                                            />
                                            <motion.circle
                                                cx="40"
                                                cy="40"
                                                r="35"
                                                stroke={skill.color}
                                                strokeWidth="4"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeDasharray={219.9}
                                                initial={{ strokeDashoffset: 219.9 }}
                                                animate={isInView ? { strokeDashoffset: 219.9 - (219.9 * skill.level / 100) } : {}}
                                                transition={{ delay: index * 0.1, duration: 1.5 }}
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">{skill.level}%</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;