import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';

function Favorites(props) {

    const { favoriteProducts } = props;

    return (
        <Layout>
            <hr />
            {
                favoriteProducts.length === 0
                    ? <div className="d-flex justify-content-center align-items-center flex-column" style={{minHeight: '375px'}} >
                            <h1>Nu ai produse la favorite!</h1>
                            <Link to="/">
                                <button className="btn btn-outline-dark my-2">Inapoi la home</button>
                            </Link>
                      </div>
                    : <div className="container" style={{minHeight: '375px'}}>
                            <h2 className="ps-4 my-5">Favorite</h2>
                            <ProductList products={favoriteProducts}/>
                      </div> 
            }
            
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        favoriteProducts: state.favorites.products
    }
}

export default connect(mapStateToProps)(Favorites);
