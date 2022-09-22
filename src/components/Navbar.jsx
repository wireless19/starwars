import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-color">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <img className="logo mt-5 mb-4" src="/img/logo.png" alt="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <i class="fa-solid fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <NavLink className={({ isActive }) =>
                            isActive ? 'nav-link bg-blue text-white px-4 w-100' : 'nav-link text-white px-4 w-100'
                        } to="/dashboard">
                            <i className="fa-regular fa-window-restore"></i>&nbsp; &nbsp; Overview
                        </NavLink>

                        <div className="mt-5">

                            <NavLink className={({ isActive }) =>
                                isActive ? 'nav-link bg-blue text-white px-4 w-100' : 'nav-link text-white px-4 w-100'
                            } to="/starships">
                                <i className="fa-solid fa-square bg-sb"></i>&nbsp; &nbsp; Starships
                            </NavLink>

                            <NavLink className={({ isActive }) =>
                                isActive ? 'nav-link bg-blue text-white px-4 w-100' : 'nav-link text-white px-4 w-100'
                            } to="/people">
                                <i className="fa-solid fa-square bg-lp"></i>&nbsp; &nbsp; People
                            </NavLink>

                            <NavLink className={({ isActive }) =>
                                isActive ? 'nav-link bg-blue text-white px-4 w-100' : 'nav-link text-white px-4 w-100'
                            } to="/species">
                                <i className="fa-solid fa-square bg-sy"></i>&nbsp; &nbsp; Species
                            </NavLink>
                        </div>


                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;