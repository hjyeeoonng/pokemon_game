import { React, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Randering } from "./pages/randering/randering";
import { CardGame } from "./pages/cardGame/cardGame/cardGame";
import { Game } from "./pages/cardGame/ingame/ingame";
import { Proposal } from "./pages/proposal/proposal";
import { AboutUs } from "./pages/aboutUs/aboutUs";
import MBTI from "./pages/MBTI/MBTI";
import Error from "./pages/404Error/404Error";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const location = useLocation();
  const headerProps = { currentPath: location.pathname };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Header {...headerProps} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate to="/Main" />}
          errorElement={<Error />}
        />
        <Route exact path="/Main" element={<Randering />} />
        <Route exact path="/Card_Game" element={<CardGame />} />
        <Route exact path="/Game" element={<Game />} />
        <Route exact path="/Proposal" element={<Proposal />} />
        <Route exact path="/About_Us" element={<AboutUs />} />
        <Route exact path="/MBTI" element={<MBTI />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

root.render(
  <Router>
    <App />
  </Router>
);
