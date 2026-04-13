import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <h1 className='bg-amber-300'>welcome home</h1>
  </StrictMode>,
)
