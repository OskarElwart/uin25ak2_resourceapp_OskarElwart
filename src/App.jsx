import { useState } from 'react';
import './App.css'
import Nav from "./components/Nav"
import Layout from "./components/Layout"
import PageTitle from "./components/PageTitle"
import Resources from "./components/Resources"

// Importerer resources fra ressurser.js fila


// importer stilfilen for appen

// Definer hovedkomponenten app
function App() {
  const [currentCat, setCat] = useState(html)
  return (
    <Layout>
          <div className="App">
      <Layout setCategory={category} category={category} />
    </div>
    </Layout>

  )
}

//exporterer app komponenten for bruk i applikasjoner
export default App
