import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import ServicePage from "./pages/ServicePage";
import VideoPage from "./pages/VideoPage";
import ContactMePage from "./pages/ContactMePage";
function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/contact" element={<ContactMePage />} />
      </Route>
    </Routes>
  );
}

export default App;
