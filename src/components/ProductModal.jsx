import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './ProductModal.css';

const ProductModal = ({ product, isOpen, onClose }) => {
    const { addItem } = useCart();

    if (!product) return null;

    const handleAdd = () => {
        addItem(product);
        onClose();
    };

    return (
        <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>
                <img src={product.image} alt={product.name} className="modal-image" />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p className="modal-price">R {product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                <button className="add-to-cart" onClick={handleAdd}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductModal;
