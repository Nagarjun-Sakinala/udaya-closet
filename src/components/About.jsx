import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { Award, Leaf, Truck } from 'lucide-react';

const users = [
    {
        name: "Quality Fabrics",
        icon: <Award className="w-6 h-6 text-brand-gold" />,
        desc: "Handpicked materials for comfort."
    },
    {
        name: "Sustainable",
        icon: <Leaf className="w-6 h-6 text-brand-gold" />,
        desc: "Eco-friendly fashion choices."
    },
    {
        name: "Fast Shipping",
        icon: <Truck className="w-6 h-6 text-brand-gold" />,
        desc: "Delivery across the globe."
    }
]

const About = () => {
    return (
        <div className="bg-white">
            <SectionWrapper id="about">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative order-2 md:order-1">
                        <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src="/Images/about.jpg"
                                alt="Fashion Story"
                                className="w-full h-100 object-cover"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute top-10 -left-10 w-full h-full border-2 border-brand-gold rounded-lg -z-0 hidden md:block"></div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h4 className="text-brand-rose font-bold tracking-widest uppercase mb-2">Our Story</h4>
                            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">
                                Weaving Dreams <br /> Into Reality
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                At Udaya Closet, we believe that fashion is an expression of individuality.
                                Founded in 2026, our mission has been to bring high-quality, elegant, and
                                affordable fashion to women globally. From traditional roots to modern silhouettes,
                                we celebrate every facet of womanhood.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                                {users.map((feature, idx) => (
                                    <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left p-4 bg-brand-cream rounded-lg hover:shadow-md transition-shadow">
                                        <div className="mb-3 p-2 bg-white rounded-full shadow-sm">{feature.icon}</div>
                                        <h5 className="font-serif font-bold text-brand-dark mb-1">{feature.name}</h5>
                                        <p className="text-xs text-gray-500">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    </div>

                </div>
            </SectionWrapper>
        </div>
    );
};

export default About;
