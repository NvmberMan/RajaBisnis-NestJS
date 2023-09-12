import React, { useEffect, useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";
import { GetMenu, GetShop } from "../Api";

export default function Test() {
  const [shop, setShop] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const hit = await GetShop();
      setShop(hit.data);
      console.log(hit.data);
    } catch (error) {
      console.error("Error fetching shop data:", error);
    }
  };

  useEffect(() => {
    let hit = GetShop();
    const setShop = hit;

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
          <div className="grid">
            {shop.map((post) => (
              <div key={post.id}>
                <p>
                  id: <span>{post.id}</span>
                </p>
                <p>
                  name: <span>{post.name}</span>
                </p>
                <p>
                  Description: <span>{post.description}</span>
                </p>
              </div>
            ))}
          </div>
        </header>
      </div>
    </>
  );
}
