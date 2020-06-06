import React from 'react';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-oldschool-dark';

import './global.css';

import Routes from './routes';

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 10000,
  offset: '0.375rem',
  transition: transitions.SCALE
}


function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options} >
      <Routes />
    </AlertProvider>
  )
}

export default App;
