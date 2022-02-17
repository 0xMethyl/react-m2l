import React from 'react';

const Header2 = () => {
    return(
        <div className="header">
            <header className="bg-header p-3 bg-lighter text-white">
                <div className="container">
                  <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img className="imgresp bi me-2" width="80" height="64" alt="logo" src="/images/logo.png" />
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                      <li><a href="/#" className="nav-link px-2 text-secondary">Home</a></li>
                      <li><a href="/#" className="nav-link px-2 text-white">Features</a></li>
                      <li><a href="/#" className="nav-link px-2 text-white">Pricing</a></li>
                      <li><a href="/#" className="nav-link px-2 text-white">FAQs</a></li>
                      <li><a href="/#" className="nav-link px-2 text-white">About</a></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                      <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="dropdown">
                        <button style={{backgroundColor:"rgba(87,10,184,255)"}}
                                className="btn btn-light dropdown-toggle me-3"
                                type="button"
                                id="dropdownMenuButton" 
                                data-toggle="dropdown" 
                                aria-haspopup="true"
                                aria-expanded="false">
                            <i className="fas fa-shopping-cart" style={{color:"white"}}></i>
                        </button>

                        <div className="dropdown-menu" 
                             aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="/#">
                              Action
                          </a>
                            <a className="dropdown-item" href="/#">
                              Another action
                          </a>
                            <a className="dropdown-item" href="/#">
                              Something else here
                          </a>
                        </div>
                    </div>

                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" style={{backgroundColor:"rgba(87,10,184,255)"}}
                                type="button"
                                id="dropdownMenuButton" 
                                data-toggle="dropdown" 
                                aria-haspopup="true"
                                aria-expanded="false">
                            <i className="fas fa-user" style={{ color: "white" }}></i>
                        </button>

                        <div className="dropdown-menu" 
                             aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="/#">
                              Action
                          </a>
                            <a className="dropdown-item" href="/#">
                              Another action
                          </a>
                            <a className="dropdown-item" href="/#">
                              Something else here
                          </a>
                        </div>
                    </div>
                  </div>
                </div>
            </header>
        </div>
    );
}

export default Header2;