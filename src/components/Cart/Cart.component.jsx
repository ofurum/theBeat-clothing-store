import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectedCartItem} from '../../redux/cart/cart.selector'
import {removeProduct} from '../../redux/cart/cart.action'
import './cart.style.scss';

const Cart  = ({cartItems, removeProduct}) => {
     if(!cartItems) {
         return <h1>No items in cart!!</h1>
     }
    return (
      <div className="list-cart">
        {cartItems.map((cartItem, index) => (
          <div className="cart-item" key={index}>
            <div className="image-container">
              <img src={cartItem.img} alt="product-image" />
            </div>
            <span className="name">{cartItem.name}</span>
            <span className="quantity">{cartItem.quantity}</span>
            <span className="price">$ {cartItem.price}</span>

            <div className="remove-product" onClick={() => removeProduct(cartItem)}>&#9747;</div>
          </div>
        ))}
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectedCartItem,
});

const mapDispatchToProps = dispatch => ({
    removeProduct: (product) => dispatch(removeProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
