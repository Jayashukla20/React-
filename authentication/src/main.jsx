// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'; // global styles (optional)

import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AuthProvider from './contexts/Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App includes Navbar + Outlet
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'dashboard', element: <Dashboard /> }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />

  </AuthProvider>
);
