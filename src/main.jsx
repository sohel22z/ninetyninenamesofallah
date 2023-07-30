import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/custom.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './app/app';
import Home from './app/pages/home';

const router = createBrowserRouter([
  {
    path: "/ninetyninenamesofallah/",
    element: <App />,
    children: [
      {
        path: "/ninetyninenamesofallah/",
        element: <Home />
      },
      // {
      //   path: "/ninetyninenamesofallah/about",
      //   element: <About />
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
