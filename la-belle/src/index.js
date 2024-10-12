import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Categories from './routes/Categories';
import Category from './routes/Category';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "categories",
    element: <Categories />,
    children: [
      {
        path: ":id",
        element: <Category />
      }
    ]

  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
