import React from 'react';

import Checkout from '../../src/components/molecules/Checkout/Checkout';
import Header1 from '../../src/components/molecules/Header1/Header1';

const Checkoutpage = () =>  {   
    return (
        <div className="checkout">
            <Header1 />
            <Checkout />
        </div>
    );
}

export default Checkoutpage;