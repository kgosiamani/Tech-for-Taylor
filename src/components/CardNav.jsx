import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Icons } from './ui/Icons';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CardNav.css';

const CardNav = ({
    logo,
    logoAlt = 'Logo',
    items,
    className = '',
    ease = 'power3.out',
    baseColor = 'rgba(12, 8, 24, 0.8)', // Glassmorphism dark
    menuColor,
    buttonBgColor,
    buttonTextColor
}) => {
    const { items: cartItems } = useCart();
    const navigate = useNavigate();
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef(null);
    const cardsRef = useRef([]);
    const tlRef = useRef(null);

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const calculateHeight = () => {
        const navEl = navRef.current;
        if (!navEl) return 260;

        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) {
            const contentEl = navEl.querySelector('.card-nav-content');
            if (contentEl) {
                const originalStyles = {
                    visibility: contentEl.style.visibility,
                    pointerEvents: contentEl.style.pointerEvents,
                    position: contentEl.style.position,
                    height: contentEl.style.height
                };

                contentEl.style.visibility = 'visible';
                contentEl.style.pointerEvents = 'auto';
                contentEl.style.position = 'static';
                contentEl.style.height = 'auto';

                const contentHeight = contentEl.scrollHeight;

                contentEl.style.visibility = originalStyles.visibility;
                contentEl.style.pointerEvents = originalStyles.pointerEvents;
                contentEl.style.position = originalStyles.position;
                contentEl.style.height = originalStyles.height;

                return 80 + contentHeight + 20;
            }
        }
        return 300;
    };

    const createTimeline = () => {
        const navEl = navRef.current;
        if (!navEl) return null;
        gsap.set(navEl, { height: 80, overflow: 'hidden' });
        gsap.set(cardsRef.current, { y: 50, opacity: 0 });
        const tl = gsap.timeline({ paused: true });
        tl.to(navEl, { height: calculateHeight, duration: 0.4, ease });
        tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.2');
        return tl;
    };

    useLayoutEffect(() => {
        const tl = createTimeline();
        tlRef.current = tl;
        return () => tl?.kill();
    }, [ease, items]);

    const toggleMenu = () => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tl.invalidate().play();
        } else {
            setIsHamburgerOpen(false);
            tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
            tl.reverse();
        }
    };

    const handleLinkClick = (href) => {
        setIsHamburgerOpen(false);
        tlRef.current?.reverse();
        navigate(href);
    };

    const setCardRef = i => el => {
        if (el) cardsRef.current[i] = el;
    };

    return (
        <div className={`card-nav-container ${className}`}>
            <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: baseColor }}>
                <div className="card-nav-top">
                    <div
                        className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        role="button"
                    >
                        <div className="hamburger-line" />
                        <div className="hamburger-line" />
                    </div>

                    <Link to="/" className="logo-container" onClick={() => handleLinkClick('/')}>
                        <img src={logo} alt={logoAlt} className="logo" />
                    </Link>

                    <div className="nav-actions">
                        <button className="icon-btn" aria-label="Search"><Icons.Search size={24} weight="regular" /></button>
                        <Link to="/cart" className="icon-btn cart-btn" onClick={() => { setIsHamburgerOpen(false); tlRef.current?.reverse(); }}>
                            <Icons.Cart size={24} weight="regular" />
                            {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
                        </Link>
                    </div>
                </div>

                <div className="card-nav-content" aria-hidden={!isExpanded}>
                    {(items || []).map((item, idx) => (
                        <div
                            key={`${item.label}-${idx}`}
                            className="nav-card"
                            ref={setCardRef(idx)}
                            style={{ backgroundColor: item.bgColor, color: item.textColor }}
                        >
                            <div className="nav-card-label">{item.label}</div>
                            <div className="nav-card-links">
                                {item.links?.map((lnk, i) => (
                                    <button
                                        key={`${lnk.label}-${i}`}
                                        className="nav-card-link"
                                        onClick={() => handleLinkClick(lnk.href)}
                                        style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: 'inherit', padding: 0 }}
                                    >
                                        <Icons.ArrowRight className="nav-card-link-icon" weight="bold" />
                                        {lnk.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default CardNav;
