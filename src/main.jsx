import React, { useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Market from "./Market";
import Articles from "./Articles";
import SideNav from "./SideNav";

function App() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <BrowserRouter>
      <Header onOpenSideNav={() => setSideNavOpen(true)} />
      <SideNav open={sideNavOpen} setOpen={setSideNavOpen} />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/market' element={<Market />} />
        <Route path='/articles' element={<Articles />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);