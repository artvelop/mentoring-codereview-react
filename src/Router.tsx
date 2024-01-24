import React from 'react';
import { Home } from '@pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './Error/error404';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
