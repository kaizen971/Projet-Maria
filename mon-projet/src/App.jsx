import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Julie" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li><a href="#apropos">À propos</a></li>
          <li><a href="#parcours">Mon parcours</a></li>
          <li><a href="#competences">Mes compétences</a></li>
          <li><a href="#projets">Mes projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main>
        {/* Le reste de votre contenu ici */}
      </main>
    </div>
  )
}

export default App
