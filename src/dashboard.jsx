import React from 'react';
import './dashboard.css';

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

function Dashboard() {

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


                            <img  src={bag} alt=''/>
                              
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
                        {/* <div className="ProductImageInner"> */}
                        <img className="Image" src={applewatch} alt='' />
                        {/* </div> */}
                    </div>
                    <div className="Content">
                        <div className="ItemName">Apple Watch</div>
                        <div className="SmallDescription">Series 5 SE</div>
                        <div className="Action">
                        <div className="Price">$ 529.99</div>
                        <div className="Button">
                            <img  src={buttoncart} alt=''>
                            {/* <div className="Vector"></div> */}
                            </img>
                        </div>
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
                        <div className="Price">$ 9.99</div>
                        <div className="Button">
                            {/* <div className="Icon">
                            <div className="Vector"></div>
                            </div> */}
                            <img src={buttoncart} alt="" />
                        </div>
                        </div>
                    </div>
                    </div> 
                    <div className="ItemCard">
                    <div className="ProductImage">
                        <div className="ProductImageInner">
                        <img className="Image" src={blackiphone} alt='' />
                        </div>
                    </div>
                    <div className="Content">
                        <div className="ItemName">Iphone 11</div>
                        <div className="SmallDescription">Serious Black</div>
                        <div className="Action">
                        <div className="Price">$ 619.99</div>
                        <div className="Button">
                            {/* <div className="Icon">
                            <div className="Vector"></div>
                            </div> */}
                            <img src={buttoncart} alt="" />
                        </div>
                        </div>
                    </div>
                    </div> 

                    <div className="ItemCard">
                    <div className="ProductImage">
                        <div className="ProductImageInner">
                        <img className="Image" src={greeniphone} alt='' />
                        </div>
                    </div>
                    <div className="Content">
                        <div className="ItemName">Iphone 11</div>
                        <div className="SmallDescription">Subway Blue</div>
                        <div className="Action">
                        <div className="Price">$ 619.99</div>
                        <div className="Button">
                            {/* <div className="Icon">
                            <div className="Vector"></div>
                            </div> */}
                            <img src={buttoncart} alt="" />
                        </div>
                        </div>
                    </div>
                    </div> 
                    <div className="ItemCard">
                    <div className="ProductImage">
                        <div className="ProductImageInner">
                        <img className="Image" src="https://via.placeholder.com/159x200" />
                        </div>
                    </div>
                    <div className="Content">
                        <div className="ItemName">Apple Watch</div>
                        <div className="SmallDescription">Series 5 SE</div>
                        <div className="Action">
                        <div className="Price">$ 529.99</div>
                        <div className="Button">
                            <div className="Icon">
                            <div className="Vector"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div> 
                    <div className="ItemCard">
                    <div className="ProductImage">
                        <div className="ProductImageInner">
                        <img className="Image" src="https://via.placeholder.com/159x200" />
                        </div>
                    </div>
                    <div className="Content">
                        <div className="ItemName">Apple Watch</div>
                        <div className="SmallDescription">Series 5 SE</div>
                        <div className="Action">
                        <div className="Price">$ 529.99</div>
                        <div className="Button">
                            <div className="Icon">
                            <div className="Vector"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div> 
                    <div className="ItemCard">
                    <div className="ProductImage">
                        <div className="ProductImageInner">
                        <img className="Image" src="https://via.placeholder.com/159x200" />
                        </div>
                    </div>
                    <div className="Content">
                        <div className="ItemName">Apple Watch</div>
                        <div className="SmallDescription">Series 5 SE</div>
                        <div className="Action">
                        <div className="Price">$ 529.99</div>
                        <div className="Button">
                            <div className="Icon">
                            <div className="Vector"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div> 
                    <div className="ItemCard">
                    <div className="ProductImage">
                        <div className="ProductImageInner">
                        <img className="Image" src="https://via.placeholder.com/159x200" />
                        </div>
                    </div>
                    <div className="Content">
                        <div className="ItemName">Apple Watch</div>
                        <div className="SmallDescription">Series 5 SE</div>
                        <div className="Action">
                        <div className="Price">$ 529.99</div>
                        <div className="Button">
                            <div className="Icon">
                            <div className="Vector"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div> 
            


                    </div>
                    
                    
                    <div className="BagArea">
            <div className="Title">
                <div className="Bag">Bag</div>
            </div>
            <div className="BagItems">
                <div className="Row">
                    <div className="BagItem">
                        <div className="ProductImage">
                            <img className="bagImages" src="https://via.placeholder.com/64x84" alt="Product" />
                        </div>
                    </div>
                    <div className="BagItem">
                        <div className="ProductImage">
                            <img className="bagImages" src="https://via.placeholder.com/64x84" alt="Product" />
                        </div>
                    </div>
                    <div className="BagItem">
                        <div className="ProductImage">
                            <img className="bagImages" src="https://via.placeholder.com/64x84" alt="Product" />
                        </div>
                    </div>
                    <div className="BagItem">
                        <div className="ProductImage">
                            <img className="bagImages" src="https://via.placeholder.com/64x84" alt="Product" />
                        </div>
                    </div>
                    {/* Repeat BagItem as needed */}
                </div>
                {/* Repeat Row as needed */}
            </div>
            <div className="Cta">
                <div className="Button">
                    <div className="Icon">
                        <div className="Vector"></div>
                    </div>
                    <div className="Button">View Bag</div>
                </div>
            </div>
        </div>


                       
       

    </div>
  );
}

export default Dashboard;