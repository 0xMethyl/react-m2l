import React, { useState, useEffect } from "react";
import axios from '../../../config/axios';
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [userInfos, setUserInfos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchUI = async () => {
        let data = await axios.get("/users/login");
        console.log(data.data.client_nom);
        setUserInfos(data.data);

        if(data.data.loggedIn === true){
    
        } else {
            navigate("/login");
        }
    }

    return(
        <div className="main" style={{zIndex:"-1"}}>
            <div className="container produit-list" >
                <div className="row">
                    <h3 style={{marginLeft:"0%", fontFamily: "sans-serif"}}>👤 Profil personnel</h3>
                    <hr style={{width:"85%",marginRight: "auto", marginLeft:"0%"}} />
                    <div className="col-12 mb-5 mt-3">
                        <div className="container">
                            <div className="row">                   
                                <h2>Bonjour {userInfos.client_prenom},</h2>
                                <p>Voici les données relatives à votre compte client:</p>

                                <p>Prénom : {userInfos.client_prenom}</p>
                                <p>Nom : {userInfos.client_nom}</p>
                                <p>Date de naissance : {userInfos.client_datenaissance}</p>
                                <p>E-mail : {userInfos.client_email}</p>
                                <p>Téléphone : {userInfos.client_phone}</p>
                                <p>Adresse : {userInfos.client_adresse}</p>
                                <p>Ville : {userInfos.client_ville}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Profile;