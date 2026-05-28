import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import App from './App.tsx'
import Explore from './components/Pages/Explore.tsx'
import References from './components/Pages/References.tsx'
import Instructions from './components/Pages/Instructions.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes> 
    <Routes>
      <Route path="/explore" element={<Explore />} />
    </Routes>
     <Routes>
      <Route path="/references" element={<References />} />
    </Routes>
     <Routes>
      <Route path="/instructions" element={<Instructions />} />
    </Routes>
  </BrowserRouter>

)
