import {SearchProduct,saveProductsData} from './directory.types'



export function fetchProductData (){
    console.log("action")
    return async (dispatch) => {
        console.log("imit act")
            var myHeaders = new Headers();
            myHeaders.append("x-tag", "ODE1ZjM1YWZlNTI4Y2QwMThkNmJhMTI1NzNkMjk1YjRjZTdhZWUwODNmYzEyNTMzM2U2YThhZWM2YmIxZWFjZC8vLy8vLzc5NDY=");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://masters-prj.herokuapp.com/products", requestOptions)
            .then(response => response.json())
            .then(result => dispatch(saveProducts(result.data)))
            .catch(error => console.log('error', error));
        }
}
 
export const search = (value) =>({
    type: SearchProduct.SEARCH_PRODUCT,
    payload:value
})

export const saveProducts = (value) =>({
    type:saveProductsData.SAVE_PRODUCTS_DATA,
    payload: value
})