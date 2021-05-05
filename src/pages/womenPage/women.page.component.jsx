import React from 'react';
import Women from '../../components/women/women.component'
import BaseLayout from "../../components/BaseLayout/baseLayout.component";
import './women.page.styles.scss'


const WomenPage = () => (
  <div className="Womenpage">
    <BaseLayout>
      <h2 className="women-title">WOMEN'S ITEMS</h2>
      <Women />
    </BaseLayout>
  </div>
);

export default WomenPage