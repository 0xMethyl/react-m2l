import React from 'react';

import Checkout from '../../src/components/molecules/Checkout/Checkout';
import Header from '../components/molecules/Header/Header';

const Checkoutpage = () =>  {   
    return (
        <div className="checkout">
            <Header />
            <Checkout />
        </div>
    );
}

export default Checkoutpage;