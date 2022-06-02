import { Category } from "@mui/icons-material";
import { ActionType } from "../contants/action-type";

export const setProducts = (products) =>{
    return{
        type: ActionType.SET_PRODUCT,
        payload:products
    }
}

export const selectedProduct = (product) => {
    return{
        type:ActionType.SELECTED_PRODUCT,
        payload:product
    }
}

export const removeSelectedProduct = () => {
    return{
        type:ActionType.REMOVE_PRODUCT
    }
}

export const addToCart = (product) => {
    return{
        type: ActionType.ADD_TO_CART,
        payload:product
    }
}

export const filterProduct = (category) => {
    return{
        type: ActionType.FILTER_PRODUCT,
        payload: category
    }
}