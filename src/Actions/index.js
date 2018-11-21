export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    };
};

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    };
};