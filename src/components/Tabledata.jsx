import React from "react";
import "./Tabledata.css";

function Tabledata(props) {

    return (
        <>

            <td>{props.rectangle}</td>
            <td>{props.firstcolumn}</td>
            <td>{props.secondcolumn}</td>
            <td>{props.thirdcolumn}</td>
            <td>{props.fouthcolumn}</td>
            <td>{props.fifthcolumn}</td>
            <td>{props.sixthcolumn}</td>


        </>
    );

}

export default Tabledata;