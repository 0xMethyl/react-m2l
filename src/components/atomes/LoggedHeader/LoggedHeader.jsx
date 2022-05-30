import React from "react";
import { useNavigate } from "react-router-dom";
import axios from '../../../config/axios';

const LoggedHeader = () => {

    const navigate = useNavigate();

    const Logout = () => {

        axios.post('/user/logout').then((res) => {
            console.log(res);
            navigate("/home");
        })
    };

    return(
        <>
            <a href="/settings" className="sidebar-nav-item"><span role="img" aria-label="desktop"><i className='me-2'></i>⚙️</span> Paramètres</a>
            <a href="/profile" className="sidebar-nav-item"><span role="img" aria-label="desktop"><i className='me-2'></i>👤</span> Profil</a>
            <hr />
            <a href="/#" onClick={Logout} className="sidebar-nav-item"><span role="img" aria-label="desktop"><i className='me-2'></i>🖐️</span> Déconnexion </a>
        </>
    )
}

export default LoggedHeader;