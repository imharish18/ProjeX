// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your components
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ReportsPage from './pages/ReportsPage';
import Navbar from './components/Navbar'; // <-- Import Navbar here

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        {/* The Navbar is now here, outside the Routes. It will never change. */}
        <Navbar />

        {/* The Routes will render the content *below* the Navbar */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="reports" element={<ReportsPage />} />
          </Route>
          
          {/* Example of a future page that DOES NOT use the sidebar */}
          {/* <Route path="/settings" element={<SettingsPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;