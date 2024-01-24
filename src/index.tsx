import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './Styles/global';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const RouterObject = createBrowserRouter(Router);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
    },
  },
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={RouterObject} />
        <GlobalStyles />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
