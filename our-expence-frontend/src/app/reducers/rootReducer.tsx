import { combineReducers } from 'redux';

import { productsReducer } from './productsReducer';
import { cagoriesReducer } from './categoriesReducer';
import { trackReducer } from './trackReducer';


export const rootReducer = combineReducers({
    products: productsReducer,
    categories: cagoriesReducer,
    track: trackReducer
})