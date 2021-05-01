import React,{useEffect} from 'react';
// import './App.css';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from './pages/homepage/hompage.pages'
import ShowProduct from '../src/components/ShowProduct/showProduct.component'
import MenPage from '../src/pages/Menpage/men.page.component'
import WomenPage from '../src/pages/womenPage/women.page.component'
import ClothesPage from '../src/pages/ClothesPage/clothes.page'
import AccessoriesPage from '../src/pages/Accessories/accessories.page'
import SignupPage from './pages/Signup/signup.page'
import LoginPage from './pages/login/login.page'
import CartPage from '../src/pages/Cartpage/Cart.page'
import CheckoutPage from '../src/pages/CheckOut/checkout.page'
//import { createStructuredSelector } from "reselect";
import  {fetchIntilize} from '../src/redux/Initilize/initilize.action'
import {initializeFetchedData} from '../src/redux/Initilize/initilize.selector'
const App = ({ data, fetchIntilize }) => {
  useEffect(() => {
    const xTag = fetchIntilize();
    return xTag;
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/men" component={MenPage} />
        <Route path="/women" component={WomenPage} />
        <Route path="/clothes" component={ClothesPage} />
        <Route path="/accessories" component={AccessoriesPage} />
        <Route exact path="/products/:id" component={ShowProduct} />
        <Route path="/logIn" component={LoginPage} />
        <Route path="/register" component={SignupPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/check-out" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  data: initializeFetchedData,
});

export default connect(mapStateToProps, { fetchIntilize })(App);
