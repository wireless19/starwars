import React from "react";
import "./Topnavdetail.css";
import { useNavigate } from "react-router-dom";

function Topnavdetail() {
    const navigate = useNavigate();
    return (

        <div className="px-2 pt-3 d-flex justify-content-between shadow-sm bg-light">

            <div className="me-auto pt-2 px-2 back" onClick={() => navigate(-1)}><p><i className="fa-solid fa-less-than"></i> &nbsp;Back</p></div>

            <div className="p-2 bd-highlight"><h5><i className="fa-regular fa-bell bell"></i></h5></div>
            <div className="p-2 bd-highlight"><p className="px-3 divider">|</p></div>
            <div className="p-2 bd-highlight"><img src="https://avatars.githubusercontent.com/u/68695367?v=4" alt="" width="32" height="32" className="rounded-circle me-2" /></div>
            <div className="p-2 bd-highlight"><p className="name">John Deo</p></div>
            <div className="pt-1 px-4"><h5>. . .</h5></div>

        </div>

    );
}

export default Topnavdetail;