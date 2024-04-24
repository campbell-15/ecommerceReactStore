import React from 'react';

import { useState } from "react";

import './CheckoutBagPage.css';

import { Link } from 'react-router-dom';

import TextRating from '../Rating/Rating';

import logo from '../../Assets/Logo.png';

import menue from '../../Assets/Menu-Icon.png';

import home from '../../Assets/Vector.png';

// import bag from '../../Assets/bag.png'

import logout from '../../Assets/rednextbutton.png';

import dell from '../../Assets/Name=Dell-XPS-13-White.png';

import blueiphone from '../../Assets/Name=Iphone-12-Pro-02.png';

import whiteiphone from '../../Assets/Name=Iphone-12-04.png';

import blackiphone from '../../Assets/iphone-12-01.png';

import whitebag from '../../Assets/whitebag.png';

import { useNavigate } from "react-router-dom";




const CheckoutBagPage = () => {

    const navigate = useNavigate();

 

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

            <div className="Navbar">

                        <div className="NavLinksTop">

 

                            <div className="Logo">

                            <Link to="/">

                                <img src={logo} alt=''/>

                            </Link>

                            </div>

 

                            <div className="MenuIcon">

                                <img  src={menue} alt=''/>

                            </div>

 

                        

                            <img  src={home} alt=''onClick={() => navigate('/items')} />

                         

 

                            <div className="NavLink">

                            <img  src={whitebag} alt=''/>

                            </div>

 

                        </div>

 

                        <div className="NavLinkBottom">

                            <img  src={logout} alt=''/>

                        </div>

 

                        </div>

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

                                    <div className="price">{(product.price * product.quantity).toFixed(2)} x {product.quantity}</div>

                                    <div className="quantity">

                                        <span className='minus' onClick={() => decreaseQuantity(product.id)}>-</span>

                                        <p className='quantity-display'>{product.quantity}</p>

                                        <span className='addition' onClick={() => increaseQuantity(product.id)}>+</span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            <div className="Line"></div>

           <div className="BagArea" >

            <div className="Title">

                <div className="Bag" >Bag</div>

            </div>

            <div className="bagItems" >

                <div className="row" >

                    <div className="bagItem" >

                        <div className="productImage" >

                            <img className="image"  src={dell} alt='' />

                        </div>

                    </div>

 

                    <div className="bagItem" >

                        <div className="productImage" >

                            <img className="image"  src={blueiphone} alt='' />

                        </div>

                    </div>

                    <div className="bagItem" >

                        <div className="productImage" >

                            <img className="image"  src={whiteiphone} alt='' />

                        </div>

                    </div>

                    {/* ... other BagItem elements here ... */}

                </div>

                <div className="bagItem" >

                        <div className="productImage" >

                            <img className="image"  src={blackiphone} alt='' />

                        </div>

                    </div>

                {/* ... other Row elements here ... */}

            </div>

            <div className="cta" >
                <label>Bag Total: $ 5,849.93   </label>
                <div className="button" >

                    <div className="icon">

                        <img src={whitebag} alt="" />

                        {/* <div className="vector"> <img src={bag}alt="" /></div> */}

                    </div>

                    <div className="buttonText" onClick={() => navigate('/checkout')}>Checkout</div>

                </div>

            </div>

        </div>

        </div>

    )

}

 

export default CheckoutBagPage