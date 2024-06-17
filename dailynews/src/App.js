import React from "react";
import Login from "./Components/Login/Loging";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Main />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
