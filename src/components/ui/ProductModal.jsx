import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Heart } from 'lucide-react';

const ProductModal = ({ isOpen, onClose, product }) => {
    if (!isOpen || !product) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden relative flex flex-col md:flex-row"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-white/50 rounded-full hover:bg-white transition-colors text-brand-dark"
                    >
                        <X size={24} />
                    </button>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100 flex-shrink-0">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
                        <span className="text-sm font-bold tracking-widest text-brand-rose uppercase mb-2">
                            {product.category}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-4">
                            {product.name}
                        </h2>
                        <p className="text-2xl text-brand-gold font-medium mb-6">
                            {product.price}
                        </p>

                        <p className="text-gray-600 leading-relaxed mb-6 border-b border-gray-100 pb-6">
                            {product.description}
                        </p>

                        {product.details && (
                            <div className="mb-8">
                                <h4 className="font-bold text-brand-dark mb-3">Product Details</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-500 text-sm">
                                    {product.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="mt-auto flex space-x-4">
                            <button className="flex-1 bg-brand-dark text-white py-4 px-6 rounded-lg font-medium hover:bg-black transition-colors flex items-center justify-center space-x-2">
                                <ShoppingCart size={20} />
                                <span>Add to Cart</span>
                            </button>
                            <button className="p-4 border border-gray-200 rounded-lg hover:border-brand-rose hover:text-brand-rose transition-colors">
                                <Heart size={20} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProductModal;
