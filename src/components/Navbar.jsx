import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    return (

        <div className="col-auto min-vh-100 bg-color">

            <img className="logo mt-5 mb-4" src="/img/logo.png" alt="logo" />

            <NavLink className={({ isActive }) =>
                isActive ? 'nav-link bg-blue text-white px-4 w-100' : 'nav-link text-white px-4 w-100'
            } to="/dashboard">
                <i className="fa-regular fa-window-restore"></i><span className="ms-1 d-none d-sm-inline">&nbsp; &nbsp; Overview</span>
            </NavLink>

            <div className="mt-5">

                <NavLink className={({ isActive }) =>
                    isActive ? 'nav-link bg-blue text-white px-4 w-100' : 'nav-link text-white px-4 w-100'
                } to="/starships">
                    <i className="fa-solid fa-square bg-sb"></i><span className="ms-1 d-none d-sm-inline">&nbsp; &nbsp; Starships</span>
                </NavLink>

                <NavLink className={({ isActive }) =>
                    isActive ? 'nav-link bg-blue text-white px-4 w-100' : 'nav-link text-white px-4 w-100'
                } to="/people">
                    <i className="fa-solid fa-square bg-lp"></i><span className="ms-1 d-none d-sm-inline">&nbsp; &nbsp; People</span>
                </NavLink>

                <NavLink className={({ isActive }) =>
                    isActive ? 'nav-link bg-blue text-white px-4 w-100' : 'nav-link text-white px-4 w-100'
                } to="/species">
                    <i className="fa-solid fa-square bg-sy"></i><span className="ms-1 d-none d-sm-inline">&nbsp; &nbsp; Species</span>
                </NavLink>
            </div>

        </div>



    );
}

export default Navbar;