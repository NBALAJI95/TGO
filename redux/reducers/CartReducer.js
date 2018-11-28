export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let changed = false;
            const newState = state.map((item) => {
                if(item.id === action.payload.id && action.payload.quantity !== item.quantity) {
                    changed = true;
                    return {...item, quantity: action.payload.quantity};
                }
                else
                    return item;
            });

            if(changed)
                return newState;

            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter((item) => {
                return action.payload !== item.id;
            });
        case 'EMPTY _CART':
            return [];
        default:
            return state;
    }
};