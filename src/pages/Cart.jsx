import React from 'react';
import { useCart } from '../context/CartContext';
import { Icons } from '../components/ui/Icons';
import { Link } from 'react-router-dom';
import '../index.css';

const Cart = () => {
    const { items, removeItem, addItem, clearCart } = useCart();

    const formatPrice = (price) => {
        return "R " + price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 5000 ? 0 : 250;
    const total = subtotal + shipping;

    if (items.length === 0) {
        return (
            <div className="container section text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Icons.Cart size={80} style={{ opacity: 0.1, marginBottom: '2rem' }} />
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Empty Cart.</h1>
                <p style={{ color: 'var(--text-gray)', marginBottom: '2rem' }}>Looks like you haven't added anything premium yet.</p>
                <Link to="/products" style={{ background: 'var(--energetic-orange)', color: '#fff', padding: '1rem 2.5rem', borderRadius: 'var(--radius-sm)', fontWeight: 600 }}>Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="container section">
            <h1 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-2px', marginBottom: '3rem' }}>YOUR CART.</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '4rem', alignItems: 'start' }}>
                {/* Item List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {items.map(item => (
                        <div key={item.id} style={{ display: 'flex', gap: '2rem', padding: '1.5rem', background: 'var(--surface-dark)', borderRadius: 'var(--radius-lg)', border: '1px solid #1a1a1a' }}>
                            <img src={item.image} alt={item.name} style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{item.name}</h3>
                                    <button onClick={() => removeItem(item.id)} style={{ color: 'var(--text-gray)', border: 'none', background: 'none' }}>
                                        <Icons.Close size={20} />
                                    </button>
                                </div>
                                <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Premium Delivery Included</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#060010', padding: '4px 12px', borderRadius: '99px' }}>
                                        <button onClick={() => removeItem(item.id)} style={{ fontSize: '1.2rem', color: '#fff' }}>-</button>
                                        <span style={{ fontWeight: 600 }}>{item.quantity}</span>
                                        <button onClick={() => addItem(item)} style={{ fontSize: '1.2rem', color: '#fff' }}>+</button>
                                    </div>
                                    <p style={{ fontWeight: 700, fontSize: '1.25rem' }}>{formatPrice(item.price * item.quantity)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button onClick={clearCart} style={{ color: 'var(--text-gray)', textAlign: 'left', background: 'none', border: 'none', fontSize: '0.9rem', width: 'fit-content' }}>Clear Cart</button>
                </div>

                {/* Summary */}
                <div style={{ background: 'var(--surface-dark)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--energetic-orange)' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>Summary</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: 'var(--text-gray)' }}>Subtotal</span>
                            <span>{formatPrice(subtotal)}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: 'var(--text-gray)' }}>Shipping</span>
                            <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
                        </div>
                        <div style={{ margin: '1.5rem 0', borderTop: '1px solid #1a1a1a', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '1.5rem' }}>
                            <span>Total</span>
                            <span style={{ color: 'var(--energetic-orange)' }}>{formatPrice(total)}</span>
                        </div>
                        <button style={{ background: 'var(--energetic-orange)', color: '#fff', border: 'none', padding: '1.25rem', borderRadius: 'var(--radius-sm)', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '1rem' }}>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
