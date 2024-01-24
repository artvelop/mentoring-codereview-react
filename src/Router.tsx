import React from 'react';
import { Home } from '@pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProvidersWrapper from '@components/ProvidersWrapper';
import Picked from '@pages/Picked';
import RouterWithTabBar from '@components/RouterWithTabBarProps';

function Router() {
  return (
    <BrowserRouter>
      <ProvidersWrapper>
        <RouterWithTabBar>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/picked" element={<Picked />} />
          </Routes>
        </RouterWithTabBar>
      </ProvidersWrapper>
    </BrowserRouter>
  );
}

export default Router;
