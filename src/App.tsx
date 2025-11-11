import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Inicio from './pages/Inicio'
import Missao from './pages/Missao'
import Visao from './pages/Visao'
import Equipe from './pages/Equipe'
import Projetos from './pages/Projetos'
import Formacao from './pages/Formacao'
import Assessoria from './pages/Assessoria'
import Consultoria from './pages/Consultoria'
import Doacoes from './pages/Doacoes'
import Contato from './pages/Contato'
import Internacional from './pages/Internacional'
import Nacional from './pages/Nacional'
import Online from './pages/Online'
import Presenciais from './pages/Presenciais'
import Footer from './pages/Footer'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />

      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/missao" element={<Missao />} />
          <Route path="/visao" element={<Visao />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/internacional" element={<Internacional />} />
          <Route path="/nacional" element={<Nacional />} />
          <Route path="/formacao" element={<Formacao />} />
          <Route path="/assessoria" element={<Assessoria />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/doacoes" element={<Doacoes />} />
          <Route path="/online" element={<Online />} />
          <Route path="/presenciais" element={<Presenciais />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}

export default App
