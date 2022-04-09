import { types } from '../types/types';

interface product{
    id:string,
    name:string,
    category:any
    price:number
}

const initialState:product[] = []

export const productsReducer = ( state = initialState, action:any ) => {

    switch ( action.type ) {
        
        case types.loadProductsFinish:
            return {
                ...action.payload,
            }
        
        default:
            return state;
    }


}