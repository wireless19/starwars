import React from "react";
import { useParams } from "react-router-dom";
import "./Dashboarddetail.css";
import Navbar from "./Navbar";
import Topnavdetail from "./Topnavdetail";
import { useAPI } from "./Apicontext";


function Dashboarddetail() {

    const { filmData } = useAPI();
    const { title } = useParams();
    let filmTitle = decodeURI(title);
    const film = filmData.find(eachfilm => eachfilm.title === filmTitle);


    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar />

                <div className="col p-0">
                    <Topnavdetail />

                    <div className="container mt-5 mb-5">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <img src="/img/dashpics.png" alt="film cover" />
                            </div>
                            <div className="mx-5 col-lg-3 col-md-3 col-12">
                                <h2 className="mb-3 mt-3">{film.title}</h2>
                                <p>Director: {film.director}</p>
                                <p>Producer: {film.producer}</p>
                                <p>Release Date: {film.release_date}</p>
                            </div>
                        </div>


                        {/* <button className="btn btn-small btn-primary" onClick={() => navigate(-1)}>Go back</button> */}

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboarddetail;