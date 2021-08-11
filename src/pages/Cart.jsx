import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaTimes } from 'react-icons/fa'
import { removeFromCart } from '../redux/actions/cart';

function Cart(props) {

    const { products, removeFromCartInjected } = props;

    return (
        <Layout>
            {
                products.length === 0
                    ? <div className="d-flex flex-column align-items-center justify-content-center" style={minHeight}>
                        <h1>Nu ai produse in cos!</h1>
                        <Link to="/">
                            <button className="btn btn-outline-dark my-2">Inapoi la home</button>
                        </Link>
                      </div>
                    : <div style={container}>
                            <div className="row text-center my-4">
                                <div className="col-3">
                                    <h4>Produs</h4>
                                </div>
                                <div className="col-3">
                                    <h4>Pret</h4>
                                </div>
                                <div className="col-3">
                                    <h4>Cantitate</h4>
                                </div>
                                <div className="col-3">
                                    <h4>Total</h4>
                                </div>
                            </div>
                            {
                                products.map(product => {
                                    return (
                                        <div className="row text-center d-flex align-items-center justify-content-center" style={fontSize}>
                                            <div className="col-3">
                                                <img src={product.image} alt="photo" style={img}/>
                                                <p>{product.name}</p>
                                            </div>
                                            <div className="col-3">
                                                <p>{product.price} {product.currency}</p>
                                            </div>
                                            <div className="col-3">
                                                <p>{product.quantity}</p>
                                            </div>
                                            <div className="col-3 d-flex align-items-center justify-content-center">
                                                <p className="my-0">{product.price * product.quantity} {product.currency}</p>
                                                <i 
                                                    className="px-1 pointer"
                                                    style={{cursor: 'pointer'}}
                                                    onClick={() => removeFromCartInjected(product.id)}
                                                >
                                                    <FaTimes />
                                                </i>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <hr />
                            <div className="row d-flex align-items-center justify-content-end text-center my-4">
                                <div className="col-3">
                                    <h4>Total de plata:</h4>
                                </div>
                                <div className="col-3">
                                    <h4 className="my-0">{
                                        products.reduce((total, product) => {
                                            return total += product.price * product.quantity;
                                        }, 0)
                                    } LEI
                                    </h4>
                                </div>
                            </div>
                        </div>
            }



            
        </Layout>
    )
}

const fontSize = {
    fontSize: '1.2rem'
}

const container = {
    maxWidth: '1200px',
    minHeight: '375px',
    margin: 'auto'
}

const img = {
    maxHeight: '100px'
}

const minHeight = {
    minHeight: '375px'
}

const mapStateToProps = (state) => {
    return {
        products: state.cart.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCartInjected: (id) => dispatch(removeFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
