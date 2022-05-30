import React from 'react';

import Header from '../components/molecules/Header/Header';
import Admin from '../../src/components/molecules/Admin/Admin';
import Footer from '../../src/components/molecules/Footer/Footer';

const Adminpage = () => {
    
    
    return (
        <div className="adminpage">
            <Header />
            <Admin />
            <Footer />
        </div>
    );
}

export default Adminpage;