import { useEffect, useState } from "react";
import { GetShop } from "../Api";

export default function Test() {
  const [shop, setShop] = useState<any[]>([]);

  useEffect(() => {
    let hit = GetShop();

    hit
      .then((data) => {
        console.log(data);
        setShop(data)
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
