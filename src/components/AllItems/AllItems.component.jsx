import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getAllProducts } from "../../redux/directory/directory.selector"
import { Link } from "react-router-dom";
import { Icon } from "react-materialize";
import {addItem} from '../../redux/cart/cart.action'
import './AllItems.styles.scss'


const AllItems = ({products, addItem}) => {
    console.log({products})
    return (
      <div className="items">
        {
          products.map((product) => (
          <div key={product.id} className="item">
            <Link to={`/products/${product.id}`}>
              <div className="product-img">
                <img alt={product.name} src={product.img} />
              </div>
              <div className="product-details">
                <h1 id="product-name">{product.name}</h1>
                <h4 id="product-description">{product.description}</h4>
              </div>
            </Link>
            <div className="price-add">
              <h5 id="product-price">${product.price}</h5>
              <span className="add-product">
                <i
                  className="fas fa-shopping-cart fa-2x"
                  onClick={() => addItem(product)}
                ></i>
              </span>
            </div>
          </div>
        ))}
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  products: getAllProducts,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllItems);