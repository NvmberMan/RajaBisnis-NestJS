import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SideBar from "./layout/Sidebar.tsx";
import DashBoard from "./content/Dash.tsx";
import Shop from "./content/Shop.tsx";
import Details from "./content/Details.tsx";
import Detailm from "./content/Detailm.tsx";
import Adds from "./content/Adds.tsx";
import Addm from "./content/Addm.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Details/:id" element={<Details />}></Route>
          <Route path="/Detailm/:id" element={<Detailm />}></Route>
          <Route path="/Addshop" element={<Adds />}></Route>
          <Route path="/Addmenu" element={<Addm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
