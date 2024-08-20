import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PreferencesPage from "./pages/PreferencesPage";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/preferences" element={<PreferencesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
