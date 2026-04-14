import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import HomePage from './pages/homepage/HomePage'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <RootLayout/>,
      children:[
        {
          path:"/",
          element: <HomePage/>
        },
        {
          path: "/timeline",
          element: <h2>timeline</h2>
        },
      ],

   errorElement: <h2>this page is not found</h2>,
    
    
    },

   
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router} />
  </StrictMode>,
)
