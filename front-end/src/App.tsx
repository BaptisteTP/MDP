import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import LaMaison from './pages/LaMaison'
import DinerGala from './pages/DinerGala'
import Inscription from './pages/Inscription'
import Don from './pages/Don'
import Info from './pages/Info'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="la-maison" element={<LaMaison />} />
          <Route path="soiree-gala" element={<DinerGala />} />
          <Route path="inscription" element={<Inscription />} />
          <Route path="don" element={<Don />} />
          <Route path="infos-pratiques" element={<Info />} />

          {/* Redirections de compatibilité */}
          <Route path="la_maison" element={<Navigate to="/la-maison" replace />} />
          <Route path="diner_gala" element={<Navigate to="/soiree-gala" replace />} />
          <Route path="info" element={<Navigate to="/infos-pratiques" replace />} />
          <Route path="tombola" element={<Navigate to="/soiree-gala" replace />} />
          <Route path="promesse" element={<Navigate to="/don" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
