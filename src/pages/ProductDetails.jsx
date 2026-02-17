import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Heart } from 'lucide-react';
import { products } from '../assets/data';
import Button from '../components/Button';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { useToast } from '../hooks/useToast';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const { showToast } = useToast();

    if (!product) {
        return <div className="container section text-center">Product not found</div>;
    }

    const wishlisted = isInWishlist(product.id);

    const handleAddToCart = () => {
        addToCart(product);
        showToast('Added to cart!');
    };

    const handleToggleWishlist = () => {
        const added = toggleWishlist(product);
        showToast(added ? 'Added to wishlist!' : 'Removed from wishlist');
    };

    return (
        <div className="container section">
            <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginBottom: '30px', color: 'var(--color-text-light)' }}>
                <ArrowLeft size={16} /> Back to Shop
            </Link>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
                {/* Image */}
                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Info */}
                <div>
                    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {product.category}
                    </span>
                    <h1 style={{ fontSize: '2.5rem', margin: '10px 0' }}>{product.name}</h1>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-text)', marginBottom: '20px' }}>
                        ${product.price.toFixed(2)}
                    </p>

                    <p style={{ lineHeight: '1.8', color: 'var(--color-text-light)', marginBottom: '30px' }}>
                        This beautiful {product.name.toLowerCase()} is handmade with love and care.
                        Perfect for gifting or adding a touch of warmth to your home.
                        Each piece is unique and crafted using high-quality materials.
                    </p>

                    <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
                        <Button variant="primary" onClick={handleAddToCart} style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
                            Add to Cart <ShoppingBag size={18} style={{ marginLeft: 8 }} />
                        </Button>
                        <Button variant="outline" onClick={handleToggleWishlist} style={{ padding: '15px', borderRadius: '50%' }}>
                            <Heart
                                color="var(--color-love)"
                                fill={wishlisted ? 'var(--color-love)' : 'none'}
                                style={{ transition: 'all 0.3s ease' }}
                            />
                        </Button>
                    </div>

                    <div style={{ background: '#fff', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px dashed var(--color-secondary)' }}>
                        <h4 style={{ marginBottom: '10px' }}>Why you&apos;ll love it:</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                            <li style={{ marginBottom: '5px' }}>100% Unique Design</li>
                            <li style={{ marginBottom: '5px' }}>Eco-friendly Materials</li>
                            <li>Safe & Cute Packaging</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
