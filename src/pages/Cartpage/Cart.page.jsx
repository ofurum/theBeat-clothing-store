import React from 'react';
import Cart from '../../components/Cart/Cart.component'
import CustomButton from '../../components/CustomButton/customButton.component'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectedCartItem } from "../../redux/cart/cart.selector";

import './Cart.page.scss';

const handleCheckout = () => {
  if (localStorage.getItem("token")){
    window.location.href="/check-out"
  } else {
    window.location.href="/login"
  }
}
const CartPage = ({ cartItems }) => {
  if(cartItems.length < 1) {
    return (
      <>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "450px",
          }}
        >
          No items in cart
        </h1>
        <div
          className="back-to-store"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Link to="/">
            <i class="fas fa-arrow-left"></i> Back to Store
          </Link>
        </div>
      </>
    );
  }
  return (
    <div className="cart-page">
      <div className="back-to-store">
        <Link to="/">
          <i class="fas fa-arrow-left"></i> Back to Store
        </Link>
      </div>
      <div className="cart-page-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>description</span>
        </div>
        <div className="header-block">
          <span>quantity</span>
        </div>
        <div className="header-block">
          <span>price</span>
        </div>
        <div className="header-block">
          <span>remove</span>
        </div>
      </div>
      {cartItems.map((cartItem, index) => (
        <div key={index}>
          <Cart image={cartItem.img} name={cartItem.name} quantity={cartItem.quantity} price={cartItem.price} cartItem={cartItem}/>
        </div>
      ))}

      <div className="check-out-button">
       
          <button className="btn" onClick={handleCheckout} >Check Out</button>
        
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectedCartItem,
});

export default connect(mapStateToProps)(CartPage);