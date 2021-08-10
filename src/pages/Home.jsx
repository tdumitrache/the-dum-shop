import React from 'react';
import Layout from '../components/Layout';
import HomeCategory from '../components/HomeCategory';
import products from '../utils/products.json';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            categoryNames: []
        };
    }

    componentDidMount() {
        const categories = Object.values(products); 
        const categoryNames = Object.keys(products);
        this.setState({
            categories: categories,
            categoryNames: categoryNames
        });
    }

    render() {
        return (
            <div>
                <Layout>
                    <div className="container">
                        <div className="row">
                            {
                                this.state.categories.map((category, index) => {
                                    return (
                                        <HomeCategory 
                                            image={category.image}
                                            title={category.name}
                                            description={category.description}
                                            key={index}
                                            routeName={this.state.categoryNames[index]}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                </Layout>
            </div>
        );
    }
}

export default Home;