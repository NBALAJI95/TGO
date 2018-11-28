export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    };
};

export const emptyCart = () => {
    return {
        type: 'EMPTY _CART',
    };
};

export const resetCounter = () => {
    return {
        type: 'RESET_COUNTER',
    };
};

export const resetted = () => {
    return {
        type: 'RESETTED',
    };
};

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    };
};