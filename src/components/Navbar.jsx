import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X, Search, User, LogIn, Home, Store, Info, Phone, ChevronRight } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { useAuth } from '../context/AuthContext';
import Button from './Button';
import '../styles/global.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
    const navigate = useNavigate();
    const { getCartCount } = useCart();
    const { getWishlistCount } = useWishlist();
    const { user } = useAuth();
    const cartCount = getCartCount();
    const wishCount = getWishlistCount();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [searchParams]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
        } else {
            navigate('/shop');
        }
    };

    const navLinks = [
        { name: 'Home', path: '/', icon: <Home size={20} /> },
        { name: 'Shop', path: '/shop', icon: <Store size={20} /> },
        { name: 'About', path: '/about', icon: <Info size={20} /> },
        { name: 'Contact', path: '/contact', icon: <Phone size={20} /> },
    ];

    return (
        <nav style={{
            padding: '16px 0',
            position: 'sticky',
            top: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <Link to="/" style={{
                    fontSize: '1.8rem',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-text)',
                    fontWeight: '800',
                    letterSpacing: '-0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    zIndex: 1001 // Ensure logo is above mobile menu overlay if needed, though menu covers it usually
                }}>
                    <img src="/bow.ico" alt="Bow" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                    CRAFTSYYY
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '30px', alignItems: 'center', position: 'relative' }}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Icons */}
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div className="desktop-icons" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        {/* Search Bar (Desktop) */}
                        <form className="desktop-search" onSubmit={handleSearch} style={{ position: 'relative' }}>
                            <input
                                type="text"
                                placeholder="Search crafts..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    padding: '8px 15px 8px 35px',
                                    borderRadius: 'var(--radius-full)',
                                    border: '1px solid #ddd',
                                    fontSize: '0.9rem',
                                    width: '180px',
                                    background: 'white',
                                    transition: 'all 0.3s ease'
                                }}
                                className="search-input"
                            />
                            <Search
                                size={18}
                                style={{
                                    position: 'absolute',
                                    left: '12px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: '#999'
                                }}
                            />
                        </form>

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

                        {/* Divider */}
                        <div style={{ width: '1px', height: '24px', background: '#e0e0e0' }}></div>

                        {/* Profile Icon or Login Button */}
                        {user ? (
                            <Link to="/profile" className="icon-hover" style={{ color: 'var(--color-text)', position: 'relative' }}>
                                <div style={{
                                    width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden',
                                    border: '2px solid var(--color-primary)', padding: '2px'
                                }}>
                                    <img src={user.avatar} alt="Me" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                                </div>
                            </Link>
                        ) : (
                            <Button
                                variant="primary"
                                onClick={() => navigate('/login')}
                                style={{ padding: '8px 24px', fontSize: '0.9rem', boxShadow: 'none' }}
                            >
                                Login
                            </Button>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsOpen(true)}
                        style={{ display: 'none', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--color-text)' }}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-overlay ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <div className="mobile-logo">
                        <img src="/bow.ico" alt="Bow" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
                        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '1.2rem', color: 'var(--color-text)' }}>CRAFTSYYY</span>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '8px', color: '#666' }}
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Mobile Search */}
                <form onSubmit={(e) => { handleSearch(e); setIsOpen(false); }} className="mobile-search-form">
                    <Search size={18} color="#888" />
                    <input
                        type="text"
                        placeholder="Search crafts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </form>

                <div className="mobile-nav-items">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                        >
                            <span className="icon-wrapper">{link.icon}</span>
                            <span className="link-text">{link.name}</span>
                            <ChevronRight size={16} className="chevron" />
                        </NavLink>
                    ))}
                </div>

                <div className="mobile-secondary-items">
                    <Link to="/cart" onClick={() => setIsOpen(false)} className="secondary-chip">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <ShoppingBag size={18} />
                            <span>Cart</span>
                        </div>
                        {cartCount > 0 && <span className="chip-badge">{cartCount}</span>}
                    </Link>

                    <Link to="/wishlist" onClick={() => setIsOpen(false)} className="secondary-chip">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Heart size={18} />
                            <span>Wishlist</span>
                        </div>
                        {wishCount > 0 && <span className="chip-badge love">{wishCount}</span>}
                    </Link>
                </div>

                <div className="mobile-footer">
                    {user ? (
                        <Link to="/profile" onClick={() => setIsOpen(false)} className="profile-btn">
                            <div className="avatar-small">
                                <img src={user.avatar} alt="Me" />
                            </div>
                            <span>My Profile</span>
                        </Link>
                    ) : (
                        <button onClick={() => { navigate('/login'); setIsOpen(false); }} className="login-btn">
                            <span>Login / Sign Up</span>
                            <LogIn size={18} />
                        </button>
                    )}
                </div>
            </div>

            <style>{`
        /* Base Link Styling */
        .nav-link {
            color: var(--color-text-light);
            padding: 8px 18px;
            border-radius: 99px;
            font-weight: 600;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            text-decoration: none;
            border: 1px solid transparent;
        }

        /* Hover Effect */
        .nav-link:hover {
            color: var(--color-primary);
            background: rgba(254, 226, 226, 0.5); /* lighter primary-light */
            transform: translateY(-1px);
        }

        /* Active State (Pill) */
        .nav-active {
            background: var(--color-primary) !important;
            color: white !important;
            box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
            transform: scale(1.05);
        }

        /* Search Input */
        .search-input {
            background-color: #f3f4f6 !important;
            border: 1px solid transparent !important;
            font-weight: 500;
        }
        .search-input:focus {
            background-color: white !important;
            width: 260px !important;
            border-color: var(--color-primary) !important;
            box-shadow: 0 0 0 4px var(--color-primary-light);
            outline: none;
        }

        /* Icons */
        .icon-hover {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            border-radius: 50%;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .icon-hover:hover {
            background: var(--color-primary-light);
            transform: rotate(10deg) scale(1.1);
            color: var(--color-primary) !important;
        }

        /* Mobile Menu Overlay */
        .mobile-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(4px);
            z-index: 1001; /* Behind menu, above everything else */
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
        }
        .mobile-overlay.open {
            opacity: 1;
            pointer-events: auto;
        }

        /* Mobile Menu Drawer */
        .mobile-menu {
            position: fixed;
            top: 0;
            right: 0;
            width: 85%;
            max-width: 320px;
            height: 100vh;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 245, 245, 0.9) 100%);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            z-index: 1002;
            padding: 24px;
            box-shadow: -10px 0 40px rgba(0, 0, 0, 0.1);
            border-top-left-radius: 24px;
            border-bottom-left-radius: 24px;
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            display: flex;
            flex-direction: column;
            border-left: 1px solid rgba(255, 255, 255, 0.4);
        }
        
        .mobile-menu.open {
            transform: translateX(0);
        }

        .mobile-menu-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
            padding-bottom: 12px;
            border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .mobile-logo {
            display: flex;
            align-items: center;
            gap: 8px;
            /* Center logo if desired, or keep left aligned. Request said "Making the logo smaller and centered" 
               but that usually implies centered in the menu header or centered on screen. 
               Let's center it in the specific menu space relative to the close button? 
               Actually standard pattern is logo left, close right. 
               But "centered" in prompt might mean "centered in the drawer". 
               Let's try to center it. */
            margin-left: auto;
            margin-right: auto;
            padding-left: 32px; /* Offset for close button balance if needed, or just auto margins */
        }

        .mobile-search-form {
            display: flex;
            align-items: center;
            background: white;
            padding: 10px 16px;
            border-radius: 16px;
            margin-bottom: 24px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.03);
            border: 1px solid rgba(0,0,0,0.05);
            transition: all 0.3s ease;
        }

        .mobile-search-form:focus-within {
            box-shadow: 0 4px 16px rgba(239, 68, 68, 0.1);
            border-color: var(--color-primary-light);
            transform: translateY(-1px);
        }

        .mobile-search-form input {
            border: none;
            background: transparent;
            margin-left: 10px;
            width: 100%;
            font-family: var(--font-body);
            font-size: 0.95rem;
            color: var(--color-text);
            outline: none;
        }

        .mobile-nav-items {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 24px;
        }

        .mobile-nav-link {
            display: flex;
            align-items: center;
            padding: 12px 16px;
            border-radius: 16px;
            text-decoration: none;
            color: var(--color-text);
            font-weight: 600;
            transition: all 0.2s ease;
            position: relative;
            overflow: hidden;
        }

        .mobile-nav-link .icon-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 10px;
            background: rgba(0,0,0,0.03);
            margin-right: 14px;
            color: #666;
            transition: all 0.2s ease;
        }

        .mobile-nav-link .hover-bg {
            /* Handled by direct hover on link */
        }

        .mobile-nav-link:hover {
            background: rgba(255, 255, 255, 0.6);
        }
        
        .mobile-nav-link:active {
            transform: scale(0.98);
        }

        .mobile-nav-link.active {
            background: white;
            box-shadow: 0 4px 12px rgba(239, 68, 68, 0.15);
        }

        .mobile-nav-link.active .icon-wrapper {
            background: var(--color-primary);
            color: white;
        }
        
        .mobile-nav-link.active .link-text {
            color: var(--color-primary);
        }

        .mobile-nav-link .chevron {
            margin-left: auto;
            opacity: 0.3;
            transition: transform 0.2s;
        }
        
        .mobile-nav-link.active .chevron {
            opacity: 1;
            color: var(--color-primary);
            transform: translateX(2px);
        }

        .mobile-secondary-items {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-bottom: auto; /* Push footer to bottom */
        }

        .secondary-chip {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 14px;
            background: rgba(255,255,255,0.5);
            border-radius: 14px;
            text-decoration: none;
            color: var(--color-text);
            font-weight: 600;
            font-size: 0.85rem;
            border: 1px solid rgba(255,255,255,0.4);
            transition: all 0.2s;
        }

        .secondary-chip:hover {
            background: white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            transform: translateY(-2px);
        }

        .chip-badge {
            background: var(--color-primary);
            color: white;
            font-size: 0.7rem;
            padding: 2px 6px;
            border-radius: 10px;
            font-weight: 700;
        }
        
        .chip-badge.love {
            background: var(--color-love);
        }

        .mobile-footer {
            margin-top: 24px;
        }

        .login-btn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 14px;
            border-radius: 16px;
            background: var(--gradient-main); /* Using theme gradient */
            color: white;
            font-weight: 700;
            border: none;
            cursor: pointer;
            box-shadow: var(--shadow-md);
            transition: all 0.3s ease;
        }

        .login-btn:hover {
            box-shadow: var(--shadow-hover);
            transform: translateY(-2px);
            filter: brightness(1.05);
        }

        .profile-btn {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px;
            background: white;
            border-radius: 16px;
            text-decoration: none;
            color: var(--color-text);
            font-weight: 700;
            box-shadow: var(--shadow-sm);
        }
        
        .avatar-small {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid var(--color-primary);
        }
        
        .avatar-small img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .desktop-icons { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
