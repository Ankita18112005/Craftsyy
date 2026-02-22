import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Package, MapPin, Heart, LogOut, Settings } from 'lucide-react';
import Button from '../components/Button';

const Profile = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
        return null;
    }

    const mockOrders = [
        { id: '#ORD-9281', date: 'Feb 15, 2026', total: '$45.00', status: 'Delivered', items: 'Crochet Bunny (x1)' },
        { id: '#ORD-8823', date: 'Jan 28, 2026', total: '$22.50', status: 'Shipped', items: 'Clay Earring Set (x1)' }
    ];

    return (
        <div className="container section" style={{ flex: 1, paddingBottom: '60px' }}>
            <div className="profile-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
                gap: '40px',
                alignItems: 'start'
            }}>
                {/* User Card */}
                <div className="profile-card glass hover-scale" style={{ padding: '40px', borderRadius: 'var(--radius-lg)', textAlign: 'center', position: 'relative' }}>
                    <div style={{
                        width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px',
                        border: '4px solid white', boxShadow: 'var(--shadow-md)'
                    }}>
                        <img src={user.avatar} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginBottom: '5px' }}>{user.name}</h2>
                    <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginBottom: '20px' }}>{user.email}</p>
                    <div className="profile-actions" style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        <Button variant="outline" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Edit Profile</Button>
                        <Button variant="secondary" onClick={() => { logout(); navigate('/'); }} style={{ padding: '8px 16px', fontSize: '0.9rem', color: 'var(--color-primary)' }}>
                            <LogOut size={16} style={{ marginRight: '5px' }} /> Sign Out
                        </Button>
                    </div>
                </div>

                {/* Dashboard Stats/Menu */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <h3 className="dashboard-title" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '10px' }}>
                        Dashboard
                    </h3>

                    {/* Feature Grid */}
                    <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                        <div className="glass hover-scale" style={{ padding: '20px', borderRadius: 'var(--radius-md)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                            <Package size={32} color="var(--color-primary)" />
                            <span style={{ fontWeight: '600' }}>Orders</span>
                        </div>
                        <div className="glass hover-scale" style={{ padding: '20px', borderRadius: 'var(--radius-md)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }} onClick={() => navigate('/wishlist')}>
                            <Heart size={32} color="var(--color-love)" />
                            <span style={{ fontWeight: '600' }}>Wishlist</span>
                        </div>
                        <div className="glass hover-scale" style={{ padding: '20px', borderRadius: 'var(--radius-md)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                            <MapPin size={32} color="var(--color-tertiary)" />
                            <span style={{ fontWeight: '600' }}>Addresses</span>
                        </div>
                        <div className="glass hover-scale" style={{ padding: '20px', borderRadius: 'var(--radius-md)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                            <Settings size={32} color="var(--color-text-light)" />
                            <span style={{ fontWeight: '600' }}>Settings</span>
                        </div>
                    </div>

                    {/* Recent Orders List */}
                    <div className="orders-card glass" style={{ padding: '30px', borderRadius: 'var(--radius-lg)', marginTop: '20px' }}>
                        <h4 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            Recent Orders
                            <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', cursor: 'pointer' }}>View All</span>
                        </h4>

                        {mockOrders.map((order, i) => (
                            <div key={order.id} className="order-row" style={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                padding: '15px 0', borderBottom: i !== mockOrders.length - 1 ? '1px dashed #eee' : 'none'
                            }}>
                                <div>
                                    <div style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>{order.id}</div>
                                    <div style={{ fontSize: '0.85rem', color: '#999' }}>{order.items}</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontWeight: 'bold' }}>{order.total}</div>
                                    <span style={{
                                        fontSize: '0.75rem', padding: '4px 10px', borderRadius: '99px',
                                        background: order.status === 'Delivered' ? '#dcfce7' : '#fff7ed',
                                        color: order.status === 'Delivered' ? '#166534' : '#c2410c',
                                        fontWeight: '600'
                                    }}>
                                        {order.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .profile-grid { gap: 25px !important; }
                    .profile-card { padding: 30px 20px !important; }
                    .dashboard-title { font-size: 1.3rem !important; }
                    .orders-card { padding: 20px !important; }
                }
                @media (max-width: 480px) {
                    .profile-card { padding: 24px 16px !important; }
                    .profile-actions { gap: 8px !important; }
                    .profile-actions button { flex: 1; min-width: 0; }
                    .dashboard-grid { gap: 12px !important; }
                    .dashboard-grid > div { padding: 16px !important; }
                    .orders-card { padding: 16px !important; }
                    .order-row { flex-wrap: wrap; gap: 8px; }
                }
            `}</style>
        </div>
    );
};

export default Profile;
