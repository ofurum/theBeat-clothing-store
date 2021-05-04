import React from 'react';

import './checkout.styles.scss';

const Checkout = ({cartItem: {productImages, productName, quantity, price }}) => {

   return (
     <div className="checkout">
       <div className="checkout-items">
         <div className="checkout-image-container">
           <img src={productImages[0].url} alt={productName} />
         </div>
           <span className="name">{productName}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">$ {price}</span>
       </div>
     </div>
   );
}

export default Checkout;