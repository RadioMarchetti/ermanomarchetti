import React, { useState } from 'react';

import { Link } from 'react-router-dom'

import { FiHome, FiHash, FiMessageCircle, FiHelpCircle, FiChevronDown, FiArrowLeft, FiMoon, FiSun } from 'react-icons/fi'

import { theme } from '../themes'

import { EmFull } from '../images/svg/Icons'

import { CSSTransition } from 'react-transition-group';

export function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <p className="title popup">Ermano&nbsp;Marchetti</p> */}
          <Link to="/home">
            <EmFull />
          </Link>
        </li>
        <NavItem>
          <DropdownMenu />
        </NavItem>
      </ul>
    </nav>
  )
}


function NavItem(props) {
  const [ open, setOpen ] = useState(false);
  return (
    <li className="nav-item">
      <div className="nav-button" onClick={() => setOpen(!open)}>
      <FiChevronDown className="nav-icon" />
      </div>
      {open && props.children}
    </li>
  )
}

function DropdownMenu() {
  const [ activeMenu, setActiveMenu ] = useState('main')
  const [ menuHeight, setMenuHeight ] = useState(null)

  // THEMES

  
  // THEMES

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height)
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition 
        in={activeMenu === 'main'} 
        unmountOnExit 
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <Link to="/home" className="menu-item">
            <span className="nav-button"><FiHome /></span>
            <p>Página inicial</p>
          </Link>
          <Link to="/cdgs" className="menu-item">
            <span className="nav-button"><FiHash /></span>
            <p>Códigos</p>
          </Link>
          <Link to="/help/classroom/1" className="menu-item">
            <span className="nav-button"><FiHelpCircle /></span>
            <p>Ajuda</p>
          </Link>
          <a href="/contact" className="menu-item">
            <span className="nav-button"><FiMessageCircle /></span>
            <p>Contato</p>
          </a>
          {/* onClick={() => setActiveMenu('themes')} */}
          <a className="menu-item" >
            <span className="nav-button"><FiMoon /></span>
            <p>em breve...</p>
          </a>
        </div>
      </CSSTransition>
      <CSSTransition 
        in={activeMenu === 'themes'} 
        unmountOnExit 
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}        
      >
        <div className="menu">
          <a className="menu-item" onClick={() => setActiveMenu('main')}>
            <span className="nav-button"><FiArrowLeft /></span>
            <p>Voltar</p>
          </a>
          <a className="menu-item" onClick={() => theme('bright')}>
            <span className="nav-button"><FiSun /></span>
            <p>Claro</p>
          </a>
          <a className="menu-item" onClick={() => theme('dark')}>
            <span className="nav-button"><FiMoon /></span>
            <p>Escuro</p>
          </a>
        </div>
      </CSSTransition>
    </div>
  )
}