import React from 'react';
import '../index.css';

const Delivery = () => (
    <div className="container section">
        <h1 className="text-center" style={{ marginBottom: '2rem' }}>Delivery Tracker</h1>
        <p className="text-center" style={{ color: 'var(--text-gray)' }}>
            Track your order by entering the tracking number below.
        </p>
        {/* Placeholder form */}
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <input type="text" placeholder="Tracking number" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #333', background: 'var(--surface-dark)', color: 'var(--text-white)' }} />
            <button style={{ marginTop: '0.5rem', width: '100%', padding: '0.75rem', background: 'var(--energetic-orange)', color: '#fff', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>Track</button>
        </div>
    </div>
);

export default Delivery;
