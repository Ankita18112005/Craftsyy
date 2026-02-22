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

    const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:5000');

    const login = async (email, password) => {
        try {
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                const loggedInUser = {
                    id: 'jwt-' + Date.now(),
                    name: email.split('@')[0],
                    email: email,
                    avatar: `https://api.dicebear.com/7.x/notionists/svg?seed=${email}`,
                    token: data.token,
                    joined: new Date().toLocaleDateString()
                };
                setUser(loggedInUser);
                return { success: true };
            } else {
                return { success: false, error: data.message };
            }
        } catch (error) {
            console.error("Login error:", error);
            return { success: false, error: "Network error. Make sure backend is running." };
        }
    };

    const signup = async (name, email, password) => {
        try {
            const response = await fetch(`${API_URL}/api/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                const newUser = {
                    id: 'jwt-' + Date.now(),
                    name: name,
                    email: email,
                    avatar: `https://api.dicebear.com/7.x/notionists/svg?seed=${name}`,
                    token: data.token,
                    joined: new Date().toLocaleDateString()
                };
                setUser(newUser);
                return { success: true };
            } else {
                return { success: false, error: data.message };
            }
        } catch (error) {
            console.error("Signup error:", error);
            return { success: false, error: "Network error. Make sure backend is running." };
        }
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
