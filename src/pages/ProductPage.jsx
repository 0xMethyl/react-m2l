import React from 'react';

import Header from '../components/molecules/Header/Header';
import ProdDesc from '../components/molecules/ProdDesc/ProdDesc';
import Footer from '../components/molecules/Footer/Footer';

const ProductSearchpage = () => {
    
    return (
        <div className="home">
                <Header />
            <div className="main" style={{zIndex:"-1"}}>
                <ProdDesc />
            </div>
                <Footer/>
        </div>
    )
}
export default ProductSearchpage;