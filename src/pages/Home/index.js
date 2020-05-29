// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';
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
            <li className="nonfunctional item-flex">
              <strong>Manhã</strong>
              <p>EM DESENVOLVIMENTO</p>
            </li>
          <Link to="/cdgs/tarde">
            <li className="hover item-flex">
              <strong>Tarde</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
            <li className="nonfunctional item-flex">
              <strong>Noite</strong>
              <p>EM DESENVOLVIMENTO</p>
            </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
