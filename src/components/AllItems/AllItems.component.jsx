import React,{useState,useEffect} from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getAllProducts } from "../../redux/directory/directory.selector"
import { Link } from "react-router-dom";
import { Icon } from "react-materialize";
import { fetchProductData } from "../../redux/directory/directory.action"
import {addItem, addItemToCart} from '../../redux/cart/cart.action'
import './AllItems.styles.scss'


const AllItems = ({ addItemToCart,products,fetchProductData,addItem}) => {
    const xTag = localStorage.getItem("x-tag")
    useEffect(()=>{
      fetchProductData()
  },[])

    if (products){
    return (
      <div className="items">
        {
          products.map((product) => (
          <div key={product.id} className="item">
            <Link to={`/products/${product._id}`}>
              <div className="product-img">
                <img alt={product.productName} src={product.productImages[0].url} />
              </div>
              <div className="product-details">
                <h1 id="product-name">{product.productName}</h1>
                <h4 id="product-description">{product.productDescription}</h4>
              </div>
            </Link>
            <div className="price-add">
              <h5 id="product-price">${product.price}</h5>
              <span className="add-product">
                <i
                  className="fas fa-shopping-cart fa-2x"
                  onClick={() => addItemToCart(product)}
                ></i>
              </span>
            </div>
          </div>
        ))}
      </div>
    );
    }
    else {
      return(
        <>No products available</>
      )
    }
}


const mapStateToProps = (state) => {
  let products = state.directory.products

  return {
    products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  addItemToCart: (item) => addItemToCart(item),
  fetchProductData
  }
};

export default connect(mapStateToProps,{fetchProductData, addItemToCart})(AllItems);