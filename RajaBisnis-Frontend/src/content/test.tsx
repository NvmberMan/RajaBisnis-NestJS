import React, { useEffect, useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";
export type dummy = {
  brand: string;
  category: string;
  description: string;
  id: number;
  price: number;
  stock: number;
  thumbnail: string;
  title: string;
};

export default function Test() {
  const [data, setData] = useState<dummy[]>([]);
  const url = "'https://dummyjson.com/products/1'";

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error during data fetching:", error);
    }
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/search?q=phone")
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Data Nama</h1>
            {data.map((item, index) => (
              <div key={index}>
                Rendering item {index}
                <span>
                  {item.brand} = $ {item.price}
                </span>
              </div>
            ))}
        </header>
      </div>
    </>
  );
}
