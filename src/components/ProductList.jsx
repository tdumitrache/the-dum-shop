import React from 'react';
import ProductItem from './ProductItem';

function ProductList(props) {

    const {products} = props;

    return (
        <div className="row">
            {
                products.map(product => {
                    return (
                        <ProductItem 
                            image={product.image}
                            name={product.name}
                            currency={product.currency}
                            price={product.price}
                            id={product.id}
                            key={product.id}
                            isFavorite={product.isFavorite}
                        />
                    )
                })
            }
        </div>
    )
}

export default ProductList
