import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getAllProducts } from "../../redux/directory/directory.selector";
import Card from '../Card/card.component'
import './men.styles.scss';


const Men = ({products}) => {
    return(
        <div className = 'men'>
             {
                 products.map((product, index) => {
                     if(product.gender == 'men'){
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
                 })
             }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
  products: getAllProducts,
});
export default connect(mapStateToProps)(Men);