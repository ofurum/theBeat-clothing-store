import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getAllProducts } from "../../redux/directory/directory.selector";
import Card from "../Card/card.component";
import './accessories.styles.scss'

const Accessories = ({products}) => (
  <div className="accessories">
    {
      products.map((product,index) => {
      if (product.category == "accessories") {
        return (
          <div className="card-list" key={index}>
            <Card
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
);

const mapStateToProps = createStructuredSelector({
  products: getAllProducts,
});

export default connect(mapStateToProps)(Accessories)