import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/app'
import Home from './app/pages/home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
