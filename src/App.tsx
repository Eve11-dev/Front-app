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
     
      <h1>Tienda Oline</h1>
    
      <Category/>
      <Countryes/>
      <Brands/>
      <Gender/>
     

    </div>
  );
}

 

export default App;
