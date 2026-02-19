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
                <div style={{ fontSize: '5rem', marginBottom: '20px' }}></div>
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
            width: '100%',
            backgroundImage: 'url("/images/new bg.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            flex: '1'
        }}>
            <div className="container section">
                <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginBottom: '30px', color: 'var(--color-text-light)' }}>
                    <ArrowLeft size={16} /> Back to Shop
                </Link>

                <h1 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>
                    My Wishlist <Heart size={28} color="var(--color-love)" fill="var(--color-love)" style={{ verticalAlign: 'middle' }} />
                </h1>

                <div className="wishlist-grid">
                    {wishlistItems.map(item => (
                        <div key={item.id} className="wishlist-item">
                            {/* Image */}
                            <Link to={`/product/${item.id}`}>
                                <div className="wishlist-item-image">
                                    {item.image ? (
                                        <img src={item.image} alt={item.name}
                                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                        />
                                    ) : (
                                        <div className="wishlist-item-placeholder"></div>
                                    )}
                                </div>
                            </Link>

                            {/* Details */}
                            <div className="wishlist-item-details">
                                <h3>{item.name}</h3>
                                <p className="wishlist-item-price">
                                    ${item.price.toFixed(2)}
                                </p>

                                <div className="wishlist-item-actions">
                                    <Button variant="primary" onClick={() => handleMoveToCart(item)} style={{ flex: 1, padding: '10px', fontSize: '0.9rem' }}>
                                        Move to Cart <ShoppingBag size={14} style={{ marginLeft: 5 }} />
                                    </Button>
                                    <button
                                        className="wishlist-remove-btn"
                                        onClick={() => { removeFromWishlist(item.id); showToast('Removed from wishlist'); }}
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
                /* Wishlist Grid - compact layout, 4 per row */
                .wishlist-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                    justify-content: center;
                }

                .wishlist-item {
                    width: 100%;
                    background: rgba(255,255,255,0.95);
                    border-radius: var(--radius-md);
                    overflow: hidden;
                    box-shadow: var(--shadow-sm);
                    border: 1px solid rgba(255,255,255,0.8);
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .wishlist-item:hover {
                    transform: translateY(-8px);
                    box-shadow: var(--shadow-hover);
                }

                .wishlist-item-image {
                    height: 175px;
                    overflow: hidden;
                }
                .wishlist-item-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    transition: transform 0.6s ease;
                }
                .wishlist-item-placeholder {
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #fce4ec 0%, #f3e5f5 50%, #e8eaf6 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .wishlist-item-details {
                    padding: 12px;
                }
                .wishlist-item-details h3 {
                    font-size: 0.95rem;
                    margin-bottom: 4px;
                    font-weight: 600;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .wishlist-item-price {
                    font-weight: 700;
                    font-size: 1rem;
                    color: var(--color-primary-dark);
                    margin-bottom: 12px;
                }
                .wishlist-item-actions {
                    display: flex;
                    gap: 8px;
                }
                .wishlist-remove-btn {
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    border: 1.5px solid var(--color-secondary);
                    background: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    flex-shrink: 0;
                }

                /* Responsive Adjustments */
                @media (max-width: 1024px) {
                    .wishlist-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .wishlist-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 16px;
                    }
                }

                @media (max-width: 480px) {
                    .wishlist-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 12px;
                    }
                    .wishlist-item-image { height: 140px; }
                }
            `}</style>
        </div>
    );
};

export default Wishlist;
