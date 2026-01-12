import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white pt-20 pb-10 relative overflow-hidden">
            {/* Top Wave */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-0">
                <svg className="relative block w-[calc(100%+1.3px)] h-[50px] fill-brand-cream" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-6 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div>
                        <a href="#" className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-brand-dark">
                            <img src='/Images/logo.png' alt="Udaya's Closet" className="h-28" />
                        </a>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Redefining luxury fashion for the modern woman. Elegance in every stitch, grace in every detail.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-gold transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-gold transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-gold transition-colors"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="pl-0 lg:pl-8">
                        <h4 className="font-serif text-xl mb-6 text-brand-pink">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
                            <li><a href="#categories" className="hover:text-brand-gold transition-colors">Shop Categories</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-serif text-xl mb-6 text-brand-pink">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start space-x-3">
                                <MapPin className="mt-1 flex-shrink-0 text-brand-gold" size={18} />
                                <span>LB Nagar,Hyderabad</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="flex-shrink-0 text-brand-gold" size={18} />
                                <span>6305043156</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="flex-shrink-0 text-brand-gold" size={18} />
                                <span>udayacloset@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-serif text-xl mb-6 text-brand-pink">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Subscribe to get special offers, free giveaways, and updates.</p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-white/5 border border-white/10 py-3 px-4 rounded focus:outline-none focus:border-brand-gold text-white"
                            />
                            <button className="bg-brand-gold text-brand-dark py-3 px-4 rounded font-bold hover:bg-white transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Udaya Closet. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
