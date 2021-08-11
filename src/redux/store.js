import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { cartReducer } from "./reducers/cart";
import { userReducer } from './reducers/user';
import { favoritesReducer } from './reducers/favorites';

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    favorites: favoritesReducer
});

const middlewares = [ReduxThunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;