import React from 'react';

import Header1 from '../../src/components/molecules/Header1/Header1';
import Signup from '../../src/components/molecules/Signup/Signup';

const Signupage = () => {
    return (
        <div className="signupage">
            <Header1 />
			<Signup />
        </div>
        
    );
}

export default Signupage;