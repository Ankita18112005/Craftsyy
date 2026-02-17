import Button from './Button';

const Newsletter = () => {
    return (
        <div style={{ backgroundColor: 'var(--color-primary-light)', }}>
            <section style={{
                background: 'var(--gradient-card)',
                padding: '80px ',
                borderRadius: 'var(--radius-lg)',
                marginTop: '80px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid white',
                boxShadow: 'var(--shadow-md)',
                marginBottom: '-60px'
            }} className="container animate-fade-up" >

                {/* Decorative */}
                <div className="particle animate-float" style={{ top: -30, left: -30, fontSize: '6rem', opacity: 0.5 }}>🎀</div>
                <div className="particle animate-float delay-200" style={{ bottom: -30, right: -30, fontSize: '6rem', opacity: 0.5 }}>🎀</div>
                <div className="particle" style={{ top: '50%', right: '10%', width: '200px', height: '200px', background: 'var(--color-accent)', borderRadius: '50%', filter: 'blur(60px)', opacity: 0.2 }}></div>


                <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--color-text)' }}>Join our Craft Circle</h2>
                    <p style={{ marginBottom: '32px', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                        Get updates on new handmade <span className="highlight">treasures</span>, DIY tips, and exclusive offers!
                    </p>

                    <form style={{ display: 'flex', gap: '12px', maxWidth: '480px', margin: '0 auto', flexDirection: 'column' }} onSubmit={(e) => e.preventDefault()}>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
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
        </div>
    );
};

export default Newsletter;
