import { types } from '../types/types';

interface category{
    _id:string,
    name:string,
    max:number
    icon:string
}

const initialState:category[] = []

export const cagoriesReducer = ( state = initialState, action:any ) => {
    switch ( action.type ) {
        
        case types.loadCategorysFinish:
            return [
                ...action.payload,
            ]

        case types.addCategory:
            return [
                ...state,
                action.payload
            ]

        case types.updateCategoryFinish:
            return state.map(
                    category =>{
                        return ( category._id === action.payload._id ) ? action.payload : category
                    })

        case types.deleteCategoryFinish:
            return state.filter(
                    category =>{
                        return ( category._id !== action.payload._id )
                    })

        default:
            return state;
    }


}