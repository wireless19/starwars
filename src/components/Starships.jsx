import React from "react";
import "./Starships.css";
import Navbar from "./Navbar";
import Topnav from "./Topnav";
import Tabledata from "./Tabledata";
import { useAPI } from "./Apicontext";
import { useNavigate } from "react-router-dom";

function Starships() {
    const navigate = useNavigate();
    const { starshipData, loading, error } = useAPI();

    const handleRowClick = (starships) => {
        navigate(`/starships/${starships.name}`);
    }

    if (error) return <h1>Error!</h1>;

    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar />

                <div className="col p-0">
                    <Topnav />

                    <div className="container mt-3 mb-5">
                        <p className="starsh">Starships</p>
                        <div className="responsive">
                            <table>
                                <tr>
                                    <th><i className="fa-solid fa-square"></i></th>
                                    <th>Name</th>
                                    <th>Model</th>
                                    <th>Class</th>
                                    <th>Passenger</th>
                                    <th>Length</th>
                                    <th>Character</th>
                                </tr>
                                {loading ? (
                                    <h1>Loading...</h1>
                                ) : (starshipData.map((starship) =>
                                    <tr className="pointer" onClick={() => handleRowClick(starship)}>
                                        <Tabledata
                                            rectangle={<i className=" fa-solid fa-square"></i>}
                                            firstcolumn={starship.name}
                                            secondcolumn={starship.model}
                                            thirdcolumn={starship.starship_class}
                                            fouthcolumn={starship.passengers}
                                            fifthcolumn={starship.length}
                                            sixthcolumn="https://swapi.dev/api/people"
                                        />
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    );
}

export default Starships;