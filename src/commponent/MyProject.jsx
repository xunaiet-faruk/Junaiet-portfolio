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
import { RiNextjsFill } from 'react-icons/ri';

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
            title: "Parcel Management System",
            fullTitle: "Parcel Delivery & Tracking System (Next.js Application)",
            description: "An enterprise-grade courier logistics platform with real-time tracking, role-based access control, intelligent parcel assignment system, automated invoicing, and seamless end-to-end delivery management.",            fullPageImage: "/parcel.png",
            tech: ["Next.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "Firebase", "Framer Motion", "Stripe"],
            icons: [RiNextjsFill, SiMongodb, SiExpress, FaNodeJs, SiTailwindcss, SiFirebase],
            github: "https://github.com/xunaiet-faruk/Parcel-Tracking-System",
            live: "https://parcel-managment-web.vercel.app",
            features: [
                "Role-based access (Admin/Rider/User)",
                "Real-time parcel tracking with map",
                "Smart location-based assignment",
                "Automated invoice generation (PDF)",
                "Live analytics dashboard"
            ],
            fullFeatures: {
                landing: `🎯 LANDING PAGE – Modern Courier Platform Interface:
A professional logistics dashboard with live parcel tracking search bar, dynamic coverage map showing serviceable areas, pricing calculator based on weight & distance, customer testimonials carousel, real-time delivery stats counter, emergency booking CTA, FAQ section, and blog updates about courier services.`,

                auth: `🔐 AUTHENTICATION SYSTEM – Role-Based Access:
Three separate registration flows:
• USER: Name, email, phone, address, password
• RIDER: Above + driving license, bike number, NID, profile photo
• ADMIN: Created only by super admin via secret invite code
Login system uses JWT tokens stored in HTTP-only cookies. Password reset via email OTP. Google login available for users only.`,

                user: `👤 USER PANEL – Shipment Management Dashboard:

Email Feature: Users receive automatic email when parcel is created, picked up, out for delivery, and delivered. Also get invoice email with PDF attachment.

Main Features:
• Create new parcel (weight, dimensions, delivery address, express/normal)
• Real-time tracking on interactive map
• Edit/cancel parcel before "picked up" status
• Payment history with Stripe integration
• Download invoices as PDF anytime
• Rate rider after delivery
• Support ticket system for complaints

Challenges Faced:
• Implementing real-time location updates without draining API calls – solved by using WebSocket with 10-second intervals
• Invoice generation with dynamic tax calculation – used jsPDF with custom template engine
• Preventing duplicate payments – implemented idempotency keys in Stripe webhook`,

                rider: `🏍️ RIDER PANEL – Delivery Operation Dashboard:

Email Feature: Riders get email when new parcel assigned, when user cancels a parcel, daily earning summary at 9 PM, and admin payout notifications.

Main Features:
• View assigned parcels based on current location
• Accept/reject delivery requests (reject reason required)
• Update status: Picked → On Route → Reached → Delivered
• Navigate using integrated Google Maps
• Earnings tracker with per-delivery breakdown
• Weekly performance report
• Chat with admin for delivery issues

Challenges Faced:
• Location-based assignment matching – used Haversine formula to calculate distances between rider and pickup points
• Offline status sync – built IndexedDB queue to store status updates when network is poor
• Realtime race conditions when multiple riders accept same parcel – solved with Redis locks`,

                admin: `👨‍💼 ADMIN PANEL – Central Control Station:

Email Feature: Admin receives alerts for new rider registrations pending approval, user support tickets, daily revenue summary, low-balance users, and system error logs.

Main Features:
• Live analytics: total parcels, active riders, revenue chart, delivery success rate
• Rider onboarding: view documents, approve/reject, assign zones
• User management: block/unblock, view all parcels, reset password
• Smart delivery assignment (auto-match parcels to nearest available rider)
• Monitor all parcels with filter by status/city
• Generate and export monthly reports (CSV/PDF)
• Support ticket resolution system
• Payout management for riders

Challenges Faced:
• Auto-assignment algorithm – implemented a priority queue considering rider load, distance, and rating
• Real-time dashboard updates – used Server-Sent Events (SSE) instead of polling to reduce server load
• Bulk invoice export – streaming large datasets using Node.js streams to avoid memory overflow`
            },
            color: "#ff",
            icon: FaBriefcase
        },

        {
            id: 2,
            title: "Blood Donation Web",
            fullTitle: "Blood Donation Platform & Emergency Medical Network",
            description: "A community-focused healthcare platform engineered to bridge the gap between voluntary blood donors, medical volunteers, and patients seeking urgent blood transfusions.",
            image: "/blood.png",
            fullPageImage: "/blood.png",
            tech: ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "Firebase", "Framer Motion", "Axios"],
            icons: [SiReact, SiMongodb, SiExpress, FaNodeJs, SiTailwindcss, SiFirebase],
            github: "https://github.com/xunaiet-faruk/Blood-donation-client",
            live: "https://blood-donation-web-2b177.web.app",
            features: [
                "Advanced donor classification engine searchable by regional zone and blood grouping",
                "Interactive emergency broadcast banner pushing high-priority transfusion requests",
                "Automated validation system checking last donation timestamps to ensure health safety",
                "Comprehensive volunteer approval workflows for reviewing pending field logs",
                "Interactive central metrics visualizing global collection progress and current medical counts"
            ],
            fullFeatures: {
                landing: "Displays a highly informative public portal detailing real-time emergency requests, live tracking statistics of total blood bags collected, step-by-step documentation on donation eligibility, localized camp schedules, and an intuitive immediate request registration form.",
                auth: "Features individual secure onboarding profiles, role determination during structural signup, Google-driven quick integration, and JWT cryptographic verification for sensitive profile records.",
                user: "Allows registered blood donors to update their donation availability state (e.g., Available / Busy), draft explicit emergency blood requests with custom hospital locations, track active responses from volunteers, update personal health parameters, and view a complete legacy log of past donations.",
                rider: "Functions as a specialized Volunteer Workspace where certified monitors can intercept emergency public requests, verify patient hospital requests, update status to 'In Progress' during blood collection, cross-check regional donor locations, and communicate directly with hospital contacts.",
                admin: "An administrative control hub containing total system monitoring features, tools to assign or revoke volunteer roles, analytical performance charts reporting collection curves, master user blocking mechanisms, and administrative validation control for community-wide blog posts."
            },
            color: "#ef4444",
            icon: FaTint
        },
        {
            id: 3,
            title: "Restaurant Management System",
            fullTitle: "E-Commerce Culinary Platform & Point of Sales (POS) Engine",
            description: "An advanced hospitality operating system integrating commercial restaurant storefront interfaces with complex back-of-house tracking, table orders, and local financial settlement.",
            image: "/restourant.png",
            fullPageImage: "/restourant.png",
            tech: ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "SSL Commerz", "Chart.js", "Axios"],
            icons: [SiReact, SiMongodb, SiExpress, FaNodeJs, SiTailwindcss],
            github: "https://github.com/xunaiet-faruk/Restorant-project-client",
            live: "https://restorant-web.web.app",
            features: [
                "Complete item catalog management (CRUD) supporting multiple food variants and pagination",
                "Advanced custom checkout cart computing variable delivery fees, localized discounts, and VAT rules",
                "Full-stack payment integration supporting regional credit cards and mobile wallets via SSL Commerz",
                "Multi-chart operational analytics displaying item demand distribution and revenue metrics",
                "Real-time reactive order processing pipeline linking frontend requests to corporate kitchens"
            ],
            fullFeatures: {
                landing: "Presents a fully visual culinary showcase containing seasonal interactive promotional carousels, organized menu boards categorized by cuisine type, dynamic top-selling recommendations, localized branch maps, and customer rating reviews.",
                auth: "Maintains structured consumer authentication profiles, encrypted access handling via cookies, password restoration interfaces, and robust server-side structural checks separating customers from managers.",
                user: "Provides a responsive shopping dashboard allowing users to build up persistent food orders, track active chef preparations and courier tracking statuses, view complex financial receipts, leave star ratings on historical items, and browse personal item favorites.",
                rider: "Operates as a dedicated Kitchen/Delivery Terminal layout that displays active chef updates, maps delivery coordinates to specific user locations, provides tools to mark assignments as 'Out for Delivery' or 'Fulfilled', and compiles itemized checklists for packing agents.",
                admin: "A data-rich operations executive dashboard featuring 4 responsive charts calculating daily sales volumes, inventory control tables to add, edit, or delete dishes, structural order updates to transition items from 'Pending' to 'Preparing', and massive user profiling management tools."
            },
            color: "#f59e0b",
            icon: FaUtensils
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
                                                {project.icons.map((TechIcon, idx) => {
                                                    // Icon colors based on technology
                                                    let iconColor = "";
                                                    if (TechIcon === RiNextjsFill) iconColor = "#ffffff";
                                                    else if (TechIcon === SiMongodb) iconColor = "#47A248";
                                                    else if (TechIcon === SiExpress) iconColor = "#ffffff";
                                                    else if (TechIcon === FaNodeJs) iconColor = "#339933";
                                                    else if (TechIcon === SiTailwindcss) iconColor = "#06B6D4";
                                                    else if (TechIcon === SiFirebase) iconColor = "#FFCA28";
                                                    else if (TechIcon === SiReact) iconColor = "#61DAFB";

                                                    return (
                                                        <motion.div
                                                            key={idx}
                                                            whileHover={{ y: -5 }}
                                                            className="w-8 h-8 rounded-full bg-gray-900/80 backdrop-blur-sm flex items-center justify-center"
                                                        >
                                                            <TechIcon className="text-sm" style={{ color: iconColor }} />
                                                        </motion.div>
                                                    );
                                                })}
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