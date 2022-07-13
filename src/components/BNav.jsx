import React, {useState} from "react";

function BNav({mode, ToggleMode, textColor}) {
 
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand text-info" href="#">
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className={`nav-link active text-${textColor}`}
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link active text-${textColor}`}
                                    aria-current="page"
                                    href="#"
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link active text-${textColor}`}
                                    aria-current="page"
                                    href="#"
                                >
                                    Pages
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link active text-${textColor}`} href="#">
                                    Link
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className={`nav-link active text-${textColor}`}
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-info" type="submit">
                                Search
                            </button>
                        </form>
                    
                        <div class="form-check form-switch mx-4">
                            <input onClick={ToggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className={`form-check-label text-${textColor}`} htmlFor="flexSwitchCheckDefault">Enable {mode === 'light' ? 'dark' : 'light'} Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default BNav;
