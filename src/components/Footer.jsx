import { Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer" style={{
            background: 'var(--color-primary-light)',
            marginTop: '0',
            padding: '60px 0 40px',
            textAlign: 'center',
            borderTop: '1px solid rgba(239, 68, 68, 0.1)'
        }}>
            <div className="container">
                <h2 className="footer-logo" style={{ fontFamily: 'var(--font-heading)', marginBottom: '20px', color: 'var(--color-primary)' }}>CRAFTSYYY</h2>
                <p className="footer-tagline" style={{ marginBottom: '20px', color: 'var(--color-text-light)', padding: '0 20px' }}>
                    Handmade with <Heart size={16} fill="var(--color-primary)" color="var(--color-primary)" style={{ verticalAlign: 'middle' }} /> for you.
                </p>

                <div className="footer-socials" style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '30px' }}>
                    <a href="#" className="social-icon" style={{ color: 'var(--color-text)', padding: '8px' }} aria-label="Instagram"><Instagram /></a>
                    <a href="#" className="social-icon" style={{ color: 'var(--color-text)', padding: '8px' }} aria-label="Facebook"><Facebook /></a>
                    <a href="#" className="social-icon" style={{ color: 'var(--color-text)', padding: '8px' }} aria-label="Twitter"><Twitter /></a>
                </div>

                <div className="footer-copyright" style={{ fontSize: '0.9rem', color: '#999', marginTop: '20px' }}>
                    &copy; {new Date().getFullYear()} CRAFTSYYY. All rights reserved.
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .footer { padding: 60px 0 30px !important; }
                    .footer-logo { font-size: 1.8rem !important; }
                    .footer-tagline { font-size: 0.95rem !important; }
                    .footer-socials { gap: 16px !important; }
                }
                @media (max-width: 480px) {
                    .footer { padding: 50px 20px 25px !important; }
                    .footer-logo { font-size: 1.5rem !important; }
                    .footer-copyright { font-size: 0.8rem !important; }
                    .social-icon svg { width: 20px; height: 20px; }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
