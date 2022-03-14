import React, { useEffect, useState } from "react";
import axios from 'axios';

const Produit = () => {
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        fetchProduits();
    }, []);

    const fetchProduits = () => {

        axios.get("http://localhost:3001/produits")
            .then((res) => {
                console.log(res);
                setProduits(res.data.success);
            })
            .catch((err) => {
                console.log(err);
        });
    }

    return(
        <div> 
            <div className="container">
                <div className="row">
  
                {produits.map((produit) => (
                    <div className="col-12 col-sm-6 col-lg-3 mb-5 mt-3">
                        <div height="200px" className="rounded border border-dark pt-3 pb-1" style={{backgroundColor: "white"}}>
                            <img style={{width :"70%", height:"auto",marginRight:"auto",marginLeft:"15%"}} src="images/CG1.jpg" alt="" />
                            <p style={{display:"flex",justifyContent:"center",fontSize:"15px", marginTop:"10px"}}>{produit.produit_nom}</p>
                            <p style={{display:"flex",justifyContent:"center",fontSize:"15px", marginTop:"10px"}}>{produit.produit_prix}€</p>
                            <a className="btn btn-danger col-6 offset-3 mb-3" href="/#" style={{display:"flex",justifyContent:"center",fontSize:"13px"}}>Ajouter au panier</a>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div> 
    )
}

export default Produit;