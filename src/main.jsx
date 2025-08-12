import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Experience from './routes/Experience.jsx';
import Layout from './routes/Layout'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="experience" element={<Experience />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
