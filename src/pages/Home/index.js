// eslint-disable-next-line
import React, { useState } from 'react';
// eslint-disable-next-line
import { Link, useHistory } from 'react-router-dom';
// eslint-disable-next-line
import { FiArrowRight } from 'react-icons/fi';

import Header from '../../assets/Header';
import Footer from '../../assets/Footer';

import './style.css';

function Home() {
  return (
    <div className="home-container vertical-align">
      <Header />
      <div className="content">
        <p className="title">Qual seu período?</p>
        <ul className="default">
          <Link to="/cdgs/manha">
            <li className="hover item-flex">
              <strong>Manhã</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/tarde">
            <li className="hover item-flex">
              <strong>Tarde</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/noite">
            <li className="hover item-flex">
              <strong>Noite</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
