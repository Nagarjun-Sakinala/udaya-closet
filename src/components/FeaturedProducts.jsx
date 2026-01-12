import React, { useState } from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { products } from '../data/products';
import ProductModal from './ui/ProductModal';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onQuickView }) => {
    const { name, price, image, isFeatured } = product;

    return (
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
            {isFeatured && (
                <span className="absolute top-4 left-4 z-20 bg-brand-rose text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    New
                </span>
            )}

            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button
                        onClick={() => onQuickView(product)}
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
                <span className="text-xs text-gray-500 uppercase tracking-widest">Women's Wear</span>
                <h3 className="font-serif text-lg text-brand-dark mt-1 group-hover:text-brand-rose transition-colors">{name}</h3>
                <p className="font-bold text-brand-gold mt-2">{price}</p>
            </div>
        </div>
    );
};

const FeaturedProducts = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Show only featured items or first 4 items
    const displayProducts = products.filter(p => p.isFeatured).slice(0, 4);

    return (
        <div className="bg-brand-cream relative">
            {/* Decorative Background Blob */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-pink/20 rounded-full blur-3xl"></div>
            </div>

            <SectionWrapper id="new-arrivals">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="text-left">
                        <h2 className="text-4xl font-serif text-brand-dark">New Arrivals</h2>
                        <div className="w-16 h-1 bg-brand-gold mt-2" />
                    </div>
                    <Link to="/products" className="hidden md:block text-brand-rose hover:text-brand-dark font-medium transition-colors border-b border-brand-rose hover:border-brand-dark pb-1 mt-4 md:mt-0">
                        View All Products
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {displayProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onQuickView={setSelectedProduct}
                        />
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link to="/products" className="text-brand-rose font-medium border-b border-brand-rose pb-1">View All Products</Link>
                </div>
            </SectionWrapper>

            <ProductModal
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                product={selectedProduct}
            />
        </div>
    );
};

export default FeaturedProducts;
