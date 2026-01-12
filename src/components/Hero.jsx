import React from 'react';
import { motion } from 'framer-motion';
import WaveDivider from './ui/WaveDivider';

const Hero = () => {
    return (
        <div id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-pink/20">
            {/* Background with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('Images/bann.jpg')"
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-cream/80 via-brand-cream/40 to-transparent"></div>
            </div>

            <div className="container relative z-10 px-6 mx-auto text-bottom md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="max-w-2xl"
                >
                    <motion.span
                        className="inline-block py-1 px-3 mb-4 text-sm font-bold tracking-[0.2em] text-brand-rose uppercase border border-brand-rose/30 rounded-full bg-white/50 backdrop-blur-sm"
                    >
                        New Collection 2026
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl font-serif font-medium text-brand-dark mb-6 leading-tight">
                        Elegance <br />
                        <span className="italic text-brand-rose">Reimagined.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed mix-blend-multiply">
                        Discover the finest selection of ethnic and modern wear, crafted for the woman who embodies grace and style.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-4 bg-brand-dark text-white font-medium tracking-wide shadow-xl overflow-hidden rounded-sm"
                    >
                        <span className="relative z-10">Shop The Collection</span>
                        <div className="absolute inset-0 h-full w-full bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
                    </motion.button>
                </motion.div>
            </div>

            {/* Decorative Elements */}



        </div>
    );
};

export default Hero;
