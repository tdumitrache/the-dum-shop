import React from 'react';
import { Link } from 'react-router-dom';
import './HomeCategory.css';

function HomeCategory(props) {

    const {image, title, description, routeName} = props;

    return (
        <div className="home-category col-12 col-md-6 mb-4">
            <Link to={`/category/${routeName}`}>
                <img 
                    src={ image } 
                    alt="photo"
                    className="w-100"
                />
                <h2>{ title }</h2>
                <p className="lead">{ description }</p>
            </Link>
            
        </div>
    )
}

export default HomeCategory
