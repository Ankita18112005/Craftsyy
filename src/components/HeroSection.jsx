import { Link } from 'react-router-dom';
import Button from './Button';
import SplitText from './SplitText';

const HeroSection = () => {
    return (
        <section style={{
            padding: '80px 0',
            position: 'relative',
            overflow: 'hidden',
            minHeight: 'auto',
            display: 'flex',
            alignItems: 'center',
        }}>
            {/* Background Blobs - Soft & Pastel */}
            <div className="blob-bg" style={{ top: '-10%', left: '-5%', width: '600px', height: '600px', background: '#ffe5e5' }}></div> {/* Peach */}
            <div className="blob-bg" style={{ bottom: '10%', right: '-10%', width: '500px', height: '500px', background: '#e0f7fa' }}></div> {/* Cyan */}
            <div className="blob-bg" style={{ top: '40%', left: '40%', width: '300px', height: '300px', background: '#fff9c4' }}></div> {/* Yellow */}

            {/* Floating Doodles */}
            <div className="particle animate-float delay-100" style={{ top: '10%', left: '5%', fontSize: '2rem', transform: 'rotate(-15deg)', opacity: 0.6 }}>🎀</div>
            <div className="particle animate-float delay-300" style={{ bottom: '15%', right: '5%', fontSize: '2.5rem', transform: 'rotate(10deg)', opacity: 0.6 }}>🎀</div>
            <div className="particle animate-float" style={{ top: '20%', right: '15%', fontSize: '1.5rem', transform: 'rotate(25deg)', opacity: 0.5 }}>🎀</div>
            <div className="particle animate-float delay-200" style={{ bottom: '20%', left: '10%', fontSize: '2rem', transform: 'rotate(-10deg)', opacity: 0.6 }}>🎀</div>


            <div className="container responsive-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1.1fr 0.9fr',
                gap: '80px',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1
            }}>

                {/* Left Column: Story Text */}
                <div className="animate-fade-up" style={{ textAlign: 'left', paddingRight: '20px' }}>

                    {/* Sticker Note Welcome */}
                    <div className="animate-wiggle" style={{
                        display: 'inline-block',
                        background: '#fff9c4', /* Post-it yellow */
                        padding: '10px 24px',
                        borderRadius: '2px', /* Sharp corners like paper */
                        boxShadow: '2px 3px 5px rgba(0,0,0,0.1)',
                        marginBottom: '32px',
                        transform: 'rotate(-2deg)',
                        fontFamily: 'var(--font-hand)',
                        fontSize: '1.3rem',
                        color: 'var(--color-primary)',
                        transition: 'transform 0.3s ease',
                        position: 'relative'
                    }}>
                        {/* Cute Bow */}
                        <span style={{
                            position: 'absolute',
                            top: '-15px',
                            right: '-10px',
                            fontSize: '1.8rem',
                            transform: 'rotate(15deg)',
                            filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.1))',
                            zIndex: 10
                        }}>🎀</span>
                        Welcome to Handcrafttt
                    </div>

                    <div className="hero-title" style={{
                        lineHeight: '1.1',
                        marginBottom: '32px',
                        color: 'var(--color-text)',
                        fontWeight: '800',
                        letterSpacing: '-2px',
                        fontFamily: 'var(--font-heading)'
                    }}>
                        <SplitText
                            text="Make Your Life"
                            className="split-text-custom"
                            delay={40}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            threshold={0.2}
                            rootMargin="-50px"
                        />
                        <div className="hand-underline" style={{ color: 'var(--color-primary)', display: 'inline-block' }}>
                            <SplitText
                                text="More Colorful"
                                className="split-text-custom"
                                delay={40}
                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                threshold={0.2}
                                rootMargin="-50px"
                            />
                        </div>
                    </div>

                    <p className="hero-description" style={{
                        fontSize: '1.4rem',
                        color: '#666',
                        marginBottom: '48px',
                        maxWidth: '520px',
                        lineHeight: '1.7',
                        fontFamily: 'var(--font-body)',
                        fontWeight: '500'
                    }}>
                        Explore our little book of handmade treasures.
                        From cute keychains with stories to home decor made with love.
                    </p>

                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                        <Link to="/shop">
                            <Button variant="primary" style={{
                                padding: '18px 36px',
                                fontSize: '1.2rem',
                                borderRadius: '12px',
                                boxShadow: '0 8px 16px -4px var(--color-primary)',
                                transform: 'rotate(-1deg)'
                            }}>
                                Explore Shop
                            </Button>
                        </Link>
                    </div>

                    {/* Handwritten Stat */}
                    <div style={{ marginTop: '48px', fontFamily: 'var(--font-hand)', fontSize: '1.4rem', color: '#888', transform: 'rotate(1deg)' }}>
                        Join <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>500+</span> happy stories written!
                    </div>
                </div>

                {/* Right Column: Scrapbook Grid */}
                <div className="animate-fade-up delay-200" style={{
                    position: 'relative',
                    height: '500px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    {/* Center Card - Keychain */}
                    <div className="sticker" style={{
                        position: 'absolute',
                        width: '280px',
                        height: '340px',
                        zIndex: 3,
                        overflow: 'visible', /* Allow tape to stick out */
                        '--rotation': '-2deg'
                    }}>
                        <div className="tape" style={{ background: 'rgba(255, 107, 107, 0.4)' }}></div>
                        <img src="/images/keychain.jpeg" alt="Cute Keychain" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
                        <div style={{ position: 'absolute', bottom: -40, right: -20, fontFamily: 'var(--font-hand)', fontSize: '1.8rem', color: 'var(--color-primary)', transform: 'rotate(-5deg)' }}>
                            My Fave!
                        </div>
                    </div>

                    {/* Left Card - Strawberry */}
                    <div className="sticker" style={{
                        position: 'absolute',
                        left: '0',
                        top: '20px',
                        width: '220px',
                        height: '260px',
                        zIndex: 2,
                        '--rotation': '-12deg'
                    }}>
                        <div className="tape" style={{ top: 'auto', bottom: '-15px', left: '50%', transform: 'translateX(-50%) rotate(2deg)', background: 'rgba(78, 205, 196, 0.4)' }}></div>
                        <img src="/images/strawbery.jpeg" alt="Strawberry Felt" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
                        <div style={{ position: 'absolute', top: -30, left: -20, fontFamily: 'var(--font-hand)', fontSize: '1.4rem', color: 'var(--color-primary)', transform: 'rotate(-10deg)' }}>
                            So Sweet!
                        </div>
                    </div>

                    {/* Right Card - Donut */}
                    <div className="sticker" style={{
                        position: 'absolute',
                        right: '-20px',
                        bottom: '40px',
                        width: '240px',
                        height: '240px',
                        zIndex: 2,
                        '--rotation': '8deg'
                    }}>
                        <div className="tape" style={{ top: '-10px', right: '-10px', left: 'auto', transform: 'rotate(45deg)', width: '60px', background: 'rgba(255, 230, 109, 0.5)' }}></div>
                        <img src="/images/donut.jpeg" alt="Donut Charms" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
                        <div style={{ position: 'absolute', bottom: -30, right: 0, fontFamily: 'var(--font-hand)', fontSize: '1.5rem', color: 'var(--color-primary)', transform: 'rotate(5deg)' }}>
                            Yummy!
                        </div>
                    </div>

                </div>

            </div>

            <style>{`
        .hero-title { font-size: 5rem; }
        @media (max-width: 960px) {
          .container.responsive-grid { grid-template-columns: 1fr !important; text-align: center; gap: 40px !important; }
          .animate-fade-up { text-align: center !important; padding-right: 0 !important; }
          .animate-fade-up > div { justify-content: center; margin-left: auto; margin-right: auto; }
          .hero-title { font-size: 3.5rem !important; }
          .hero-description { font-size: 1.2rem !important; margin-bottom: 30px !important; margin-left: auto; margin-right: auto; }
          .particle { display: none; }
          .sticker { position: relative !important; left: auto !important; right: auto !important; top: auto !important; bottom: auto !important; margin: 0 auto; transform: rotate(var(--rotation)) !important; }
          div[style*="height: 500px"] { height: auto !important; gap: 40px; }
        }
        @media (max-width: 480px) {
          .hero-title { font-size: 2.5rem !important; }
          .sticker { width: 80% !important; height: auto !important; aspect-ratio: 1/1; }
          .sticker img { height: 100% !important; }
        }
      `}</style>
        </section>
    );
};

export default HeroSection;
