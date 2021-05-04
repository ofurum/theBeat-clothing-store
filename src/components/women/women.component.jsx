import React,{useEffect,useState} from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getAllProducts } from "../../redux/directory/directory.selector";
import Card from "../Card/card.component";

import './women.styles.scss';

const Women = () => {
  const token = localStorage.getItem("token")
      const [products,setProducts] = useState("")
      useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("x-tag", "ODE1ZjM1YWZlNTI4Y2QwMThkNmJhMTI1NzNkMjk1YjRjZTdhZWUwODNmYzEyNTMzM2U2YThhZWM2YmIxZWFjZC8vLy8vLzc5NDY=");
        myHeaders.append("Authorization",`Bearer ${token}`)


    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

fetch("https://masters-prj.herokuapp.com/products?category=women", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    setProducts(result.data)
  })
  .catch(error => console.log('error', error));
  },[])
  if(products){
    return (
      <div className="women">
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
    );
  }
  else {
    return (
      <>No Products available now</>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  products: getAllProducts,
});

export default connect(mapStateToProps)(Women);