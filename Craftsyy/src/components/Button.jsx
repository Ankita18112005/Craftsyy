const Button = ({ children, variant = 'primary', onClick, style, className }) => {
    const baseStyle = {
        padding: '12px 28px',
        borderRadius: '99px',
        fontSize: '1rem',
        fontWeight: '600',
        letterSpacing: '0.5px',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        position: 'relative',
        overflow: 'hidden'
    };

    const variants = {
        primary: {
            background: 'var(--color-primary)',
            color: 'white',
            boxShadow: '0 4px 6px rgba(255, 107, 107, 0.3)',
            border: '2px solid transparent'
        },
        secondary: {
            background: 'white',
            color: 'var(--color-text)',
            border: '2px solid var(--color-secondary)',
            boxShadow: '0 4px 0 var(--color-secondary)' /* 3D effect */
        },
        outline: {
            background: 'transparent',
            color: 'var(--color-primary)',
            border: '2px dashed var(--color-primary)' /* Hand-drawn look */
        }
    };

    return (
        <button
            onClick={onClick}
            className={`btn-${variant}${className ? ` ${className}` : ''}`}
            style={{ ...baseStyle, ...variants[variant], ...style }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                if (variant === 'primary') e.currentTarget.style.boxShadow = '0 8px 12px rgba(255, 107, 107, 0.4)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                if (variant === 'primary') e.currentTarget.style.boxShadow = '0 4px 6px rgba(255, 107, 107, 0.3)';
            }}
        >
            {children}
        </button>
    );
};

export default Button;
