import { Outlet, useLocation, Link } from 'react-router-dom';
import CardNav from './CardNav';
import ClickSpark from './ClickSpark';
import logoFull from '../assets/branding/logo-full.png';
import { Icons } from './ui/Icons';

const NAV_ITEMS = [
    {
        label: 'Home',
        bgColor: '#060010',
        textColor: '#ffffff',
        links: [
            { label: 'Go Home', href: '/' }
        ]
    },
    {
        label: 'Shop',
        bgColor: '#0c0818',
        textColor: '#ffffff',
        links: [
            { label: 'Smartphones', href: '/products?category=smartphones' },
            { label: 'Laptops', href: '/products?category=laptops' },
            { label: 'Audio', href: '/products?category=audio' },
            { label: 'Accessories', href: '/products?category=accessories' }
        ]
    },
    {
        label: 'Services',
        bgColor: '#003366',
        textColor: '#ffffff',
        links: [
            { label: 'Trade-In', href: '/trade-in' },
            { label: 'Delivery Tracker', href: '/delivery' },
            { label: 'Repairs', href: '/repairs' }
        ]
    },
    {
        label: 'Support',
        bgColor: '#FF6B35',
        textColor: '#ffffff',
        links: [
            { label: 'Contact Us', href: '/contact' },
            { label: 'FAQs', href: '/faq' },
            { label: 'Returns', href: '/returns' }
        ]
    }
];

const Layout = () => {
    const location = useLocation();

    return (
        <ClickSpark sparkColor="#8400ff" sparkCount={4} sparkRadius={20}>
            <div className="app-layout">
                <CardNav
                    logo={logoFull}
                    logoAlt="Tech for Taylor"
                    items={NAV_ITEMS}
                    menuColor="#ffffff"
                    buttonBgColor="#FF6B35"
                    buttonTextColor="#ffffff"
                />

                <main className="main-content" style={{ minHeight: '100vh', paddingTop: '100px' }}>
                    {/* Floating Home Button for deep navigation UX */}
                    {location.pathname !== '/' && (
                        <Link to="/" style={{ position: 'fixed', bottom: '2rem', right: '2rem', background: 'var(--energetic-orange)', padding: '1rem', borderRadius: '50%', color: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', zIndex: 100, display: 'flex' }}>
                            <Icons.Home size={24} weight="bold" />
                        </Link>
                    )}
                    <Outlet />
                </main>

                <footer style={{
                    padding: '4rem 2rem',
                    background: '#0c0818',
                    borderTop: '1px solid #1a1a1a',
                    marginTop: '4rem',
                    textAlign: 'center',
                    color: '#666'
                }}>
                    <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                        <p style={{ fontSize: '0.9rem' }}>&copy; 2024 Tech for Taylor. Premium Tech Retailer.</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                            Developed by <span style={{ color: '#fff' }}>kgosi</span> from
                            <a href="https://sunfacestudios.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--energetic-orange)' }}>
                                Sunface Studios
                                <img src="/src/assets/sunface.png" alt="Sunface Studios" style={{ height: '20px', width: '20px', objectFit: 'contain' }} />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </ClickSpark>
    );
};

export default Layout;
