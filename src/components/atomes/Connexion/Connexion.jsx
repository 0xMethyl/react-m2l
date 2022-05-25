import React from "react"

const LoggedHeader = () => {

    return(
        <>
        <hr />
        <a href="/login" className="sidebar-nav-item"><span role="img" aria-label="desktop"><i className='me-2'></i>🔒</span> Se connecter</a>
        </>
    )
}

export default LoggedHeader;