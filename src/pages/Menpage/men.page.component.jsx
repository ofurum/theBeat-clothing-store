import React from 'react'; 
import Men from '../../components/Men/men.component'
import BaseLayout from "../../components/BaseLayout/baseLayout.component";
import './men.page.styles.scss';


const MenPage = () => {

    return (
      <div className="Menpage">
        <BaseLayout>
          <h2 className="men-title">MEN'S ITEMS</h2>
          <Men />
        </BaseLayout>
      </div>
    );
}

export default MenPage;