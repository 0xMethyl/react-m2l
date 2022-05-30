import React, { useState, useEffect } from "react";
// import axios from '../../../config/axios';

const Cart = () => {

    let items = localStorage.getItem("produits");
    if (items != null){
        console.log(items);
    } else {
        localStorage.setItem("produits", "[{}]");
    }

    console.log(items[0]);
    
    return(
        <div className="main" style={{zIndex:"-1"}}>
            <div className="container produit-list" >
                <div className="row">
                    <h3 style={{marginLeft:"0%", fontFamily: "sans-serif"}}>🛒 Votre panier</h3>
                    <hr style={{width:"85%",marginRight: "auto", marginLeft:"0%"}} />
                    <div className="col-12 mb-5 mt-3">
                        <div className="container">
                            <div className="row">                   
                                {items && items.Items.map((i) => (
                                    <p>{i.nom}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Cart;