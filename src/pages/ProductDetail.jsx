import React from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';

const ProductDetail = () => {
    const { id } = useParams();
    // In a real app, you'd fetch product data by id.
    return (
        <div className="container section">
            <h1>Product Detail</h1>
            <p>Details for product ID: {id}</p>
        </div>
    );
};

export default ProductDetail;
