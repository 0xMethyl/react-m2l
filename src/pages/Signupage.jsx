import React from 'react';

import Header from '../components/molecules/Header/Header';
import Signup from '../../src/components/molecules/Signup/Signup';

const Signupage = () => {
    return (
        <div className="signupage">
            <Header />
			<Signup />
        </div>
        
    );
}

export default Signupage;