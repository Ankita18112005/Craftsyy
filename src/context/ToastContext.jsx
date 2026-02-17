import { createContext, useState, useCallback } from 'react';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState(null);

    const showToast = useCallback((message) => {
        setToast(message);
        setTimeout(() => setToast(null), 2200);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toast && (
                <div style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    background: 'white',
                    color: 'var(--color-text)',
                    padding: '16px 28px',
                    borderRadius: '16px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                    zIndex: 9999,
                    fontSize: '1rem',
                    fontWeight: '600',
                    border: '2px solid var(--color-secondary)',
                    animation: 'toastSlideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    {toast}
                    <style>{`
                        @keyframes toastSlideIn {
                            from { transform: translateY(30px) scale(0.9); opacity: 0; }
                            to { transform: translateY(0) scale(1); opacity: 1; }
                        }
                    `}</style>
                </div>
            )}
        </ToastContext.Provider>
    );
};
