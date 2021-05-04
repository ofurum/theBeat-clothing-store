import React from 'react';
import { Link } from "react-router-dom";
import { addItem } from "../../redux/cart/cart.action";
import {connect} from 'react-redux'
import './card.styles.scss';


const Card = ({
  productName,
  productDescription,
  productId,
  productImg,
  productPrice,
  addItem,
  product
}) => (
  <div className="card">
    <div className="item">
      <Link to={`/products/${productId}`}>
        <div className="product-img">
          <img alt={productName} src={productImg} style={{objectFit: 'cover'}}/>
        </div>
        <div className="product-details">
          <h1 id="product-name">{productName}</h1>
          <h4 id="product-description">{productDescription}</h4>
        </div>
      </Link>
      <div className="price-add">
        <h5 id="product-price">${productPrice}</h5>
        <span className="add-product">
          <i className="fas fa-shopping-cart fa-2x" onClick={() => addItem(product)}></i>
        </span>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null,mapDispatchToProps)(Card);