import React from 'react';
import { Link } from 'react-router-dom';
import { FiHash, FiHelpCircle, FiCalendar } from 'react-icons/fi';
// import { Graduation } from '../../assets/images/svg/Icons'

import Header from '../../assets/Header';
import Footer from '../../assets/Footer';

function Home() {
  document.title = "Ermano Marchetti";
  return (
    <div className="home-container vertical-align">
      <Header />
      <div className="content">
        <div className="home">
          {/* <Graduation /> */}
        </div>
        <ul className="default">
          <Link to="/cdgs">
            <li className="hover item-flex">
              <strong>Códigos - Google Classroom</strong>
              <FiHash className="arrow"/>
            </li>
          </Link>
          <Link to="/help/classroom/1">
            <li className="hover item-flex">
              <strong>Ajuda - Como acessar o Google Classroom</strong>
              <FiHelpCircle className="arrow"/>
            </li>
          </Link>
          <Link to="/cronograma">
            <li className="hover item-flex">
              <strong>Cronograma de entrega de atividades</strong>
              <FiCalendar className="arrow"/>
            </li>
          </Link>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
