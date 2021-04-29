import React from 'react';
import Cart from '../../components/Cart/Cart.component'
import {connect} from 'react-redux'
import {totalAmountOfItems} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'
import './Cart.page.scss';

const CartPage = ({total}) => {

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
        <div className="total">
             Total: ${total}
        </div>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  total: totalAmountOfItems,
});
export default connect(mapStateToProps)(CartPage);