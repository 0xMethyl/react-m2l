import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { Link } from 'react-router-dom';
import DropDownHeader from "../../atomes/DropDownHeader/DropDownHeader";





/*
const mobileScreen = window.matchMedia("(max-width: 1600px )");
$(document).ready(function () {
    $(".sidebar-nav-dropdown-toggle").click(function () {
        $(this).closest(".sidebar-nav-dropdown")
            .toggleClass("show")
            .find(".sidebar-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".sidebar-nav").toggleClass("mobile-show");
        } else {
            $(".sidebar").toggleClass("sidebar-compact");
        }
    });
});
*/

const Header = () => {


    // Déclarer un state avec useState 
    const [toggle, setToggle] = useState(false);

    return(
      <div className="header" >
          <header className="bg-header p-3 bg-lighter text-white">
              <div className="container" style={{ marginLeft: "auto", marginRight:"auto", maxWidth:"100%"}}>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                  <div className="sidebar-nav">
                    <div className='row col-12 d-flex flex-row justify-content-center'>
                      <header>
                        <a href="/#" className="col-1 menu-toggle">
                          <i className="fas fa-bars"></i>
                        </a>
                        <div className="col-11 d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" style={{ fontFamily: "Orbitron, sans-serif" }}>
                          <img className="bi me-2" width="120" height="86" alt="logo" src="/images/logo.png" />
                        </div>
                      </header>
                    </div>
                    <nav className="sidebar-nav-list">
                        <div className='sidebar-nav-dropdown'>
                          <a href="/#" onClick={(e) =>{ e.preventDefault(); setToggle(!toggle)}} className="sidebar-nav-item sidebar-nav-dropdown-toggle" ><span role="img" aria-label="desktop"><i className='me-2'></i>📂</span> Catégories </a>
                          {toggle && <DropDownHeader /> }
                            <a href="/#" className="sidebar-nav-item"><span role="img" aria-label="desktop"><i className='me-2'></i>⚙️</span> Paramètres</a><a
                                href="/#" className="sidebar-nav-item"><span role="img" aria-label="desktop"><i className='me-2'></i>👤</span> Profil</a>
                                <a href="/#" className="sidebar-nav-item"><span role="img" aria-label="desktop"><i className='me-2'></i>🛒</span> Panier</a>
                                <hr />
                        </div>
                      <a href="/#" className="sidebar-nav-item"><span role="img" aria-label="desktop"><i className='me-2'></i>🖐️</span> Déconnexion </a>
                    </nav>
                  </div>
                  <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" style={{ marginLeft: "auto", marginRight:"0"}}>
                    <a href="/#" className="menu-toggle">
                      <i className="fas fa-bars"></i>
                    </a>
                    <li><a href="/#" className="nav-link px-2 text-secondary">Home</a></li>
                    <li><a href="/#" className="nav-link px-2 text-white">Produits</a></li>
                    <li><a href="/#" className="nav-link px-2 text-white">Pricing</a></li>
                    <li><a href="/#" className="nav-link px-2 text-white">FAQs</a></li>
                    <li><a href="/#" className="nav-link px-2 text-white">Support</a></li>
                  </ul>

                  <form className="col-12 mb-3 mb-lg-0 me-lg-3 col-lg-3 pl-1 ml-2 float-right" style={{ marginLeft: "auto", marginRight:"0"}}>
                    <input type="search" className="form-control form-control-dark" placeholder="Rechercher sur North Sport..." aria-label="Search" />
                  </form>

                  <div className="text-end" style={{ float:"right" }}>
                    <Link to="/signin">
                      <button type="button" className="btn me-2 signin" style={{ color:"#fff", outline: "white", borderColor: "white" }}  /* onClick={()=> context.history.push('')} */>
                        Se connecter
                      </button>
                    </Link>
                  <Link to="/signup">
                    <button type="button" className="btn signup" style={{ color:"#fff", outline: "white", borderColor: "white" }}>
                      Inscription
                    </button>
                  </Link>
                  </div>
                </div>
              </div>
          </header>
      </div>
    );
}

export default Header;