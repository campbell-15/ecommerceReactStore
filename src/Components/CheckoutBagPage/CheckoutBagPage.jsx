import React from 'react';
import { useState } from "react";

const CheckoutBagPage = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Product 1",
            subtitle: "Subtitle 1",
            description: "Description of Product 1",
            rating: 4.5,
            price: "$10",
            image: "https://via.placeholder.com/100"
            },
            {
            id: 2,
            title: "Product 2",
            subtitle: "Subtitle 2",
            description: "Description of Product 2",
            rating: 3.8,
            price: "$15",
            image: "https://via.placeholder.com/100"
            },
            // Add more products as needed
        ]);
    return (
        <div className="check-your-bag-container">
            <div className="bag-items">
                {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title} className="product-image" />
                    <div className="product-details">
                    <h2>{product.title}</h2>
                    <h3>{product.subtitle}</h3>
                    <p>{product.description}</p>
                    <div className="rating">
                        {product.rating}/5
                    </div>
                    <div className="price">
                        <span>{product.price}</span>
                        <input type="number" defaultValue={1} min={1} />
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    )
}

export default CheckoutBagPage
