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
            <div className="particle animate-float delay-100" style={{ top: '10%', left: '5%', fontSize: '2rem', transform: 'rotate(-15deg)', opacity: 0.6 }}></div>
            <div className="particle animate-float delay-300" style={{ bottom: '15%', right: '5%', fontSize: '2.5rem', transform: 'rotate(10deg)', opacity: 0.6 }}></div>
            <div className="particle animate-float" style={{ top: '20%', right: '15%', fontSize: '1.5rem', transform: 'rotate(25deg)', opacity: 0.5 }}></div>
            <div className="particle animate-float delay-200" style={{ bottom: '20%', left: '10%', fontSize: '2rem', transform: 'rotate(-10deg)', opacity: 0.6 }}></div>


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
                        }}></span>
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

                {/* Right Column: Overlapping Polaroid Cards */}
                <div className="cards-container animate-fade-up delay-200">

                    {/* Card 1 - Keychain (Left) */}
                    <div className="overlap-card overlap-left">
                        <div className="overlap-frame">
                            <div className="washi-tape" style={{
                                top: '-12px', left: '10px', width: '50px',
                                background: 'rgba(255, 107, 107, 0.4)',
                                transform: 'rotate(-6deg)'
                            }}></div>
                            <img src="/images/keychain.jpeg" alt="Cute Keychains" />
                        </div>
                        <div className="overlap-label">My Fave!</div>
                    </div>

                    {/* Card 2 - Strawberry (Center, on top) */}
                    <div className="overlap-card overlap-center">
                        <div className="overlap-label" style={{ marginBottom: '6px', marginTop: '0' }}>So Sweet!</div>
                        <div className="overlap-frame">
                            <div className="washi-tape" style={{
                                bottom: '-12px', top: 'auto', left: '50%',
                                transform: 'translateX(-50%) rotate(1deg)',
                                width: '60px',
                                background: 'rgba(78, 205, 196, 0.45)'
                            }}></div>
                            <img src="/images/strawbery.jpeg" alt="Strawberry Felt" />
                        </div>
                    </div>

                    {/* Card 3 - Donut (Right) */}
                    <div className="overlap-card overlap-right">
                        <div className="overlap-frame">
                            <div className="washi-tape" style={{
                                top: '-10px', right: '-8px', left: 'auto',
                                width: '40px', height: '40px',
                                background: 'rgba(255, 230, 109, 0.55)',
                                transform: 'rotate(45deg)',
                                borderRadius: '2px'
                            }}></div>
                            <img src="/images/donut.jpeg" alt="Donut Charms" />
                        </div>
                        <div className="overlap-label">Yummy!</div>
                    </div>

                </div>

            </div>

            <style>{`
        .hero-title { font-size: 5rem; }

        /* === Overlapping Cards Layout === */
        .cards-container {
          position: relative;
          width: 100%;
          height: 420px;
        }

        .overlap-card {
          position: absolute;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), z-index 0.2s;
        }
        .overlap-card:hover {
          transform: rotate(0deg) scale(1.08) !important;
          z-index: 20 !important;
        }

        .overlap-frame {
          background: white;
          padding: 8px;
          border-radius: 6px;
          box-shadow: 0 6px 24px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.08);
          position: relative;
          overflow: visible;
        }
        .overlap-frame img {
          object-fit: cover;
          border-radius: 4px;
          display: block;
        }

        .overlap-label {
          font-family: var(--font-hand);
          font-size: 1.5rem;
          color: var(--color-primary);
          text-align: center;
          margin-top: 8px;
        }

        .washi-tape {
          position: absolute;
          height: 20px;
          border-radius: 2px;
          z-index: 5;
          opacity: 0.9;
        }

        /* Left card */
        .overlap-left {
          left: 0;
          top: 40px;
          transform: rotate(-8deg);
          z-index: 2;
        }
        .overlap-left .overlap-frame img {
          width: 190px;
          height: 220px;
        }
        .overlap-left .overlap-label {
          transform: rotate(-3deg);
        }

        /* Center card (in front) */
        .overlap-center {
          left: 50%;
          top: 10px;
          transform: translateX(-50%) rotate(1deg);
          z-index: 4;
        }
        .overlap-center .overlap-frame img {
          width: 230px;
          height: 260px;
        }
        .overlap-center .overlap-label {
          transform: rotate(-2deg);
        }
        .overlap-center:hover {
          transform: translateX(-50%) rotate(0deg) scale(1.08) !important;
        }

        /* Right card */
        .overlap-right {
          right: 0;
          top: 55px;
          transform: rotate(8deg);
          z-index: 3;
        }
        .overlap-right .overlap-frame img {
          width: 170px;
          height: 200px;
        }
        .overlap-right .overlap-label {
          transform: rotate(4deg);
        }

        /* === Responsive === */
        @media (max-width: 960px) {
          .container.responsive-grid { grid-template-columns: 1fr !important; text-align: center; gap: 40px !important; }
          .animate-fade-up { text-align: center !important; padding-right: 0 !important; }
          .animate-fade-up > div { justify-content: center; margin-left: auto; margin-right: auto; }
          .hero-title { font-size: 3.5rem !important; }
          .hero-description { font-size: 1.2rem !important; margin-bottom: 30px !important; margin-left: auto; margin-right: auto; }
          .particle { display: none; }
          .blob-bg { display: none; }
          .cards-container { height: 350px; max-width: 500px; margin: 0 auto; }
          .overlap-left .overlap-frame img { width: 150px !important; height: 175px !important; }
          .overlap-center .overlap-frame img { width: 185px !important; height: 210px !important; }
          .overlap-right .overlap-frame img { width: 135px !important; height: 160px !important; }
          .overlap-label { font-size: 1.2rem !important; }
          .overlap-left { transform: rotate(-6deg); }
          .overlap-right { transform: rotate(6deg); }
        }
        @media (max-width: 480px) {
          section[style*="padding: 80px 0"] { padding: 40px 0 !important; }
          .hero-title { font-size: 2.2rem !important; letter-spacing: -1px !important; }
          .hero-description { font-size: 1rem !important; margin-bottom: 24px !important; }
          .cards-container { height: 220px !important; max-width: 340px; }
          .overlap-frame { padding: 5px !important; }
          .overlap-left .overlap-frame img { width: 95px !important; height: 110px !important; }
          .overlap-center .overlap-frame img { width: 115px !important; height: 130px !important; }
          .overlap-right .overlap-frame img { width: 85px !important; height: 100px !important; }
          .overlap-label { font-size: 0.9rem !important; margin-top: 4px !important; }
          .overlap-left { top: 25px !important; transform: rotate(-5deg); }
          .overlap-center { top: 5px !important; }
          .overlap-right { top: 30px !important; transform: rotate(5deg); }
          .washi-tape { height: 14px !important; }
          div[style*="marginTop: '48px'"], div[style*="margin-top: 48px"] { font-size: 1.1rem !important; margin-top: 24px !important; }
        }
      `}</style>
        </section>
    );
};

export default HeroSection;
