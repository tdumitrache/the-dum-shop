import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import { addToFavorites, removeFavorite } from '../redux/actions/favorites';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import store from '../redux/store';
import './ProductItem.css';

function ProductItem(props) {

    const {id, name, price, currency, image, isFavorite, addToCartInjected, addToFavoritesInjected, removeFromFavoritesInjected, favoriteProducts } = props;
    return (
        <div className="product-item col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center my-3 text-center">
            <Link to={`/product/${id}`}>
                <img onClick ={() => console.log(store.getState())} src={image} alt="product" />
                <p className="fw-bold pt-4">{name}</p>
                <p>{price} {currency}</p>
            </Link>
                <button
                onClick={() => addToCartInjected({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image,
                        isFavorite
                    }
                })} 
                type="button" 
                className="btn btn-outline-dark">
                    Adaugă în coș
            </button>
            {
                favoriteProducts.some(product => product.id === id)
                    ? <AiFillHeart fontSize="30px" className="heart-full-icon" onClick={() => removeFromFavoritesInjected({
                        id
                    })}/>
                    : <AiOutlineHeart fontSize="30px" className="heart-outline-icon" onClick={() => addToFavoritesInjected({
                        id,
                            name,
                            price,
                            currency,
                            image,
                            isFavorite : true
                    })}/>
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favoriteProducts: state.favorites.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCartInjected: (payload) => dispatch(addToCart(payload)),
        addToFavoritesInjected: (payload) => dispatch(addToFavorites(payload)),
        removeFromFavoritesInjected: (payload) => dispatch(removeFavorite(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
