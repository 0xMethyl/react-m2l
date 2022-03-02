import React from 'react';
import { useState } from "react";

const Signin = () => {

	const login = () => {
<<<<<<< HEAD
		fetch('http://localhost:3001/users/register', {
=======
		fetch('http://localhost:3001/users/login', {
>>>>>>> 3adfdae6f5ecab0d88197d56dcd532d108b951f4
		  	method: 'POST',
		  	headers: {
				'Content-Type': 'application/json',
		  	},
		  	body: JSON.stringify({
				email: email,
				password: password,
		  	}),
		})
	  	.then((res) => res.json())
	  	.catch((err) => console.log('error'))
	}

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChange1 = (event) => {
		setEmail(event.target.value);
	}

	const handleChange2 = (event) => {
		setPassword(event.target.value);
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		login() 
<<<<<<< HEAD
	  }
=======
	}
>>>>>>> 3adfdae6f5ecab0d88197d56dcd532d108b951f4

    return (
        <div className="signin" align="center">
            <div className='signup-form col-10 offset-1 col-lg-8 offset-lg-2 mt-3 p-5' style={{ borderRadius: "15px", boxshadow: "10px" }}>
                <form class="form" onSubmit={handleSubmit}>
			    <h2>Connection à votre compte</h2>
		            <p>Il ne vous reste plus qu'à renseigner vos informations</p>
<<<<<<< HEAD
                    
					<div className="col-6">
=======

					<div className="col-md-6 col-12">
>>>>>>> 3adfdae6f5ecab0d88197d56dcd532d108b951f4
						<hr/>
						<div className="form-group">
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<span className="fa fa-paper-plane"></span>
									</span>                    
								</div>
								<input type="text" className="form-control" name="email" placeholder="E-mail" onChange = {handleChange1} value={email} required="required" />
							</div>
						</div>
						<div className="form-group">
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fa fa-lock"></i>
									</span>                    
								</div>
								<input type="password" className="form-control" onChange = {handleChange2} value={password} placeholder="Mot de passe" required="required" />
							</div>
						</div>
					</div>
                    <div className="form-group">
<<<<<<< HEAD
                        <button type="submit" style={{ backgroundColor: "rgba(87,10,184,255)", offline: "none", border: "none" }} className="btn btn-danger btn-lg">Connection</button>
=======
                        <button type="submit" style={{ backgroundColor: "rgba(87,10,184,255)", offline: "none", border: "none" }} className="btn btn-danger btn-lg">Se connecter</button>
>>>>>>> 3adfdae6f5ecab0d88197d56dcd532d108b951f4
                    </div>
                </form>
            </div>
            
        </div>
    )
}
export default Signin;