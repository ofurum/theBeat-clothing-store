import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { itemsCounted } from "../../../redux/cart/cart.selector";
import {searchItems} from '../../../redux/directory/directory.selector'
import { connect } from "react-redux"
import {search} from '../../../redux/directory/directory.action'
import './Navbar.styles.scss'

const  LogoutButton = () => {
  const handleLogout = (e) => {
    localStorage.clear()
    window.location.href="/"
  }
  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  )
}

const Navbar = ({ itemsCount, search, searchItem }) => {

const [isClicked, setClicked] = useState(false);
// const closeMenu = () => setClicked(isClicked);
const handleClick = () => {
  setClicked(!isClicked)
};


const username = localStorage.getItem("username")

return (
  <nav className="navbar">
    <div className="nav-mobile" onClick={handleClick}>
      {isClicked ? (
        <span style={{ color: "white" }}>
          <i style={{ fontSize: "21px" }} className="fas fa-times"></i>
        </span>
      ) : (
        <span>
          <i class="fas fa-bars" style={{ fontSize: "21px" }}></i>
        </span>
      )}
    </div>
    <div className={isClicked ? "nav-mobile-view" : "nav-links"}>
      <ul className="mobile-list">
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

      <div className="user-account nav-login">
        {username ? (
          <div className="logout">
            <span className="no-wrap"> Hi, {username} </span>
            <LogoutButton />
          </div>
        ) : (
          <NavLink to="/logIn">Account</NavLink>
        )}
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