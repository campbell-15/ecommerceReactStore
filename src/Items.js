import React from "react";
import "./Items.css";
import logo from './Assets/Logo.png'
import menue from './Assets/Menu-Icon.png'
import home from './Assets/Nav-Link.png'
import bag from './Assets/bag.png'
import logout from './Assets/rednextbutton.png'
import applewatch from './Assets/apple-watch.png'
// import headphones from './Assets/headphones.png'
// import buttoncart from './Assets/Buttoncart.png'
import blackiphone from './Assets/iphone-12-01.png'
// import greeniphone from './Assets/Name=Iphone-12-02.png'
import whiteiphone from './Assets/Name=Iphone-12-04.png'
// import rediphone from './Assets/Name=Iphone-12-03.png'
import dell from './Assets/Name=Dell-XPS-13-White.png'  
import blueiphone from './Assets/Name=Iphone-12-Pro-02.png'
import whitebag from './Assets/whitebag.png'

const Items= () => {
  

  return (
    <div className="Body">

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
                <div className="button" >
                    <div className="icon">
                        <img src={whitebag} alt="" />
                        {/* <div className="vector"> <img src={bag}alt="" /></div> */}
                    </div>
                    <div className="buttonText" >View Bag</div>
                </div>
            </div>
        </div>
     
    </div>


        
  );
};

export default Items;
