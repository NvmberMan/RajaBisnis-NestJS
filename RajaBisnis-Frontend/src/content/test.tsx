import React, { useEffect, useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";


export default function Test() {


  useEffect(() => {
    axios
    .get("http://localhost:3000/shop"
    ) // Perhatikan bahwa kami tidak menggunakan "/api" di sini
    .then((response) => {
      console.log(response.data);
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
