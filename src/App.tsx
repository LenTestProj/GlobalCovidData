import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactsPage from "./pages/ContactsPage";
import NewContactFormPage from "./pages/NewContactFormPage";
import ChartsAndMapsPage from "./pages/ChartsAndMapsPage";

const App:React.FC<{}> = () => {
  return <div className="flex flex-col overflow-auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/contacts/new-contact" element={<NewContactFormPage />}/>
      <Route path="/maps-and-charts" element={<ChartsAndMapsPage />} />
    </Routes>
  </div>;
}

export default App;
