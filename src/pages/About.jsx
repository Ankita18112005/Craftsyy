import { Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="section" style={{
            backgroundImage: 'url("/images/pecha.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px'
        }}>
            <div className="container about-container" style={{
                maxWidth: '900px',
                background: 'rgba(255, 255, 255, 0.95)',
                padding: '60px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                backdropFilter: 'blur(5px)',
                position: 'relative'
            }}>
                {/* Washi Tape Accent */}
                <div className="tape" style={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)', width: '150px' }}></div>

                <div className="text-center">
                    <h1 className="about-title" style={{ marginBottom: '30px', color: 'var(--color-primary)' }}>Our Handcraft Story</h1>

                    <h2 className="about-subtitle" style={{ marginBottom: '20px', color: 'var(--color-text)' }}>Made with Passion</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '30px' }}>
                        At Handcrafttt, we believe in the magic of handmade. Every stitch, every brushstroke, and every mold is done with intention and love.
                        Our journey began in a small cozy room filled with colorful yarns and big dreams.
                    </p>

                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '50px' }}>
                        We collaborate with talented local artisans who pour their heart into creating unique pieces that bring joy to your everyday life.
                        When you shop with us, you&apos;re not just buying a product; you&apos;re supporting a dream and a community.
                    </p>

                    <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginTop: '50px' }}>
                        <div>
                            <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>🌿</div>
                            <h3 style={{ color: 'var(--color-primary)' }}>Sustainable</h3>
                            <p>Eco-friendly materials</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>🎨</div>
                            <h3 style={{ color: 'var(--color-primary)' }}>Handmade</h3>
                            <p>Crafted by humans</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>💝</div>
                            <h3 style={{ color: 'var(--color-primary)' }}>With Love</h3>
                            <p>Packed with care</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .about-title { font-size: 3.5rem; }
                .about-subtitle { font-size: 2rem; }
                @media (max-width: 768px) {
                    .about-container { padding: 40px 20px !important; }
                    .about-title { font-size: 2.2rem !important; }
                    .about-subtitle { font-size: 1.6rem !important; }
                    .about-grid { gap: 30px !important; }
                    .about-grid div div { font-size: 2.5rem !important; }
                }
                @media (max-width: 480px) {
                    .about-title { font-size: 1.8rem !important; }
                    .about-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
};

export default About;
