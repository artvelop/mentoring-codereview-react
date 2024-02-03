import React from 'react';
import { Home } from '@pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProvidersWrapper from '@components/ProvidersWrapper';
import Picked from '@pages/Picked';
import RouterWithTabBar from '@components/RouterWithTabBarProps';
import Book from '@pages/Book';

function Router() {
  return (
    <BrowserRouter>
      <ProvidersWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <RouterWithTabBar>
                <Home />
              </RouterWithTabBar>
            }
          />
          <Route
            path="/picked"
            element={
              <RouterWithTabBar>
                <Picked />
              </RouterWithTabBar>
            }
          />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
      </ProvidersWrapper>
    </BrowserRouter>
  );
}

export default Router;
