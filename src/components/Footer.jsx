import { Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer" style={{ background: 'var(--color-primary-light)', marginTop: '0', padding: '80px 0 40px', textAlign: 'center' }}>
            <div className="container">
                <h2 className="footer-logo" style={{ fontFamily: 'var(--font-heading)', marginBottom: '20px', color: 'var(--color-primary)' }}>Handcrafttt 🎀</h2>
                <p style={{ marginBottom: '20px', color: 'var(--color-text-light)' }}>
                    Handmade with <Heart size={16} fill="var(--color-primary)" color="var(--color-primary)" style={{ verticalAlign: 'middle' }} /> for you.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
                    <a href="#" className="social-icon" style={{ color: 'var(--color-text)' }}><Instagram /></a>
                    <a href="#" className="social-icon" style={{ color: 'var(--color-text)' }}><Facebook /></a>
                    <a href="#" className="social-icon" style={{ color: 'var(--color-text)' }}><Twitter /></a>
                </div>

                <div className="footer-copyright" style={{ fontSize: '0.9rem', color: '#999' }}>
                    &copy; {new Date().getFullYear()} Handcrafttt. All rights reserved.
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .footer { padding: 60px 0 30px !important; }
                    .footer-logo { font-size: 1.8rem !important; }
                }
                @media (max-width: 480px) {
                    .footer { padding: 40px 0 20px !important; }
                    .footer-logo { font-size: 1.5rem !important; }
                    .footer-copyright { font-size: 0.8rem !important; }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
