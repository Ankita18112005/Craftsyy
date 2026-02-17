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
                    <h1 style={{ fontSize: '3rem', marginBottom: '15px' }}>Shop Collections</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        Browse our handmade treasures tailored for you
                    </p>
                </div>

                {/* Filter Tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginBottom: '40px' }}>
                    <button
                        onClick={() => handleCategoryChange('All')}
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
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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
        </div>
    );
};

export default Shop;
