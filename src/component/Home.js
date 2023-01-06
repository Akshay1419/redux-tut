import React from "react";

const Home = () => {
  return (
    <div>

        <div className="add-to-cart">
            <img src="https://www.shutterstock.com/image-vector/shopping-cart-icon-flat-design-260nw-570153007.jpg"/>
        </div>
      <h1>Home component</h1>
      <div className="cart-wrapper">
        <div className="img-wrappper item">
           <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/ios/iphoto/ios15-iphone13-pro-home-camera-callout.png" />
        </div>
        <div className="text-wrappper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrappper item">
            <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
