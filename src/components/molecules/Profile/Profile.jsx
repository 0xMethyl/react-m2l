import React, { useState, useEffect } from "react";
import axios from '../../../config/axios';

const Profile = () => {
    const [userInfos, setUserInfos] = useState([]);

    useEffect(() => {
        fetchUI();
    }, []);

    const fetchUI = async () => {
        let data = await axios.get("/users/login");
        console.log(data.data);
        
        setUserInfos(data.data);
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
                            {userInfos && userInfos.map((user) => (
                                <div className="col-12 col-sm-6 col-lg-4 mb-5 mt-3">
                
                                    <p>Nom : {user.client_nom}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Profile;