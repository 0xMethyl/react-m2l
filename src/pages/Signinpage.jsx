import React from 'react';

import Header from '../components/molecules/Header/Header';
import Signin from '../../src/components/molecules/Signin/Signin';

const Signinpage = () => {
    return (
        <div className="home">
            <Header />
			<Signin />
        </div>
        
    );
}

export default Signinpage;