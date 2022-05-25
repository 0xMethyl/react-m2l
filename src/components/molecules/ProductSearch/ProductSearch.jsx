import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from '../../../config/axios';

const ProductSearch = () => {

    const [produits, setProduits] = useState([]);
    const params = useSearchParams();

    useEffect(() => {
        fetchProduits();
    });
    
    const fetchProduits = () => {

        axios.get("/produits/search/" + params.get("keyword"))
            .then((res) => {
                console.log(res);
                setProduits(res.data.success);
            })
            .catch(err => {
                console.log(err);
        });
    }

    return(
        <div className="container produit-list" >
                <div className="row" >
                    <h3 style={{ marginLeft:"1%", fontFamily: "sans-serif" }}>Produits associés à la recherche : <b>{params.get("keyword")}</b></h3>
                    <hr style={{ width:"85%",marginRight: "auto", marginLeft:"0%"}} />
                    <div className="col-12 mb-5 mt-3" style={{fontFamily:"sans-serif"}}>
                        <div className="container">
                            <div className="row">                   
                            {produits.map((produit) => (
                                <div className="col-12 col-sm-6 col-lg-3 mb-5 mt-3">
                                    <div height="200px" className="rounded border border-dark pt-3 pb-1" style={{backgroundColor: "white"}}>
                                        <img className="prodImg" style={{display:"flex", margin:"0 auto"}} src={`../images/${produit.produit_nom}.jpg`.split(' ').join('_')} alt="" />
                                        <p style={{display:"flex",justifyContent:"center", fontSize:"15px", marginTop:"10px"}}>{produit.produit_nom}</p>
                                        <p style={{display:"flex",justifyContent:"center", fontSize:"15px", marginTop:"10px"}}>{produit.produit_prix} €</p>
                                        <a className="btn btn-danger col-6 offset-3 mb-3" href={`/product/${produit.produit_id}`} style={{display:"flex",justifyContent:"center",fontSize:"13px"}}>Voir le produit</a>
                                        <p style={{display:"flex",justifyContent:"center", fontSize:"15px", marginTop:"10px"}}>Stock restant : {produit.produit_quantite}</p>
                                        <p style={{display:"flex",justifyContent:"center", fontSize:"15px", marginTop:"10px"}}>Catégorie : <a style={{display: "inline", wordWrap:"break-word", whiteSpace:"normal"}} href={`/category/${produit.categorie_id}`}>{produit.categorie_nom}</a></p>
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

export default ProductSearch;