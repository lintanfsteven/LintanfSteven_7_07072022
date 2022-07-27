import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import { Navigate } from "react-router-dom";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/profil" exact component={Profil} />
        <Navigate to="/" />
      </Routes>
    </Router>
  );
};

export default index;
