import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionWrapper from './ui/SectionWrapper';

const categories = [
    {
        id: 1,
        title: 'Modern Dresses',
        slug: 'dresses',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop',
        subtitle: 'Chic & Contemporary'
    },
    {
        id: 2,
        title: 'Ethnic Sarees',
        slug: 'sarees',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop',
        subtitle: 'Timeless Grace'
    },
    {
        id: 3,
        title: 'Night Wear',
        slug: 'night-wear',
        image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=1000&auto=format&fit=crop',
        subtitle: 'Comfort Redefined'
    },
];

const CategoryCard = ({ title, image, subtitle, slug, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-[400px] overflow-hidden rounded-lg shadow-lg cursor-pointer"
        >
            <Link to={`/category/${slug}`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-4">
                    <h3 className="text-3xl font-serif text-center mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {title}
                    </h3>
                    <p className="text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        {subtitle}
                    </p>
                    <span className="mt-6 px-6 py-2 border border-white text-white hover:bg-white hover:text-brand-dark transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 delay-200">
                        Explore
                    </span>
                </div>
            </Link>
        </motion.div>
    );
};

const Categories = () => {
    return (
        <div className="bg-white">
            <SectionWrapper id="categories">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-brand-dark mb-4">Curated Collections</h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mb-4" />
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Explore our thoughtfully designed categories, from casual elegance to evening glamour.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <CategoryCard key={cat.id} {...cat} index={index} />
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Categories;
