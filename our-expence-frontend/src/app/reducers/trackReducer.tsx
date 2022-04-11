import { types } from '../types/types';

interface product{
    _id:string,
    name:string,
    category:any
    price:number
}

const initialState:product[] = []

export const trackReducer = ( state = initialState, action:any ) => {
    
    switch ( action.type ) {
        case types.loadMonthTrackFinish:
            return [
                ...action.payload,
            ]

        default:
            return state;
    }


}