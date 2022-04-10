import { types } from '../types/types';

interface product{
    _id:string,
    name:string,
    category:any
    price:number
}

const initialState:product[] = []

export const productsReducer = ( state = initialState, action:any ) => {
    switch ( action.type ) {
        
        case types.loadProductsFinish:
            return [
                ...action.payload,
            ]

        case types.addProduct:
            return [
                ...state,
                action.payload
            ]

        case types.updateProductFinish:
            return state.map(
                    product =>{
                        return ( product._id === action.payload._id ) ? action.payload : product
                    })

        case types.deleteProductFinish:
            return state.filter(
                    product =>{
                        return ( product._id !== action.payload._id )
                    })

        default:
            return state;
    }


}