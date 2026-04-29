import { useState, useEffect } from 'react';
import { FaHome, FaUserAlt, FaProjectDiagram, FaCode, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineLightbulb } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { id: 'home', label: 'Home', icon: FaHome, href: '#home' },
        { id: 'about', label: 'About', icon: FaUserAlt, href: '#about' },
        { id: 'projects', label: 'Projects', icon: FaProjectDiagram, href: '#projects' },
        { id: 'skills', label: 'Skills', icon: FaCode, href: '#skills' },
        { id: 'contact', label: 'Contact', icon: FaEnvelope, href: '#contact' },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Update active link based on scroll position
            const sections = navLinks.map(link => ({
                id: link.id,
                element: document.getElementById(link.id)
            }));

            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                if (section.element) {
                    const offsetTop = section.element.offsetTop;
                    const offsetBottom = offsetTop + section.element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveLink(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (id, href) => {
        setActiveLink(id);
        setIsOpen(false);

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Animation variants
    const navVariants = {
        hidden: { y: -100 },
        visible: {
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.1
            }
        }
    };

    const logoVariants = {
        hover: {
            scale: 1.05,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.5 }
        },
        tap: { scale: 0.95 }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }),
        hover: {
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 }
        },
        tap: { scale: 0.95 }
    };

    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                when: "afterChildren"
            }
        },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.4,
                when: "beforeChildren",
                staggerChildren: 0.05
            }
        }
    };

    const mobileLinkVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        },
        tap: { scale: 0.98 }
    };

    const activeIndicatorVariants = {
        initial: { scaleX: 0, opacity: 0 },
        animate: {
            scaleX: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 500, damping: 30 }
        },
        exit: { scaleX: 0, opacity: 0 }
    };

    return (
        <>
            <motion.nav
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">

                        {/* Logo Section */}
                        <motion.a
                            href="#home"
                            className="group flex items-center space-x-2 cursor-pointer relative"
                            onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick('home', '#home');
                            }}
                            variants={logoVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <div className="relative">
                                <MdOutlineLightbulb className="w-7 h-7 md:w-9 md:h-9 text-purple-400" />
                                <motion.div
                                    className="absolute inset-0 blur-xl bg-purple-400/40 rounded-full"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 0.2, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </div>
                            <motion.span
                                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{ backgroundSize: "200% auto" }}
                            >
                                Junaiet
                            </motion.span>
                        </motion.a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
                            {navLinks.map((link, index) => {
                                const Icon = link.icon;
                                const isActive = activeLink === link.id;

                                return (
                                    <motion.a
                                        key={link.id}
                                        href={link.href}
                                        custom={index}
                                        variants={linkVariants}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover="hover"
                                        whileTap="tap"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLinkClick(link.id, link.href);
                                        }}
                                        className={`relative px-4 py-2 text-sm lg:text-xl font-medium transition-all duration-300 rounded-lg flex items-center gap-2 overflow-hidden
                      ${isActive
                                                ? 'text-purple-400'
                                                : 'text-gray-300 hover:text-purple-300'
                                            }`}
                                    >
                                        <Icon className={`text-sm lg:text-xl transition-all duration-300 ${isActive ? 'text-purple-400' : 'text-gray-400 group-hover:text-purple-300'
                                            }`} />
                                        <span>{link.label}</span>

                                        {/* Background hover effect */}
                                        <motion.div
                                            className={`absolute inset-0 rounded-lg -z-10 ${isActive ? 'bg-purple-500/20' : 'bg-purple-500/0'
                                                }`}
                                            whileHover={{ backgroundColor: "rgba(168, 85, 247, 0.1)" }}
                                            transition={{ duration: 0.2 }}
                                        />

                                        {/* Active link border */}
                                        {isActive && (
                                            <motion.span
                                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                                                variants={activeIndicatorVariants}
                                                initial="initial"
                                                animate="animate"
                                                exit="exit"
                                            />
                                        )}
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Mobile menu button */}
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-gray-300 hover:text-purple-400 focus:outline-none p-2 rounded-lg bg-purple-500/10 backdrop-blur-sm"
                            aria-label="Toggle menu"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaTimes className="h-5 w-5" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaBars className="h-5 w-5" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="md:hidden overflow-hidden bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-t border-purple-500/30"
                        >
                            <div className="px-4 pt-2 pb-4 space-y-2">
                                {navLinks.map((link) => {
                                    const Icon = link.icon;
                                    const isActive = activeLink === link.id;

                                    return (
                                        <motion.a
                                            key={link.id}
                                            href={link.href}
                                            variants={mobileLinkVariants}
                                            whileTap="tap"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleLinkClick(link.id, link.href);
                                            }}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
                        ${isActive
                                                    ? 'text-purple-400 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-l-4 border-purple-400'
                                                    : 'text-gray-300 hover:text-purple-300 hover:bg-purple-500/10'
                                                }`}
                                        >
                                            <motion.div
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <Icon className="text-lg" />
                                            </motion.div>
                                            <span className="font-medium">{link.label}</span>

                                            {isActive && (
                                                <motion.div
                                                    className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-400"
                                                    animate={{ scale: [1, 1.5, 1] }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                />
                                            )}
                                        </motion.a>
                                    );
                                })}

                                {/* Social links in mobile menu */}
                                <motion.div
                                    variants={mobileLinkVariants}
                                    className="pt-4 mt-2 border-t border-purple-500/20"
                                >
                                    <p className="text-xs text-gray-500 text-center">Connect with me</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Scroll progress indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 z-50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: scrolled ? 1 : 0 }}
                transition={{ duration: 0.1 }}
                style={{ transformOrigin: "0%" }}
            />
        </>
    );
};

export default Navbar;