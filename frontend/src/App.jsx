import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu"; // New page
import loaderImg from "./assets/loaderImg.jpeg";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="loader-container">
          <img src={loaderImg} alt="Loading..." />
          <div className="bounce-loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> {/* Define /home route */}
          <Route path="/menu" element={<Menu />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
