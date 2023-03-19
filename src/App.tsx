import { useEffect, useState } from "react";
import { Brands } from "./components/Brands";
import { Category } from "./components/Category";
import { Countryes } from "./components/country";
import { Gender } from "./components/Gender";
import { Nav } from "./components/nav/Nav";

function App() {
  const [products, setProducts] = useState([]);


  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Nav />
      <h1>Hola mundo react</h1>
      {products.map((product: any) => (
        <div key={product.id}>{product.name}</div>
      ))}

      <Category/>
      <Countryes/>
      <Gender/>
      <Brands/>

    </div>
  );
}

 

export default App;
