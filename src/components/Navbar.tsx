// src/components/Navbar.tsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/images/logo.png'

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu)
  }

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <div className="nav-item" onClick={() => toggleMenu('inicio')}>
        <span className="nav-link">Início ▼</span>
        {activeMenu === 'inicio' && (
          <div className="dropdown">
            <Link to="/inicio">Início</Link>
            <Link to="/missao">Missão</Link>
            <Link to="/visao">Visão</Link>
            <Link to="/equipe">Equipe</Link>
          </div>
        )}
      </div>

      <div className="nav-item" onClick={() => toggleMenu('projetos')}>
        <span className="nav-link">Projetos ▼</span>
        {activeMenu === 'projetos' && (
          <div className="dropdown">
            <Link to="/nacional">Nacional</Link>
            <Link to="/internacional">Internacional</Link>
          </div>
        )}
      </div>

      <div className="nav-item" onClick={() => toggleMenu('formacao')}>
        <span className="nav-link">Formação ▼</span>
        {activeMenu === 'formacao' && (
          <div className="dropdown">
            <Link to="/formacao">Formação</Link>
            <Link to="/assessoria">Assessoria</Link>
            <Link to="/consultoria">Consultoria</Link>
          </div>
        )}
      </div>

      <div className="nav-item" onClick={() => toggleMenu('doacoes')}>
        <span className="nav-link">Doações ▼</span>
        {activeMenu === 'doacoes' && (
          <div className="dropdown">
            <Link to="/online">Online</Link>
            <Link to="/presenciais">Presenciais</Link>
          </div>
        )}
      </div>

      <Link to="/contato" className="nav-link">Contato</Link>
    </nav>
  )
}

export default Navbar
