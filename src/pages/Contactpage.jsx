import React from 'react';


import Header from '../components/molecules/Header/Header';

import ContentContact from '../components/molecules/ContentContact/ContentContact';

import Footer from '../components/molecules/Footer/Footer';

const ContactHome = () => {
    
    return (
        <div className="home">
            <Header />
            <ContentContact />
            <Footer />
        </div>
    )
}

export default ContactHome;