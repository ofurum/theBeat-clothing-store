import React from 'react'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getAllProducts } from "../../redux/directory/directory.selector";
import Card from "../Card/card.component";
import './clothes.styles.scss';

const Clothes = ({products}) => (
  <div>
    <div className="men">
      {products.map((product,index) => {
        if (product.category == "clothes") {
          return (
            <div className="card-list" key={index}>
              <Card
                product={product}
                productName={product.name}
                productDescription={product.description}
                productId={product.id}
                productImg={product.img}
                productPrice={product.price}
              />
            </div>
          );
        }
      })}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  products: getAllProducts,
});

export default connect(mapStateToProps)(Clothes);