import React from 'react';

import './checkout.styles.scss';

const Checkout = ({cartItem: {img, name, quantity, price }}) => {

   return (
     <div className="checkout">
       <div className="checkout-items">
         <div className="checkout-image-container">
           <img src={img} alt={name} />
         </div>
           <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">$ {price}</span>
       </div>
     </div>
   );
}

export default Checkout;