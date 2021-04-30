import React from 'react';
import Cart from '../../components/Cart/Cart.component'
import CustomButton from '../../components/CustomButton/customButton.component'
import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'
// import {totalAmountOfItems} from '../../redux/cart/cart.selector'
// import {createStructuredSelector} from 'reselect'
import './Cart.page.scss';

const CartPage = () => {

    return (
      <div className="cart-page">
        <div className="cart-page-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>description</span>
          </div>
          <div className="header-block">
            <span>quantity</span>
          </div>
          <div className="header-block">
            <span>price</span>
          </div>
          <div className="header-block">
            <span>remove</span>
          </div>
        </div>
        <Cart />
        <div className="check-out-button">
          <CustomButton>
            <Link to="/check-out">Check Out</Link>
          </CustomButton>
        </div>
      </div>
    );
}

// const mapStateToProps = createStructuredSelector({
//   total: totalAmountOfItems,
// });
export default CartPage;