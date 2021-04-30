import {SearchProduct} from './directory.types'

export const search = (value) =>({
    type: SearchProduct.SEARCH_PRODUCT,
    payload:value
})