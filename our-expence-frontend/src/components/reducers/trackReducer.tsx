import { types } from '../types/types';

interface product{
    _id:string,
    name:string,
    category:any
    price:number
}

const initialState:product[] = []

export const trackReducer = ( state = initialState, action:any ) => {
    console.log("types",action.type)
    console.log("action", action.payload)
    switch ( action.type ) {
        case types.loadMonthTrackFinish:
            console.log("IN")
            return [
                ...action.payload,
            ]

        default:
            return state;
    }


}