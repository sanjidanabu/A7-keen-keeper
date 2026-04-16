import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import HomePage from './pages/homepage/HomePage'
import Status from './pages/status/Status'
import Timeline from './pages/timeline/Timeline'
import NotFound from './pages/notfoundpage/NotFound'
import FriendDetails from './components/homepage/FriendDetails'
import { TimelineProvider } from './context/TimelineContext'

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
          element: <Timeline/>
        },
        {
          path:"/status",
          element: <Status/>
        },
        {
          path: "/friend/:id",
          element: <FriendDetails/>
        }
      ],

   errorElement: <NotFound/>
    
    
    },

   
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <TimelineProvider>
      <RouterProvider router={router} />
    </TimelineProvider>
  </StrictMode>,
)
