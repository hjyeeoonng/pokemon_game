import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes, useLocation, Navigate } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Randering } from "./pages/randering/randering";
import { CardGame } from "./pages/cardGame/cardGame";
import { Proposal } from "./pages/proposal/proposal";
import { AboutUs } from "./pages/aboutUs/aboutUs";
import MBTI from "./pages/MBTI/MBTI";

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const location = useLocation();
  const headerProps = { currentPath: location.pathname };

  return (
    <React.StrictMode>
      <Header {...headerProps} />
      <Routes>
        <Route exact path="/" element={<Navigate to="/Randering" />} />
        <Route exact path="/Randering" element={<Randering />} />
        <Route exact path="/Card_Game" element={<CardGame />} />
        <Route exact path="/Proposal" element={<Proposal />} />
        <Route exact path="/About_Us" element={<AboutUs />} />
        <Route exact path="/MBTI" element={<MBTI />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  );
}

root.render(
  <Router>
    <App />
  </Router>
);
