import { useState, useEffect } from 'react';
import { resources } from "./assets/ressurser.js"
import Layout from "./components/Layout"
import Resources from "./components/Resources"

import './App.css'

export default function App() {
  const [category, setcategory] = useState("html");
  useEffect(() => {
  document.title = `${category}`;
  }, [category]);


  return(
        <div className="App">
          <Layout 
            category={category} 
            setcategory={setcategory}
          />
          {resources.map((ressurs, index) => (
            <Resources
            key={index} 
            cat={ressurs.category} 
            title={ressurs.title} 
            url={ressurs.url}
            />
          ))}
      </div>
  )
}