import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products';
import ProductModal from '../components/ProductModal';
import '../index.css';

const Products = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const categoryFilter = query.get('category');

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredProducts = categoryFilter
        ? products.filter(p => p.category === categoryFilter)
        : products;

    const formatPrice = (price) => {
        return "R " + price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
        <div className="container section">
            <h1 className="text-center" style={{
                fontSize: '3rem',
                marginBottom: '3rem',
                fontWeight: 800,
                letterSpacing: '-1px'
            }}>
                {categoryFilter ? categoryFilter.toUpperCase() : 'ALL GEAR'}
            </h1>

            <div className="grid" style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2rem'
            }}>
                {filteredProducts.map(product => (
                    <div
                        key={product.id}
                        className="product-card"
                        onClick={() => handleOpenModal(product)}
                        style={{
                            background: 'var(--surface-dark)',
                            borderRadius: 'var(--radius-lg)',
                            padding: '1.5rem',
                            color: 'var(--text-white)',
                            boxShadow: 'var(--shadow-subtle)',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            border: '1px solid #1a1a1a',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{ position: 'relative', marginBottom: '1.5rem', overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{
                                    width: '100%',
                                    aspectRatio: '1/1',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                                className="product-image-hover"
                            />
                        </div>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>{product.name}</h2>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', marginBottom: '1.5rem', height: '3em', overflow: 'hidden' }}>{product.description}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--energetic-orange)' }}>{formatPrice(product.price)}</p>
                            <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px' }}>Details →</span>
                        </div>
                    </div>
                ))}
            </div>

            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            <style>{`
                .product-card:hover {
                    transform: translateY(-8px);
                    border-color: var(--energetic-orange);
                    box-shadow: 0 12px 24px rgba(0,0,0,0.5);
                }
                .product-card:hover .product-image-hover {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
};

export default Products;
