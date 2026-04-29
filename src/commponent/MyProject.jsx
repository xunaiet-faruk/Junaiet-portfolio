import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    FaGithub, FaExternalLinkAlt, FaHeart,
    FaStar, FaCode, FaMobile, FaServer,
    FaUsers, FaShoppingCart, FaBriefcase,
    FaTint, FaUtensils, FaUserCheck, FaChartLine
} from 'react-icons/fa';
import {
    SiMongodb, SiExpress, SiReact, 
    SiTailwindcss, SiFirebase, SiJsonwebtokens
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
const MyProject = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const projects = [
        {
            id: 1,
            title: "Blood Donation Web",
            fullTitle: "Blood Donation Web (Full Stack Website)",
            description: "A full-stack blood donation platform with role-based access, real-time request management, and donor search.",
            image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
            tech: ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "Firebase", "Framer Motion"],
            icons: [SiReact, SiMongodb, SiExpress, FaNodeJs, SiTailwindcss, SiFirebase],
            github: "https://github.com/yourusername/blood-donation",
            live: "https://blood-donation-demo.netlify.app",
            features: [
                "Role-based Authorization (Admin, Donor, Volunteer)",
                "Donor Features: Create, Update, track donation requests",
                "Volunteer Features: View & manage donation requests",
                "Admin Features: Manage users, assign roles, monitor statistics",
                "Public Features: Searchable donor directory, real-time updates"
            ],
            color: "#ef4444",
            icon: FaTint
        },
        {
            id: 2,
            title: "Restaurant Management System",
            fullTitle: "Restaurant Management System (Full Stack Website)",
            description: "A restaurant management system with admin analytics, order and user management, and secure payment integration.",
            image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
            tech: ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind", "SSL Commerz", "Chart.js"],
            icons: [SiReact, SiMongodb, SiExpress, FaNodeJs, SiTailwindcss],
            github: "https://github.com/yourusername/restaurant-management",
            live: "https://restaurant-management-demo.netlify.app",
            features: [
                "Admin Features: Analytics dashboard with 4 charts",
                "Food CRUD with pagination, order status management",
                "User Features: Dashboard with order metrics",
                "Payment with SSL Commerz (Subtotal, Delivery, Discount, Vat)",
                "Payment History & profile management"
            ],
            color: "#f59e0b",
            icon: FaUtensils
        },
        {
            id: 3,
            title: "Job Portal Platform",
            fullTitle: "Job Portal Platform (MERN Stack Website)",
            description: "A job portal platform with authentication, job posting, and a bidding system for managing freelance work.",
            image: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=600",
            tech: ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "Firebase", "Framer Motion"],
            icons: [SiReact, SiMongodb, SiExpress, FaNodeJs, SiTailwindcss, SiFirebase],
            github: "https://github.com/yourusername/job-portal",
            live: "https://job-portal-demo.netlify.app",
            features: [
                "Job Management: Add, update, delete jobs with category selection",
                "Bidding System: Place bids with custom price and deadline",
                "Employer can accept/reject bids",
                "My Posted Jobs: Manage job posts with update/delete",
                "My Bids: Track bid status (pending, in progress, complete, rejected)",
                "Bid Request: Accept/reject bids with status tracking"
            ],
            color: "#06b6d4",
            icon: FaBriefcase
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 100, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
            }
        }
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="projects" ref={ref}>
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
                </div>

                {/* Grid Pattern */}
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
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
                            <motion.span
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 10, repeat: Infinity }}
                                className="text-3xl"
                            >
                                💼
                            </motion.span>
                        </div>
                    </motion.div>

                    <motion.h2
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                        style={{ backgroundSize: "200% auto" }}
                    >
                        My Projects
                    </motion.h2>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100px" } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"
                    ></motion.div>

                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Here are some of my featured projects that showcase my skills and expertise
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <motion.div
                                key={project.id}
                                variants={cardVariants}
                                whileHover={{ y: -15 }}
                                className="relative group"
                            >
                                {/* Card Glow Effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    style={{ background: `radial-gradient(circle, ${project.color}40 0%, transparent 80%)` }}
                                />

                                {/* Main Card */}
                                <div className="relative bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 h-full">

                                    {/* Image Section */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

                                        {/* Tech Icons Floating */}
                                        <div className="absolute bottom-3 left-3 flex gap-1">
                                            {project.icons.slice(0, 3).map((TechIcon, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    whileHover={{ y: -5 }}
                                                    className="w-8 h-8 rounded-full bg-gray-900/80 backdrop-blur-sm flex items-center justify-center"
                                                >
                                                    <TechIcon className="text-sm" style={{ color: project.color }} />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6">
                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                            <Icon className="text-lg" style={{ color: project.color }} />
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Features List */}
                                        <div className="mb-4">
                                            <h4 className="text-xs font-semibold text-gray-300 mb-2">Key Features:</h4>
                                            <ul className="space-y-1">
                                                {project.features.slice(0, 3).map((feature, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        whileHover={{ x: 5 }}
                                                        className="text-xs text-gray-400 flex items-start gap-1"
                                                    >
                                                        <span className="text-purple-400">•</span>
                                                        {feature}
                                                    </motion.li>
                                                ))}
                                                {project.features.length > 3 && (
                                                    <li className="text-xs text-purple-400">+ {project.features.length - 3} more features...</li>
                                                )}
                                            </ul>
                                        </div>

                                        {/* Tech Stack Tags */}
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {project.tech.map((tech, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex gap-3">
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 rounded-lg text-white text-sm font-semibold hover:bg-gray-600 transition-all"
                                            >
                                                <FaGithub /> GitHub
                                            </motion.a>
                                            <motion.a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
                                                style={{ boxShadow: `0 0 15px ${project.color}40` }}
                                            >
                                                <FaExternalLinkAlt /> Live Demo
                                            </motion.a>
                                        </div>
                                    </div>

                                    {/* Hover Border Animation */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl pointer-events-none"
                                        animate={{
                                            border: [`2px solid ${project.color}00`, `2px solid ${project.color}80`, `2px solid ${project.color}00`]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        style={{ borderRadius: '1rem' }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg text-white font-semibold border border-purple-500/30 hover:border-purple-500 transition-all"
                    >
                        <FaGithub /> View More Projects on GitHub
                    </motion.a>
                </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-32 right-10 text-2xl opacity-20 hidden lg:block"
            >
                💻
            </motion.div>
            <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -360] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-40 left-10 text-2xl opacity-20 hidden lg:block"
            >
                🚀
            </motion.div>
        </section>
    );
};

export default MyProject;