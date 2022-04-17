import React, { useEffect, useState } from "react";
import axios from 'axios';

const Signin = () => {

	const [loginStatus, setLoginStatus] = useState("");

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {

		axios.get("https://localhost:3001/users/login", {withCredentials: true}).then((response) => {
			
			console.log("logged in?", response)
			if (response.data.loggedIn === true){
				setLoginStatus(response.data.email[0].email);
				
			}
		}).catch((err) =>{
			console.log("login error ", err)
		})
		

	}, [])
	
	const login = async () => {
		fetch('http://localhost:3001/users/login', {
		  	method: 'POST',
			withCredentials: true,
		  	headers: {
				'Content-Type': 'application/json',
		  	},
		  	body: JSON.stringify({
				email: email,
				password: password,
		  	}),
		})
	  	.then((res) => {
			res.json();
			alert(res.ok)
			
			if (res.ok){
				window.location.href = "/";
				setLoginStatus(res.data.message);
				alert(res.data.message);
			} else {
				window.location.href = "/";
				setLoginStatus(email);
				return(
					<>
						<div class="alert alert-danger" role="alert">
  							A simple danger alert—check it out!
						</div>
					</>
				);
			}
			console.log(res.json());
			})
	  	.catch((err) => console.log('error'))
		  
	}

	const handleChange1 = (e) => {
		setEmail(e.target.value);
	}

	const handleChange2 = (e) => {
		setPassword(e.target.value);
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		login() 
	}

	

    return (
        <div className="sign" align="center" style={{zIndex:"-1"}}>
            <div className='signup-form col-12 offset-0 col-lg-10 mt-3' style={{ borderRadius: "15px", boxshadow: "10px" }}>
                <form class="form" onSubmit={handleSubmit}>
			    <h2>Connexion à votre compte</h2>
		            <p>Il ne vous reste plus qu'à renseigner vos informations</p>
					<div className="col-md-6 col-12">
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
								<input type="password" className="form-control" name="password" onChange = {handleChange2} value={password} placeholder="Mot de passe" required="required" />
							</div>
						</div>
					</div>
                    <div className="form-group">
                        <button type="submit" style={{ backgroundColor: "rgba(87,10,184,255)", offline: "none", border: "none" }} className="btn btn-danger btn-lg">Se connecter</button>
                    </div>
                </form>
            </div>
			<p>Vous n'avez pas de compte ? <a href="signup">S'inscrire</a></p>
            <h3>{loginStatus}</h3>
        </div>
    )
}
export default Signin;