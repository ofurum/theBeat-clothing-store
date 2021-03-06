import React,{ useEffect } from 'react';
import Checkout from '../../components/Checkout/checkout.component'
import './checkout.page.scss';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {totalAmountOfItems,selectedCartItem,} from "../../redux/cart/cart.selector";
import { signUpUserData } from "../../redux/user/user.selector"
import {createStructuredSelector} from 'reselect'
import { usePaystackPayment } from 'react-paystack';

const CheckoutPage = ({total, cartItems,userData }) => {

  useEffect(()=>{
    if (!localStorage.getItem("token")){
    window.location.href="/login"
  } 
  },[])

console.log("data",userData)
  
  const config = {
    reference: (new Date()).getTime(),
    email: userData.email, // change to user email here to personal email
    amount: parseInt(total*100),
    publicKey: 'pk_test_888cd56ab76524f91a76b3cf86531b57e70a8bcb',
  };
  console.log("total",Math.round((total + Number.EPSILON) * 100) / 100*100)
  // you can call this function anything
  const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);  
    window.location.href="/"
  };
  
  // you can call this function anything
  const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
  }
  
  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
          <button 
          className= 'custom-button'
          onClick={() => {
              initializePayment(onSuccess, onClose)
          }}>Proceed to payment</button>
      </div>
    );
  }; 
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
            <PaystackHookExample />
          </div>
        </div>
       
      </div>

    );
};
const mapStateToProps = createStructuredSelector({
  total: totalAmountOfItems,
  cartItems: selectedCartItem,
  userData: signUpUserData
});
export default connect(mapStateToProps)(CheckoutPage);