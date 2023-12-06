import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import React from 'react';
import Header from './layouts/Header';
import HowWorks from './pages/HowWorks';

const App = () => {
  return (
    // <BrowserRouter>
      // {/* <CssBaseline /> */}
      // {/* <Header /> */}
      <HowWorks />
    // </BrowserRouter>
  );
};

export default App;
