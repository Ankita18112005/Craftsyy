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
    const searchQuery = searchParams.get('search') || '';
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

    const filteredProducts = products.filter(p => {
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        const matchesSearch = searchQuery === '' || p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div style={{
            backgroundImage: 'url("/images/new bg.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            flex: '1',
            position: 'relative'
        }}>

            <div className="container section" style={{ position: 'relative', zIndex: 1, paddingTop: '40px' }}>
                <div className="text-center" style={{ marginBottom: '50px' }}>
                    <h1 className="shop-title" style={{ marginBottom: '15px' }}>
                        {searchQuery ? `Search Results for "${searchQuery}"` : 'Shop Collections'}
                    </h1>
                    <p className="shop-subtitle" style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        {searchQuery
                            ? `Found ${filteredProducts.length} result${filteredProducts.length === 1 ? '' : 's'}`
                            : 'Browse our handmade treasures tailored for you'
                        }
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
                    gridTemplateColumns: 'repeat(auto-fill, 175px)',
                    gap: '16px',
                    justifyContent: 'center',
                    opacity: fadeIn ? 1 : 0,
                    transform: fadeIn ? 'translateY(0)' : 'translateY(15px)',
                    transition: 'opacity 0.4s ease, transform 0.4s ease'
                }}>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center" style={{ padding: '60px 20px', color: 'var(--color-text-light)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🔍</div>
                        <h3>No products found</h3>
                        <p>We couldn't find any products matching your {searchQuery ? 'search' : 'category'} criteria.</p>
                        <button
                            onClick={() => navigate('/shop')}
                            style={{
                                marginTop: '20px',
                                padding: '10px 25px',
                                borderRadius: 'var(--radius-full)',
                                background: 'var(--color-primary)',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            View All Products
                        </button>
                    </div>
                )}
            </div>

            <style>{`
                .shop-title { font-size: 3rem; }
                
                @media (max-width: 768px) {
                    .shop-title { font-size: 2.2rem !important; }
                    .shop-subtitle { font-size: 1rem !important; }
                    .filter-tabs { gap: 8px !important; }
                    .filter-btn { padding: 8px 14px !important; font-size: 0.85rem !important; }
                    .product-grid { 
                        grid-template-columns: repeat(auto-fill, 175px) !important; 
                        gap: 16px !important;
                        justify-content: center !important;
                    }
                }

                @media (max-width: 400px) {
                    .shop-title { font-size: 1.8rem !important; }
                    .product-grid { 
                        grid-template-columns: repeat(2, 1fr) !important; 
                        gap: 12px !important;
                        justify-content: center !important;
                    }
                    .filter-btn { padding: 7px 12px !important; font-size: 0.8rem !important; }
                }
            `}</style>
        </div>
    );
};

export default Shop;
