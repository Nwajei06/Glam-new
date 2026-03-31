import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import "./style.css";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Mainhome from "./pages/Mainhome";
import LoginCard from "./pages/LoginCard";
import SignupCard from "./pages/SignupCard.";





function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainhome />} />
        <Route path="/user" element={<Index />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<LoginCard />} />
        <Route path="/signup" element={<SignupCard />} /> 
      </Routes>
    </>
  );
}

export default App;
