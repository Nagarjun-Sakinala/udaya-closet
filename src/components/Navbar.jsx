import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to check if link is active
    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Categories', path: '/#categories' }, // Hash link for homepage section
        { name: 'New Arrivals', path: '/products' },
        { name: 'About', path: '/#about' } // Hash link
    ];

    // Function to handle hash links if on homepage
    const handleNavClick = (e, path) => {
        if (path.startsWith('/#')) {
            // If we are not on home, regular navigation will handle it via Link to "/" + hash
            if (location.pathname !== '/') {
                return;
            }
            // If we are on home, we might need to scroll manually if regular hash behavior fails due to react router
            const elementId = path.substring(2);
            const element = document.getElementById(elementId);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'frosted-glass py-2 shadow-sm' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-brand-dark">
                        <img src='/Images/udaya.png' alt="Udaya's Closet" className="h-24" />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={(e) => handleNavClick(e, link.path)}
                                className={`text-brand-dark hover:text-brand-rose transition-colors duration-300 font-medium tracking-wide ${isActive(link.path) ? 'text-brand-rose' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-6">
                        <button className="text-brand-dark hover:text-brand-gold transition-colors">
                            <Search size={22} strokeWidth={1.5} />
                        </button>
                        <button className="relative text-brand-dark hover:text-brand-gold transition-colors">
                            <ShoppingBag size={22} strokeWidth={1.5} />
                            <span className="absolute -top-1 -right-1 bg-brand-rose text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                0
                            </span>
                        </button>
                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-brand-dark"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-white bg-opacity-95 backdrop-blur-md md:hidden flex flex-col items-center justify-center space-y-8"
                    >
                        <button
                            className="absolute top-6 right-6 text-brand-dark p-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={(e) => {
                                    handleNavClick(e, link.path);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="text-2xl font-serif text-brand-dark hover:text-brand-rose transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
