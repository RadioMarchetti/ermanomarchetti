import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FiHome, FiHash, FiMessageCircle, FiHelpCircle, FiCalendar, FiChevronDown, FiArrowLeft, FiMoon, FiSun, FiCheck, FiChevronUp, FiAnchor, FiTag } from 'react-icons/fi'
import { theme, selectedTheme } from '../themes'
import { EmFull } from '../images/svg/Icons'
import { CSSTransition } from 'react-transition-group';

export function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item" title="Página inicial">
          {/* <p className="title popup">Ermano&nbsp;Marchetti</p> */}
          <Link to="/home">
            <EmFull />
          </Link>
        </li>
        <li className="nav-item" title="Menu de navegação">
          <NavItem>
            <DropdownMenu />
          </NavItem>
        </li>
      </ul>
    </nav>
  )
}


function NavItem(props) {
  const [ open, setOpen ] = useState(false);
  return (
    <li className="nav-item">
      <div className="nav-button" onClick={() => setOpen(!open)}>
        { open === true ? <FiChevronDown className="nav-icon nav-icon-open" /> : <FiChevronDown className="nav-icon" /> }
      </div>
      {open && props.children}
    </li>
  )
}

function DropdownMenu() {
  const [ activeMenu, setActiveMenu ] = useState('main')
  const [ menuHeight, setMenuHeight ] = useState(null)
  const [ activeTheme, setActiveTheme ] = useState('')

  // THEMES

  useEffect(() => {setActiveTheme(selectedTheme())}, [])
  
  function changeTheme(thm) {
    setActiveTheme(thm)
    theme(thm)
  }

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
          <Link to="/cronograma" className="menu-item">
            <span className="nav-button"><FiCalendar /></span>
            <p>Cronograma</p>
          </Link>
          <a href="/contact" className="menu-item">
            <span className="nav-button"><FiMessageCircle /></span>
            <p>Contato</p>
          </a>
          <a href="#/" className="menu-item" onClick={() => setActiveMenu('themes')}>
            <span className="nav-button">{ activeTheme === "red" ? <FiTag /> : activeTheme === "bright" ? <FiSun /> : activeTheme === "dark" ? <FiMoon /> : activeTheme === "default" ? <FiAnchor /> : null}</span>
            <p>Temas</p>
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
          <a href="#/" className="menu-item" onClick={() => setActiveMenu('main')}>
            <span className="nav-button"><FiArrowLeft /></span>
            <p>Voltar</p>
          </a>
          <a href="#/" className="menu-item" onClick={() => changeTheme('default')}>
            { activeTheme === "default" ? <span className="selected nav-button"><FiCheck /></span> : <span className="nav-button"><FiAnchor /></span> }
            <p>Padrão</p>
          </a>
          <a href="#/" className="menu-item" onClick={() => changeTheme('bright')}>
            { activeTheme === "bright" ? <span className="selected nav-button"><FiCheck /></span> : <span className="nav-button"><FiSun /></span> }
            <p>Claro</p>
          </a>
          <a href="#/" className="menu-item" onClick={() => changeTheme('dark')}>
            { activeTheme === "dark" ? <span className="selected nav-button"><FiCheck /></span> : <span className="nav-button"><FiMoon /></span> }
            <p>Escuro</p>
          </a>
          <a href="#/" className="menu-item" 
            // onClick={() => {changeTheme('red')}}
          >
            { activeTheme === "red" ? <span className="selected nav-button"><FiCheck /></span> : <span className="nav-button"><FiTag /></span> }
            <p>Vermelho (em breve)</p>
          </a>
        </div>
      </CSSTransition>
    </div>
  )
}