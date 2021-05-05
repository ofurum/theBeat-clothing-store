import React from 'react'
import Accessories from '../../components/Accessories/accessories.component'
import './accessories.page.scss'
import BaseLayout from "../../components/BaseLayout/baseLayout.component";

const AccessoriesPage = () => (
  <div className="accessories-page">
    <BaseLayout>
      <h2 className="accessories-title">ACCESSORIES</h2>
      <Accessories />
    </BaseLayout>
  </div>
);

export default AccessoriesPage;