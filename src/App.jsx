import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
