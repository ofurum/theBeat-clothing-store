import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectedCartItem} from '../../redux/cart/cart.selector'
import './cart.style.scss';

const Cart  = ({cartItems}) => {
     if(!cartItems) {
         return <h1>No items in cart!!</h1>
     }
    return (
      <div className="cart">
          {
              cartItems.map(cartItem => (
                  <div>
                   <div className="image-container">
                        <img src={cartItem.img} alt="product-image" />
                        </div>
                        <span className="name">{cartItem.name}</span>
                        <span className="quantity">{cartItem.quantity}</span>
                        <span className="price">$ {cartItem.price}</span>
                  </div>
              ))
          }
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectedCartItem,
});

export default connect(null, mapStateToProps)(Cart);
