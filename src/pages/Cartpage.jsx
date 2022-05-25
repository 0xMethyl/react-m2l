import React from 'react';

import Header from '../components/molecules/Header/Header';
import Cart from '../../src/components/molecules/Cart/Cart';
import Footer from '../../src/components/molecules/Footer/Footer';

const Cartpage = () => {
    
    
    return (
        <div className="cartpage">
            <Header />
            <Cart />
            <Footer />
        </div>
    );
}

export default Cartpage;