import React from 'react';
import { Home } from '@pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProvidersWrapper from '@components/ProvidersWrapper';
import Picked from '@pages/Picked';

function Router() {
  return (
    <BrowserRouter>
      <ProvidersWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/picked" element={<Picked />} />
        </Routes>
      </ProvidersWrapper>
    </BrowserRouter>
  );
}

export default Router;
