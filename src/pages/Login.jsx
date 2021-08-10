import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as Google } from '../assets/icons/google.svg';
import { loginUser } from '.././redux/actions/user';
import './Login.css';
import { connect } from 'react-redux';

class Login extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.userData !== prevProps.userData) {
            this.props.history.push('/');
        }
    }

    render() {

        const { loginUser } = this.props;
        
        return(
            <div className="login-page">
                <Link to='/'>
                    <img src={Logo} alt="logo" className="mb-5"/>
                </Link>

                <h1 className="h2">Login</h1>
                <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

                <button
                    className="btn btn-outline-dark d-flex align-items-center"
                    // La click pe butonul de login se apeleaza metoda signInWithGoogle, venita
                    // prin mapDispatchToProps.
                    onClick={() => loginUser()}
                >
                    <Google className="w-50 mr-3"/>
                    <span className="text-nowrap">Loghează-te cu Google</span>
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userData: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: () => dispatch(loginUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);