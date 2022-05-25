import { ActionType } from "../contants/action-type";

const initialState = {
    products:[]
}


export const productReducer = (state=initialState, {type, payload}) =>{
    switch(type){
        case ActionType.SET_PRODUCT:
            return {...state, products:payload};
        default:
            return state;
    }

}

export const selectedProductReducer = (state = {}, {type,payload}) => {
    switch(type){
        case ActionType.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionType.REMOVE_PRODUCT:
            return {}
        default:
            return state;
    }
}
