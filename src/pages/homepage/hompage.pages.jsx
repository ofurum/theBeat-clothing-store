import React from 'react';
import Directory from '../../components/Directory/directory.component'
import BaseLayout from "../../components/BaseLayout/baseLayout.component"
import './homepage.styles.scss'

const HomePage = () => {
  
    return (
      <div>
        <BaseLayout>
          <Directory />
        </BaseLayout>
      </div>
    );
}

export default HomePage