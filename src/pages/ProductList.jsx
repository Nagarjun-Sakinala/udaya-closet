import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductModal from '../components/ui/ProductModal';
import { products } from '../data/products';
import SectionWrapper from '../components/ui/SectionWrapper';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

const ProductList = () => {
    const { categoryId } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Filter products based on URL parameter or show all if no category param
        // Note: In real app, you might fetch from API
        if (categoryId) {
            const formattedCategory = categoryId.toLowerCase().replace(' ', '-');
            // Simple matching logic
            const filtered = products.filter(p =>
                p.category === formattedCategory ||
                p.category.includes(formattedCategory)
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    }, [categoryId]);

    const title = categoryId
        ? categoryId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
        : 'All Products';

    return (
        <div className="pt-20 min-h-screen bg-brand-cream">
            <SectionWrapper>
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">{title}</h1>
                    <div className="w-24 h-1 bg-brand-gold mx-auto" />
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500">No products found in this category.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Hover Actions */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                                        <button
                                            onClick={() => setSelectedProduct(product)}
                                            className="p-3 bg-white text-brand-dark rounded-full shadow-lg hover:bg-brand-rose hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                                            title="Quick View"
                                        >
                                            <Eye size={20} />
                                        </button>
                                        <button className="p-3 bg-white text-brand-dark rounded-full shadow-lg hover:bg-brand-rose hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                                            <ShoppingCart size={20} />
                                        </button>
                                        <button className="p-3 bg-white text-brand-dark rounded-full shadow-lg hover:bg-brand-rose hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100">
                                            <Heart size={20} />
                                        </button>
                                    </div>
                                </div>

                                <div className="p-4 text-center">
                                    <h3 className="font-serif text-lg text-brand-dark mt-1 group-hover:text-brand-rose transition-colors truncate px-2">{product.name}</h3>
                                    <p className="font-bold text-brand-gold mt-2">{product.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </SectionWrapper>

            <ProductModal
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                product={selectedProduct}
            />
        </div>
    );
};

export default ProductList;
