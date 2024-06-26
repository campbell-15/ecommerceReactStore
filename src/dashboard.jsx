import React from 'react';
import './dashboard.css';
import { useNavigate } from "react-router-dom";

import logo from './Assets/Logo.png'
import menue from './Assets/Menu-Icon.png'
import home from './Assets/Nav-Link.png'
import bag from './Assets/bag.png'
import logout from './Assets/rednextbutton.png'
import applewatch from './Assets/apple-watch.png'
import headphones from './Assets/headphones.png'
import buttoncart from './Assets/Buttoncart.png'
import blackiphone from './Assets/iphone-12-01.png'
import greeniphone from './Assets/Name=Iphone-12-02.png'
import whiteiphone from './Assets/Name=Iphone-12-04.png'
import rediphone from './Assets/Name=Iphone-12-03.png'
import dell from './Assets/Name=Dell-XPS-13-White.png'  
import blueiphone from './Assets/Name=Iphone-12-Pro-02.png'
import whitebag from './Assets/whitebag.png'

function Dashboard() {

    const navigate = useNavigate();

    return (
        <div className='Body'> 
    
    
                            <div className="Navbar">
                            <div className="NavLinksTop">
    
                                <div className="Logo">
                                    <img  src={logo} alt=''/>
                                </div>
    
                                <div className="MenuIcon">
                                    <img  src={menue} alt=''/>
                                </div>
    
                                <div className="NavLink">
                                <img  src={home} alt=''/>
                                </div>
    
    
                                <img  src={bag} alt='' onClick={() => navigate('/view-bag')} />
                                                
    
                                  
                            </div>
    
    
                            <div className="NavLinkBottom">
                                <img  src={logout} alt=''/>
                            </div>
    
                            </div>
                        <div className="TopBar">
                            <div className="Input">
                            <div className="Label">
                                <div className="Label">Search Item</div>
                            </div>
                            <div className="InputField">
                                <div className="InputArea">
                                <div className="Placeholder">Apple Watch, Samsung S21, Macbook Pro, ...</div>
                                </div>
                            </div>
                            </div>
                        </div>
    
                        <div className="Container">
    
                     <div className="ItemCard">
                        <div className="ProductImage">
                         
                        <img className="Image" src={applewatch} alt='' onClick={() => navigate('/items')} />                 
                        </div>
                        <div className="Content">
                            <div className="ItemName">Apple Watch</div>
                            <div className="SmallDescription">Series 5 SE</div>
                            <div className="Action">
                            <div className="Price">$ 529.99</div>
                          
                                <img  src={buttoncart} alt=''></img>
                      
                            </div>
                        </div>
                        </div> 
    
                        <div className="ItemCard">
                        <div className="ProductImage">
                            {/* <div className="ProductImageInner"> */}
                            <img className="Image" src={headphones} alt='' />
                            {/* </div> */}
                        </div>
                        <div className="Content">
                            <div className="ItemName">Sony ZX330BT</div>
                            <div className="SmallDescription">Light Grey</div>
                            <div className="Action">
                            <div className="Price">$ 39.99</div>
                            {/* <div className="Button"> */}
                                {/* <div className="Icon">
                                <div className="Vector"></div>
                                </div> */}
                                <img src={buttoncart} alt="" />
                            {/* </div> */}
                            </div>
                        </div>
                        </div> 
                        <div className="ItemCard">
                        <div className="ProductImage">
                            {/* <div className="ProductImageInner"> */}
                            <img className="Image" src={blackiphone} alt='' />
                            {/* </div> */}
                        </div>
                        <div className="Content">
                            <div className="ItemName">Iphone 11</div>
                            <div className="SmallDescription">Serious Black</div>
                            <div className="Action">
                            <div className="Price">$ 619.99</div>
                            {/* <div className="Button"> */}
                                {/* <div className="Icon">
                                <div className="Vector"></div>
                                </div> */}
                                <img src={buttoncart} alt="" />
                            {/* </div> */}
                            </div>
                        </div>
                        </div> 
    
                        <div className="ItemCard">
                        <div className="ProductImage">
                            {/* <div className="ProductImageInner"> */}
                            <img className="Image" src={greeniphone} alt='' />
                            {/* </div> */}
                        </div>
                        <div className="Content">
                            <div className="ItemName">Iphone 11</div>
                            <div className="SmallDescription">Subway Blue</div>
                            <div className="Action">
                            <div className="Price">$ 619.99</div>
                            {/* <div className="Button"> */}
                                {/* <div className="Icon">
                                <div className="Vector"></div>
                                </div> */}
                                <img src={buttoncart} alt="" />
                            {/* </div> */}
                            </div>
                        </div>
                        </div> 
    
                        <div className="ItemCard">
                        <div className="ProductImage">
                            {/* <div className="ProductImageInner"> */}
                            <img className="Image" src={rediphone} alt='' />
                            {/* </div> */}
                        </div>
                        <div className="Content">
                            <div className="ItemName">Iphone 11</div>
                            <div className="SmallDescription">Product RED</div>
                            <div className="Action">
                            <div className="Price">$ 619.99</div>
                            {/* <div className="Button"> */}
                                {/* <div className="Icon">
                                <div className="Vector"></div>
                                </div> */}
                                <img src={buttoncart} alt="" />
                            {/* </div> */}
                            </div>
                        </div>
                        </div> 
                        <div className="ItemCard">
                        <div className="ProductImage">
                            {/* <div className="ProductImageInner"> */}
                            <img className="Image" src={whiteiphone}  alt=''/>
                            {/* </div> */}
                        </div>
                        <div className="Content">
                            <div className="ItemName">Iphone 11</div>
                            <div className="SmallDescription">Milky White</div>
                            <div className="Action">
                            <div className="Price">$ 619.99</div>
                            {/* <div className="Button"> */}
                                {/* <div className="Icon">
                                <div className="Vector"></div>
                                </div> */}
                                <img src={buttoncart} alt="" />
                            {/* </div> */}
                            </div>
                        </div>
                        </div> 
                        <div className="ItemCard">
                        <div className="ProductImage">
                            {/* <div className="ProductImageInner"> */}
                            <img className="Image" src={rediphone} alt='' />
                            {/* </div> */}
                        </div>
                        <div className="Content">
                            <div className="ItemName">Iphone 13</div>
                            <div className="SmallDescription">Product RED</div>
                            <div className="Action">
                            <div className="Price">$ 619.99</div>
                            {/* <div className="Button"> */}
                                {/* <div className="Icon">
                                <div className="Vector"></div>
                                </div> */}
                                <img src={buttoncart} alt="" />
                            {/* </div> */}
                            </div>
                        </div>
                        </div> 
                        <div className="ItemCard">
                        <div className="ProductImage">
                            {/* <div className="ProductImageInner"> */}
                            <img className="Image" src={rediphone}  alt=''/>
                            {/* </div> */}
                        </div>
                        <div className="Content">
                            <div className="ItemName">Iphone 14</div>
                            <div className="SmallDescription">Product RED</div>
                            <div className="Action">
                            <div className="Price">$ 619.99</div>
                            {/* <div className="Button"> */}
                                {/* <div className="Icon">
                                <div className="Vector"></div>
                                </div> */}
                                <img src={buttoncart} alt="" />
                            {/* </div> */}
                            </div>
                        </div>
                        </div> 
                
    
    
                        </div>
                        
                      
                        <div className="Lined"> </div>
    
     
                            
                     
    
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
                    <div className="button" >
                        <div className="icon">
                            <img src={whitebag} alt="" />
                        </div>
                        <div className="buttonText" onClick={() => navigate('/view-bag')} >View Bag</div>

                    </div>
                </div>
            </div>
         
    
                           
           
    
        </div>
      );
    }
    
    export default Dashboard;