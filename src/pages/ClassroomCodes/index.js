import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import Header from '../../assets/Header';
import Footer from '../../assets/Footer';

function ClassroomCodes() {
  document.title = "Códigos";
  return (
    <div className="classroom-codes-container vertical-align">
      <Header />
      <div className="content">
        <h2 className="title">Qual seu período?</h2>
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
          <Link to="/home">
            <li className="hover item-flex">
              <FiArrowLeft className="arrow"/>
              <strong>Voltar</strong>
            </li>
          </Link>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default ClassroomCodes;
