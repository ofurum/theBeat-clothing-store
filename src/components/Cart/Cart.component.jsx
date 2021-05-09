import React from 'react';
import { connect } from "react-redux";
import {removeProduct} from '../../redux/cart/cart.action'
import './cart.style.scss';

const Cart  = ({image,name,quantity, price, cartItem, removeProduct}) => {
      return (
        <div className="list-cart">
              <div className="image-container">
                <img src={image} alt="product" style={{ height: '20rem'}}/>
              </div>
              <span className="name">{name}</span>
              <span className="quantity">{quantity}</span>
              <span className="price">$ {price}</span>

              <div
                className="remove-product"
                onClick={() => removeProduct(cartItem)}
              >
                &#9747;
              </div>
        </div>
      );

}


const mapDispatchToProps = dispatch => ({
    removeProduct: (product) => dispatch(removeProduct(product))
})

export default connect(null, mapDispatchToProps)(Cart);
