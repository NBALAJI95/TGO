import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const exampleInitialState = {
    cart: [],
    products: [],
    SignUp: {
      name: '',
    	email: '',
    	phoneNumber: '',
    	address: { line1: '', line2: '', city: '', state: '', zip: '' },
    	driveFor: { Uber: false, Lyft: false, Neither: false },
    	fullTimeOrPartTime: '',
    	ridesPerWeek: '',
    	commission: '',
    	referredBy: '',
    	valid: false
    }
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
