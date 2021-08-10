const initialState = {
    products: []
}

export function favoritesReducer(state = initialState, action) {
    if (action.type === 'ADD_FAVORITE') {
        const favoriteProducts = state.products;
        if (favoriteProducts.some(product => product.id === action.payload.id)) {
            return state;
        } else {
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            }
        }
        
        
    }
    else if (action.type === 'REMOVE_FAVORITE') {
        return {
            ...state,
            products: state.products.filter(favorite => favorite.id !== action.payload.id)
        }
    }

    return state;
} 