import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import ProductsReducer from './ProductsReducer';

export default combineReducers({
    cart: CartReducer,
    products: ProductsReducer,
});