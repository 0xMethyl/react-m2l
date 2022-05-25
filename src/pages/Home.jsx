import React from 'react';

import Header from '../components/molecules/Header/Header';
import Contenthome from '../../src/components/molecules/ContentHome/ContentHome';
import Footer from '../../src/components/molecules/Footer/Footer';

const Home = () => {
    
    
    return (
        <div className="home">
            <Header />
            <Contenthome />
            <Footer />
        </div>
    )
}

export default Home;