import React from "react";
import "./People.css";
import Navbar from "./Navbar";
import Topnav from "./Topnav";
import Tabledata from "./Tabledata";
import { useAPI } from "./Apicontext";
import { useNavigate } from "react-router-dom";

function People() {
    const navigate = useNavigate();

    const { peopleData, loading, error } = useAPI();

    const handleRowClick = (people) => {
        navigate(`/people/${people.name}`);
    }

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error!</h1>;

    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar />

                <div className="col p-0">
                    <Topnav />

                    <div className="container mt-3 mb-5">
                        <p className="people">People</p>
                        <div className="responsive">
                            <table>
                                <tr>
                                    <th><i className="fa-solid fa-square"></i></th>
                                    <th>Name</th>
                                    <th>Birth Year</th>
                                    <th>Gender</th>
                                    <th>Hair Colour</th>
                                    <th>Height</th>
                                    <th>Created</th>
                                </tr>
                                {peopleData.map((people) =>
                                    <tr className="pointer" onClick={() => handleRowClick(people)}>
                                        <Tabledata
                                            rectangle={<i className=" fa-solid fa-square"></i>}
                                            firstcolumn={people.name}
                                            secondcolumn={people.birth_year}
                                            thirdcolumn={people.gender}
                                            fouthcolumn={people.hair_color}
                                            fifthcolumn={people.height}
                                            sixthcolumn={people.created}
                                        />
                                    </tr>
                                )}
                            </table>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    );
}

export default People;