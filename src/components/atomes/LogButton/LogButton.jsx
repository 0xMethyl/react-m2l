import React from "react";
import { Link } from 'react-router-dom';

const LogButton = () => {
    return (
        <div className="row text-end" style={{ float:"right" }}>
            <div className="col-6">
                <Link to="/login">
                    <button type="button" className="btn btn-danger me-2 signin rounded-100" style={{ color:"white", fontFamily: "sans-serif", fontWeight:"600" }}>Connexion</button>
                </Link>
            </div>
        </div>
    )
}

export default LogButton;