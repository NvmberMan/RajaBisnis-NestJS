import React, { useEffect, useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";
import { GetMenu, GetShop } from "../Api";
import { ResponseAPI } from "../utils";

export default function Test() {
  const [shop, setShop] = useState<ResponseAPI[]>([]);

  

  
  useEffect(() => {
    let hit = GetShop();
    const setShop = hit;
    // GetShop().then(data => setShop(data))

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
        <header className="App-header">
        <div className='grid'>
                {
                    shop.map(post => (
                        <div key={post.id}>
                            <p>id: <span>{post.id}</span></p>
                            <p>name: <span>{post.name}</span></p>
                            <p>User: <span>{post.description}</span></p>
                        </div>
                    ))
                }
            </div>
        </header>
      </div>
    </>
  );
}
