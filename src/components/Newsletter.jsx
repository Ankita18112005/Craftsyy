import Button from './Button';

const Newsletter = () => {
    return (
        <div className="newsletter-wrapper" style={{ backgroundColor: 'var(--color-primary-light)', }}>
            <section style={{
                background: 'var(--gradient-card)',
                padding: '80px 24px',
                borderRadius: 'var(--radius-lg)',
                marginTop: '80px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid white',
                boxShadow: 'var(--shadow-md)',
                marginBottom: '-40px',
                zIndex: 10
            }} className="container newsletter-section animate-fade-up" >

                {/* Decorative */}
                <div className="particle animate-float" style={{ top: -30, left: -30, fontSize: '6rem', opacity: 0.5 }}></div>
                <div className="particle animate-float delay-200" style={{ bottom: -30, right: -30, fontSize: '6rem', opacity: 0.5 }}></div>
                <div className="particle" style={{ top: '50%', right: '10%', width: '200px', height: '200px', background: 'var(--color-accent)', borderRadius: '50%', filter: 'blur(60px)', opacity: 0.2 }}></div>


                <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <h2 className="newsletter-title" style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--color-text)' }}>Join our Craft Circle</h2>
                    <p className="newsletter-subtitle" style={{ marginBottom: '32px', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                        Get updates on new handmade <span className="highlight">treasures</span>, DIY tips, and exclusive offers!
                    </p>

                    <form className="newsletter-form" style={{ display: 'flex', gap: '12px', maxWidth: '480px', margin: '0 auto', flexDirection: 'column' }} onSubmit={(e) => e.preventDefault()}>
                        <div className="newsletter-form-inner" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <input
                                type="email"
                                placeholder="Your email address..."
                                style={{
                                    padding: '14px 24px',
                                    borderRadius: 'var(--radius-full)',
                                    border: '2px solid transparent',
                                    background: 'white',
                                    flex: '1',
                                    minWidth: '260px',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    boxShadow: 'var(--shadow-inner)',
                                    transition: 'all 0.3s ease'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--color-primary)';
                                    e.target.style.transform = 'scale(1.02)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'transparent';
                                    e.target.style.transform = 'scale(1)';
                                }}
                            />
                            <Button variant="primary">Subscribe</Button>
                        </div>
                    </form>
                </div>
            </section>

            <style>{`
                .newsletter-wrapper {
                    padding: 0 32px;
                }
                @media (max-width: 768px) {
                    .newsletter-wrapper {
                        padding: 0 24px;
                    }
                }
                @media (max-width: 480px) {
                    .newsletter-wrapper {
                        padding: 0 16px;
                    }
                }
                @media (max-width: 768px) {
                    .newsletter-section { 
                        padding: 40px 20px !important; 
                        margin-top: 40px !important;
                        margin-bottom: -40px !important;
                        border-radius: var(--radius-md) !important;
                    }
                    .newsletter-title { font-size: 1.8rem !important; }
                    .newsletter-subtitle { font-size: 1rem !important; margin-bottom: 24px !important; }
                    .particle { display: none; }
                }
                @media (max-width: 480px) {
                    .newsletter-section {
                        padding: 30px 24px !important;
                        margin-top: 30px !important;
                    }
                    .newsletter-form-inner { 
                        flex-direction: column !important; 
                        width: 100%; 
                    }
                    .newsletter-form input { 
                        min-width: 100% !important; 
                        padding: 12px 20px !important;
                    }
                    .newsletter-form button { 
                        width: 100%; 
                    }
                }
            `}</style>
        </div>
    );
};

export default Newsletter;
