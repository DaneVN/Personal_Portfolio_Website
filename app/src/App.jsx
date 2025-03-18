import React from "react";
import "./App.css";
import Layout from "./pages/Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontEndPage from "./pages/FrontEndPage.jsx";
import BackEndPage from "./pages/BackEndPage.jsx";
import HomePage from "./pages/home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/frontend" element={<FrontEndPage />} />
          <Route path="/backend" element={<BackEndPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
