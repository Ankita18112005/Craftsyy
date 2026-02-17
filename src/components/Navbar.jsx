import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import '../styles/global.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { getCartCount } = useCart();
    const { getWishlistCount } = useWishlist();
    const cartCount = getCartCount();
    const wishCount = getWishlistCount();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="" style={{
            padding: '15px 0',
            position: 'sticky',
            top: 20,
            margin: '0 20px',
            borderRadius: 'var(--radius-lg)',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            background: 'var(--color-primary-light)',
            boxShadow: 'var(--shadow-sm)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <Link to="/" style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>🎀</span>
                    Handcrafttt
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '40px', alignItems: 'center', position: 'relative' }}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => isActive ? 'nav-active' : ''}
                            style={{ fontWeight: '500', position: 'relative', padding: '5px 0' }}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Icons */}
                <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                    <Link to="/wishlist" className="icon-hover" style={{ color: 'var(--color-love)', position: 'relative' }}>
                        <Heart size={24} fill={wishCount > 0 ? 'var(--color-love)' : 'none'} style={{ transition: 'all 0.3s ease' }} />
                        {wishCount > 0 && (
                            <span className="animate-pulse-glow" style={{
                                position: 'absolute', top: -8, right: -10,
                                background: 'var(--color-love)', color: 'white',
                                borderRadius: '50%', width: '20px', height: '20px',
                                fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}>{wishCount}</span>
                        )}
                    </Link>
                    <Link to="/cart" className="icon-hover" style={{ color: 'var(--color-text)', position: 'relative' }}>
                        <ShoppingBag size={24} />
                        {cartCount > 0 && (
                            <span className="animate-pulse-glow" style={{
                                position: 'absolute', top: -8, right: -10,
                                background: 'var(--color-primary)', color: 'white',
                                borderRadius: '50%', width: '20px', height: '20px',
                                fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}>{cartCount}</span>
                        )}
                    </Link>

                    {/* Mobile Toggle */}
                    <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', background: 'transparent' }}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div style={{
                position: 'absolute', top: '100%', left: 0, width: '100%',
                background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)',
                padding: '20px', borderRadius: 'var(--radius-lg)', marginTop: '10px',
                display: isOpen ? 'flex' : 'none', flexDirection: 'column', gap: '20px', alignItems: 'center',
                boxShadow: 'var(--shadow-lg)', border: '1px solid white'
            }}>
                {navLinks.map((link) => (
                    <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} style={{ fontSize: '1.2rem' }}>
                        {link.name}
                    </Link>
                ))}
            </div>

            <style>{`
        .icon-hover:hover { transform: scale(1.1) rotate(5deg); }
        .nav-active { color: var(--color-primary) !important; font-weight: 700 !important; }
        .nav-active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--color-primary);
          border-radius: 2px;
          animation: draw 0.3s ease forwards;
        }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
          nav { top: 0 !important; margin: 0 !important; borderRadius: 0 !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
