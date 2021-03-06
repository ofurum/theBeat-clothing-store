import React,{useEffect,useState} from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getAllProducts } from "../../redux/directory/directory.selector";
import Card from '../Card/card.component'
import Loading from '../../components/Load/load.component'
import './men.styles.scss';


const Men = () => {
      const [products,setProducts] = useState("")
      const xTag = localStorage.getItem("x-tag")
      useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("x-tag", xTag)


    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

fetch("https://masters-prj.herokuapp.com/products?category=men", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    setProducts(result.data)
  })
  .catch(error => console.log('error', error));
  },[xTag])

  if (products){
    return(
        <div className = 'men'>
             {
                 products.map((product, index) => {
                     
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
             }
        </div>
    )
  }
  else {
    return (
      <Loading />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  products: getAllProducts,
});
export default connect(mapStateToProps)(Men);