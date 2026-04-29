import  { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    FaGithub, FaExternalLinkAlt, FaStar,
    FaTint, FaUtensils, FaBriefcase, 
} from 'react-icons/fa';
import {
    SiMongodb, SiExpress, SiReact,
    SiTailwindcss, SiFirebase
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import ProjectDetailsModal from './ProjectDetailsModal';

const MyProject = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });
    const [selectedProject, setSelectedProject] = useState(null);
    const [scrollPosition, setScrollPosition] = useState({});
    const scrollIntervals = useRef({});
    const [imageHeights, setImageHeights] = useState({});

    const projects = [
        {
            id: 1,
            title: "Blood Donation Web",
            fullTitle: "Blood Donation Web (Full Stack Website)",
            description: "A full-stack blood donation platform with role-based access, real-time request management, and donor search.",
            image: "/blood.png",
            fullPageImage: "/blood.png",
            tech: ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "Firebase", "Framer Motion","Axios"],
            icons: [SiReact, SiMongodb, SiExpress, FaNodeJs, SiTailwindcss, SiFirebase],
            github: "https://github.com/xunaiet-faruk/Blood-donation-client",
            live: "https://blood-donation-web-2b177.web.app",
            features: [
                "Role-based Authorization (Admin, Donor, Volunteer)",
                "Donor Features: Create, Update, track donation requests",
                "Volunteer Features: View & manage donation requests",
                "Admin Features: Manage users, assign roles, monitor statistics",
                "Public Features: Searchable donor directory, real-time updates"
            ],
            fullFeatures: {
                landing: "Hero section with blood donation statistics, emergency contact banner, how it works guide, donor registration CTA",
                auth: "Email/Password login, Google Sign-in, role selection (Admin/Donor/Volunteer)",
                donor: "Dashboard to create blood requests, track status, view donation history, profile management",
                volunteer: "Dashboard to view assigned requests, update status, communicate with donors, route guidance",
                admin: "Complete user management, role assignment, donation statistics charts, request monitoring",
                public: "Search donors by blood group, location, real-time request updates, emergency alerts"
            },
            color: "#ef4444",
            icon: FaTint
        },
        {
            id: 2,
            title: "Restaurant Management System",
            fullTitle: "Restaurant Management System (Full Stack Website)",
            description: "A restaurant management system with admin analytics, order and user management, and secure payment integration.",
            image: "/restourant.png",
            fullPageImage: "/restourant.png",
            tech: ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind", "SSL Commerz", "Chart.js", "Axios"],
            icons: [SiReact, SiMongodb, SiExpress, FaNodeJs, SiTailwindcss],
            github: "https://github.com/xunaiet-faruk/Restorant-project-client",
            live: "https://restorant-web.web.app",
            features: [
                "Admin Features: Analytics dashboard with 4 charts",
                "Food CRUD with pagination, order status management",
                "User Features: Dashboard with order metrics",
                "Payment with SSL Commerz (Subtotal, Delivery, Discount, Vat)",
                "Payment History & profile management"
            ],
            fullFeatures: {
                landing: "Hero banner with restaurant specials, popular food items, customer testimonials, restaurant location",
                auth: "User/Admin login, registration with email, password reset, role-based access",
                user: "Order food, cart management, track orders in real-time, payment history, favorites",
                admin: "Analytics dashboard with 4 charts, manage food items (CRUD), manage orders, user management",
                payment: "SSL Commerz integration, tax calculation (VAT, Discount, Delivery fee), invoice generation"
            },
            color: "#f59e0b",
            icon: FaUtensils
        },
        {
            id: 3,
            title: "Job Portal Platform",
            fullTitle: "Job Portal Platform (MERN Stack Website)",
            description: "A job portal platform with authentication, job posting, and a bidding system for managing freelance  work with aweome ui.",
            image: "/job.png",
            fullPageImage: "/job.png",
            tech: ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "Firebase", "Framer Motion","Axios"],
            icons: [SiReact, SiMongodb, SiExpress, FaNodeJs, SiTailwindcss, SiFirebase],
            github: "https://github.com/xunaiet-faruk/jobs-portal-web-client",
            live: "https://job-portal-aa5bd.web.app",
            features: [
                "Job Management: Add, update, delete jobs with category selection",
                "Bidding System: Place bids with custom price and deadline",
                "Employer can accept/reject bids",
                "My Posted Jobs: Manage job posts with update/delete",
                "My Bids: Track bid status (pending, in progress, complete, rejected)",
                "Bid Request: Accept/reject bids with status tracking"
            ],
            fullFeatures: {
                landing: "Job search bar, featured jobs, categories, company highlights, statistics counter",
                auth: "Job seeker/Employer registration, profile setup, email verification, password reset",
                employer: "Post jobs with categories, manage applications, accept/reject bids, hiring analytics",
                jobSeeker: "Browse jobs by category, place bids with custom price/deadline, track applications, portfolio",
                bidding: "Real-time bidding system, status tracking (pending, in progress, complete, rejected), notifications"
            },
            color: "#06b6d4",
            icon: FaBriefcase
        }
    ];

   
    const handleImageLoad = (projectId, e) => {
        const img = e.target;
        const naturalHeight = img.naturalHeight;
        const containerHeight = img.clientHeight;
        const scrollableHeight = ((naturalHeight - containerHeight) / naturalHeight) * 100;
        setImageHeights(prev => ({ ...prev, [projectId]: scrollableHeight }));
    };

    // স্ক্রলিং শুরু করা
    const startScrolling = (projectId) => {
        if (scrollIntervals.current[projectId]) {
            clearInterval(scrollIntervals.current[projectId]);
        }

        const maxScroll = imageHeights[projectId] || 70; // ইমেজের উচ্চতা অনুযায়ী স্ক্রল লিমিট

        let position = 0;
        scrollIntervals.current[projectId] = setInterval(() => {
            position += 1.2;
            if (position >= maxScroll) {
                position = maxScroll;
            }
            setScrollPosition(prev => ({ ...prev, [projectId]: position }));
        }, 20);
    };

    // স্ক্রলিং বন্ধ করা
    const stopScrolling = (projectId) => {
        if (scrollIntervals.current[projectId]) {
            clearInterval(scrollIntervals.current[projectId]);
            delete scrollIntervals.current[projectId];
        }

        let currentPos = scrollPosition[projectId] || 0;
        if (currentPos === 0) return;

        const step = currentPos / 12;
        let newPos = currentPos;

        const resetInterval = setInterval(() => {
            newPos -= step;
            if (newPos <= 0) {
                newPos = 0;
                clearInterval(resetInterval);
            }
            setScrollPosition(prev => ({ ...prev, [projectId]: newPos }));
        }, 16);
    };

    useEffect(() => {
        return () => {
            Object.values(scrollIntervals.current).forEach(interval => clearInterval(interval));
        };
    }, []);

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
        <>
            <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="projects" ref={ref}>
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
                    </div>
                    <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: `radial-gradient(circle, #a855f7 2px, transparent 2px)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto">
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

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project) => {
                            const Icon = project.icon;
                            const currentScroll = scrollPosition[project.id] || 0;
                            const maxScrollPercent = imageHeights[project.id] || 70;

                            return (
                                <motion.div
                                    key={project.id}
                                    variants={cardVariants}
                                    whileHover={{ y: -15 }}
                                    className="relative group"
                                >
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        style={{ background: `radial-gradient(circle, ${project.color}40 0%, transparent 80%)` }}
                                    />

                                    <div className="relative bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 h-full">

                                        {/* Image Section - বর্ধিত উচ্চতা সহ */}
                                        <motion.div
                                            className="relative h-60 overflow-hidden cursor-pointer"
                                            onMouseEnter={() => startScrolling(project.id)}
                                            onMouseLeave={() => stopScrolling(project.id)}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            {/* ছবি ধারক */}
                                            <div className="absolute inset-0 w-full">
                                                <img
                                                    src={project.fullPageImage}
                                                    alt={project.title}
                                                    className="w-full"
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        transform: `translateY(-${currentScroll}%)`,
                                                        transition: currentScroll === 0 ? 'transform 0.4s ease-out' : 'none'
                                                    }}
                                                    onLoad={(e) => handleImageLoad(project.id, e)}
                                                />
                                            </div>

                                           

                                            {/* স্ক্রল প্রগ্রেস ইন্ডিকেটর */}
                                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="relative w-1 h-20 bg-gray-600 rounded-full">
                                                    <motion.div
                                                        className="absolute bottom-0 w-full bg-purple-500 rounded-full"
                                                        style={{
                                                            height: `${(currentScroll / maxScrollPercent) * 100}%`,
                                                            transition: 'height 0.1s linear'
                                                        }}
                                                    />
                                                </div>
                                            </div>

                    

                                            {/* Tech Icons Floating */}
                                            <div className="absolute bottom-3 left-3 flex gap-1 z-10">
                                                {project.icons.slice(0, 3).map((TechIcon, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        whileHover={{ y: -5 }}
                                                        className="w-8 h-8 rounded-full bg-gray-900/80 backdrop-blur-sm flex items-center justify-center"
                                                    >
                                                        <TechIcon className="text-sm" style={{ color: project.color }} />
                                                    </motion.div>

                                                ))}
                                                <motion.div
                                                    whileHover={{ y: -5 }}
                                                    className="w-8 h-8 rounded-full bg-gray-900/80 backdrop-blur-sm flex items-center justify-center"
                                                >
                                                    <SiFirebase className="text-sm text-yellow-500" />
                                                </motion.div>
                                                <motion.div
                                                    whileHover={{ y: -5 }}
                                                    className="w-8 h-8 rounded-full bg-gray-900/80 backdrop-blur-sm flex items-center justify-center"
                                                >
                                                    <FaNodeJs className="text-sm text-green-500" />
                                                </motion.div>
                                                <motion.div
                                                    whileHover={{ y: -5 }}
                                                    className="w-8 h-8 rounded-full bg-gray-900/80 backdrop-blur-sm flex items-center justify-center"
                                                >
                                                    <SiMongodb className="text-sm text-green-400" />
                                                </motion.div>
                                            </div>
                                        </motion.div>

                                        {/* Content Section */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                                <Icon className="text-lg" style={{ color: project.color }} />
                                                {project.title}
                                            </h3>

                                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-5">
                                                {project.tech.slice(0, 4).map((tech, idx) => (
                                                    <motion.span
                                                        key={idx}
                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                        className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                                {project.tech.length > 4 && (
                                                    <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
                                                        +{project.tech.length - 4}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex flex-col gap-2">
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

                                                <motion.button
                                                    onClick={() => setSelectedProject(project)}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="w-full cursor-pointer flex items-center justify-center gap-2 px-4 py-2 bg-gray-700/50 rounded-lg text-purple-400 text-sm font-semibold hover:bg-gray-700 transition-all border border-purple-500/30"
                                                >
                                                    <FaStar /> View All Features & Details
                                                </motion.button>
                                            </div>
                                        </div>

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
                </div>
            </section>

            <ProjectDetailsModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
};

export default MyProject;