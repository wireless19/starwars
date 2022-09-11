import React from "react";
import { useParams } from "react-router-dom";
import "./Dashboarddetail.css";
import Navbar from "./Navbar";
import Topnavdetail from "./Topnavdetail";
import { useAPI } from "./Apicontext";


function Starshipsdetail() {

    const { starshipData } = useAPI();
    const { name } = useParams();
    let starshipName = decodeURI(name);
    const starships = starshipData.find(eachStarship => eachStarship.name === starshipName);


    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar />

                <div className="col p-0">
                    <Topnavdetail />

                    <div className="container mt-5 mb-5">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <img src="/img/starpics.png" alt="starship" />
                            </div>
                            <div className="mx-5 col-lg-3 col-md-3 col-12">
                                <h2 className="mb-3 mt-3">{starships.name}</h2>
                                <p>Model: {starships.model}</p>
                                <p>Passengers: {starships.passengers}</p>
                                <p>Pilot: Dior, Kingsley, Jamal</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Starshipsdetail;