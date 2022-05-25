import React from 'react';

import Header from '../components/molecules/Header/Header';
import Category from '../components/molecules/Category/Category';
import Footer from '../components/molecules/Footer/Footer';

const CategoryPage = () => {
    
    return (
        <div className="home">
                <Header />
            <div className="main" style={{zIndex:"-1"}}>
                <Category />
            </div>
                <Footer/>
        </div>
    )
}
export default CategoryPage;