export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product
});

export const emptyCart = () => ({
    type: 'EMPTY _CART',
});

export const resetCounter = () => ({
    type: 'RESET_COUNTER',
});

export const resetted = () => ({
    type: 'RESETTED',
});

export const removeFromCart = (id) => ({
    type: 'REMOVE_FROM_CART',
    payload: id
});

// SignUp actions
export const setState = (property, value) => ({
	type: 'SET_STATE',
	payload: { property, value }
});

export const getState = () => ({
	type: 'GET_STATE'
});

export const reset = () => ({
	type: 'RESET'
});
