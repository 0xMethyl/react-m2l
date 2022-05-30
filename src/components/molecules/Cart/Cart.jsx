import React, { useState, useEffect } from "react";
// import axios from '../../../config/axios';

const Cart = () => {

    const [prix, setPrix] = useState(0);
    let items = JSON.parse(localStorage.getItem("produits"));
    if (items != null){
        //console.log(items);
    } else {
        localStorage.setItem("produits", "[{}]");
    }

    console.log(items[0].nom);

    const totalPrix = () => {
        let total = 0;
        items.forEach((i) => {
            setPrix(prix + i.prix * i.quantite);
        });
        return total;
    }

    return(
        <div className="main" style={{zIndex:"-1"}}>
            <div className="container produit-list" >
                <div className="row">
                    <h3 style={{marginLeft:"0%", fontFamily: "sans-serif"}}>🛒 Votre panier</h3>
                    <hr style={{width:"85%",marginRight: "auto", marginLeft:"0%"}} />
                    <div className="col-12 mb-5 mt-3">
                        <div className="container">
                            <div className="row">                   
                                {items && items.map((i) => (
                                    <div>
                                        <h3>{i.nom}</h3>
                                        <img className="prodImg" style={{display:"flex", margin:"0 auto"}} src={`/images/${i.nom}.jpg`.split(' ').join('_')} alt={i.nom} />
                                        <h5>Quantité : {i.quantite}</h5>
                                        <h5>Prix unitaire : <b>{i.prix}</b></h5>
                                        <h5>Prix total : <b>{i.prix * i.quantite} €</b></h5>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <p>Prix total : {totalPrix}</p>
                </div>
            </div> 
        </div>
    )
}

export default Cart;