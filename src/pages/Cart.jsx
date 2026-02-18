import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import Button from '../components/Button';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="container section text-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                <div style={{ fontSize: '5rem', marginBottom: '20px' }}></div>
                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Your cart is empty</h2>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '30px' }}>
                    Looks like you haven&apos;t added anything yet!
                </p>
                <Link to="/shop">
                    <Button variant="primary">Start Shopping</Button>
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
                    <ArrowLeft size={16} /> Continue Shopping
                </Link>

                <h1 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Shopping Cart</h1>

                <div className="cart-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '40px', alignItems: 'start' }}>
                    {/* Cart Items */}
                    <div className="cart-items-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item" style={{
                                display: 'flex', gap: '20px', alignItems: 'center',
                                background: 'rgba(255,255,255,0.9)', borderRadius: 'var(--radius-md)',
                                padding: '20px', boxShadow: 'var(--shadow-sm)',
                                border: '1px solid rgba(255,255,255,0.6)',
                                transition: 'all 0.3s ease',
                                position: 'relative'
                            }}>
                                {/* Image */}
                                <Link to={`/product/${item.id}`}>
                                    <div className="cart-item-image" style={{ width: '100px', height: '100px', borderRadius: 'var(--radius-md)', overflow: 'hidden', flexShrink: 0 }}>
                                        {item.image ? (
                                            <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        ) : (
                                            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #fce4ec, #f3e5f5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}></div>
                                        )}
                                    </div>
                                </Link>

                                {/* Info */}
                                <div className="cart-item-info" style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '5px', fontWeight: '600' }}>{item.name}</h3>
                                    <p style={{ color: 'var(--color-primary-dark)', fontWeight: '700', fontSize: '1.1rem' }}>${item.price.toFixed(2)}</p>
                                </div>

                                {/* Controls & Subtotal Group for mobile */}
                                <div className="cart-item-actions" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    {/* Quantity Controls */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            style={{
                                                width: '34px', height: '34px', borderRadius: '50%',
                                                border: '2px solid var(--color-secondary)', background: 'white',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                cursor: 'pointer', transition: 'all 0.2s ease'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-secondary)'}
                                            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span style={{ fontWeight: '700', fontSize: '1.1rem', minWidth: '24px', textAlign: 'center' }}>{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            style={{
                                                width: '34px', height: '34px', borderRadius: '50%',
                                                border: '2px solid var(--color-secondary)', background: 'white',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                cursor: 'pointer', transition: 'all 0.2s ease'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-secondary)'}
                                            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>

                                    {/* Subtotal */}
                                    <div className="cart-item-subtotal" style={{ minWidth: '80px', textAlign: 'right' }}>
                                        <p style={{ fontWeight: '700', fontSize: '1.15rem', color: 'var(--color-text)' }}>
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>

                                {/* Remove */}
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="cart-item-remove"
                                    style={{
                                        background: 'transparent', border: 'none', cursor: 'pointer',
                                        color: 'var(--color-text-light)', transition: 'all 0.2s ease', padding: '8px'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.transform = 'scale(1.15)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-light)'; e.currentTarget.style.transform = 'scale(1)'; }}
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="cart-summary" style={{
                        background: 'rgba(255,255,255,0.95)', borderRadius: 'var(--radius-lg)',
                        padding: '30px', boxShadow: 'var(--shadow-md)',
                        border: '2px dashed var(--color-secondary)', position: 'sticky', top: '100px'
                    }}>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '25px' }}>Order Summary</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                            {cartItems.map(item => (
                                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                                    <span style={{ color: 'var(--color-text-light)' }}>{item.name} × {item.quantity}</span>
                                    <span style={{ fontWeight: '600' }}>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ borderTop: '2px dashed var(--color-secondary)', paddingTop: '15px', marginTop: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: '700' }}>
                                <span>Total</span>
                                <span style={{ color: 'var(--color-primary-dark)' }}>${getCartTotal().toFixed(2)}</span>
                            </div>
                        </div>

                        <Button variant="primary" onClick={() => alert('Checkout coming soon!')} style={{ width: '100%', marginTop: '25px', padding: '15px', fontSize: '1.1rem' }}>
                            Checkout <ShoppingBag size={18} style={{ marginLeft: 8 }} />
                        </Button>

                        <button onClick={clearCart} style={{
                            width: '100%', marginTop: '10px', padding: '10px',
                            background: 'transparent', border: 'none', color: 'var(--color-text-light)',
                            cursor: 'pointer', fontSize: '0.9rem', transition: 'color 0.2s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-light)'}
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>

                <style>{`
                    @media (max-width: 960px) {
                        .cart-grid { grid-template-columns: 1fr !important; }
                        .cart-summary { position: static !important; margin-top: 20px; }
                    }
                    @media (max-width: 768px) {
                        .cart-item { flex-wrap: wrap; gap: 15px !important; padding: 15px !important; }
                        .cart-item-image { width: 80px !important; height: 80px !important; }
                        .cart-item-info { min-width: 150px; }
                        .cart-item-actions { width: 100%; justify-content: space-between; border-top: 1px solid #eee; padding-top: 15px !important; }
                        .cart-item-remove { position: absolute; top: 10px; right: 10px; }
                    }
                    @media (max-width: 480px) {
                        h1 { font-size: 2rem !important; }
                        .cart-item-image { width: 60px !important; height: 60px !important; }
                        .cart-item-info h3 { font-size: 1rem !important; }
                        .cart-summary { padding: 20px !important; }
                        .cart-summary h3 { font-size: 1.1rem !important; }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default Cart;
