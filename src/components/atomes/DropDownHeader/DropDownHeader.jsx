import React from "react";

const DropDownHeader = () => {
    return (
        <div className='sidebar-nav-dropdown-menu'>
            <a href="/#" className="sidebar-nav-dropdown-item"><i className='me-3'></i><span role="img" aria-label="infinite">♾️</span><i className='me-2'></i> Toutes</a>
            <a href="/#" className="sidebar-nav-dropdown-item"><i className='me-3'></i><span role="img" aria-label="laptop">💻</span><i className='me-2'></i> ORDINATEURS PORTABLES</a>
            <a href="/#" className="sidebar-nav-dropdown-item"><i className='me-3'></i><span role="img" aria-label="desktop">🖥️</span><i className='me-2'></i> ORDINATEURS DE BUREAU, ECRANS PC</a>
            <a href="/#" className="sidebar-nav-dropdown-item"><i className='me-3'></i><span role="img" aria-label="controller">🎮</span><i className='me-2'></i> UNIVERS PC GAMING</a>
            <a href="/#" className="sidebar-nav-dropdown-item"><i className='me-3'></i><span role="img" aria-label="bookopened">📖</span><i className='me-2'></i> TABLETTES, LISEUSES EBOOK</a>
            <a href="/#" className="sidebar-nav-dropdown-item"><i className='me-3'></i><span role="img" aria-label="mouse">🖱️</span><i className='me-2'></i> PÉRIPHÉRIQUES & ACCESSOIRES</a>
        </div>
    )
}
export default DropDownHeader;