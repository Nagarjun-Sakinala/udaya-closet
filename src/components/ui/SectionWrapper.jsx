import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, className = '', id = '' }) => {
    return (
        <section id={id} className={`relative py-16 md:py-24 overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container mx-auto px-4 md:px-8"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
