import { useEffect } from 'react';
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import { resources } from "./assets/ressurser.js"
import Layout from "./components/Layout"
import Resources from "./components/Resources"
import './App.css'

//Brukte chatGPT for hjelp for å gjøre om min useState("html") og useEffect kode om til. der fikk jeg svar om å sette det til en function kalt CategoryPage. Som jeg valte å bruke.
function CategoryPage() {
  const { category } = useParams();
  useEffect(() => {
    document.title = `${category}`;
  }, [category]);

  //filterer resources basert på category.
  const filteredRessurs = resources.filter((ressurs) => ressurs.category === category);

  //sender category og resources props vidre til layout/resources.jsx
  return (
    <Layout category={category}>
      <Resources resources={filteredRessurs} />
    </Layout>
  );
}

//sender parmas til categorypage, og sorger for at vi starter på html parm når vi åpner siden
export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/html" />} />
        <Route path="/:category" element={<CategoryPage />} />
      </Routes>
  );
}