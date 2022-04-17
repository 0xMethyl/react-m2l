import React from 'react';

import Header from '../components/molecules/Header/Header';
import ProductSearch from '../components/molecules/ProductSearch/ProductSearch';
import Footer from '../components/molecules/Footer/Footer';

const ProductSearchpage = () => {
    
    return (
        <div className="home">
                <Header />
            <div className="main" style={{zIndex:"-1"}}>
                <ProductSearch />
            </div>
                <Footer/>
        </div>
    )
}
export default ProductSearchpage;