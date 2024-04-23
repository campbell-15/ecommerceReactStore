import React from "react";
import "./Items.css";
// import "./global.css"
import logo from './Assets/Logo.png'
import menue from './Assets/Menu-Icon.png'
import home from './Assets/Nav-Link.png'
import bag from './Assets/bag.png'
import logout from './Assets/rednextbutton.png'
import blackiphone from './Assets/iphone-12-01.png'
import whiteiphone from './Assets/Name=Iphone-12-04.png'
import dell from './Assets/Name=Dell-XPS-13-White.png'  
import blueiphone from './Assets/Name=Iphone-12-Pro-02.png'
import whitebag from './Assets/whitebag.png'

const Items= () => {
  

  return (
    <div className="Body">

{/* navbar section */}
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

                        {/* itemview section */}
 
<div className="item-view">
      <div className="item-view-child" />
      <section className="item-view-inner">
        <div className="frame-parent">
          <div className="nav-link-wrapper">
            <div className="nav-link">
              <img className="icon" loading="lazy" alt="" src="/icon.svg" />
              <div className="link">Back</div>
            </div>
          </div>
          <div className="top-area-wrapper">
            <div className="top-area">
              <div className="image-area">
                <div className="image-gallery">
                  <div className="image-01">
                    <img
                      className="product-image-icon"
                      loading="lazy"
                      alt=""
                      src="/apple-watch.png"
                    />
                  </div>
                  <div className="image-02">
                    <img
                      className="product-image-icon1"
                      loading="lazy"
                      alt=""
                      src="/apple-watch.png"
                    />
                  </div>
                  <div className="image-03">
                    <img
                      className="product-image-icon2"
                      loading="lazy"
                      alt=""
                      src="/apple-watch.png"
                    />
                  </div>
                </div>
                <div className="main-image">
                  <img
                    className="product-image-icon3"
                    loading="lazy"
                    alt=""
                    src="/apple-watch.png"
                  />
                </div>
              </div>
              <div className="text-content">
                <div className="header">
                  <h1 className="apple-watch">Apple Watch</h1>
                  <div className="series-5-se">Series 5 SE</div>
                </div>
                <div className="special">
                  <div className="rating">
                    <img
                      className="star-01-icon"
                      loading="lazy"
                      alt=""
                      src="/star-solid.svg"
                    />
                    <img
                      className="star-02-icon"
                      loading="lazy"
                      alt=""
                      src="/star-solid.svg"
                    />
                    <img
                      className="star-03-icon"
                      loading="lazy"
                      alt=""
                      src="/star-solid.svg"
                    />
                    <img
                      className="star-04-icon"
                      loading="lazy"
                      alt=""
                      src="/star-solid.svg"
                    />
                    <img
                      className="star-05-icon"
                      loading="lazy"
                      alt=""
                      src="/star-half-stroke.svg"
                    />
                  </div>
                  <div className="div">4.5 / 5</div>
                </div>
                <div className="div1">$ 529.99</div>
                <div className="short-description">
                  <div className="para1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quis pellentesque tellus imperdiet mattis. Proin in quis
                    ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec
                    lacus, nunc volutpat, tincidunt lorem mi duis. Vitae
                    elementum libero.
                  </div>
                </div>
                <div className="cta">
                  <button className="button">
                    <img className="icon1" alt="" src="/icon.svg" />
                    <div className="button1">Add to Bag</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="line-wrapper">
            <div className="frame-child" />
          </div>
          <div className="description-wrapper">
            <div className="description">Description</div>
          </div>
          <div className="para-wrapper">
            <div className="para-container">
              <p className="para1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dignissim odio faucibus nec malesuada purus volutpat vel sed
                viverra. Id sagittis, phasellus dui in arcu. Nec arcu, sit nunc,
                nibh purus pellentesque sagittis. Felis rhoncus facilisis massa
                eget purus in purus. Etiam at cras nulla nunc. Malesuada in
                pretium diam scelerisque sit mattis in egestas neque. Eu porta
                tempor sodales nisl integer turpis porttitor sed sed. Ut
                senectus odio dictum enim velit tempor diam quisque suspendisse.
              </p>
              <p className="para2">
                Orci vel ridiculus diam viverra. Libero malesuada orci, quis
                placerat suscipit augue imperdiet. Et praesent augue dictum
                mauris eget lacus malesuada. Aenean nisi, sodales natoque massa
                magna dignissim mi. Mattis tellus, justo, lorem sed tempor diam
                sit viverra enim. Id id placerat eu etiam nulla laoreet.
              </p>
              <p className="para3">
                Dignissim leo fames turpis quis suspendisse vulputate laoreet
                vulputate ac. Aliquam justo lectus eu dui porttitor. Cras a
                aliquam phasellus sollicitudin ornare. Tristique volutpat
                facilisis in ut proin. Est vitae facilisi sollicitudin id lorem
                mattis nibh ipsum, nec. Consectetur consectetur morbi morbi
                aliquet mi risus, velit, sit at. Integer morbi viverra hendrerit
                risus.
              </p>
              <p className="para4">
                Odio phasellus nibh senectus nec id enim quam sed. At potenti
                sollicitudin sollicitudin lobortis morbi. Nunc molestie et
                adipiscing aliquam. Sit vel mi dolor suscipit. In eget ut ac at
                facilisi leo viverra. Arcu ac ut fermentum, viverra et, vitae
                etiam cras. Eu purus non ut turpis fusce. Mi vitae nibh mi ut
                feugiat varius risus eros.
              </p>
            </div>
          </div>
        </div>
      </section>

    

      <div className="frame-div">
        <div className="frame-item" />
      </div>
    </div>



{/* bag area section */}
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