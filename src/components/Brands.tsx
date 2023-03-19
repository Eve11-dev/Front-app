import { useEffect, useState } from "react";

export const Brands = () => {
    const [brands, setBrands] = useState([]);
  
  
    const API_URL = "http://localhost:3000";
    const BRANDS_ENDPOINT = "brands";
  
    const getBrands = async () => {
      const response = await fetch(`${API_URL}/${BRANDS_ENDPOINT}`);
      const data = await response.json();
      setBrands(data);
    };
  
    useEffect(() => {
      getBrands();
    }, []);
  
    return (
      <div className="App">
       <h1> Brands </h1>
       
        {brands.map((Brands: any) => (
          <div key={Brands.id}>{Brands.name}</div>
        ))}
      </div>
    );
  }