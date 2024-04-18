import React from 'react';
import { useState } from "react";
import './CheckoutBagPage.css';
import TextRating from '../Rating/Rating';

const CheckoutBagPage = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Dell XPS 13",
            subtitle: "White",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ",
            rating: 4.5,
            price: 1799.99,
            quantity: 1,
            image: "/Assets/ProductImages/Name=Dell-XPS-13-White.png"
        },
        {
            id: 2,
            title: "Iphone 11",
            subtitle: "Navy Blue",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ",
            rating: 4.0,
            price: 729.99,
            quantity: 3,
            image: "/Assets/ProductImages/Name=Iphone-12-Pro-02.png"
        },
        {
            id: 3,
            title: "Iphone 11",
            subtitle: "Milky White",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ",
            rating: 4.5,
            price: 729.99,
            quantity: 1,
            image: "/Assets/ProductImages/Name=Iphone-12-04.png"
        },
        {
            id: 4,
            title: "Iphone 11",
            subtitle: "Serious Black",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ",
            rating: 4.5,
            price: 619.99,
            quantity: 2,
            image: "/Assets/ProductImages/Name=Iphone-13-Pro-02.png"
        }
            // Add more products as needed
        ]);

        // Function to handle quantity increase
    const increaseQuantity = (productId) => {
        setProducts(prevProducts => prevProducts.map(product => {
            if (product.id === productId) {
                return { ...product, quantity: product.quantity + 1 };
            }
            return product;
        }));
    };

    // Function to handle quantity decrease
    const decreaseQuantity = (productId) => {
        setProducts(prevProducts => prevProducts.map(product => {
            if (product.id === productId && product.quantity > 1) {
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        }));
    };

    return (
        <div className="bag">
            <div className="content-frame">
                <div className="Header">
                    <h1 className='header-h1'>Check Your Bag Items</h1>
                </div>
                <div className="bag-content">
                    {products.map(product => (
                        <div key={product.id} className="item-in-bag">
                            <div className="product-img">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="content-area">
                                <div className="item-header">
                                    <div className="item-title">{product.title}</div>
                                    <div className="item-subtitle">{product.subtitle}</div>
                                </div>
                                <div className="description">
                                    <p>{product.description}</p>
                                </div>
                                <div className="rating">
                                <TextRating value={product.rating} />
                                </div>
                                <div className="price-rating">
                                    <div className="price">{(product.price * product.quantity).toFixed(2)}</div>
                                    <div className="quantity">
                                        <span className='minus' onClick={() => decreaseQuantity(product.id)}>-</span>
                                        {product.quantity}
                                        <span className='addition' onClick={() => increaseQuantity(product.id)}>+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CheckoutBagPage
