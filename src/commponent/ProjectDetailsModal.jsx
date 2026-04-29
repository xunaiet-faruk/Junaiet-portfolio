import { motion, AnimatePresence } from 'framer-motion';
import {
    FaTimes, FaGithub, FaExternalLinkAlt, FaStar, FaCode,
    FaBug, FaRocket, FaUsers, FaShieldAlt, FaChartLine,
    FaMoneyBillWave, FaDatabase, FaServer, FaLaptopCode,
    FaCheckCircle, FaExclamationTriangle, FaLightbulb,
    FaUserMd, FaHandsHelping, FaUserCog, FaGlobe
} from 'react-icons/fa';

const ProjectDetailsModal = ({ project, onClose }) => {
    if (!project) return null;

    const Icon = project.icon;

    // প্রজেক্টের চ্যালেঞ্জসমূহ
    const challenges = {
        1: [
            "Real-time blood request updates across multiple user roles with WebSocket implementation",
            "Role-based authentication and authorization system for Admin, Donor, and Volunteer",
            "Efficient donor search algorithm by blood group and location",
            "Real-time notification system for donation requests",
            "Data consistency across multiple user sessions"
        ],
        2: [
            "SSL Commerz payment gateway integration with proper error handling",
            "Complex tax calculation (VAT, Discount, Delivery fee)",
            "Real-time order tracking system",
            "Concurrent order updates from multiple users",
            "Payment verification and webhook integration"
        ],
        3: [
            "Bidding system with real-time price updates",
            "Job status and bid acceptance workflow management",
            "Efficient job search and filtering system",
            "Concurrent bid submissions handling",
        ]
    };

    // ভবিষ্যৎ পরিকল্পনা
    const futurePlans = {
        1: [
            "SMS notifications for urgent blood requests",
            "Location-based donor matching using Google Maps API",
            "Blood inventory management system for blood banks",
            "Mobile app version for easier access",
            "AI-powered donor matching algorithm"
        ],
        2: [
            "AI-based food recommendation system",
            "Loyalty points and rewards program",
            "Multi-restaurant support",
            "Mobile app for customers",
            "Chatbot for order assistance",
            "Real-time order tracking with Google Maps"
        ],
        3: [
            "AI-powered job matching algorithm",
            "Video interview integration",
            "Skill assessment tests",
            "Company review and rating system",
            "Resume parsing and ranking system",
            "Freelance escrow payment system"
        ]
    };

    const bloodDonationRoles = {
        donor: "Dashboard to create blood requests, track status, view donation history, profile management",
        volunteer: "Dashboard to view assigned requests, update status, communicate with donors, route guidance",
        admin: "Complete user management, role assignment, donation statistics charts, request monitoring",
        public: "Search donors by blood group, location, real-time request updates, emergency alerts"
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg overflow-y-auto"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 50 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="fixed top-4 right-4 text-white hover:text-purple-400 transition-colors z-20 bg-black/50 rounded-full p-2"
                    >
                        <FaTimes className="text-2xl" />
                    </button>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-center mb-8"
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 10, -10, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 shadow-2xl"
                        >
                            <Icon className="text-white text-3xl" />
                        </motion.div>

                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                            {project.fullTitle}
                        </h1>

                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>

                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            {project.description}
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* LEFT SIDE */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            {/* Key Features */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-purple-500/30"
                            >
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <motion.div
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 20, repeat: Infinity }}
                                    >
                                        <FaStar className="text-yellow-500" />
                                    </motion.div>
                                    Key Features
                                </h2>

                                <ul className="space-y-3">
                                    {project.features?.map((feature, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + idx * 0.05 }}
                                            className="flex items-start gap-2 text-gray-300"
                                        >
                                            <FaCheckCircle className="text-green-500 text-sm mt-0.5" />
                                            <span>{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>


                            {/* Technology Stack */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-purple-500/30"
                            >
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <FaCode className="text-blue-400" />
                                    Technology Stack
                                </h2>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-sm font-semibold text-purple-400 mb-2 flex items-center gap-1">
                                            <FaLaptopCode /> Frontend
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech?.filter(t => ['React.js', 'Tailwind CSS', 'Tailwind', 'Framer Motion', 'Axios'].includes(t)).map((tech, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    whileHover={{ scale: 1.1 }}
                                                    className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-pink-400 mb-2 flex items-center gap-1">
                                            <FaServer /> Backend
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech?.filter(t => ['Node.js', 'Express.js'].includes(t)).map((tech, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    whileHover={{ scale: 1.1 }}
                                                    className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-1">
                                            <FaDatabase /> Database
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech?.filter(t => ['MongoDB', 'Firebase'].includes(t)).map((tech, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    whileHover={{ scale: 1.1 }}
                                                    className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-yellow-400 mb-2 flex items-center gap-1">
                                            <FaRocket /> Tools & Others
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech?.filter(t => ['Axios', 'SSL Commerz', 'Chart.js', 'JWT'].includes(t)).map((tech, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    whileHover={{ scale: 1.1 }}
                                                    className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Challenges Faced */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-6 border border-red-500/30"
                            >
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <FaExclamationTriangle className="text-yellow-500" />
                                    Challenges Faced
                                </h2>
                                <ul className="space-y-3">
                                    {(challenges[project.id] || challenges[1]).map((challenge, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + idx * 0.05 }}
                                            className="flex items-start gap-2 text-gray-300"
                                        >
                                            <FaBug className="text-red-400 text-sm mt-0.5" />
                                            <span>{challenge}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT SIDE */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6"
                        >
                            {/* Complete Feature Breakdown */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-500/30"
                            >
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    📱 Complete Feature Breakdown
                                </h2>

                                <div className="space-y-4">
                                    <div className="border-b border-purple-500/30 pb-3">
                                        <h3 className="text-lg font-semibold text-purple-400 mb-2 flex items-center gap-2">
                                            <FaLaptopCode /> Landing Page
                                        </h3>
                                        <p className="text-gray-300 text-sm">{project.fullFeatures?.landing}</p>
                                    </div>
                                    <div className="border-b border-purple-500/30 pb-3">
                                        <h3 className="text-lg font-semibold text-pink-400 mb-2 flex items-center gap-2">
                                            <FaShieldAlt /> Authentication System
                                        </h3>
                                        <p className="text-gray-300 text-sm">{project.fullFeatures?.auth}</p>
                                    </div>

                                    {/* Blood Donation এর জন্য Role-based দেখানো হবে */}
                                    {project.id === 1 ? (
                                        <>
                                            <div className="border-b border-purple-500/30 pb-3">
                                                <h3 className="text-lg font-semibold text-blue-400 mb-2 flex items-center gap-2">
                                                    <FaUserMd /> Donor Dashboard
                                                </h3>
                                                <p className="text-gray-300 text-sm">{bloodDonationRoles.donor}</p>
                                            </div>
                                            <div className="border-b border-purple-500/30 pb-3">
                                                <h3 className="text-lg font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                                                    <FaHandsHelping /> Volunteer Dashboard
                                                </h3>
                                                <p className="text-gray-300 text-sm">{bloodDonationRoles.volunteer}</p>
                                            </div>
                                            <div className="border-b border-purple-500/30 pb-3">
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                                                    <FaUserCog /> Admin Panel
                                                </h3>
                                                <p className="text-gray-300 text-sm">{bloodDonationRoles.admin}</p>
                                            </div>
                                            <div className="pb-3">
                                                <h3 className="text-lg font-semibold text-green-400 mb-2 flex items-center gap-2">
                                                    <FaGlobe /> Public Features
                                                </h3>
                                                <p className="text-gray-300 text-sm">{bloodDonationRoles.public}</p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="border-b border-purple-500/30 pb-3">
                                                <h3 className="text-lg font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                                                    <FaUsers /> User Dashboard
                                                </h3>
                                                <p className="text-gray-300 text-sm">
                                                    {project.id === 2 ? project.fullFeatures?.user : project.fullFeatures?.jobSeeker}
                                                </p>
                                            </div>
                                            <div className="pb-3">
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                                                    <FaChartLine /> Admin Panel
                                                </h3>
                                                <p className="text-gray-300 text-sm">{project.fullFeatures?.admin}</p>
                                            </div>
                                        </>
                                    )}

                                    {project.id === 2 && (
                                        <div className="pb-3">
                                            <h3 className="text-lg font-semibold text-green-400 mb-2 flex items-center gap-2">
                                                <FaMoneyBillWave /> Payment Integration
                                            </h3>
                                            <p className="text-gray-300 text-sm">{project.fullFeatures?.payment}</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Future Improvements */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-green-900/20 to-teal-900/20 rounded-2xl p-6 border border-green-500/30"
                            >
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <FaLightbulb className="text-yellow-500" />
                                    Future Improvements & Plans
                                </h2>
                                <ul className="space-y-3">
                                    {(futurePlans[project.id] || futurePlans[1]).map((plan, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + idx * 0.05 }}
                                            className="flex items-start gap-2 text-gray-300"
                                        >
                                            <FaRocket className="text-green-400 text-sm mt-0.5" />
                                            <span>{plan}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Project Links */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30"
                            >
                                <h2 className="text-2xl font-bold text-white mb-4 text-center">🔗 Project Links</h2>

                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition-all"
                                    >
                                        <FaGithub /> GitHub Repository
                                    </motion.a>

                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white shadow-lg hover:shadow-xl transition-all"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </motion.a>
                                </div>
                            </motion.div>

                            {/* CTA */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-6 text-center border border-purple-500/30"
                            >
                                <p className="text-gray-300">
                                    🚀 Check out the live demo to see the complete project in action!
                                    The source code is available on GitHub for your reference.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectDetailsModal;