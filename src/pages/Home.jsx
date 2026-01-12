import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <main>
            <Hero />
            <Categories />
            <FeaturedProducts />
            <About />
            <Testimonials />
        </main>
    );
};

export default Home;
