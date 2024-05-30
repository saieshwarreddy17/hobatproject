
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage'; // Correct the import path

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
