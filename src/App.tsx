import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// Importez d'autres pages ou composants selon le besoin

function App() {
  return (
    <Router>
      <Routes>
        {/* Notez l'utilisation de Routes au lieu de Switch, et l'absence de l'attribut exact */}
        <Route path="/" element={<HomePage />} />
        {/* Ajoutez d'autres Route selon le besoin. Par exemple:
          <Route path="/about" element={<AboutPage />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
