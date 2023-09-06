import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SideBar from "./layout/Sidebar.tsx";
import DashBoard from "./content/Dash.tsx";
import Shop from "./content/Shop.tsx";
import Details from "./content/Details.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Details/:id" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
