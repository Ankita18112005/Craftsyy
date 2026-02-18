import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // Initialize from localStorage to persist 'login' across refreshes
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('craftsyy_user');
        return saved ? JSON.parse(saved) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('craftsyy_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('craftsyy_user');
        }
    }, [user]);

    const login = (email, password) => {
        // Mock login - accept any email/password for demo
        // In a real app, you'd validate against a backend
        const mockUser = {
            id: 'u1',
            name: email.split('@')[0], // Use part of email as name
            email: email,
            avatar: `https://api.dicebear.com/7.x/notionists/svg?seed=${email}`, // Cute avatar
            joined: new Date().toLocaleDateString()
        };
        setUser(mockUser);
        return true;
    };

    const signup = (name, email, password) => {
        // Mock signup
        const newUser = {
            id: 'u' + Date.now(),
            name: name,
            email: email,
            avatar: `https://api.dicebear.com/7.x/notionists/svg?seed=${name}`,
            joined: new Date().toLocaleDateString()
        };
        setUser(newUser);
        return true;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
