import React from "react";
import "./Dashboard.css";
import Navbar from "../components/Navbar";
import Topnav from "../components/Topnav";
import Tabledata from "../components/Tabledata";
import Cardcontainer from "../components/Cardcontainer";
import { useNavigate } from "react-router-dom";

import { useAPI } from "../components/Apicontext";

function Dashboard() {
    const navigate = useNavigate();
    const { filmData, loading, error } = useAPI();
    console.log(filmData[4].title);

    const handleRowClick = (films) => {
        navigate(`/dashboard/${films.title}`);
    }

    if (error) return <h1>Error!</h1>;

    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <Navbar />

                    <div className="col p-0">
                        <Topnav />
                        <Cardcontainer />

                        <div className="container mb-5">
                            <p className="film">Films</p>
                            <div className="responsive">
                                <table>
                                    <tr>
                                        <th><i className="fa-solid fa-square"></i></th>
                                        <th>Film title</th>
                                        <th>Released Date</th>
                                        <th>Director</th>
                                        <th>Producer</th>
                                        <th>Episode ID</th>
                                        <th>Character</th>
                                    </tr>
                                    {loading ? (
                                        <h1>Loading...</h1>
                                    ) : (filmData.map((film) =>
                                        <tr className="pointer" onClick={() => handleRowClick(film)}>
                                            <Tabledata
                                                rectangle={<i className=" fa-solid fa-square"></i>}
                                                firstcolumn={film.title}
                                                secondcolumn={film.release_date}
                                                thirdcolumn={film.director}
                                                fouthcolumn={film.producer}
                                                fifthcolumn={film.episode_id}
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
        </>
    );
}

export default Dashboard;