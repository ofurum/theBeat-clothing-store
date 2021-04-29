import React from 'react'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getAllProducts } from "../../redux/directory/directory.selector";
import AllItems from '../AllItems/AllItems.component'
import './directory.styles.scss'


const Directory = () => {
  return(
      <div className="items-wrapper">
          <div className="items-title">
            <h2>All Items</h2>
          </div>
        <AllItems />
      </div>
  )
};


export default Directory;