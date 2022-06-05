import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const ContentContact = () => {

    const navigate = useNavigate();
	const [prenom, setPrenom] = useState("");
	const [nom, setNom] = useState("");
	const [email, setEmail] = useState("");
	const [objet, setObjet] = useState("");
	const [commentaire, setCommentaire] = useState("");


    const form = () => {
        fetch('http://localhost:4000/messages/', {
	        method: 'POST',
	        headers: {
		        'Content-Type': 'application/json',
	        },
            body: JSON.stringify({
                prenom: prenom,
                nom: nom,
                email: email,
                objet: objet,
                commentaire: commentaire
            }),
        })
	  .then((res) => res.json())
	  .catch((err) => console.log('error', err))
	}

    const handleSubmit = (e) => {
        e.preventDefault();
		form();
        alert("Votre message est envoyé !");
	}
    
    const handleChange1 = (event) => {
		setPrenom(event.target.value);
	}
    const handleChange2 = (event) => {
		setNom(event.target.value);
	}
    const handleChange3 = (event) => {
		setEmail(event.target.value);
	}
    const handleChange4 = (event) => {
		setObjet(event.target.value);
	}
    const handleChange5 = (event) => {
		setCommentaire(event.target.value);
	}
    
    
    return (

        <div className="main" style={{zIndex:"-1"}}>
            <div className="container">
                <h1>📨 Envoyez-nous un message !</h1>
                <p><p>Il ne vous reste plus qu'à renseigner les champs ci-dessous</p></p>
                <hr/>
                <form className="needs-validation" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label>Prénom :</label>
                            <input type="text" className="form-control" id="prenom" placeholder="Prénom..." required="required" onChange={handleChange1} />
                            <div className="valid-feedback">Ok !</div>
                            <div className="invalid-feedback">Valeur incorrecte</div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Nom de famille :</label>
                            <input type="text" className="form-control" id="nom" placeholder="Nom..." required="required" onChange={handleChange2} />
                            <div className="valid-feedback">Ok !</div>
                            <div className="invalid-feedback">Valeur incorrecte</div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Email :</label>
                            <input type="email" className="form-control" id="email" placeholder="Email..." required="required" onChange={handleChange3} />
                            <div className="valid-feedback">Ok !</div>
                            <div className="invalid-feedback">Valeur incorrecte</div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Objet :</label>
                            <input type="text" className="form-control" id="nom" placeholder="Objet..." required="required" onChange={handleChange4} />
                            <div className="valid-feedback">Ok !</div>
                            <div className="invalid-feedback">Valeur incorrecte</div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Commentaire :</label>
                            <textarea className="form-control" id="commentaire" placeholder="Commentaire..." required="required" onChange={handleChange5}></textarea>
                            <div className="valid-feedback">Ok !</div>
                            <div className="invalid-feedback">Valeur incorrecte</div>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    )
}

export default ContentContact;