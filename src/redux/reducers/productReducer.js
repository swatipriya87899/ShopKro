import { ActionType } from "../contants/action-type";

const initialState = {
    products:[]
}

const addToCart= {
    items:[]
}


export const productReducer = (state=initialState, {type, payload}) =>{
    switch(type){
        case ActionType.SET_PRODUCT:
            return {...state, products:payload};
        default:
            return state;
    }

}

export const selectedProductReducer = (state = initialState.products, {type,payload}) => {
    switch(type){
        case ActionType.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionType.REMOVE_PRODUCT:
            return {}
        default:
            return state;
    }
}

export const addToCartReducer = (state = addToCart, {type,payload} ) => {
    switch(type){
        case ActionType.ADD_TO_CART:
            return {...state, items:[...state.items,payload]};
            default:
                return state;
    }
}

