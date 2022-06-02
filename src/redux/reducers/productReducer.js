import { ActionType } from "../contants/action-type";

const initialState = {
    products:[],
    filterProducts: []
}

const addToCart= {
    items:[]
}


export const productReducer = (state=initialState, {type, payload}) =>{
    switch(type){
        case ActionType.SET_PRODUCT:
            return {...state, products:payload};
        case ActionType.FILTER_PRODUCT:
            return {...state, filterProducts:state.products.filter((product)=> product.category===payload)}
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

// export const filterProductReducer = (state = initialState.products, {type, payload})=>{
//     switch(type){
//         case ActionType.FILTER_PRODUCT:
//             return state.filter((product)=> product.category===payload)
//             default: 
//                return state
//     }
// }

