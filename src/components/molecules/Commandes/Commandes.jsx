import React, { useState, useEffect } from "react";
import axios from '../../../config/axios';

const Cart = () => {
    let [prix, setPrix] = useState(0);

    let [loggedIn, setLoginStatus] = useState(false);
    let [idClient, setIdClient] = useState(0);

    useEffect(() => {
        axios.get("/users/login").then((response) => {
			if (response.data.loggedIn === true){
				setLoginStatus(true);
                setIdClient(response.data.client_id);
			}
		}).catch((err) =>{
			console.log("login error ", err)
		})

        items.forEach((i) => {
            prix += i.prix * i.quantite;
        });
        console.log(prix);
        setPrix(prix);
    }, []);
    
    const getCommandesId = async () => {
        let data = await axios.get("/produits/commande/" + idClient);

        return data.data.success[0].commande_id;
    }

    const getCommandesPrix = async () => {
        let data = await axios.get("/produits/commande/" + idClient);

        return data.data.success[0].prix_bloque;
    }


    console.log(items.length);


    
    return(
        <div className="main" style={{zIndex:"-1"}}>
            <div className="container produit-list" >
                <div className="row">
                    <h3 style={{marginLeft:"0%", fontFamily: "sans-serif"}}>🛒 Vos Commandes</h3>
                    <hr style={{width:"85%",marginRight: "auto", marginLeft:"0%"}} />
                    <div className="col-12 mb-5 mt-3">
                        <div className="container">
                            <div className="row">                   
                                <div>
                                    <h5>Id de la commande : <b>{getCommandesId} €</b></h5>
                                    <h5>Prix de la commande : <b> {getCommandesPrix} €</b></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Cart;