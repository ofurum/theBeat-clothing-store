import React, {useEffect,useState} from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getAllProducts } from "../../redux/directory/directory.selector";
import Card from "../Card/card.component";
import Loading from "../../components/Load/load.component";
import './accessories.styles.scss'

const Accessories = () => {
   const token = localStorage.getItem("token")
   const xTag = localStorage.getItem("x-tag")
      const [products,setProducts] = useState("")
      useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("x-tag", xTag);
        myHeaders.append("Authorization",`Bearer ${token}`)


    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

fetch("https://masters-prj.herokuapp.com/products?category=Accessories", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    setProducts(result.data)
  })
  .catch(error => console.log('error', error));
  },[])
  if(products){
  return(
  <div>
    <div className="men">
      {products.map((product,index) => {
          return (
            <div className="card-list" key={index}>
              <Card
                  product={product}
                  productName={product.productName}
                  productDescription={product.productDescription}
                  productId={product._id}
                  productImg={product.productImages[0].url}
                  productPrice={product.price}
                />
            </div>
          );
      })}
    </div>
  </div>
)
  }else {
    return(
       <Loading />
    )
  }
};

const mapStateToProps = createStructuredSelector({
  products: getAllProducts,
});

export default connect(mapStateToProps)(Accessories)