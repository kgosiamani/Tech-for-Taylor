import MagicBento from '../components/MagicBento';
import ScrollVelocity from '../components/ScrollVelocity';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const heroCards = [
        {
            title: 'Smartphones',
            description: 'The cutting edge of mobile tech.',
            label: 'HOT',
            color: '#003366',
            colSpan: 2,
            rowSpan: 2,
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800',
            onClick: () => navigate('/products?category=smartphones')
        },
        {
            title: 'Laptops',
            description: 'Unmatched performance.',
            label: 'Pro',
            color: '#0c0818',
            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800',
            onClick: () => navigate('/products?category=laptops')
        },
        {
            title: 'Audio',
            description: 'Studio quality sound.',
            label: 'Hi-Fi',
            color: '#0c0818',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800',
            onClick: () => navigate('/products?category=audio')
        },
        {
            title: 'Trade-In',
            description: 'Upgrade the Taylor way.',
            label: 'Value',
            color: '#FF6B35',
            colSpan: 2,
            image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800',
            onClick: () => navigate('/trade-in')
        },
        {
            title: 'Accessories',
            description: 'Complete your setup.',
            label: 'Gear',
            color: '#0c0818',
            image: 'https://images.unsplash.com/photo-1544244015-0cd4b3ff2f91?q=80&w=800',
            onClick: () => navigate('/products?category=accessories')
        }
    ];

    const nextGenCards = [
        {
            title: 'Smart Home',
            description: 'Automate your life.',
            label: 'NEW',
            color: '#1a1a1a',
            colSpan: 2,
            image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800',
            onClick: () => navigate('/products?category=accessories')
        },
        {
            title: 'Gaming',
            description: 'Ultra performance.',
            label: 'PERFORMANCE',
            color: '#003366',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800',
            onClick: () => navigate('/products?category=laptops')
        },
        {
            title: 'Wearables',
            description: 'Track every beat.',
            label: 'HEALTH',
            color: '#FF6B35',
            image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=800',
            onClick: () => navigate('/products?category=watches')
        }
    ];

    return (
        <div className="home-page">
            {/* Scroll Velocity Marquee */}
            <div style={{ padding: '2rem 0', opacity: 0.9 }}>
                <ScrollVelocity
                    texts={['TECH FOR TAYLOR', 'PREMIUM GEAR', 'FAST DELIVERY', 'SOUTH AFRICA', 'EST. 2024']}
                    velocity={40}
                />
            </div>

            {/* Hero Bento Grid */}
            <section className="section container">
                <header style={{ marginBottom: '3rem' }}>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        fontWeight: 900,
                        letterSpacing: '-4px',
                        lineHeight: 0.9,
                        marginBottom: '1rem'
                    }}>
                        FUTURE<br />
                        <span style={{ color: 'var(--energetic-orange)' }}>READY.</span>
                    </h1>
                    <p style={{ color: 'var(--text-gray)', fontSize: '1.25rem', maxWidth: '600px' }}>
                        Curated tech for those who demand the best. South Africa's most premium retail experience.
                    </p>
                </header>

                <MagicBento
                    cards={heroCards}
                    enableStars={true}
                    enableSpotlight={true}
                    enableTilt={true}
                    spotlightRadius={250}
                />
            </section>

            {/* Next Gen Gear Section */}
            <section className="section container" style={{ borderTop: '1px solid #1a1a1a', marginTop: '4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-1px' }}>Next-Gen Gear</h2>
                        <p style={{ color: 'var(--text-gray)' }}>A glimpse into the future of technology.</p>
                    </div>
                </div>

                <MagicBento
                    cards={nextGenCards}
                    enableStars={false}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    spotlightRadius={300}
                />
            </section>

            {/* Value Props */}
            <section className="section container" style={{ background: 'linear-gradient(180deg, transparent, var(--surface-dark))', borderRadius: 'var(--radius-lg)', padding: '6rem 2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
                    <div className="value-prop">
                        <span style={{ fontSize: '3rem' }}>📦</span>
                        <h3 style={{ fontSize: '1.75rem', margin: '1rem 0 0.5rem', fontWeight: 700 }}>Swift Ship</h3>
                        <p style={{ color: 'var(--text-gray)', lineHeight: 1.6 }}>Nationwide express delivery in 48 hours. Fully tracked, fully insured.</p>
                    </div>
                    <div className="value-prop">
                        <span style={{ fontSize: '3rem' }}>🛡️</span>
                        <h3 style={{ fontSize: '1.75rem', margin: '1rem 0 0.5rem', fontWeight: 700 }}>TaylorCare</h3>
                        <p style={{ color: 'var(--text-gray)', lineHeight: 1.6 }}>Our legendary 12-month warranty comes standard on every single device.</p>
                    </div>
                    <div className="value-prop">
                        <span style={{ fontSize: '3rem' }}>💎</span>
                        <h3 style={{ fontSize: '1.75rem', margin: '1rem 0 0.5rem', fontWeight: 700 }}>Premium Only</h3>
                        <p style={{ color: 'var(--text-gray)', lineHeight: 1.6 }}>We don't do budget. We only stock the highest quality tech on the market.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
