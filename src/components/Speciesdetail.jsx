import React from "react";
import { useParams } from "react-router-dom";
import "./Dashboarddetail.css";
import Navbar from "./Navbar";
import Topnavdetail from "./Topnavdetail";
import { useAPI } from "./Apicontext";


function Speciesdetail() {

    const { speciesData } = useAPI();
    const { name } = useParams();
    let specieName = decodeURI(name);
    const species = speciesData.find(eachSpecie => eachSpecie.name === specieName);


    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar />

                <div className="col p-0">
                    <Topnavdetail />

                    <div className="container mt-5 mb-5">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <img src="/img/specpics.png" alt="species" />
                            </div>
                            <div className="mx-5 col-lg-3 col-md-3 col-12">
                                <h2 className="mb-3 mt-3">{species.name}</h2>
                                <p>designation: {species.designation}</p>
                                <p>Language: {species.language}</p>
                                <p>Eye Colors: {species.eye_colors}</p>
                                <p>Average Lifespan: {species.average_lifespan}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Speciesdetail;