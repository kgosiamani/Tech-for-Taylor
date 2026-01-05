import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = product => {
        setItems(prev => {
            const existing = prev.find(i => i.id === product.id);
            if (existing) {
                return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeItem = productId => {
        setItems(prev => prev.filter(i => i.id !== productId));
    };

    const clearCart = () => setItems([]);

    const value = { items, addItem, removeItem, clearCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
