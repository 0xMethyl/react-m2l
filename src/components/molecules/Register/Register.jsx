
		        

import React from 'react';
import { useState } from "react";


const Register = () => {

	const [genre, setGenre] = useState("");
	const [datenaissance, setDatenaissance] = useState("");
	const [nom, setNom] = useState("");
	const [prenom, setPrenom] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm_password, setConfirm_password] = useState("");
	const [telephone, setTelephone] = useState("");
	const [adresse, setAdresse] = useState("");
	const [ville, setVille] = useState("");
	const [codepostal, setCodepostal] = useState("");
	

	var dateNaissanceFormated = datenaissance.split("/").reverse().join("-");
	console.log(dateNaissanceFormated);
	const register = () => {
	fetch('http://localhost:3001/users/register', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
		genre: genre,
		datenaissance: dateNaissanceFormated,
		nom: nom,
		prenom: prenom,
		email: email,
		password: password,
		confirm_password: confirm_password,
		telephone: telephone,
		adresse: adresse,
		ville: ville,
		codepostal: codepostal
	  }),
	})
	  .then((res) => res.json())
	  .catch((err) => console.log('error'))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		register() 
	  }
	
	const handleChange1 = (event) => {
		setGenre(event.target.value);
	}

	const handleChange2 = (event) => {
		setDatenaissance(event.target.value);
	}
	
	const handleChange3 = (event) => {
		setNom(event.target.value);
	}

	const handleChange4 = (event) => {
		setPrenom(event.target.value);
	}

	const handleChange5 = (event) => {
		setEmail(event.target.value);
	}

	const handleChange6 = (event) => {
		setPassword(event.target.value);
	}

	const handleChange7 = (event) => {
		setConfirm_password(event.target.value);
	}

	const handleChange8 = (event) => {
		setTelephone(event.target.value);
	}

	const handleChange9 = (event) => {
		setAdresse(event.target.value);
	}

	const handleChange10 = (event) => {
		setVille(event.target.value);
	}

	const handleChange11 = (event) => {
		setCodepostal(event.target.value);
	}
		
	// setDatenaissance(event.target.value);
	// setNom(event.target.value);
	// setPrenom(event.target.value);
	// setEmail(event.target.value);
	// setPassword(event.target.value);
	// setConfirm_password(event.target.value);
	// setTelephone(event.target.value);
	// setAdresse(event.target.value);
	// setVille(event.target.value);
	// setCodepostal(event.target.value);

    return (
		
        <div className="signupage" align="center">
            <div className='signup-form col-10 offset-1 col-lg-8 offset-lg-2 mt-3 p-5' style={{ borderRadius: "15px", boxshadow: "10px" }}>
                <form class="form" onSubmit={handleSubmit}>
			    <h2>Création de compte</h2>
		            <p>Il ne vous reste plus qu'à renseigner vos informations</p>
		            <hr />
					<div className='row'>
						<div className='formp1 col-6'>
							<div className="row">
								<div className="form-group col-6">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<span className="fa fa-transgender"></span>
											</span>                    
										</div>
										<select className="form-control" name="genre" value={genre} onChange = {handleChange1}>
											<option value="monsieur" selected>Monsieur</option>
											<option value="madame">Madame</option>
											<option value="autres">Autre</option>
										</select>
									</div>
								</div>
								<div className="form-group col-6">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<span className="fa fa-calendar"></span>
											</span>                    
										</div>
										<input type="date" className="form-control" id="start" onChange = {handleChange2} value={datenaissance} min="1930-01-01" max="2022-12-30"/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="form-group col-6">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<span className="fa fa-user"></span>
											</span>                    
										</div>
										<input type="text" className="form-control" style={{ }} onChange = {handleChange3} placeholder="Nom de famille" value={nom} />
									</div>
								</div>
								<div className="form-group col-6">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<span className="fa fa-user"></span>
											</span>                    
										</div>
										<input type="text" className="form-control" style={{ }} onChange = {handleChange4} placeholder="Prénom" value={prenom} />
									</div>
								</div>
							</div>
                    		<div className="form-group">
								<div className="input-group">
		            				<div className="input-group-prepend">
		            					<span className="input-group-text">
		            						<span className="fa fa-paper-plane"></span>
		            					</span>                    
		            				</div>
		            				<input type="text" className="form-control" name="email" placeholder="E-mail" onChange = {handleChange5} value={email} />
		            			</div>
                    		</div>
		            		<div className="form-group">
		            			<div className="input-group">
		            				<div className="input-group-prepend">
		            					<span className="input-group-text">
		            						<i className="fa fa-lock"></i>
		            					</span>                    
		            				</div>
		            				<input type="password" className="form-control" onChange = {handleChange6} value={password} placeholder="Mot de passe" />
		            			</div>
                    		</div>
		            		<div className="form-group">
		            			<div className="input-group">
		            				<div className="input-group-prepend">
		            					<span className="input-group-text">
		            						<i className="fa fa-check"></i>
		            					</span>                    
		            				</div>
		            				<input type="password" className="form-control" name="confirm_password"  onChange = {handleChange7} value={confirm_password}  placeholder="Confirmez votre mot de passe" />
		            			</div>
                    		</div>
						</div>
						<div className='formp2 col-6'>
							<div className="form-group">
		            			<div className="input-group">
		            				<div className="input-group-prepend">
		            					<span className="input-group-text">
		            						<span className="fa fa-phone"></span>
		            					</span>                    
		            				</div>
		            				<input type="text" className="form-control" style={{ }} name="telephone"  onChange = {handleChange8} value={telephone}  placeholder="Téléphone" />
		            			</div>
                    		</div>
                    		<div className="form-group">
								<div className="input-group">
		            				<div className="input-group-prepend">
		            					<span className="input-group-text">
		            						<span className="fa fa-map"></span>
		            					</span>                    
		            				</div>
		            				<input type="text" className="form-control" name="adresse" onChange = {handleChange9} value={adresse}  placeholder="Adresse" />
		            			</div>
                    		</div>
		            		<div className="form-group">
		            			<div className="input-group">
		            				<div className="input-group-prepend">
		            					<span className="input-group-text">
		            						<i className="fa fa-city"></i>
		            					</span>                    
		            				</div>
		            				<input type="text" className="form-control" name="ville"  onChange = {handleChange10} value={ville} placeholder="Ville" />
		            			</div>
                    		</div>
		            		<div className="form-group">
		            			<div className="input-group">
		            				<div className="input-group-prepend">
		            					<span className="input-group-text">
		            						<i className="fa fa-lock"></i>
		            					</span>                    
		            				</div>
		            				<input type="text" className="form-control" name="codepostal"  onChange = {handleChange11} value={codepostal} placeholder="Code postal" />
		            			</div>
                    		</div>
						</div>
					</div>
                    <div className="form-group">
		            	<label className="form-check-label"><input type="checkbox" className='termsprivacy' /> I accept the <a href="/terms">Terms of Use</a> &amp; <a href="/privacy">Privacy Policy</a></label>
		            </div>
		            <div className="form-group">
                        <button type="submit" style={{ backgroundColor: "rgba(87,10,184,255)", offline: "none", border: "none" }} className="btn btn-danger btn-lg">Inscription</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;