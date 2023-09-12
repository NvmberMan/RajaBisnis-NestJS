import React, { useEffect, useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";
import { GetMenu, GetShop } from "../Api";

export default function Test() {

  
  useEffect(() => {
    let hit = GetMenu();

    hit
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header"></header>
      </div>
    </>
  );
}
