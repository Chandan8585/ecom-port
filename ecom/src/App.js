import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignPage from './pages/SignPage';
import CartPage from './pages/CartPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/signUp',
      element: <SignPage />
    },
    {
      path: '/cart',
      element: <CartPage />
    }
  ]);

  createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
}

export default App;

