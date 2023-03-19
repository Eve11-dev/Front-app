import { useEffect, useState } from "react";

export const Countryes = () => {
    const [country, setCountryes] = useState([]);
  
  
    const API_URL = "http://localhost:3000";
    const COUNTRY_ENDPOINT = "contryes";
  
    const getCountryes = async () => {
      const response = await fetch(`${API_URL}/${COUNTRY_ENDPOINT}`);
      const data = await response.json();
      setCountryes(data);
      console.log(data)
    };
  
    useEffect(() => {
      getCountryes();
    }, []);
  
    return (
      <div className="App">
       <h1> Countryes </h1>
       
        {country.map((Country: any) => (
          <div key={Country.id}>{Country.name}</div>
        ))}
      </div>
    );
  }
  