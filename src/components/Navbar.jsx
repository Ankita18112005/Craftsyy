import { useState } from 'react';
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { useAuth } from '../context/AuthContext';
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

                    {/* Profile Icon - Last item */}
                    <Link to={user ? "/profile" : "/login"} className="icon-hover" style={{ color: 'var(--color-text)', position: 'relative' }}>
                        {user ? (
                            <div style={{
                                width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden',
                                border: '2px solid var(--color-primary)', padding: '2px'
                            }}>
                                <img src={user.avatar} alt="Me" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                            </div>
                        ) : (
                            <User size={24} />
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
                    <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="mobile-menu-link" style={{ fontSize: '1.2rem' }}>
                        {link.name}
                    </Link>
                ))}
                {/* Mobile Search */}
                <form onSubmit={(e) => { handleSearch(e); setIsOpen(false); }} style={{ width: '100%', position: 'relative', marginTop: '10px' }}>
                    <input
                        type="text"
                        placeholder="Search crafts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '12px 15px 12px 40px',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid #eee',
                            fontSize: '1rem'
                        }}
                    />
                    <Search
                        size={20}
                        style={{
                            position: 'absolute',
                            left: '12px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#999'
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

        /* Mobile */
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .desktop-search { display: none !important; }
          .mobile-toggle { display: block !important; }
          
          .mobile-menu-link { 
            width: 100%; 
            padding: 16px !important; 
            text-align: center; 
            border-radius: 12px;
            font-weight: 600;
            transition: all 0.2s ease;
          }
          .mobile-menu-link:hover {
            background: var(--color-primary-light);
            color: var(--color-primary);
            transform: scale(1.02);
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
