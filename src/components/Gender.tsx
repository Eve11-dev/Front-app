import { useEffect, useState } from "react";

export const Gender = () => {
    const [gender, setGender] = useState([]);
  
  
    const API_URL = "http://localhost:3000";
    const GENDER_ENDPOINT = "genders";
  
    const getGender = async () => {
      const response = await fetch(`${API_URL}/${GENDER_ENDPOINT}`);
      const data = await response.json();
      setGender(data);
    };
    
    useEffect(() => {
      getGender();
    }, []);
  
    return (
      <div className="App">
       <h1>Gender</h1>
       
        {gender.map((Gender: any) => (
          <div key={Gender.id}>{Gender.name}</div>
        ))}
      </div>
    );
  }