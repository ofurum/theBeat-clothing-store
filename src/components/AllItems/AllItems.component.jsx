import React,{useState,useEffect} from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getAllProducts } from "../../redux/directory/directory.selector"
import { Link } from "react-router-dom";
import { Icon } from "react-materialize";
import {addItem} from '../../redux/cart/cart.action'
import './AllItems.styles.scss'


const AllItems = ({ addItem}) => {
    const token = localStorage.getItem("token")
    const [products,setProducts] = useState("")
    useEffect(()=>{
      var myHeaders = new Headers();
      myHeaders.append("x-tag", "ODE1ZjM1YWZlNTI4Y2QwMThkNmJhMTI1NzNkMjk1YjRjZTdhZWUwODNmYzEyNTMzM2U2YThhZWM2YmIxZWFjZC8vLy8vLzc5NDY=");
      myHeaders.append("Authorization",`Bearer ${token}`)


    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

fetch("https://masters-prj.herokuapp.com/products", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    setProducts(result.data)
  })
  .catch(error => console.log('error', error));
  },[])

    console.log({products})
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
                  onClick={() => addItem(product)}
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

const mapStateToProps = createStructuredSelector({
  products: getAllProducts,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllItems);