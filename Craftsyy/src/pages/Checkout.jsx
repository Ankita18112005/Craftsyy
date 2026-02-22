import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const Checkout = () => {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        country: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Payment coming soon!');
    };

    if (cartItems.length === 0 && !isSubmitted) {
        return (
            <div className="container section text-center" style={{ paddingTop: '80px', paddingBottom: '80px', flex: '1' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Your cart is empty</h2>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '30px' }}>
                    Add some items before proceeding to checkout.
                </p>
                <Link to="/shop">
                    <Button variant="primary">Return to Shop</Button>
                </Link>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="container section text-center" style={{ paddingTop: '80px', paddingBottom: '80px', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle size={80} color="var(--color-primary)" style={{ marginBottom: '20px' }} />
                <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Order Placed Successfully!</h2>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '30px', maxWidth: '500px' }}>
                    Thank you for your order, {formData.firstName}. We have received your request and will contact you shortly with tracking details.
                </p>
                <Link to="/shop">
                    <Button variant="primary">Continue Shopping</Button>
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
            flex: '1',
            padding: '40px 0'
        }}>
            <div className="container">
                <Link to="/cart" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginBottom: '30px', color: 'var(--color-text-light)', fontWeight: 'bold', background: 'rgba(255,255,255,0.8)', padding: '5px 15px', borderRadius: 'var(--radius-md)' }}>
                    <ArrowLeft size={16} /> Back to Cart
                </Link>

                <h1 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>Checkout</h1>

                <div className="checkout-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '40px', alignItems: 'start' }}>
                    {/* Form Section */}
                    <div className="glass" style={{ padding: '30px', borderRadius: 'var(--radius-lg)' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Shipping Information</h2>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div>
                                    <label style={labelStyle}>First Name</label>
                                    <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Last Name</label>
                                    <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} style={inputStyle} />
                                </div>
                            </div>

                            <div>
                                <label style={labelStyle}>Email Address</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleChange} style={inputStyle} />
                            </div>

                            <div>
                                <label style={labelStyle}>Street Address</label>
                                <input type="text" name="address" required value={formData.address} onChange={handleChange} style={inputStyle} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div>
                                    <label style={labelStyle}>City</label>
                                    <input type="text" name="city" required value={formData.city} onChange={handleChange} style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Zip Code</label>
                                    <input type="text" name="zipCode" required value={formData.zipCode} onChange={handleChange} style={inputStyle} />
                                </div>
                            </div>

                            <div>
                                <label style={labelStyle}>Country</label>
                                <input type="text" name="country" required value={formData.country} onChange={handleChange} style={inputStyle} />
                            </div>

                            <Button type="button" onClick={() => alert('Payment coming soon!')} variant="primary" style={{ width: '100%', marginTop: '20px', padding: '15px', fontSize: '1.1rem' }}>
                                Proceed to Payment
                            </Button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="cart-summary glass" style={{
                        borderRadius: 'var(--radius-lg)',
                        padding: '30px',
                        position: 'sticky',
                        top: '100px'
                    }}>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '25px' }}>Order Summary</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '25px', maxHeight: '300px', overflowY: 'auto', paddingRight: '10px' }}>
                            {cartItems.map(item => (
                                <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }} />
                                    <div style={{ flex: 1 }}>
                                        <p style={{ fontWeight: '600', fontSize: '0.95rem', margin: 0 }}>{item.name}</p>
                                        <p style={{ color: 'var(--color-text-light)', fontSize: '0.85rem', margin: 0 }}>Qty: {item.quantity}</p>
                                    </div>
                                    <div style={{ fontWeight: '700' }}>
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ borderTop: '2px dashed var(--color-secondary)', paddingTop: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <span style={{ color: 'var(--color-text-light)' }}>Subtotal</span>
                                <span>${getCartTotal().toFixed(2)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                <span style={{ color: 'var(--color-text-light)' }}>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: '700' }}>
                                <span>Total</span>
                                <span style={{ color: 'var(--color-primary-dark)' }}>${getCartTotal().toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    @media (max-width: 960px) {
                        .checkout-grid { grid-template-columns: 1fr !important; }
                        .cart-summary { position: static !important; margin-top: 20px; }
                    }
                `}</style>
            </div>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    borderRadius: 'var(--radius-md)',
    border: '1px solid rgba(0,0,0,0.1)',
    background: 'rgba(255,255,255,0.7)',
    outline: 'none',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
};

const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: 'var(--color-text)',
    fontSize: '0.95rem'
};

export default Checkout;
