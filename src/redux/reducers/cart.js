const initialState = {
    products: []
}

export function cartReducer(state = initialState, action) {
    if (action.type === 'ADD_TO_CART') {
        let productInCart = false;
        const updatedProducts = state.products.map(product => {
            if (product.id === action.payload.product.id) {
                productInCart = true;
                return {
                    ...product,
                    quantity: product.quantity + 1
                }
            } else {
                return product;
            }
        })

        if (!productInCart) {
            return {
                ...state,
                products: [
                    ...state.products,
                    {
                        ...action.payload.product,
                        quantity: 1
                    }
                ]
            }
        } else {
            return {
                ...state,
                products: updatedProducts
            }
        }
    }
    else if (action.type === 'REMOVE_FROM_CART') {
        return {
            ...state,
            products: 
                state.products.filter(product => {
                    return product.id !== action.id;
                })
        }
    }

    return state;
}

