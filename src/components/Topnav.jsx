import React from "react";
import "./Topnav.css";

function Topnav() {

    return (

        <div className="px-5 pt-3 shadow-sm d-flex flex-row-reverse bg-light">

            <div class="pt-1 px-4"><h5>. . .</h5></div>
            <div class="p-2 bd-highlight"><p>John Deo</p></div>
            <div class="p-2 bd-highlight"><img src="https://avatars.githubusercontent.com/u/68695367?v=4" alt="" width="32" height="32" class="rounded-circle me-2" /></div>
            <div class="p-2 bd-highlight"><p className="px-3 divider">|</p></div>
            <div class="p-2 bd-highlight"><h5><i className="fa-regular fa-bell bell"></i></h5></div>
        </div>

    );
}

export default Topnav;