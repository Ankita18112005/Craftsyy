import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import Button from '../components/Button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
        navigate('/profile'); // Redirect after login
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            background: 'var(--color-primary-light)',
            backgroundImage: 'radial-gradient(#fee2e2 2px, transparent 2px)',
            backgroundSize: '24px 24px',
            padding: '40px 20px'
        }}>
            <div className="login-card glass" style={{
                padding: '48px 40px 40px',
                borderRadius: 'var(--radius-lg)',
                width: '100%',
                maxWidth: '420px',
                position: 'relative'
            }}>
                {/* Decorative Tape */}
                <div style={{
                    position: 'absolute', top: -12, left: '50%',
                    width: '120px', height: '35px', background: 'rgba(255,255,255,0.4)',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)', transform: 'translateX(-50%) rotate(-2deg)'
                }}></div>

                <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginBottom: '8px' }}>
                    Welcome Back! 🎀
                </h2>
                <p style={{ textAlign: 'center', color: 'var(--color-text-light)', marginBottom: '30px' }}>
                    Sign in to check your order history.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-text)', fontSize: '0.9rem' }}>Email</label>
                        <input
                            type="email"
                            required
                            placeholder="hello@craftsyyy.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%', padding: '12px 16px', borderRadius: '12px',
                                border: '2px solid #eee', background: '#f9f9f9',
                                fontSize: '0.95rem', fontFamily: 'var(--font-body)',
                                outline: 'none', transition: 'all 0.3s ease',
                                boxSizing: 'border-box'
                            }}
                            onFocus={(e) => { e.target.style.borderColor = 'var(--color-primary)'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 4px var(--color-primary-light)'; }}
                            onBlur={(e) => { e.target.style.borderColor = '#eee'; e.target.style.background = '#f9f9f9'; e.target.style.boxShadow = 'none'; }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-text)', fontSize: '0.9rem' }}>Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    width: '100%', padding: '12px 44px 12px 16px', borderRadius: '12px',
                                    border: '2px solid #eee', background: '#f9f9f9',
                                    fontSize: '0.95rem', fontFamily: 'var(--font-body)',
                                    outline: 'none', transition: 'all 0.3s ease',
                                    boxSizing: 'border-box'
                                }}
                                onFocus={(e) => { e.target.style.borderColor = 'var(--color-primary)'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 4px var(--color-primary-light)'; }}
                                onBlur={(e) => { e.target.style.borderColor = '#eee'; e.target.style.background = '#f9f9f9'; e.target.style.boxShadow = 'none'; }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
                                    background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
                                    color: '#999', display: 'flex', alignItems: 'center', transition: 'color 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <Button type="submit" style={{ width: '100%', marginTop: '10px' }}>
                        Sign In
                    </Button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                    New to Craftsyyy? <Link to="/signup" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Create Account</Link>
                </div>
            </div>

            <style>{`
                @media (max-width: 480px) {
                    .login-card {
                        padding: 32px 20px 28px !important;
                    }
                }
                @media (max-width: 360px) {
                    .login-card {
                        padding: 28px 16px 24px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Login;
