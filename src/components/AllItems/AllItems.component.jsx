import React,{useEffect} from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductData } from "../../redux/directory/directory.action"
import { addItemToCart} from '../../redux/cart/cart.action'
import Loading from "../Load/load.component"
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
          products.map((product,index) => (
          <div key={index} className="item">
            <Link to={`/products/${product._id}`}>
              <div className="product-img">
                <img alt={product.productName} src={product.productImages[0].url} style={{objectFit:'cover'}}/>
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
         <Loading />
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