import React from "react";
import { useParams } from "react-router-dom";
import "./Dashboarddetail.css";
import Navbar from "./Navbar";
import Topnavdetail from "./Topnavdetail";
import { useAPI } from "./Apicontext";


function Peopledetail() {

    const { peopleData } = useAPI();
    const { name } = useParams();
    let peopleName = decodeURI(name);
    const people = peopleData.find(eachPerson => eachPerson.name === peopleName);


    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar />

                <div className="col p-0">
                    <Topnavdetail />

                    <div className="container mt-5 mb-5">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <img src="/img/peoplepics.png" alt="people" />
                            </div>
                            <div className="mx-5 col-lg-3 col-md-3 col-12">
                                <h2 className="mb-3 mt-3">{people.name}</h2>
                                <p>Gender: {people.gender}</p>
                                <p>Year of birth: {people.birth_year}</p>
                                <p>Skin Color: {people.skin_color}</p>
                                <p>Height: {people.height}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Peopledetail;