import React, { useState, useEffect } from "react";
import axios from '../../../config/axios';
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [userInfos, setUserInfos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUI();
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

                                <div className="col-12 col-sm-6 col-lg-4 mb-5 mt-3">
                                    <div className="form-group col-md-6 col-12">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <span className="fa fa-user"></span>
                                                </span>                    
                                            </div>
                                            <div className=""><p>Nom : {userInfos.client_nom}</p></div>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6 col-12">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <span className="fa fa-user"></span>
                                                </span>                    
                                            </div>
                                            <div className=""><p>Nom : {userInfos.client_nom}</p></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Profile;