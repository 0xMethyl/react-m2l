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
        <div className="container produit-list" >
            <div className="row" >
                <h3 style={{marginLeft:"0%", fontFamily: "sans-serif"}}>Produits en stock</h3>
                <hr style={{width:"85%",marginRight: "auto", marginLeft:"0%"}} />
                <div className="col-12 mb-5 mt-3">
                    <div className="container">
                        <div className="row">                   
                        {produits.map((produit) => (
                            <div className="col-12 col-sm-6 col-lg-4 mb-5 mt-3">
                                <div className="pt-3 pb-1 rounded border border-dark" style={{backgroundColor: "white",height:"400px"}}>
                                    <img className="prodImg" style={{display:"flex", margin:"0 auto"}} src={`/images/${produit.produit_nom}.jpg`.split(' ').join('_')} alt="" />
                                    <p style={{display:"flex",justifyContent:"center", fontSize:"18px", marginTop:"10px",textAlign:"center"}}>{produit.produit_nom}</p>
                                    <p style={{display:"flex",justifyContent:"center", fontSize:"18px", marginTop:"10px"}}><span>Prix : {produit.produit_prix}€</span></p>
                                    <a className="btn btn-danger col-8 offset-2 mb-3" href={`/product/${produit.produit_id}`} style={{display:"flex",justifyContent:"center",fontSize:"13px"}}>Voir le produit</a>
                                    <p style={{display:"flex",justifyContent:"center", fontSize:"12px", marginTop:"10px"}}>Stock restant : {produit.produit_quantite}</p>
                                    <p style={{display:"flex",justifyContent:"center", fontSize:"12px", marginTop:"10px"}}><a style={{textAlign:"center"}}>Catégorie : <a style={{display: "inline", wordWrap:"break-word", whiteSpace:"normal"}} href={`/category/${produit.categorie_id}`}>{produit.categorie_nom}</a></a></p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Produit;