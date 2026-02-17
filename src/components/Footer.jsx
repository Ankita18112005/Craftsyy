import { Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--color-primary-light)', marginTop: '0', padding: '80px 0 40px', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '20px', color: 'var(--color-primary)' }}>Handcrafttt 🎀</h2>
                <p style={{ marginBottom: '20px', color: 'var(--color-text-light)' }}>
                    Handmade with <Heart size={16} fill="var(--color-primary)" color="var(--color-primary)" style={{ verticalAlign: 'middle' }} /> for you.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
                    <a href="#" style={{ color: 'var(--color-text)' }}><Instagram /></a>
                    <a href="#" style={{ color: 'var(--color-text)' }}><Facebook /></a>
                    <a href="#" style={{ color: 'var(--color-text)' }}><Twitter /></a>
                </div>

                <div style={{ fontSize: '0.9rem', color: '#999' }}>
                    &copy; {new Date().getFullYear()} Handcrafttt. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
