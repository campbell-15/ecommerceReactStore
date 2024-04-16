import React from 'react';
import { useState } from "react";
import './CheckoutBagPage.css';

const CheckoutBagPage = () => {
    const [products] = useState([
        {
            id: 1,
            title: "Dell XPS 13",
            subtitle: "White",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ",
            rating: 4.5,
            price: "$1799.99",
            quantity: 1,
            image: "/src/Assets/ProductImages/Name=Dell-XPS-13-White.png"
        },
        {
            id: 2,
            title: "Iphone 11",
            subtitle: "Navy Blue",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ",
            rating: 4.5,
            price: "$729.99",
            quantity: 3,
            image: "/src/Assets/ProductImages/Name=Iphone-12-02.png"
        },
        {
            id: 3,
            title: "Iphone 11",
            subtitle: "Milky White",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ",
            rating: 4.5,
            price: "$729.99",
            quantity: 3,
            image: "/src/Assets/ProductImages/Name=Iphone-12-04.png"
        },
        {
            id: 4,
            title: "Iphone 11",
            subtitle: "Navy Blue",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ",
            rating: 4.5,
            price: "$619.99",
            quantity: 1,
            image: "/src/Assets/ProductImages/Name=Iphone-13-Pro-02.png"
        }
            // Add more products as needed
        ]);

    return (
        <div className="bag">
            <div className="content-frame">
                <div className="Header">
                    <h1>Check Your Bag Items</h1>
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
                                    <div className="stars"> {/* You can render stars here based on product.rating */}</div>
                                    <div className="out-of-five">{product.rating}/5</div>
                                </div>
                                <div className="price-rating">
                                    <div className="price">{product.price}</div>
                                    <div className="quantity"><span>-</span>{product.quantity}<span>+</span></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


        // <div className="bag">
        //     <div className="content-frame">
        //         <div className="Header">
        //             <h1>Check Your Bag Items</h1>
        //         </div>
        //         <div className="bag-content">
        //             <div className="item-in-bag">
        //                 <div className="product-img"></div>
        //                 <div className="content-area">
        //                     <div className="item-header">
        //                         <div className="item-title"></div>
        //                         <div className="item-subtitle"></div>
        //                     </div>
        //                     <div className="description">
        //                         <p>small description on product</p>
        //                     </div>
        //                     <div className="rating">
        //                         <div className="stars"></div>
        //                         <div className="out-of-five"></div>
        //                     </div>
        //                     <div className="price-rating">
        //                         <div className="price"></div>
        //                         <div className="quantity"></div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default CheckoutBagPage
