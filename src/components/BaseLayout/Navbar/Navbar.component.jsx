import React from 'react';
import { Icon } from "react-materialize";
import { NavLink } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { itemsCounted } from "../../../redux/cart/cart.selector";
import {searchItems} from '../../../redux/directory/directory.selector'
import TextField from "@material-ui/core/TextField";
import {Autocomplete} from "@material-ui/lab";
import { connect } from "react-redux"
import {search} from '../../../redux/directory/directory.action'
import './Navbar.styles.scss'

const Navbar = ({ itemsCount, search, searchItem }) => {
  

return (
  <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li>
          <NavLink activeClassName="selected" className="nav-link" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" className="nav-link" to="/women">
            Women
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" className="nav-link" to="/men">
            Men
          </NavLink>
        </li>
        <li>
          <input
            type="search"
            placeholder="search for product"
            className="search-input"
            onChange={(e) => search(e.target.value)}
            value={searchItem}
          />
        </li>
      </ul>
    </div>

    <div className="nav-accessories">
      <div className="shopping-cart">
        <NavLink to="/cart">
          <span className="cart">
            <i className="fas fa-cart-plus"></i>
          </span>
          <span className="dot"></span>
          <span className="cart-counter">{itemsCount}</span>
        </NavLink>
      </div>

      <div className="user-account">
        <NavLink to="/logIn">Account</NavLink>
      </div>
    </div>
  </nav>
);};

const mapStateToProps = createStructuredSelector({
  itemsCount: itemsCounted,
  searchItem: searchItems,
});
const mapDispatchToProps = (dispatch) => ({
   search: (value) => dispatch(search(value))
})
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);