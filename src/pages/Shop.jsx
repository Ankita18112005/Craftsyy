import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../assets/data';

const categorySlugMap = {
    'crochet': 'Crochet',
    'clay-art': 'Clay Art',
    'jewelry': 'Jewelry',
    'gifts': 'Gifts'
};

const categoryToSlug = (name) => name.toLowerCase().replace(/\s+/g, '-');

const Shop = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const categorySlug = searchParams.get('category');
    const categoryFromUrl = categorySlug ? categorySlugMap[categorySlug] || 'All' : 'All';

    const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
    const [fadeIn, setFadeIn] = useState(true);

    // Sync state when URL changes
    useEffect(() => {
        setSelectedCategory(categoryFromUrl);
    }, [categoryFromUrl]);

    // Fade-in animation on category change
    useEffect(() => {
        setFadeIn(false);
        const timer = setTimeout(() => setFadeIn(true), 50);
        return () => clearTimeout(timer);
    }, [selectedCategory]);

    const handleCategoryChange = (catName) => {
        if (catName === 'All') {
            navigate('/shop');
        } else {
            navigate(`/shop?category=${categoryToSlug(catName)}`);
        }
        setSelectedCategory(catName);
    };

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div style={{
            backgroundImage: 'url("/images/new bg.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            position: 'relative'
        }}>

            <div className="container section" style={{ position: 'relative', zIndex: 1, paddingTop: '40px' }}>
                <div className="text-center" style={{ marginBottom: '50px' }}>
                    <h1 className="shop-title" style={{ marginBottom: '15px' }}>Shop Collections</h1>
                    <p className="shop-subtitle" style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        Browse our handmade treasures tailored for you
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="filter-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginBottom: '40px' }}>
                    <button
                        onClick={() => handleCategoryChange('All')}
                        className="filter-btn"
                        style={{
                            padding: '10px 20px',
                            borderRadius: 'var(--radius-full)',
                            background: selectedCategory === 'All' ? 'var(--color-primary)' : 'white',
                            color: selectedCategory === 'All' ? 'white' : 'var(--color-text)',
                            border: '1px solid var(--color-secondary)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        All
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => handleCategoryChange(cat.name)}
                            className="filter-btn"
                            style={{
                                padding: '10px 20px',
                                borderRadius: 'var(--radius-full)',
                                background: selectedCategory === cat.name ? 'var(--color-primary)' : 'white',
                                color: selectedCategory === cat.name ? 'white' : 'var(--color-text)',
                                border: '1px solid var(--color-secondary)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {cat.name} {cat.icon}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="product-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px',
                    opacity: fadeIn ? 1 : 0,
                    transform: fadeIn ? 'translateY(0)' : 'translateY(15px)',
                    transition: 'opacity 0.4s ease, transform 0.4s ease'
                }}>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center" style={{ padding: '40px', color: 'var(--color-text-light)' }}>
                        No products found in this category
                    </div>
                )}
            </div>

            <style>{`
                .shop-title { font-size: 3rem; }
                @media (max-width: 768px) {
                    .shop-title { font-size: 2.2rem !important; }
                    .shop-subtitle { font-size: 1rem !important; }
                    .filter-tabs { gap: 10px !important; }
                    .filter-btn { padding: 8px 16px !important; fontSize: 0.9rem !important; }
                    .product-grid { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important; gap: 20px !important; }
                }
                @media (max-width: 480px) {
                    .product-grid { grid-template-columns: 1fr !important; }
                    .shop-title { font-size: 1.8rem !important; }
                }
            `}</style>
        </div>
    );
};

export default Shop;
