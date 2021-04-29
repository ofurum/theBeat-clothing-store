import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getAllProducts } from "../../redux/directory/directory.selector";
import BaseLayout from "../../components/BaseLayout/baseLayout.component";
import { Link } from "react-router-dom";
import './showProduct.styles.scss';


const ShowProduct = ({products, match}) => {
       const product = products.find(product => product.id === Number(match.params.id))
       const currentProduct = product
    return (
      <BaseLayout>
      <div className="show-product">
        <div className="item-wrapper">
          <div className="item-image">
            <img
              className="product-image"
              src={currentProduct.img}
              alt="product"
            />
          </div>
          <div className="item-name">
            <div className="product-info">
              <h3 id="product-name">{currentProduct.name}</h3>
            </div>
            <div className="product-bio">
              <p id="product-description">{currentProduct.description}</p>
              <p id="product-price">${currentProduct.price}</p>
              <span className="cart">
                <i class="fas fa-shopping-cart fa-2x"></i>
              </span>
            </div>
          </div>
        </div>
        <div>
            <h3 style={{textAlign: 'center'}}>Similar Products you may like</h3>
          <div className="similar-products">
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
                        <span id="add-span">add_shopping_cart</span>
                      </div>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
      </BaseLayout>
    );
}

const mapStateToProps = createStructuredSelector({
  products: getAllProducts
});

export default connect(mapStateToProps)(ShowProduct)
