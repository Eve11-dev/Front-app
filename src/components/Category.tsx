import { useEffect, useState } from "react";

export const Category = () => {
    const [categories, setcategories] = useState([]);
  
  
    const API_URL = "http://localhost:3000";
    const CATEGORY_ENDPOINT = "category";
  
    const getcategories = async () => {
      const response = await fetch(`${API_URL}/${CATEGORY_ENDPOINT}`);
      const data = await response.json();
      setcategories(data);
      console.log(data)
    };
  
    useEffect(() => {
      getcategories();
    }, []);
  
    return (
      <div className="App">
           
        {categories.map((category: any) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
    );
  }
  