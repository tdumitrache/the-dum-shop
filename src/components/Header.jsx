import React from 'react';
import {Link} from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import { logoutUser } from '../redux/actions/user';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import { connect } from 'react-redux';
import './Header.css';

function Header(props) {

    const { numberOfProducts, numberOfFavorites, userData, logoutUser } = props;

    return(
        <div className="header container">
            <Link to='/'>
                <img src={logo} alt="logo" />
            </Link>
            <div className="cart-container">
                <div className="d-flex flex-column w-100 justify-content-end">
                    {
                        userData
                            ? <p>Salut, {userData.displayName}</p>
                            : null
                    }
                    <div className="d-flex align-items-center justify-content-center">
                    {
                        userData
                            ? <p className="login" onClick={() => logoutUser()}>Logout</p>
                            : <Link to='/login' className="login">Login</Link>
                    }
                        <Link to="/favorites" className="flex-cart mx-3" >
                            <FaHeart fontSize="23px" color="red"/>
                            <p style={fontSize}>{numberOfFavorites}</p>
                        </Link>
                        <Link to="/cart" className="flex-cart">
                            <ShoppingCart />
                            <p style={fontSize}>{numberOfProducts}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

const fontSize = {
    fontSize: '20px',
    marginBottom: '0',
    padding: '0 .5rem',
}

const mapStateToProps = (state) => {
    return {
        numberOfProducts: state.cart.products.length,
        numberOfFavorites: state.favorites.products.length,
        userData: state.user.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);