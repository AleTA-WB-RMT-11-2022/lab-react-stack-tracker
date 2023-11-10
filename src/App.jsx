import { useState } from "react";
import "./App.css";
import companiesData from "./companies.json"
import technologiesData from "./technologies.json"
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import Navbar from "./components/Navbar";

function App() {
  const [companies, setCompanies] = useState(companiesData)
  const [technologies, setTechnologies] = useState(technologiesData)

  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage companies={companies} />} />
      <Route path="/company/:companySlug" element={<CompanyPage companies={companies} />} />
      <Route path="/tech/:slug" element={<TechnologyPage/>} />
    </Routes>
    </div>
  );
}

export default App;
