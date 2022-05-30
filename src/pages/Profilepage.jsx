import React from 'react';

import Header from '../components/molecules/Header/Header';
import Profile from '../components/molecules/Profile/Profile';
import Footer from '../components/molecules/Footer/Footer';

const Profilepage  = () => {

    return (
        <div className="profile">
            <Header/>
            <Profile/>
            <Footer/>
        </div>
    )
}

export default Profilepage;
