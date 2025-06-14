import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Dashboard from './page/Dashboard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<App/>}/>
       <Route path='/Dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
