
		        

import axios from '../../../config/axios';
import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Admin = () => {

	const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useState("");
    const [fetchCategories, setFetchCategories] = useState([]);

	const [nom, setNom] = useState("");
	const [prix, setPrix] = useState("");
	const [poids, setPoids] = useState("");
	const [taille, setTaille] = useState("");
	const [quantite, setQuantite] = useState("");
	const [categorie, setCategorie] = useState("");
    const [marque, setMarque] = useState("");
    
	const addProduit = () => {
		if(loginStatus){
            axios.post('/produits/addProduit', 
            {
                    nom: nom,
                    marque: marque,
                    prix: prix,
					taille:taille,
                    poids: poids,
                    quantite: quantite,
                    categorie: categorie
        	},
            ).then((res) => res.json())
            .catch((err) => console.log('error', err))
        } else {
            console.log("You are not supposed to make this.");
        }
    }

    const categories = async () => {
        axios.get("/produits/categories").then((res) => {
            console.log(res.data.success);
            setFetchCategories(res.data.success);
        }).catch(err => {
            console.log(err +" is an error");
        })
    }

    useEffect(() => {
		axios.get("/users/login").then((res) => {
            console.log(res.data.isAdmin);
			if (res.data.isAdmin === "Administrateur"){
				setLoginStatus(true);
			} else {
                navigate("/login");
            }
		}).catch((err) =>{
			console.log("login error ", err);
		})
        categories();
	}, [])

	const handleSubmit = (e) => {
        e.preventDefault();
		addProduit();
	}
	
	const handleChange1 = (event) => {
		setNom(event.target.value);
	}

	const handleChange2 = (event) => {
		setPrix(event.target.value);
	}
	
	const handleChange3 = (event) => {
		setPoids(event.target.value);
	}

	const handleChange4 = (event) => {
		setQuantite(event.target.value);
	}

	const handleChange5 = (event) => {
		setCategorie(event.target.value);
		console.log(event.target.value);
	}

    const handleChange6 = (event) => {
		setMarque(event.target.value);
	}

	const handleChange7 = (event) => {
		setTaille(event.target.value);
	}

    return (
		
        <div className="sign" align="center" style={{zIndex:"-1"}}>
            <div className='signup-form col-12 offset-0 col-xl-10 offset-lg-0 mt-3' style={{ borderRadius: "15px", boxshadow: "10px" }}>
                <form class="form" onSubmit={handleSubmit}>
			    <h2>Ajouter un produit</h2>
		            <p>Il ne vous reste plus qu'à renseigner les informations</p>
		            <hr />
					<div className='row'>
						<div className='formp1 col-md-6 col-12'>
							<div className="row">
								<div className="form-group col-md-6 col-12">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
                                                <i class="fa-solid fa-cart-shopping"></i>
											</span>                    
										</div>
										<input type="text" className="form-control" id="start" placeholder="Nom" onChange={handleChange1} value={nom}/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="form-group col-md-6 col-12">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
                                                <i class="fa fa-eur" aria-hidden="true"></i>
											</span>                    
										</div>
										<input type="text" className="form-control" style={{ }} onChange = {handleChange2} placeholder="Prix" value={prix} required="required" />
									</div>
								</div>
								<div className="form-group col-md-6 col-12">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
											</span>                    
										</div>
										<input type="text" className="form-control" style={{ }} onChange = {handleChange3} placeholder="Poids" value={poids} required="required" />
									</div>
								</div>
							</div>
							<div className="form-group col-md-6 col-12">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i class="fa fa-arrow-up" aria-hidden="true"></i>
											</span>                    
										</div>
										<input type="text" className="form-control" style={{ }} onChange = {handleChange7} placeholder="Taille" value={taille} required="required" />
									</div>
								</div>
                    		<div className="form-group">
								<div className="input-group">
		            				<div className="input-group-prepend">
		            					<span className="input-group-text">
                                            <i class="fa fa-sort-amount-up"></i>
		            					</span>                    
		            				</div>
		            				<input type="text" className="form-control" name="quantite" placeholder="Quantité" onChange = {handleChange4} value={quantite} required="required" />
		            			</div>
                    		</div>
                            <div className="form-group">
								<div className="input-group">
		            				<div className="input-group-prepend">
		            					<span className="input-group-text">
                                            <i class="fa fa-sort-amount-up"></i>
		            					</span>                    
		            				</div>
		            				<input type="text" className="form-control" name="marque" placeholder="Marque" onChange = {handleChange6} value={marque} required="required" />
		            			</div>
                    		</div>
							<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
                                                <i class="fa fa-list-alt" aria-hidden="true"></i>
											</span>                    
										</div>
										<select className="form-control" name="categorie" placeholder="Catégories" value={categorie} required="required" onChange={handleChange5}>
											{fetchCategories?.map((categ) => (
                                                <>
                                                    <option value={categ.categorie_id}>{categ.categorie_nom}</option>
                                                </>
                                            ))}
										</select>
									</div>
								</div>
                            </div>
                            </div>
		            <div className="form-group">
                        <button type="submit" style={{ backgroundColor: "rgba(87,10,184,255)", offline: "none", border: "none" }} className="btn btn-danger btn-lg">Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Admin;