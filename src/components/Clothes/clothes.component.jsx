import React, {useEffect,useState} from 'react'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getAllProducts } from "../../redux/directory/directory.selector";
import Card from "../Card/card.component";
import './clothes.styles.scss';

const Clothes = () => {
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

fetch("https://masters-prj.herokuapp.com/products?category=clothing", requestOptions)
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
      { products.data !== [] ? 
      products.map((product,index) => {
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
      })
      :
      <>No Products available now</>
      }
    </div>
  </div>
)
  }else {
    return(
      <>No Products available now</>
    )
  }

};

const mapStateToProps = createStructuredSelector({
  products: getAllProducts,
});

export default connect(mapStateToProps)(Clothes);