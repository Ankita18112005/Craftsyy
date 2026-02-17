import Button from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (

        <div style={{
            minHeight: '80vh',
            backgroundImage: 'radial-gradient(#fee2e2 2.5px, transparent 2.5px)',
            backgroundSize: '36px 36px',
            backgroundColor: 'white'
        }}>
            <div style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <div className="container section">
                    <div className="text-center" style={{ marginBottom: '50px' }}>
                        <h1 style={{ fontSize: '3rem', marginBottom: '15px' }}>Get in Touch</h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                            We&apos;d love to hear from you!
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>

                        {/* Contact Info */}
                        <div style={{ background: '#f6f4f4ff', padding: '40px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ marginBottom: '30px', fontSize: '1.5rem' }}>Contact Info</h3>

                            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', alignItems: 'center' }}>
                                <div style={{ background: 'var(--color-accent)', padding: '10px', borderRadius: '50%' }}>
                                    <Mail size={20} color="#5a7c5a" />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 'bold' }}>Email Us</p>
                                    <p style={{ color: 'var(--color-text-light)' }}>hello@handcrafttt.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', alignItems: 'center' }}>
                                <div style={{ background: 'var(--color-secondary)', padding: '10px', borderRadius: '50%' }}>
                                    <Phone size={20} color="#d97706" />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 'bold' }}>Call Us</p>
                                    <p style={{ color: 'var(--color-text-light)' }}>+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <div style={{ background: 'var(--color-primary)', padding: '10px', borderRadius: '50%' }}>
                                    <MapPin size={20} color="white" />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 'bold' }}>Visit Us</p>
                                    <p style={{ color: 'var(--color-text-light)' }}>123 Craft Lane, Art City</p>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => { e.preventDefault(); alert('Message sent with love!'); }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Jane Doe"
                                        style={{ width: '100%', padding: '15px', borderRadius: 'var(--radius-md)', border: '1px solid #ddd', fontSize: '1rem', outline: 'none' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="jane@example.com"
                                        style={{ width: '100%', padding: '15px', borderRadius: 'var(--radius-md)', border: '1px solid #ddd', fontSize: '1rem', outline: 'none' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Message</label>
                                    <textarea
                                        rows="5"
                                        placeholder="Tell us something nice..."
                                        style={{ width: '100%', padding: '15px', borderRadius: 'var(--radius-md)', border: '1px solid #ddd', fontSize: '1rem', outline: 'none', resize: 'none' }}
                                    />
                                </div>

                                <Button variant="primary" style={{ alignSelf: 'flex-start' }}>Send Message</Button>
                            </form>
                        </div>
                    </div>

                    <style>{`
        @media (max-width: 768px) {
            .container { grid-template-columns: 1fr !important; }
            }
            `}</style>
                </div>
            </div>
        </div>
    );
};

export default Contact;
