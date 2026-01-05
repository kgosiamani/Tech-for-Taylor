import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Icons } from './ui/Icons';
import '../index.css';

const formatPrice = price => {
    // Ensure two decimals and thousand separator
    return `R ${price.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

const ProductCard = ({ product }) => {
    const [expanded, setExpanded] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        if (!cardRef.current) return;
        if (expanded) {
            gsap.to(cardRef.current, { height: 'auto', duration: 0.4, ease: 'power2.out' });
        } else {
            gsap.to(cardRef.current, { height: 300, duration: 0.4, ease: 'power2.out' }); // collapsed height
        }
    }, [expanded]);

    const toggle = () => setExpanded(prev => !prev);

    return (
        <div
            ref={cardRef}
            className="card"
            style={{
                background: 'var(--surface-dark)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                color: 'var(--text-white)',
                boxShadow: 'var(--shadow-subtle)',
                overflow: 'hidden',
                cursor: 'pointer',
                height: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
            onClick={toggle}
        >
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: 'var(--radius-sm)', marginBottom: '0.5rem' }} />
            <h2 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>{product.name}</h2>
            <p style={{ color: 'var(--text-gray)', flexGrow: 1 }}>{product.description}</p>
            <p style={{ fontWeight: '600', marginTop: '0.5rem' }}>{formatPrice(product.price)}</p>
            {expanded && (
                <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <p style={{ margin: 0, color: 'var(--text-gray)' }}>Rating: {product.rating} ★</p>
                        <p style={{ margin: 0, color: 'var(--text-gray)' }}>{product.reviews} reviews</p>
                    </div>
                    <button
                        style={{
                            background: 'var(--energetic-orange)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 'var(--radius-sm)',
                            padding: '0.5rem 1rem',
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}
                        onClick={e => {
                            e.stopPropagation();
                            // placeholder add‑to‑cart action
                            console.log('Add to cart', product.id);
                        }}
                    >
                        <Icons.Cart size={20} weight="regular" style={{ marginRight: '0.5rem' }} /> Add to Cart
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
