import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getAllProducts } from "../../redux/directory/directory.selector";
import Card from "../Card/card.component";

import './women.styles.scss';

const Women = ({products}) => {

    return (
      <div className="women">
        {products.map((product,index) => {
          if (product.gender == "women") {
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
    );
}

const mapStateToProps = createStructuredSelector({
  products: getAllProducts,
});

export default connect(mapStateToProps)(Women);