import React from "react";
import "./Species.css";
import Navbar from "./Navbar";
import Topnav from "./Topnav";
import Tabledata from "./Tabledata";
import { useAPI } from "./Apicontext";
import { useNavigate } from "react-router-dom";

function Species() {
    const navigate = useNavigate();
    const { speciesData, loading, error } = useAPI();

    const handleRowClick = (species) => {
        navigate(`/species/${species.name}`);
    }

    if (error) return <h1>Error!</h1>;

    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar />

                <div className="col p-0">
                    <Topnav />

                    <div className="container mt-3 mb-5">
                        <p className="species">Species</p>
                        <div className="responsive">
                            <table>
                                <tr>
                                    <th><i className="fa-solid fa-square"></i></th>
                                    <th>Name</th>
                                    <th>Classification</th>
                                    <th>Eye colors</th>
                                    <th>Hair Colour</th>
                                    <th>Height</th>
                                    <th>Created</th>
                                </tr>
                                {loading ? (
                                    <h1>Loading...</h1>
                                ) : (speciesData.map((specie) =>
                                    <tr className="pointer" onClick={() => handleRowClick(specie)}>
                                        <Tabledata
                                            rectangle={<i className=" fa-solid fa-square"></i>}
                                            firstcolumn={specie.name}
                                            secondcolumn={specie.classification}
                                            thirdcolumn={specie.eye_colors}
                                            fouthcolumn={specie.hair_colors}
                                            fifthcolumn={specie.average_height}
                                            sixthcolumn={specie.created}
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

export default Species;