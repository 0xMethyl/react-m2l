import React from 'react';

import HeaderAdmin from '../components/molecules/HeaderAdmin/HeaderAdmin';
import Admin from '../../src/components/molecules/Admin/Admin';
import Footer from '../../src/components/molecules/Footer/Footer';

const Adminpage = () => {
    
    
    return (
        <div className="adminpage">
            <HeaderAdmin />
            <Admin />
            <Footer />
        </div>
    );
}

export default Adminpage;