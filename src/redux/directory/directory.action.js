import {SearchProduct, setProductData} from './directory.types'

export const search = (value) =>({
    type: SearchProduct.SEARCH_PRODUCT,
    payload:value
})

export const setProducts = (product) => ({
   type: setProductData.SET_PRODUCT_DATA,
   payload: product
})