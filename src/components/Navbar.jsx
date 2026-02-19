import { useState } from 'react';
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X, Search, User, LogIn } from 'lucide-react';
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

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
        } else {
            navigate('/shop');
        }
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
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
                    gap: '8px'
                }}>
                    <span style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>✂️</span>
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
                    <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', background: 'transparent' }}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* Mobile Menu */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => `mobile-menu-link ${isActive ? 'active' : ''}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div style={{ width: '100%', height: '1px', background: 'rgba(0,0,0,0.05)', margin: '10px 0' }}></div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                    <Link to="/cart" onClick={() => setIsOpen(false)} className="mobile-menu-link secondary">
                        <ShoppingBag size={18} />
                        <span>Cart</span>
                        {cartCount > 0 && <span className="mobile-badge">{cartCount}</span>}
                    </Link>
                    <Link to="/wishlist" onClick={() => setIsOpen(false)} className="mobile-menu-link secondary">
                        <Heart size={18} />
                        <span>Wishlist</span>
                        {wishCount > 0 && <span className="mobile-badge">{wishCount}</span>}
                    </Link>
                    <Link to={user ? "/profile" : "/login"} onClick={() => setIsOpen(false)} className="mobile-menu-link secondary" style={{ color: user ? 'var(--color-text)' : 'var(--color-primary)' }}>
                        {user ? (
                            <>
                                <User size={18} />
                                <span>My Profile</span>
                            </>
                        ) : (
                            <>
                                <LogIn size={18} />
                                <span>Login</span>
                            </>
                        )}
                    </Link>
                </div>

                {/* Mobile Search */}
                <form onSubmit={(e) => { handleSearch(e); setIsOpen(false); }} style={{ width: '100%', position: 'relative', marginTop: '10px' }}>
                    <input
                        type="text"
                        placeholder="Search crafts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '10px 15px 10px 35px',
                            borderRadius: '12px',
                            border: '1px solid rgba(0,0,0,0.05)',
                            fontSize: '0.9rem',
                            background: 'rgba(255,255,255,0.5)'
                        }}
                    />
                    <Search
                        size={16}
                        style={{
                            position: 'absolute',
                            left: '12px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#888'
                        }}
                    />
                </form>
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

        /* Mobile Menu Styles */
        .mobile-menu {
            position: absolute;
            top: 100%;
            right: 0;
            width: 280px; 
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            padding: 24px;
            border-radius: 24px;
            margin-top: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08); /* Soft shadow */
            border: 1px solid rgba(255, 255, 255, 0.5);
            display: flex;
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
            opacity: 0;
            transform: translateY(-10px);
            pointer-events: none;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .mobile-menu.open {
            opacity: 1;
            transform: translateY(0);
            pointer-events: all;
        }

        .mobile-badge {
            background: var(--color-primary-light);
            color: var(--color-primary);
            font-size: 0.75rem;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 99px;
            margin-left: auto;
        }
    
        /* Mobile */
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .desktop-icons { display: none !important; }
          .mobile-toggle { display: block !important; }
          
          .mobile-menu-link { 
            width: 100%; 
            padding: 10px 16px; 
            border-radius: 12px;
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--color-text);
            transition: all 0.2s ease;
            text-decoration: none;
            display: flex;
            align-items: center;
          }
          
          .mobile-menu-link.active {
            background: rgba(0,0,0,0.03);
            color: var(--color-primary);
            font-weight: 600;
            position: relative;
          }
          .mobile-menu-link.active::before {
             content: '';
             position: absolute;
             left: 0;
             top: 50%;
             transform: translateY(-50%);
             height: 16px;
             width: 3px;
             background: var(--color-primary);
             border-radius: 0 4px 4px 0;
          }

          .mobile-menu-link:hover {
            background: rgba(0,0,0,0.02);
            color: var(--color-primary);
          }
          
          .mobile-menu-link.secondary {
             color: #666;
             gap: 12px;
             font-size: 0.9rem;
          }
          .mobile-menu-link.secondary:hover {
             background: rgba(0,0,0,0.02);
             color: var(--color-primary);
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
