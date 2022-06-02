import { combineReducers } from "redux";
import { productReducer,selectedProductReducer,addToCartReducer, filterProductReducer
 } from "./productReducer";

const reducer = combineReducers({
    allProducts:productReducer,
    selected_product: selectedProductReducer,
    cartProduct: addToCartReducer,
})

export default reducer