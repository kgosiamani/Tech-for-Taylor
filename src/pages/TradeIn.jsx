import React from 'react';
import '../index.css';

const TradeIn = () => (
    <div className="container section">
        <h1 className="text-center" style={{ marginBottom: '2rem' }}>Trade‑In</h1>
        <p className="text-center" style={{ color: 'var(--text-gray)' }}>
            Get an instant valuation for your old device. Enter details below.
        </p>
        {/* Simple placeholder form */}
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <input type="text" placeholder="Device model" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #333', background: 'var(--surface-dark)', color: 'var(--text-white)', marginBottom: '0.5rem' }} />
            <input type="text" placeholder="Condition (e.g., Good, Fair)" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #333', background: 'var(--surface-dark)', color: 'var(--text-white)', marginBottom: '0.5rem' }} />
            <button style={{ width: '100%', padding: '0.75rem', background: 'var(--energetic-orange)', color: '#fff', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>Get Quote</button>
        </div>
    </div>
);

export default TradeIn;
