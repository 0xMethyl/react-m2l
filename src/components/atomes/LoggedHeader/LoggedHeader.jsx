import React from "react"

const LoggedHeader = () => {

    return(
        <>
        <a href="/settings" className="sidebar-nav-item"><span role="img" aria-label="desktop"><i className='me-2'></i>⚙️</span> Paramètres</a>
        <a href="/profile" className="sidebar-nav-item"><span role="img" aria-label="desktop"><i className='me-2'></i>👤</span> Profil</a>
        <a href="/cart" className="sidebar-nav-item"><span role="img" aria-label="desktop"><i className='me-2'></i>🛒</span> Panier</a>
        <hr />
        <a href="/logout" className="sidebar-nav-item"><span role="img" aria-label="desktop"><i className='me-2'></i>🖐️</span> Déconnexion </a>
        </>
    )
}

export default LoggedHeader;