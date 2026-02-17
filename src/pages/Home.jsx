import HeroSection from '../components/HeroSection';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { products, categories } from '../assets/data';

const Home = () => {
    // Get featured products (first 4)
    const featuredProducts = products.slice(0, 4);

    return (
        <div style={{ backgroundColor: "var(--color-primary-light)" }}>
            <div className="home-page">
                <HeroSection />

                {/* Categories Section - Dramatic & High Impact */}
                <div style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>

                    {/* Dramatic Background Layer */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle at 50% 30%, #fffbe6 0%, #ffd6d6 40%, #ffb0b0 100%)',
                        zIndex: 0
                    }}></div>

                    {/* Noise Texture Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',

                        opacity: 0.15,
                        zIndex: 0,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        mixBlendMode: 'overlay'
                    }}></div>

                    {/* Vignette Overlay for Focus */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.12) 100%)',
                        zIndex: 0,
                        pointerEvents: 'none'

                    }}></div>
                    {/* Floating Stars & Bows */}
                    <div className="animate-float" style={{ position: 'absolute', top: '5%', left: '5%', fontSize: '2.5rem', opacity: 0.5, zIndex: 1, transform: 'rotate(-15deg)' }}>🎀</div>
                    <div className="animate-float delay-200" style={{ position: 'absolute', top: '10%', right: '8%', fontSize: '2rem', opacity: 0.5, zIndex: 1, transform: 'rotate(10deg)' }}>🎀</div>
                    <div className="animate-float delay-100" style={{ position: 'absolute', bottom: '18%', left: '10%', fontSize: '1.8rem', opacity: 0.45, zIndex: 1, transform: 'rotate(20deg)' }}>🎀</div>
                    <div className="animate-float delay-300" style={{ position: 'absolute', bottom: '25%', right: '5%', fontSize: '2.2rem', opacity: 0.5, zIndex: 1, transform: 'rotate(-8deg)' }}>🎀</div>
                    <div className="animate-float" style={{ position: 'absolute', top: '50%', left: '2%', fontSize: '2rem', opacity: 0.4, zIndex: 1, transform: 'rotate(12deg)' }}>🎀</div>
                    <div className="animate-float delay-200" style={{ position: 'absolute', top: '30%', right: '2%', fontSize: '1.5rem', opacity: 0.45, zIndex: 1, transform: 'rotate(-20deg)' }}>🎀</div>
                    <div className="animate-float delay-100" style={{ position: 'absolute', bottom: '8%', left: '40%', fontSize: '1.6rem', opacity: 0.4, zIndex: 1, transform: 'rotate(5deg)' }}>🎀</div>
                    <div className="animate-float delay-300" style={{ position: 'absolute', top: '15%', left: '30%', fontSize: '1.4rem', opacity: 0.35, zIndex: 1, transform: 'rotate(-10deg)' }}>🎀</div>
                    <div className="animate-float" style={{ position: 'absolute', top: '8%', right: '25%', fontSize: '1.8rem', opacity: 0.4, zIndex: 1, transform: 'rotate(18deg)' }}>🎀</div>
                    <div className="animate-float delay-100" style={{ position: 'absolute', bottom: '12%', right: '20%', fontSize: '2rem', opacity: 0.45, zIndex: 1, transform: 'rotate(-5deg)' }}>🎀</div>
                    <div className="animate-float delay-200" style={{ position: 'absolute', top: '60%', right: '15%', fontSize: '1.5rem', opacity: 0.35, zIndex: 1, transform: 'rotate(8deg)' }}>🎀</div>
                    <div className="animate-float delay-300" style={{ position: 'absolute', bottom: '5%', left: '15%', fontSize: '1.7rem', opacity: 0.4, zIndex: 1, transform: 'rotate(-12deg)' }}>🎀</div>
                    <div className="animate-float" style={{ position: 'absolute', top: '40%', left: '20%', fontSize: '1.3rem', opacity: 0.3, zIndex: 1, transform: 'rotate(15deg)' }}>🎀</div>

                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        <div className="text-center" style={{ marginBottom: '70px', position: 'relative' }}>
                            {/* Tiny Handwritten Note - White/Cream */}
                            <div className="category-note" style={{
                                position: 'absolute',
                                top: '-35px',
                                left: '50%',
                                transform: 'translateX(-50%) rotate(-5deg)',
                                fontFamily: 'var(--font-hand)',
                                fontSize: '1.8rem',
                                color: 'var(--color-primary)',
                                textShadow: '0 1px 2px rgba(255,255,255,0.5)'
                            }}>
                                Pick what you love
                            </div>

                            <h2 className="category-title" style={{ marginBottom: '10px', position: 'relative', display: 'inline-block', color: 'var(--color-primary)', textShadow: '0 2px 6px rgba(255,255,255,0.4)' }}>
                                Shop by{' '}
                                <span style={{ position: 'relative', display: 'inline-block' }}>
                                    <span style={{ position: 'relative', zIndex: 1 }}>Category</span>
                                    {/* Highlight - Cyan for contrast against vibrant red/orange */}
                                    <span style={{
                                        position: 'absolute',
                                        bottom: '8px',
                                        left: '-5px',
                                        width: '105%',
                                        height: '15px',
                                        background: '#4ECDC4', /* Turquoise/Cyan */
                                        opacity: 0.8,
                                        zIndex: 0,
                                        transform: 'rotate(-1deg)',
                                        borderRadius: '4px',
                                        mixBlendMode: 'hard-light'
                                    }}></span>
                                </span>{' '}
                                🎀
                            </h2>
                            <p className="category-subtitle" style={{ color: 'var(--color-primary)', marginTop: '15px', fontSize: '1.2rem', fontWeight: '500', opacity: 0.85 }}>Find the perfect handmade gift</p>
                        </div>

                        <div className="category-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                            gap: '30px',
                            padding: '10px 20px',
                            position: 'relative'
                        }}>
                            {categories.map(cat => (
                                <div key={cat.id} style={{
                                    transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.25))' /* Deep soft shadow */
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                                        e.currentTarget.style.filter = 'drop-shadow(0 30px 50px rgba(0,0,0,0.35))';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.filter = 'drop-shadow(0 20px 30px rgba(0,0,0,0.25))';
                                    }}
                                >
                                    <CategoryCard
                                        name={cat.name}
                                        icon={cat.icon}
                                        color={cat.color}
                                        rotate={cat.rotate}
                                        image={cat.image}
                                        to={`/shop?category=${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            {/* Featured Products */}
            <div style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <section className="section container" style={{ background: 'var(--color-primary-light)', borderRadius: 'var(--radius-lg)' }}>
                    <div className="text-center" style={{ marginBottom: '40px' }}>
                        <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '5px' }}>New Arrivals</h2>
                        <p style={{ color: 'var(--color-text-light)' }}>Fresh from the craft table</p>
                    </div>

                    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative' }}>
                        {/* Shadow Gradients for Fade Effect */}
                        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, #fff0f3, transparent)', zIndex: 2 }}></div>
                        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, #fff0f3, transparent)', zIndex: 2 }}></div>

                        <div className="animate-marquee" style={{ display: 'flex', gap: '40px', padding: '20px 0' }}>
                            {/* Original Set */}
                            {featuredProducts.map(product => (
                                <div key={product.id} style={{ minWidth: '280px' }}>
                                    <ProductCard product={product} />
                                </div>
                            ))}
                            {/* Duplicate Set for Infinite Loop */}
                            {featuredProducts.map(product => (
                                <div key={`${product.id}-dup`} style={{ minWidth: '280px' }}>
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center" style={{ marginTop: '40px' }}>
                        <a href="/shop" style={{ textDecoration: 'underline', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                            View All Products &rarr;
                        </a>
                    </div>
                </section>

                <Newsletter />
            </div>

            <style>{`
                .category-title { font-size: 3.5rem; }
                @media (max-width: 768px) {
                    div[style*="padding: 100px 0"] { padding: 60px 0 !important; }
                    .category-title { font-size: 2.2rem !important; }
                    .category-note { font-size: 1.4rem !important; top: -25px !important; }
                    .category-subtitle { font-size: 1rem !important; padding: 0 20px; }
                    .category-grid { grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)) !important; gap: 20px !important; padding: 10px !important; }
                    .section-title { font-size: 2rem !important; }
                    div[style*="width: 100px"] { width: 40px !important; }
                }
                @media (max-width: 480px) {
                    .category-title { font-size: 1.8rem !important; }
                    .category-grid { grid-template-columns: 1fr 1fr !important; }
                    .animate-marquee { gap: 20px !important; }
                    div[key*="id"] { min-width: 240px !important; }
                }
            `}</style>
        </div>
    );
};

export default Home;
