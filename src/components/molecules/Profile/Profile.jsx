import React, { useState, useEffect } from "react";
import axios from '../../../config/axios';

const Profile = () => {
    const [ui, setUserInfos] = useState([]);

    useEffect(() => {
        fetchUI();
    }, []);

    const fetchUI = async () => {
        const {data} = await axios.get("/users/login");
        console.log(data);
        setUserInfos(data.data);
        alert(data.data.client_nom)
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
                            {ui && ui.map(user => (
                                <div className="col-12 col-sm-6 col-lg-4 mb-5 mt-3">
                                        <p>test</p>
                                        <p><span>Prix : {user.client_nom}</span></p>

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