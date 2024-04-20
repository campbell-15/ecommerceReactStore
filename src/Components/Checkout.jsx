import { useCallback } from "react";
import "./Checkout.css";

const Checkout = () => {
  const onActionsContainerClick = useCallback(() => {
    // Please sync "Add-Address" to the project
  }, []);

  const onButtonContainerClick = useCallback(() => {
    // Please sync "Add-Payment" to the project
  }, []);

  const onButtonContainer2Click = useCallback(() => {
    // Please sync "Bag" to the project
  }, []);

  return (
    <div className="checkout">
      <div className="content-frame">
        <div className="address-card">
          <div className="header">
            <div className="shipping-address">Shipping Address</div>
          </div>
          <div className="content">
            <div className="current-address">
              <div className="check"> John Maker</div>
              <div className="check">123 Plae Grond Stret</div>
              <div className="check">Vermont, California</div>
              <div className="check">United States of America</div>
            </div>
            <div className="actions" onClick={onActionsContainerClick}>
              <div className="button">
                <div className="checkout-content">Change</div>
              </div>
            </div>
          </div>
        </div>
        <div className="address-card">
          <div className="header">
            <div className="shipping-address">Payment Method</div>
          </div>
          <div className="content">
            <div className="current-address1">
              <div className="card">
                <img className="icon" alt="" src="/card.svg" />
                <div className="check">
                  <span>{`Mastercard `}</span>
                  <span className="gift-card-balance">ending in 1252</span>
                </div>
              </div>
              <div className="gift-card">
                <img className="icon" alt="" src="/gift.svg" />
                <div className="check">
                  <span>{`$ 53.21 `}</span>
                  <span className="gift-card-balance">gift card balance</span>
                </div>
              </div>
              <div className="billing-address">
                <div className="card">
                  <div className="checkbox-input">
                    <div className="checkbox-input1" />
                    <div className="inner" />
                  </div>
                  <div className="check">
                    Billing address same as Shipping Address
                  </div>
                </div>
              </div>
              <div className="change-billing-address">
                <div className="change-billing-address1">
                  Change Billing Address
                </div>
              </div>
            </div>
            <div className="actions1">
              <div className="button2" onClick={onButtonContainerClick}>
                <div className="checkout-content">Change</div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-frame1">
          <div className="header2">
            <div className="shipping-address">Review youR Bag</div>
          </div>
          <div className="bag-contents">
            <div className="item-in-bag">
              <img
                className="product-image-icon"
                alt=""
                src="/Name=Dell-XPS-13-White.png"
              />
              <div className="content-area">
                <div className="header3">
                  <div className="title">
                    <div className="check">Dell XPS 13</div>
                  </div>
                  <div className="subtitle">
                    <div className="check">White</div>
                  </div>
                </div>
                <div className="small-description">
                  <div className="checkout-content">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</div>
                </div>
                <div className="rating">
                  <div className="stars">
                    <img className="icon" alt="" src="/star.svg" />
                    <img className="icon" alt="" src="/star.svg" />
                    <img className="icon" alt="" src="/star.svg" />
                    <img className="icon" alt="" src="/star.svg" />
                    <img className="icon" alt="" src="/star-half.svg" />
                  </div>
                  <div className="checkout-content">4.5 / 5</div>
                </div>
                <div className="price-rating">
                  <div className="price">
                    <div className="check">$ 1799.99</div>
                    <div className="check">x</div>
                    <div className="check">1</div>
                  </div>
                  <div className="quantity">
                    <div className="price1">
                      <div className="increase-button">
                        <img className="icon2" alt="" src="/minus.svg" />
                        <div className="button4">Button</div>
                      </div>
                      <div className="div3">1</div>
                      <div className="increase-button">
                        <img className="icon2" alt="" src="/plus.svg" />
                        <div className="button4">Button</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bag-contents-child" />
            <div className="item-in-bag">
              <img
                className="product-image-icon1"
                alt=""
                src="/Name=Iphone-12-Pro-02.png"
              />
              <div className="content-area">
                <div className="header3">
                  <div className="title">
                    <div className="check">Iphone 11</div>
                  </div>
                  <div className="subtitle">
                    <div className="check">Navy Blue</div>
                  </div>
                </div>
                <div className="small-description">
                  <div className="checkout-content">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</div>
                </div>
                <div className="rating">
                  <div className="stars">
                    <img className="icon" alt="" src="/star.svg" />
                    <img className="icon" alt="" src="/star.svg" />
                    <img className="icon" alt="" src="/star.svg" />
                    <img className="icon" alt="" src="/star.svg" />
                    <img className="icon" alt="" src="/star-half.svg" />
                  </div>
                  <div className="checkout-content">4.5 / 5</div>
                </div>
                <div className="price-rating">
                  <div className="price">
                    <div className="check">$ 729.99</div>
                    <div className="check">x</div>
                    <div className="check">3</div>
                  </div>
                  <div className="quantity">
                    <div className="price1">
                      <div className="increase-button">
                        <img className="icon2" alt="" src="/minus.svg" />
                        <div className="button4">Button</div>
                      </div>
                      <div className="div3">3</div>
                      <div className="increase-button">
                        <img className="icon2" alt="" src="/plus.svg" />
                        <div className="button4">Button</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bag-contents-child" />
            <div className="item-in-bag">
              <img
                className="product-image-icon1"
                alt=""
                src="/Name=Iphone-12-04.png"
              />
              <div className="content-area">
                <div className="header3">
                  <div className="title">
                    <div className="check">Iphone 11</div>
                  </div>
                  <div className="subtitle">
                    <div className="check">Milky White</div>
                  </div>
                </div>
                <div className="small-description">
                  <div className="checkout-content">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</div>
                </div>
                <div className="rating">
                  <div className="stars">
                    <img className="icon" alt="" src="/star.svg" />
                    <img className="icon" alt="" src="/star.svg" />
                    <img className="icon" alt="" src="/star.svg" />
                    <img className="icon" alt="" src="/star.svg" />
                    <img className="icon" alt="" src="/star-half.svg" />
                  </div>
                  <div className="checkout-content">4.5 / 5</div>
                </div>
                <div className="price-rating">
                  <div className="price">
                    <div className="check">$ 619.99</div>
                    <div className="check">x</div>
                    <div className="check">1</div>
                  </div>
                  <div className="quantity">
                    <div className="price1">
                      <div className="increase-button">
                        <img className="icon2" alt="" src="/minus.svg" />
                        <div className="button4">Button</div>
                      </div>
                      <div className="div3">1</div>
                      <div className="increase-button">
                        <img className="icon2" alt="" src="/plus.svg" />
                        <div className="button4">Button</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bag-contents-child" />
            <div className="item-in-bag">
              <img
                className="product-image-icon1"
                alt=""
                src="/iphone-12-01.png"
              />
              <div className="content-area">
                <div className="header3">
                  <div className="title">
                    <div className="check">Iphone 11</div>
                  </div>
                  <div className="subtitle">
                    <div className="check">Serious Black</div>
                  </div>
                </div>
                <div className="small-description">
                  <div className="checkout-content">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</div>
                </div>
                <div className="rating">
                  <div className="stars">
                    <img className="icon" alt="" src="/star.svg" />
                    <img className="icon" alt="" src="/star.svg" />
                    <img className="icon" alt="" src="/star.svg" />
                    <img className="icon" alt="" src="/star.svg" />
                    <img className="icon" alt="" src="/star-half.svg" />
                  </div>
                  <div className="checkout-content">4.5 / 5</div>
                </div>
                <div className="price-rating">
                  <div className="price">
                    <div className="check">$ 619.99</div>
                    <div className="check">x</div>
                    <div className="check">2</div>
                  </div>
                  <div className="quantity">
                    <div className="price1">
                      <div className="increase-button">
                        <img className="icon2" alt="" src="/minus.svg" />
                        <div className="button4">Button</div>
                      </div>
                      <div className="div3">2</div>
                      <div className="increase-button">
                        <img className="icon2" alt="" src="/plus.svg" />
                        <div className="button4">Button</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button12" onClick={onButtonContainer2Click}>
        <img className="icon" alt="" src="/back.svg" />
        <div className="checkout-content">Back</div>
      </div>
      <div className="total-summary">
        <div className="line-01">
          <div className="order-summary">Order Summary</div>
        </div>
        <div className="line-02">
          <div className="checkout-content">Items:</div>
          <div className="checkout-contentr">{`$ 5849.37 `}</div>
        </div>
        <div className="line-02">
          <div className="checkout-content">Shipping:</div>
          <div className="checkout-content">$ 6.99</div>
        </div>
        <div className="line-02">
          <div className="checkout-content">Estimated GST:</div>
          <div className="checkout-content">{`$ 760.41 `}</div>
        </div>
        <div className="line-02">
          <div className="checkout-content">Gift Card:</div>
          <div className="checkout-content">$ 0.00</div>
        </div>
        <div className="divider" />
        <div className="total">
          <div className="order-summary">Order Total:</div>
          <div className="order-summary">{`$ 6609.78 `}</div>
        </div>
        <div className="divider" />
        <div className="button14">
          <div className="checkout-content">Place your order</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
