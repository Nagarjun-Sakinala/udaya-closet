import React from 'react';
import SectionWrapper from './ui/SectionWrapper';

const reviews = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Verified Buyer",
        text: "The quality of the silk saree I bought is absolutely stunning. It feels so premium and the delivery was super fast!",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Sarah Williams",
        role: "Fashion Blogger",
        text: "I am in love with their summer collection. The dresses are breathable and the fit is just perfect. Highly recommend!",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Ananya Gupta",
        role: "Regular Customer",
        text: "Udaya Closet never disappoints. The nightwear is so cozy and elegant. My go-to store for everything chic!",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
];

const Testimonials = () => {
    return (
        <div className="bg-brand-cream/50 relative">
            <SectionWrapper id="testimonials">
                <div className="text-center mb-16">
                    <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">Testimonials</span>
                    <h2 className="text-4xl font-serif text-brand-dark mt-2">Loved by Women Worldwide</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-brand-pink/10">
                            <div className="flex items-center space-x-4 mb-6">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-gold/30"
                                />
                                <div>
                                    <h4 className="font-serif font-bold text-brand-dark">{review.name}</h4>
                                    <span className="text-xs text-brand-rose">{review.role}</span>
                                </div>
                            </div>
                            <p className="text-gray-600 italic leading-relaxed">"{review.text}"</p>
                            <div className="flex text-brand-gold mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Testimonials;
