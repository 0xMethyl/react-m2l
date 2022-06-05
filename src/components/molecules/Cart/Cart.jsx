import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../../../config/axios';

const Cart = () => {
    const navigate = useNavigate();
    let [prix, setPrix] = useState(0);

    let [loggedIn, setLoginStatus] = useState(false);
    let [idClient, setIdClient] = useState(0);
    let items = JSON.parse(localStorage.getItem("produits"));
    let date = new Date();
    console.log(date);
    console.log(items);
    if (items != null){
        //console.log(items);
    } else {
        localStorage.setItem("produits", "[]");
        navigate("/home");
    }

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


    console.log(items.length);

    const onClick = (e) => {
        let id = e.currentTarget.id;

        let items = JSON.parse(localStorage.getItem("produits"))

        items.splice(id, 1);
        localStorage.setItem("produits", JSON.stringify(items));
        window.location.reload();
    } 

    const onPay = () => {
        if(loggedIn === true){
            // Paiement
            fetch('http://localhost:4000/produits/addCommande', {
	        method: 'POST',
	        headers: {
		        'Content-Type': 'application/json',
	        },
            body: JSON.stringify({
                prix: prix,
                produit: items.nom,
                clientid: idClient,
                date: date,
            }),
        })
        alert("Votre commande a été passée");
        } else {
            navigate("/login");
        }
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
                                {items?.map((i, index) => (
                                    <div>
                                        <h3><u>{i.nom}</u></h3>
                                        <img className="prodImg" style={{display:"flex", margin:"0 auto"}} src={`/images/${i.nom}.jpg`.split(' ').join('_')} alt={i.nom} />
                                        <h5>Quantité : {i.quantite}</h5><button id={index} onClick={onClick} className="btn btn-danger float-right">Supprimer le produit</button>
                                        <h5>Prix unitaire : <b>{i.prix} €</b></h5>
                                        <h5>Prix total : <b>{i.prix * i.quantite} €</b></h5>
                                        {(items.length > 1) ? <hr/> : ""}
                                    </div>
                                ))}
                                
                            </div>
                            
                        </div>
                    </div>
                    <h4><b>Prix total du panier : {prix} €</b></h4>
                </div>{
                    (prix <= 0) ? "" : <button onClick={onPay} className="btn btn-danger">Payer</button>
                }
                
            </div> 
        </div>
    )
}

export default Cart;