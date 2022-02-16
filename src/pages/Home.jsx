import React from 'react';

import Header1 from '../components/molecules/Header1/Header1';
// import Header2 from '../../src/components/molecules/Header2/Header2';

import Contenthome from '../../src/components/molecules/ContentHome/ContentHome';
import Footer from '../../src/components/molecules/Footer/Footer';

const Home = () => {
    
    
    return (
        <div className="home">
            <Header1 />
            <Contenthome />
            <Footer />
        </div>
    )
}

export default Home;