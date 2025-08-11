import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Experience from './routes/Experience.jsx';
import Layout from './routes/Layout'
import Music from './routes/Music.jsx';
import Photography from './routes/Photography.jsx';
import Honors from './routes/Honors.jsx';
import Contact from './routes/Contact.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="experience" element={<Experience />} />
        <Route path="music" element={<Music />} />
        <Route path="photography" element={<Photography />} />
        <Route path="honors" element={<Honors />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
