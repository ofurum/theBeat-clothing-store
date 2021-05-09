import React from 'react'
import AllItems from '../AllItems/AllItems.component'
import './directory.styles.scss'


const Directory = () => {
  return(
      <div className="items-wrapper">
          <div className="items-title">
            <h2>ALL ITEMS</h2>
          </div>
        <AllItems />
      </div>
  )
};


export default Directory;