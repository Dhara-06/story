import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Memories from "./pages/Memories";
import Wishes from "./pages/Wishes";
import "./App.css"; // custom storybook theme

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/wishes" element={<Wishes />} />
      </Routes>
    </Router>
  );
}

export default App;
