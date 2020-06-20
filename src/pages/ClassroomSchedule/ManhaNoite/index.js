import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../../assets/Header';
import Footer from '../../../assets/Footer';

function ScheduleMN() {
  document.title = "Cronograma - Manhã / Noite";
  return (
    <div className="schedule-container">
      <Header />
      <div className="content">
      <p className="title">Entega de atividades</p>
      <p className="title2 margintop75rem">Manhã / Noite - 2°Bimestre</p>
        <ul className="default">
          <li>
            <strong>05/06</strong>
            <p>Artes</p>
            <p>Inglês</p>
          </li>
          <li>
            <strong>10/06</strong>
            <p>Física</p>
            <p>Sociologia</p>
            <p>Química</p>
          </li>
          <li>
            <strong>15/06</strong>
            <p>Matemática</p>
            <p>História</p>
          </li>
          <li>
            <strong>20/06</strong>
            <p>Educação Física</p>
            <p>Biologia</p>
            <p>Filosofia</p>
          </li>
          <li>
            <strong>25/06</strong>
            <p>Português</p>
            <p>Geografia</p>
          </li>
          <li>
            <strong>30/06</strong>
            <p>Projeto de Vida</p>
            <p>Tecnologia</p>
            <p>Eletivas</p>
          </li>
          <Link to="/cronograma">
            <li className="hover item-flex">
              <FiArrowLeft className="arrow"/>
              <strong>Voltar</strong>
            </li>
          </Link>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default ScheduleMN;