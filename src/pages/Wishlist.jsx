import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowLeft } from 'lucide-react';
import { useWishlist } from '../hooks/useWishlist';
import { useCart } from '../hooks/useCart';
import { useToast } from '../hooks/useToast';
import Button from '../components/Button';

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();
    const { showToast } = useToast();

    const handleMoveToCart = (item) => {
        addToCart(item);
        removeFromWishlist(item.id);
        showToast('Moved to cart!');
    };

    if (wishlistItems.length === 0) {
        return (
            <div className="container section text-center" style={{ padding: '80px 20px' }}>
                <div style={{ fontSize: '5rem', marginBottom: '20px' }}>🎀</div>
                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Your wishlist is empty</h2>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '30px' }}>
                    Save items you love by tapping the heart icon!
                </p>
                <Link to="/shop">
                    <Button variant="primary">Browse Products</Button>
                </Link>
            </div>
        );
    }

    return (
        <div style={{
            backgroundImage: 'url("/images/new bg.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '100vh'
        }}>
            <div className="container section">
                <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginBottom: '30px', color: 'var(--color-text-light)' }}>
                    <ArrowLeft size={16} /> Back to Shop
                </Link>

                <h1 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>
                    My Wishlist <Heart size={28} color="var(--color-love)" fill="var(--color-love)" style={{ verticalAlign: 'middle' }} />
                </h1>

                <div className="wishlist-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '30px'
                }}>
                    {wishlistItems.map(item => (
                        <div key={item.id} className="wishlist-item" style={{
                            background: 'rgba(255,255,255,0.9)',
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-sm)',
                            border: '1px solid rgba(255,255,255,0.6)',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = 'var(--shadow-hover)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
                        >
                            {/* Image */}
                            <Link to={`/product/${item.id}`}>
                                <div className="wishlist-item-image" style={{ height: '220px', overflow: 'hidden' }}>
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} style={{
                                            width: '100%', height: '100%', objectFit: 'cover',
                                            transition: 'transform 0.6s ease'
                                        }}
                                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                        />
                                    ) : (
                                        <div style={{
                                            width: '100%', height: '100%',
                                            background: 'linear-gradient(135deg, #fce4ec 0%, #f3e5f5 50%, #e8eaf6 100%)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem'
                                        }}>🎀</div>
                                    )}
                                </div>
                            </Link>

                            {/* Details */}
                            <div className="wishlist-item-details" style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: '600' }}>{item.name}</h3>
                                <p style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '15px' }}>
                                    ${item.price.toFixed(2)}
                                </p>

                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <Button variant="primary" onClick={() => handleMoveToCart(item)} style={{ flex: 1, padding: '10px', fontSize: '0.9rem' }}>
                                        Move to Cart <ShoppingBag size={14} style={{ marginLeft: 5 }} />
                                    </Button>
                                    <button
                                        onClick={() => { removeFromWishlist(item.id); showToast('Removed from wishlist'); }}
                                        style={{
                                            width: '42px', height: '42px', borderRadius: '50%',
                                            border: '2px solid var(--color-secondary)', background: 'white',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            cursor: 'pointer', transition: 'all 0.2s ease', flexShrink: 0
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = '#ffe0e0'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.transform = 'scale(1)'; }}
                                    >
                                        <Trash2 size={16} color="var(--color-primary)" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    h1 { font-size: 2rem !important; }
                    .wishlist-grid { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important; gap: 20px !important; }
                    .wishlist-item-image { height: 180px !important; }
                    .wishlist-item-details { padding: 15px !important; }
                }
                @media (max-width: 480px) {
                    .wishlist-grid { grid-template-columns: 1fr 1fr !important; gap: 15px !important; }
                    .wishlist-item-image { height: 150px !important; }
                    .wishlist-item-details h3 { font-size: 0.9rem !important; margin-bottom: 5px !important; }
                    .wishlist-item-details p { font-size: 1rem !important; margin-bottom: 10px !important; }
                    .wishlist-item-details button { padding: 5px !important; font-size: 0.8rem !important; }
                    .wishlist-item-details button svg { width: 12px !important; height: 12px !important; }
                    div[style*="width: 42px"] { width: 32px !important; height: 32px !important; }
                }
            `}</style>
        </div>
    );
};

export default Wishlist;
