import React from 'react';
import Produit from '../../atomes/Produit/Produit';

const ContentHome = () => {
    return(
        <div className="main" style={{zIndex:"-1"}}>
            <div className="container produit-list" >
                <div className="row" >
                    <h3 style={{marginLeft:"9%",width:"20%", fontFamily: "Orbitron, sans-serif"}}>Produits</h3>
                    <hr style={{ width:"80%",marginRight: "auto", marginLeft:"auto"}} />
                    <div className="col-12 col-sm-6 col-lg-3 mb-5 mt-3">
                        <Produit />
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mb-5 mt-3">
                        <Produit />
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mb-5 mt-3">
                        <Produit />
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mb-5 mt-3">
                        <Produit />
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mb-5 mt-3">
                        <Produit />
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mb-5 mt-3">
                        <Produit />
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mb-5 mt-3">
                        <Produit />
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mb-5 mt-3">
                        <Produit />
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mb-5 mt-3">
                        <Produit />
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mb-5 mt-3">
                        <Produit />
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mb-5 mt-3">
                        <Produit />
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mb-5 mt-3">
                        <Produit />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContentHome;