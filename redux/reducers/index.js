import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import ProductsReducer from './ProductsReducer';
import SignUpReducer from './SignUpReducer';

export default combineReducers({
    cart: CartReducer,
    products: ProductsReducer,
    SignUp: SignUpReducer
});
