import React from "react";
import "./Cardcontainer.css";


function Cardcontainer() {

    return (


        <div className="container card-container">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="card w-100 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h5>Films</h5>
                                <i className="fa-solid fa-square fa-2x bg-gr"></i>
                            </div>
                            <h4 className="mt-3">200</h4>
                            <p className="greenColor">
                                20 More than yesterday
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="card w-100 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h5>Starship</h5>
                                <i className="fa-solid fa-square fa-2x bg-sb"></i>
                            </div>
                            <h4 className="mt-3">200</h4>
                            <p className="greenColor">
                                20 More than yesterday
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="card w-100 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h5>People</h5>
                                <i className="fa-solid fa-square fa-2x bg-lp"></i>
                            </div>
                            <h4 className="mt-3">200</h4>
                            <p className="greenColor">
                                20 More than yesterday
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="card w-100 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h5>Species</h5>
                                <i className="fa-solid fa-square fa-2x bg-sy"></i>
                            </div>
                            <h4 className="mt-3">200</h4>
                            <p className="greenColor">
                                20 More than yesterday
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Cardcontainer;