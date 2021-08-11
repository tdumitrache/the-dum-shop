import React, { Component } from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import './Product.css';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }


    componentDidMount() {
        const productId = Number(this.props.match.params.productId);

        let foundProduct;

        Object.values(products).forEach(element => {
            let result = element.items.find(product => product.id === productId);
            if (result !== undefined) {
                foundProduct = result;
            }
        })

        this.setState({product: foundProduct});
    }

    render() {
        const { product } = this.state;
        const { addToCartInjected } = this.props;
        return (
            <Layout>
                <div className="container" style={{minHeight: '375px'}}>
                    <h2 className="pb-5 mt-5">{product.name}</h2>
                    <div className="row">
                        <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                            <img src={product.image} alt="product photo" style={{width: '300px', height: 'auto'}}/>
                        </div>
                        <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
                            <div className="price-button-container">
                                <h2 className="text-danger">{product.price} {product.currency}</h2>
                                <button className="btn btn-dark justify-self-start  fw-bold mb-3" onClick={() => addToCartInjected({
                                    product: {
                                        id: product.id,
                                        name: product.name,
                                        price: product.price,
                                        currency: product.currency,
                                        image: product.image
                                    }
                                })}>Adaugă în coș
                                </button>
                            </div>
                            <p className="fw-bold py-1">Marime: <span className="fw-normal">{product.size}</span></p>
                            <p className="fw-bold py-1">Culoare: <span className="fw-normal">{product.colour}</span></p>
                            <p className="fw-bold py-1">Material: <span className="fw-normal">{product.material}</span></p>
                            <p className="fw-bold py-1">Brand: <span className="fw-normal">{product.brand}</span></p>
                            <p className="fw-bold py-1">Descriere: <span className="fw-normal">{product.description}</span></p>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCartInjected: (payload) => dispatch(addToCart(payload))
    }
}

export default connect(null, mapDispatchToProps)(Product);
