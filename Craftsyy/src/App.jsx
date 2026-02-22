import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ToastProvider } from './context/ToastContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import { AuthProvider } from './context/AuthContext';
import WhatsAppButton from './components/WhatsAppButton';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <CartProvider>
                    <WishlistProvider>
                        <ToastProvider>
                            <ScrollToTop />
                            <div className="app" style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: '100vh',
                                backgroundColor: 'var(--color-primary-light)'
                            }}>
                                <Navbar />
                                <main style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/shop" element={<Shop />} />
                                        <Route path="/product/:id" element={<ProductDetails />} />
                                        <Route path="/about" element={<About />} />
                                        <Route path="/contact" element={<Contact />} />
                                        <Route path="/cart" element={<Cart />} />
                                        <Route path="/wishlist" element={<Wishlist />} />
                                        <Route path="/profile" element={<Profile />} />
                                        <Route path="/login" element={<Login />} />
                                        <Route path="/signup" element={<Signup />} />
                                        <Route path="/checkout" element={<Checkout />} />
                                    </Routes>
                                </main>
                                <Footer />
                            </div>
                        </ToastProvider>
                    </WishlistProvider>
                </CartProvider>
            </AuthProvider>
            <WhatsAppButton />
        </Router>
    );
};

export default App;
