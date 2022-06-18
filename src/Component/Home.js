import React from "react";

const Home = (props) => {
  console.log("home".props.data);
  return (
    <>
      <div className="add-to-cart">
        <img src="iphone11.jpg" />
      </div>
      <h1>Home component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="iphone.jpg" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00 </span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({
                price: 1000,
                name: "i phone 13 pro max",
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
