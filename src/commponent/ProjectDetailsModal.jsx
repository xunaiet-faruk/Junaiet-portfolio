import { motion, AnimatePresence } from 'framer-motion';
import {
    FaTimes, FaGithub, FaExternalLinkAlt, FaStar, FaCode,
    FaBug, FaRocket, FaUsers, FaShieldAlt, FaChartLine,
    FaMoneyBillWave, FaDatabase, FaServer, FaLaptopCode,
    FaCheckCircle, FaExclamationTriangle, FaLightbulb,
    FaUserCog, FaBox, FaTruck, FaMapMarkerAlt, FaPrint
} from 'react-icons/fa';

const ProjectDetailsModal = ({ project, onClose }) => {
    if (!project) return null;

    const Icon = project.icon;

    // ==================== PARCEL MANAGEMENT SYSTEM (ID: 1) ====================

    const parcelUserFeatures = `👤 USER PANEL – Complete Parcel Control:

📦 PARCEL MANAGEMENT:
• Create new parcel (weight, dimensions, delivery address)
• Update parcel details before pickup
• Cancel parcel before "picked up" status
• View all created parcels with status

📍 REAL-TIME TRACKING:
• Live parcel location tracking
• Current status: Pending → Picked → In Transit → Delivered
• Complete delivery history log

💰 PAYMENT SYSTEM:
• Secure Stripe payment integration
• Complete payment history
• Delivery insights dashboard with charts
• View transaction details

🎫 SUPPORT SYSTEM:
• Create support requests
• Track support ticket status
• Communicate with admin

🗺️ COVERAGE & BRANCH LOCATOR:
• Interactive map showing all branches
• Search branches by city or area
• View branch details (address, contact)
• Find nearest branch easily
`;

    const parcelRiderFeatures = `🏍️ RIDER PANEL – Delivery Operations:

📬 TASK MANAGEMENT:
• View parcels assigned based on current location
• Accept or reject delivery requests
• See pending tasks list

🔄 DELIVERY WORKFLOW:
• Update status: Picked → In Transit → Delivered
• Complete delivery history
• Delivery timeline tracking

💰 EARNINGS TRACKING:
• Earnings dashboard
• Per-delivery earnings breakdown
• Performance statistics
• Weekly delivery count

💬 COMMUNICATION:
• Chat with admin support
• Report delivery issues

🗺️ FEATURES:
• Navigate using integrated map
• View customer pickup/delivery addresses

⚠️ CHALLENGES FACED:
• Location-based assignment matching – Haversine formula for distance calculation
• Offline status updates – IndexedDB queue for network failure
• Race condition prevention – Redis locks for multiple riders accepting same parcel`;

    const parcelAdminFeatures = `👨‍💼 ADMIN PANEL – Complete System Control:

📊 LIVE ANALYTICS DASHBOARD:
• Total parcels overview
• Active riders count
• Total users count
• Revenue tracking
• Delivery status chart (Pending/Picked/In Transit/Delivered)
• Success rate percentage

🚴 RIDER MANAGEMENT:
• Rider onboarding approval system with verification
• View rider documents (license, NID, bike number)
• Approve or reject rider applications
• Assign working zones to riders
• Rider performance analytics

👤 USER MANAGEMENT:
• View all users with pagination
• Update user roles (User/Rider/Admin)
• Block or unblock users
• Reset user passwords
• View user's all parcels

📦 PARCEL CONTROL:
• Monitor all parcels in system
• Filter parcels by status, city, date
• Cancel any parcel if needed
• Smart delivery assignment based on location matching
• Auto-match parcels to nearest available rider

🧾 INVOICE SYSTEM:
• Generate invoice for any parcel
• Print invoice feature
• Filter invoices by: Last 7 days / Last 30 days / Individual user
• Export invoices as PDF
• Download or print directly

🎫 SUPPORT TICKET SYSTEM:
• View all support tickets
• Resolve customer complaints
• Reply to users

📈 REPORTS:
• Generate monthly reports (CSV/PDF)
• View revenue reports by date range
• Rider performance comparison

🗺️ BRANCH MANAGEMENT:
• Add/update branch locations
• Manage coverage areas
• Update branch contact info

⚠️ CHALLENGES FACED:
• Real-time dashboard updates – Server-Sent Events (SSE) instead of polling
• Bulk invoice export – Node.js streams to avoid memory overflow
• Smart location matching – Geocoding API integration`;

    const parcelKeyFeatures = `🔑 KEY HIGHLIGHTS:

📦 Real-time parcel tracking system
🧭 Smart delivery assignment based on location
📊 Analytics-driven admin dashboard
👥 Multi-role access system (Admin / Rider / User)
🧾 Automated invoice generation
🗺️ Branch & coverage map system
💳 Secure payment with Stripe
🖨️ Invoice print (7 days / 30 days / Individual user)
📍 Interactive branch locator map
🔄 End-to-end delivery workflow
💬 Support & communication system`;

    // ==================== BLOOD DONATION (ID: 2) ====================

    const bloodDonorFeatures = `👤 DONOR PANEL:
• Create blood donation requests
• Track request status
• View donation history
• Update profile
• Set availability (Available/Busy)
• View emergency requests nearby`;

    const bloodVolunteerFeatures = `🏍️ VOLUNTEER PANEL:
• View assigned emergency requests
• Accept or reject requests
• Update status (Accepted → In Progress → Completed)
• Communicate with donors
• Route guidance`;

    const bloodAdminFeatures = `👨‍💼 ADMIN PANEL:
• User management (donors & volunteers)
• Role assignment (approve volunteers)
• Donation statistics charts
• Request monitoring
• Emergency broadcast system
• Blog post management`;

    // ==================== RESTAURANT (ID: 3) ====================

    const restaurantUserFeatures = `👤 CUSTOMER PANEL:
• Browse menu by category
• Add to cart with quantity
• Checkout with delivery/pickup
• Apply discount coupons
• SSL Commerz payment
• Real-time order tracking
• Order history
• Rate food items`;

    const restaurantRiderFeatures = `🛵 RIDER/DELIVERY PANEL:
• View pending pickups
• Accept/reject delivery tasks
• Navigate to restaurant & customer
• Update order status
• Earnings tracker
• Delivery history`;

    const restaurantAdminFeatures = `👨‍💼 ADMIN PANEL:
• Live sales dashboard with charts
• Menu management (add/edit/delete items)
• Inventory tracking
• Order management
• User management
• Discount coupon generator
• Sales reports export (PDF/Excel)`;

    // ==================== RENDER FUNCTION ====================

    const renderRoleFeatures = () => {
        if (project.id === 1) {
            return (
                <>
                    <div className="border-b border-purple-500/30 pb-4 mb-3">
                        <h3 className="text-lg font-semibold text-blue-400 mb-2 flex items-center gap-2">
                            <FaUsers /> 👤 User Panel
                        </h3>
                        <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">{parcelUserFeatures}</p>
                    </div>
                    <div className="border-b border-purple-500/30 pb-4 mb-3">
                        <h3 className="text-lg font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                            <FaTruck /> 🏍️ Rider Panel
                        </h3>
                        <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">{parcelRiderFeatures}</p>
                    </div>
                    <div className="border-b border-purple-500/30 pb-4 mb-3">
                        <h3 className="text-lg font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                            <FaUserCog /> 👨‍💼 Admin Panel
                        </h3>
                        <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">{parcelAdminFeatures}</p>
                    </div>
                    <div className="pb-2">
                        <h3 className="text-lg font-semibold text-green-400 mb-2 flex items-center gap-2">
                            <FaStar /> ⭐ Key Highlights
                        </h3>
                        <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">{parcelKeyFeatures}</p>
                    </div>
                </>
            );
        }
        else if (project.id === 2) {
            return (
                <>
                    <div className="border-b border-purple-500/30 pb-4 mb-3">
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">👤 Donor Panel</h3>
                        <p className="text-gray-300 text-sm whitespace-pre-line">{bloodDonorFeatures}</p>
                    </div>
                    <div className="border-b border-purple-500/30 pb-4 mb-3">
                        <h3 className="text-lg font-semibold text-cyan-400 mb-2">🏍️ Volunteer Panel</h3>
                        <p className="text-gray-300 text-sm whitespace-pre-line">{bloodVolunteerFeatures}</p>
                    </div>
                    <div className="pb-2">
                        <h3 className="text-lg font-semibold text-yellow-400 mb-2">👨‍💼 Admin Panel</h3>
                        <p className="text-gray-300 text-sm whitespace-pre-line">{bloodAdminFeatures}</p>
                    </div>
                </>
            );
        }
        else {
            return (
                <>
                    <div className="border-b border-purple-500/30 pb-4 mb-3">
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">👤 Customer Panel</h3>
                        <p className="text-gray-300 text-sm whitespace-pre-line">{restaurantUserFeatures}</p>
                    </div>
                    <div className="border-b border-purple-500/30 pb-4 mb-3">
                        <h3 className="text-lg font-semibold text-cyan-400 mb-2">🛵 Rider Panel</h3>
                        <p className="text-gray-300 text-sm whitespace-pre-line">{restaurantRiderFeatures}</p>
                    </div>
                    <div className="pb-2">
                        <h3 className="text-lg font-semibold text-yellow-400 mb-2">👨‍💼 Admin Panel</h3>
                        <p className="text-gray-300 text-sm whitespace-pre-line">{restaurantAdminFeatures}</p>
                    </div>
                </>
            );
        }
    };

    const challenges = {
        1: [
            "Smart location-based delivery assignment matching riders to pickup points – used Haversine formula for distance calculation",
            "Race condition when multiple riders accept same parcel – fixed with Redis distributed locks",
            "Bulk invoice export causing memory overflow – implemented Node.js streaming",
            "Real-time dashboard updates without constant polling – used Server-Sent Events (SSE)",
            "Deployment issues causing 2 days of delays due to configuration and environment mismatches – later resolved successfully after debugging and optimization"
        ],
        2: [
            "Real-time blood request updates across multiple user roles with WebSocket",
            "Role-based authentication for Admin, Donor, and Volunteer",
            "Efficient donor search by blood group and location",
            "Real-time notification system for donation requests",
            "Data consistency across multiple user sessions"
        ],
        3: [
            "SSL Commerz payment gateway integration with proper error handling",
            "Complex tax calculation (VAT, Discount, Delivery fee)",
            "Real-time order tracking system",
            "Concurrent order updates from multiple users",
            "Payment verification and webhook integration"
        ]
    };

    const futurePlans = {
        1: [
            "Email & SMS notifications for parcel status updates (Planning)",
            "Mobile app for riders with offline map support",
            "AI-powered route optimization for riders",
            "Automated proof of delivery with photo capture",
            "Integration with multiple courier partners",
            "Push notifications for users"
        ],
        2: [
            "SMS notifications for urgent blood requests",
            "Location-based donor matching using Google Maps API",
            "Blood inventory management system",
            "Mobile app version",
            "AI-powered donor matching algorithm"
        ],
        3: [
            "AI-based food recommendation system",
            "Loyalty points and rewards program",
            "Multi-restaurant support",
            "Mobile app for customers",
            "Chatbot for order assistance"
        ]
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
                        className="fixed top-4 right-4 text-white hover:text-purple-400 transition-colors z-20 bg-black/50 rounded-full p-4"
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

                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>

                        <p className="text-gray-400 max-w-2xl mx-auto">
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
                                            <FaCheckCircle className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
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
                                        <h3 className="text-sm font-semibold text-purple-400 mb-2">🖥️ Frontend</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Next.js</span>
                                            <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Tailwind CSS</span>
                                            <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Framer Motion</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-pink-400 mb-2">⚙️ Backend</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Node.js</span>
                                            <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Express.js</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-green-400 mb-2">🗄️ Database</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">MongoDB</span>
                                            <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Firebase</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-yellow-400 mb-2">🔐 Authentication</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">JWT</span>
                                            <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Firebase Auth</span>
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
                                            className="flex items-start gap-2 text-gray-300 text-sm"
                                        >
                                            <FaBug className="text-red-400 text-sm mt-0.5 flex-shrink-0" />
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
                                    <div className="border-b border-purple-500/30 pb-4">
                                        <h3 className="text-lg font-semibold text-purple-400 mb-2 flex items-center gap-2">
                                            <FaLaptopCode /> 🌐 Landing Page
                                        </h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">{project.fullFeatures?.landing}</p>
                                    </div>
                                    <div className="border-b border-purple-500/30 pb-4">
                                        <h3 className="text-lg font-semibold text-pink-400 mb-2 flex items-center gap-2">
                                            <FaShieldAlt /> 🔐 Authentication System
                                        </h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">{project.fullFeatures?.auth}</p>
                                    </div>

                                    {renderRoleFeatures()}
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
                                            className="flex items-start gap-2 text-gray-300 text-sm"
                                        >
                                            <FaRocket className="text-green-400 text-sm mt-0.5 flex-shrink-0" />
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
                                    🚀 Check out the live demo to see the complete project in action!<br />
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