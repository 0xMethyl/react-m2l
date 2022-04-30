import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "../../../config/axios";

const Signin = () => {

	const navigate = useNavigate();
	const [loginStatus, setLoginStatus] = useState("");

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {

		axios.get("/users/login").then((response) => {
			if (response.data.loggedIn === true){
				setLoginStatus(response.data.email[0].email);
			}
		}).catch((err) =>{
			console.log("login error ", err)
		})
	}, [])
	
	const login = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('/users/login', {
				email: email,
				password: password,
			})
			console.log(res);
			
			navigate('/home')

		} catch (error) {
			console.log(error);
		} 
	}

	const handleChange1 = (e) => {
		setEmail(e.target.value);
	}

	const handleChange2 = (e) => {
		setPassword(e.target.value);
	}

    return (
        <div className="sign" align="center" style={{zIndex:"-1"}}>
            <div className='signup-form col-12 offset-0 col-lg-10 mt-3' style={{ borderRadius: "15px", boxshadow: "10px" }}>
                <form class="form" onSubmit={(e) => login(e)}>
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