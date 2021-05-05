import React from "react";
import Clothes from "../../components/Clothes/clothes.component";
import BaseLayout from "../../components/BaseLayout/baseLayout.component";
import "./clothes.page.scss";



const ClothesPage = () => {
  return (
    <div>
      <BaseLayout>
        <h2 className="clothes-title" style={{textAlign:'center'}}>CLOTHES</h2>
          <Clothes />
      </BaseLayout>
    </div>
  );
}

export default ClothesPage;