import React from 'react';
import { Home } from '@pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProvidersWrapper from '@components/ProvidersWrapper';

function Router() {
  return (
    <BrowserRouter>
      <ProvidersWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ProvidersWrapper>
    </BrowserRouter>
  );
}

export default Router;
