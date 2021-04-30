import React from 'react';
import Checkout from '../../components/Checkout/checkout.component'
import './checkout.page.scss';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CustomButton from '../../components/CustomButton/customButton.component'
import {totalAmountOfItems,selectedCartItem,} from "../../redux/cart/cart.selector";
import {createStructuredSelector} from 'reselect'

const CheckoutPage = ({total, cartItems }) => {

    return (
      <div className="checkout-page">
        <div className="back-to-cart">
          <Link to="/cart">
            <i class="fas fa-arrow-left"></i>{" "}Back to Cart
          </Link>
        </div>
        <div className="checkout-session">
          <div className="checkout-page-header">
            <div className="cheeckout-header-block">
              <span>Product</span>
            </div>
            <div className="checkout-header-block">
              <span style={{ marginLeft: "175px" }}>description</span>
            </div>
            <div className="checkout-header-block">
              <span style={{ marginLeft: "145px" }}>quantity</span>
            </div>
            <div className="checkout-header-block">
              <span style={{ marginLeft: "125px" }}>price</span>
            </div>
          </div>
          <div className="check-out-products">
            {cartItems.map((cartItem, index) => (
              <Checkout key={index} cartItem={cartItem} />
            ))}
          </div>

          <div className="total">total:${total}</div>
          <div className="payment-button">
            <CustomButton>Proceed to Payment</CustomButton>
          </div>
        </div>
      </div>
    );
};
const mapStateToProps = createStructuredSelector({
  total: totalAmountOfItems,
  cartItems: selectedCartItem,
});
export default connect(mapStateToProps)(CheckoutPage);