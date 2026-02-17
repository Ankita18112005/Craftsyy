import { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

const WISH_KEY = 'handcrafttt_wishlist';

const loadWishlist = () => {
    try {
        const data = localStorage.getItem(WISH_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(loadWishlist);

    useEffect(() => {
        localStorage.setItem(WISH_KEY, JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const toggleWishlist = (product) => {
        setWishlistItems(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) {
                return prev.filter(item => item.id !== product.id);
            }
            return [...prev, { id: product.id, name: product.name, image: product.image, price: product.price }];
        });
        return !wishlistItems.some(item => item.id === product.id);
    };

    const removeFromWishlist = (productId) => {
        setWishlistItems(prev => prev.filter(item => item.id !== productId));
    };

    const isInWishlist = (productId) =>
        wishlistItems.some(item => item.id === productId);

    const getWishlistCount = () => wishlistItems.length;

    return (
        <WishlistContext.Provider value={{
            wishlistItems, toggleWishlist, removeFromWishlist, isInWishlist, getWishlistCount
        }}>
            {children}
        </WishlistContext.Provider>
    );
};
