import React from 'react';
import { Link } from "react-router-dom";
import './card.styles.scss';


const Card = ({
  productName,
  productDescription,
  productId,
  productImg,
  productPrice,
}) => (
  <div className="card">
    <div className="item">
      <Link to={`/products/${productId}`}>
        <div className="product-img">
          <img alt={productName} src={productImg} />
        </div>
        <div className="product-details">
          <h1 id="product-name">{productName}</h1>
          <h4 id="product-description">{productDescription}</h4>
        </div>
      </Link>
      <div className="price-add">
        <h5 id="product-price">${productPrice}</h5>
        <span className="add-product">
          <i className="fas fa-shopping-cart fa-2x"></i>
        </span>
      </div>
    </div>
  </div>
);

export default Card;