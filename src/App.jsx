import { useState } from 'react';
import './App.css'
import Layout from "./components/Layout"

export default function App() {
  const [currentCat] = useState("HTML")
  return(
    <div className="App">
      <Layout currentCat={currentCat} />
    </div>
  )
}