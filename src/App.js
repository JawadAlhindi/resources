import React from "react";
import "./app.css";
// import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import View from "./pages/View";
import Admin from "./components/Admin";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Crud from "./components/Crud";


function App() {
  return (
    <div>
      {/* <Router > */}
      <Router basename={"/resources"}>
        <Routes>
          <Route path="/" exact element={<View />} />
          <Route path="/admin" exact element={<Admin />} />
          <Route path="/crud" exact element={<Crud />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
