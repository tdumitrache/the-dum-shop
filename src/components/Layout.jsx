import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout(props) {
    return(
        <div>
            <Header className="border-bottom mb-3"/>
                { props.children }
            <Footer/>
        </div>
    );
}

export default Layout;