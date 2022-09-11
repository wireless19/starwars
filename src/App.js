import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Dashboarddetail from "./components/Dashboarddetail";
import Starships from "./components/Starships";
import Starshipsdetail from "./components/Starshipsdetail";
import People from "./components/People";
import Peopledetail from "./components/Peopledetail";
import Species from "./components/Species";
import Speciesdetail from "./components/Speciesdetail";
import { APIContextProvider } from "./components/Apicontext";



function App() {
  return (
    <APIContextProvider>
      <Router>

        <Routes>

          <Route exact path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/:title" element={<Dashboarddetail />} />

          <Route path="/starships" element={<Starships />}></Route>
          <Route path="/starships/:name" element={<Starshipsdetail />}></Route>

          <Route path="/people" element={<People />}></Route>
          <Route path="/people/:name" element={<Peopledetail />}></Route>

          <Route path="/species" element={<Species />}></Route>
          <Route path="/species/:name" element={<Speciesdetail />}></Route>
        </Routes>

      </Router>
    </APIContextProvider>

  );
}

export default App;
