const initialState = {
    data: null,
    loading: false,
    error: null
}

export function userReducer(state = initialState, action) {
    if (action.type === 'START_LOADING') {
        return {
            ...state,
            loading: true
        }
    }
    else if (action.type === 'UPDATE_USER_DATA') {
        return {
            ...state,
            data: action.payload,
            loading: false
        }
    }
    else if (action.type === 'UPDATE_ERROR') {
        return {
            ...state,
            error: action.payload,
            loading: false
        }
    }

    return state
}