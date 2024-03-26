import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import InputGroup from "./components/pages/InputGroup";
import RegisterPage from "./components/pages/RegisterPage";
import BuyerEnd from "./components/pages/BuyerEnd";

const App = () => {
  return (
    <Router>
      <div>
        {/* Links for navigation */}
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/buyerend">BuyerEnd</Link>
        </nav>

        {/* Routing Setup with Routes instead of Switch */}
        <Routes>
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/buyerend" element={<BuyerEnd />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

