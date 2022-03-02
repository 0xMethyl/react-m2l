import React from 'react';

import Header from '../components/molecules/Header/Header';
import Register from '../../src/components/molecules/Register/Register';

const Signupage = () => {
    return (
        <div className="registerpage">
            <Header />
			<Register />
        </div>
        
    );
}

export default Signupage;