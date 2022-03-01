import React from "react";

const DropDownHeader = () => {
    return (
        <div className='sidebar-nav-dropdown-menu'>
            <a href="/#" className="sidebar-nav-dropdown-item"><i className='me-3'></i><span role="img" aria-label="infinite">♾️</span><i className='me-2'></i> TOUTES</a>
            <a href="/#" className="sidebar-nav-dropdown-item"><i className='me-3'></i><span role="img" aria-label="football">⚽</span><i className='me-2'></i> FOOTBALL</a>
            <a href="/#" className="sidebar-nav-dropdown-item"><i className='me-3'></i><span role="img" aria-label="basketball">🏀</span><i className='me-2'></i> BASKETBALL</a>
            <a href="/#" className="sidebar-nav-dropdown-item"><i className='me-3'></i><span role="img" aria-label="handball">🤾</span><i className='me-2'></i> HANDBALL</a>
            <a href="/#" className="sidebar-nav-dropdown-item"><i className='me-3'></i><span role="img" aria-label="tennis">🎾</span><i className='me-2'></i> TENNIS</a>
            <a href="/#" className="sidebar-nav-dropdown-item"><i className='me-3'></i><span role="img" aria-label="rugby">🏈</span><i className='me-2'></i> RUGBY</a>
        </div>
    )
}
export default DropDownHeader;