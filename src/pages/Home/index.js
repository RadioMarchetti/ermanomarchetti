// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { FiHash, FiHelpCircle, FiMessageCircle } from 'react-icons/fi';

import Header from '../../assets/Header';
import Footer from '../../assets/Footer';

function Home() {
  document.title = "Ermano Marchetti";
  return (
    <div className="home-container vertical-align">
      <Header />
      <div className="content">
        <ul className="default">
          <Link to="/cdgs">
            <li className="hover item-flex">
              <strong>Códigos - Google Classroom</strong>
              <FiHash className="arrow"/>
            </li>
          </Link>
          <Link to="/help/googleclassroom">
            <li className="hover item-flex">
              <strong>Como acessar o Google Classroom</strong>
              <FiHelpCircle className="arrow"/>
            </li>
          </Link>
          <a href="/contact">
            <li className="hover item-flex">
              <strong>Entre em contato</strong>
              <FiMessageCircle className="arrow"/>
            </li>
          </a>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
