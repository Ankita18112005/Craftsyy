import { Link } from 'react-router-dom';

const CategoryCard = ({ name, icon, color = 'white', rotate = '0deg', image, to = '/shop' }) => {
    return (
        <Link to={to} style={{ textDecoration: 'none' }}>
            <div
                className="category-card"
                style={{
                    background: color,
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    border: '2px solid white',
                    transform: `rotate(${rotate})`,
                    position: 'relative',
                    overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `scale(1.05) rotate(${rotate})`;
                    e.currentTarget.style.borderColor = 'var(--color-secondary)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                    e.currentTarget.querySelector('.view-text').style.opacity = '1';
                    e.currentTarget.querySelector('.view-text').style.transform = 'translateY(0)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `rotate(${rotate})`;
                    e.currentTarget.style.borderColor = 'white';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    e.currentTarget.querySelector('.view-text').style.opacity = '0';
                    e.currentTarget.querySelector('.view-text').style.transform = 'translateY(10px)';
                }}
            >
                {image ? (
                    <div style={{ position: 'relative' }}>
                        <img src={image} alt={name} className="category-card-img" style={{
                            width: '100%',
                            aspectRatio: '4/3',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                            display: 'block'
                        }} />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '30px',
                            background: `linear-gradient(to bottom, transparent, ${color})`,
                            pointerEvents: 'none'
                        }}></div>
                    </div>
                ) : (
                    <div style={{ fontSize: '3rem', padding: '30px 0 10px' }}>{icon}</div>
                )}
                <div style={{ padding: image ? '10px 16px 14px' : '8px 16px 18px', textAlign: 'center', width: '100%' }}>
                    <h3 style={{ margin: 0, fontWeight: '700', color: 'var(--color-text)', fontSize: '1.05rem' }}>
                        {icon} {name}
                    </h3>
                    <span className="view-text" style={{
                        opacity: 0,
                        transform: 'translateY(6px)',
                        transition: 'all 0.3s ease',
                        color: 'var(--color-primary)',
                        fontWeight: 'bold',
                        fontSize: '0.85rem',
                        display: 'inline-block',
                        marginTop: '4px'
                    }}>
                        View &rarr;
                    </span>
                </div>
            </div>

            <style>{`
                .category-card {
                    min-width: 0; /* prevent grid blowout */
                }
                @media (max-width: 768px) {
                    .category-card h3 { font-size: 0.95rem !important; }
                }
                @media (max-width: 480px) {
                    .category-card h3 { font-size: 0.85rem !important; }
                    .category-card-img { aspect-ratio: 1/1 !important; }
                }
            `}</style>
        </Link>
    );
};

export default CategoryCard;
