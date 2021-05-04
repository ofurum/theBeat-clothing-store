import React,{useState,useEffect} from 'react';
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import CustomButton from '../../components/CustomButton/customButton.component'
import { createStructuredSelector } from "reselect";
import { getAllProducts } from "../../redux/directory/directory.selector";
import BaseLayout from "../../components/BaseLayout/baseLayout.component";
import { Link } from "react-router-dom";
import './showProduct.styles.scss';


const ShowProduct = ({match, addItem}) => {   
  const token = localStorage.getItem("token")    
const [products,setProducts] = useState("")
const [currentProduct, setCurrentProduct] = useState(false)
useEffect(()=>{
    var myHeaders = new Headers();
    myHeaders.append("x-tag", "ODE1ZjM1YWZlNTI4Y2QwMThkNmJhMTI1NzNkMjk1YjRjZTdhZWUwODNmYzEyNTMzM2U2YThhZWM2YmIxZWFjZC8vLy8vLzc5NDY=");
    myHeaders.append("Authorization", `Bearer      ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://masters-prj.herokuapp.com/products/"+match.params.id, requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        // setProducts(result.data)
        setCurrentProduct(result.data)
    })
    .catch(error => console.log('error', error));
},[])
    
    
    return (
      <BaseLayout>
      {currentProduct &&
        <div className="show-product">
          <div className="item-wrapper">
            <div className="item-image">
              <img
                className="product-image"
                src={currentProduct.productImages[0].url}
                alt="product"
              />
            </div>
            <div className="item-name">
              <div className="product-info">
                <h3 id="product-name">{currentProduct.productName}</h3>
              </div>
              <div className="product-bio">
                <p id="product-description">{currentProduct.description}</p>
                <p id="product-price">${currentProduct.price}</p>
                <span className="cart">
                  <i
                    class="fas fa-shopping-cart fa-2x"
                    onClick={() => addItem(currentProduct)}
                  ></i>
                </span>
                <div class="review-section">
                  <label for="w3review">Give your review on this product:</label>
                  <textarea id="w3review" name="w3review" rows="5" cols="30" className="review-textarea">
                   
                  </textarea>
                  <button className="review-button">submit</button>
                </div>
                <div class="list-reviews">
                      
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 style={{ textAlign: "center" }}>
              Similar Products you may like
            </h3>
            {/* <div className="similar-products">
              {products.map((product, index) => {
                if (
                  product.gender === currentProduct.gender &&
                  product.type === currentProduct.type &&
                  product.name !== currentProduct.name
                ) {
                  return (
                    <Link to={`/products/${product.id}`}>
                      <div key={index} className="item">
                        <Link to={`/products/${product.id}`}>
                          <div className="product-img">
                            <img
                              alt={product.name}
                              src={product.img}
                              className="product-img-1"
                            />
                          </div>
                          <div className="product-details">
                            <h1 id="product-name">{product.name}</h1>
                            <h4 id="product-description">
                              {product.description}
                            </h4>
                          </div>
                        </Link>
                        <div className="price-add">
                          <h5 id="product-price">${product.price}</h5>
                          <span className="cart">
                            <i
                              class="fas fa-shopping-cart fa-2x"
                              onClick={() => addItem(currentProduct)}
                            ></i>
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                }
              })}
            </div> */}
          </div>
        </div>
}
      </BaseLayout>
    );
     
}

const mapStateToProps = createStructuredSelector({
  products: getAllProducts
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct);
