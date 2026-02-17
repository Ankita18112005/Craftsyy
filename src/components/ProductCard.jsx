import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { useToast } from '../hooks/useToast';

const ProductCard = ({ product }) => {
    const { id, name, price, image, isNew } = product;
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const { showToast } = useToast();
    const wishlisted = isInWishlist(id);

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
        showToast('Added to cart!');
    };

    const handleToggleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const added = toggleWishlist(product);
        showToast(added ? 'Added to wishlist!' : 'Removed from wishlist');
    };

    return (
        <div className="product-card glass" style={{
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            position: 'relative',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            background: 'rgba(255,255,255,0.8)',
            border: '1px solid rgba(255,255,255,0.6)',
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
        >
            {/* Badge */}
            {isNew && (
                <span className="animate-pulse-glow" style={{
                    position: 'absolute', top: 12, left: 12,
                    background: 'var(--color-accent)', padding: '6px 12px',
                    borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold',
                    color: '#5a7c5a', zIndex: 1, boxShadow: 'var(--shadow-sm)'
                }}>
                    New
                </span>
            )}

            {/* Wishlist Button */}
            <button
                onClick={handleToggleWishlist}
                style={{
                    position: 'absolute', top: 12, right: 12,
                    background: 'rgba(255,255,255,0.9)', borderRadius: '50%',
                    width: '36px', height: '36px', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    zIndex: 1, boxShadow: 'var(--shadow-sm)',
                    transition: 'transform 0.2s ease', border: 'none', cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                <Heart
                    size={18}
                    color="var(--color-love)"
                    fill={wishlisted ? 'var(--color-love)' : 'none'}
                    style={{ transition: 'all 0.3s ease' }}
                />
            </button>

            {/* Image */}
            <div style={{ height: '220px', overflow: 'hidden' }}>
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s ease' }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                ) : (
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, #fce4ec 0%, #f3e5f5 50%, #e8eaf6 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3.5rem',
                        opacity: 0.7
                    }}>

                    </div>
                )}
            </div>

            {/* Details */}
            <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: '600', color: 'var(--color-text)' }}>
                    <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>{name}</Link>
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary-dark)' }}>
                        ${price.toFixed(2)}
                    </span>
                    <Button variant="primary" onClick={handleAddToCart} style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                        Add <ShoppingBag size={14} style={{ marginLeft: 5 }} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
