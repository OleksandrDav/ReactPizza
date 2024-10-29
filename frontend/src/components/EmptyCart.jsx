import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>
          Cart is empty <span>😕</span>
        </h2>
        <p>
          It seems you haven't ordered a pizza yet.
          <br />
          To order a pizza, go to the main page.
        </p>
        <img src="/img/empty-cart.png" alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Go back</span>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
