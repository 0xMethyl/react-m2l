import React from 'react';

import Header1 from '../components/molecules/Header/Header';
import Login from '../../src/components/molecules/Login/Login';

const Signupage = () => {
    return (
        <div className="loginpage">
            <Header />
			<Signup />
        </div>
        
    );
}

export default Signupage;