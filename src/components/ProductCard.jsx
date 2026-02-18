import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { useToast } from '../hooks/useToast';

const ProductCard = ({ product, style }) => {
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
            width: '175px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            position: 'relative',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            ...style
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
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
                    position: 'absolute', top: 10, left: 10,
                    background: 'var(--color-accent)', padding: '4px 10px',
                    borderRadius: '20px', fontSize: '0.65rem', fontWeight: 'bold',
                    color: '#5a7c5a', zIndex: 1, boxShadow: 'var(--shadow-sm)'
                }}>
                    New
                </span>
            )}

            {/* Wishlist Button */}
            <button
                onClick={handleToggleWishlist}
                style={{
                    position: 'absolute', top: 10, right: 10,
                    background: 'rgba(255,255,255,0.9)', borderRadius: '50%',
                    width: '32px', height: '32px', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    zIndex: 1, boxShadow: 'var(--shadow-sm)',
                    transition: 'transform 0.2s ease', border: 'none', cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                <Heart
                    size={16}
                    color="var(--color-love)"
                    fill={wishlisted ? 'var(--color-love)' : 'none'}
                    style={{ transition: 'all 0.3s ease' }}
                />
            </button>

            {/* Image */}
            <div className="product-card-image" style={{ aspectRatio: '4/3', width: '100%', overflow: 'hidden' }}>
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
                        fontSize: '2.5rem',
                        opacity: 0.7
                    }}>

                    </div>
                )}
            </div>

            {/* Details */}
            <div className="product-card-details" style={{ padding: '12px' }}>
                <h3 className="product-card-name" style={{
                    fontSize: '0.95rem',
                    marginBottom: '4px',
                    fontWeight: '600',
                    color: 'var(--color-text)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{name}</Link>
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', gap: '8px' }}>
                    <span className="product-card-price" style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-primary-dark)' }}>
                        ${price.toFixed(2)}
                    </span>
                    <Button variant="primary" onClick={handleAddToCart} style={{ padding: '6px 10px', fontSize: '0.75rem' }}>
                        Add <ShoppingBag size={12} style={{ marginLeft: 3 }} />
                    </Button>
                </div>
            </div>

            <style>{`
                @media (max-width: 400px) {
                    .product-card { width: 100% !important; }
                    .product-card-image { height: 120px !important; }
                    .product-card-details { padding: 8px !important; }
                    .product-card-name { font-size: 0.85rem !important; }
                    .product-card-price { font-size: 0.9rem !important; }
                }
            `}</style>
        </div>
    );
};

export default ProductCard;
