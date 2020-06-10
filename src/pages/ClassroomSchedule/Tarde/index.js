import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import Header from '../../../assets/Header';
import Footer from '../../../assets/Footer';

function ScheduleT() {
  document.title = "Cronograma - Tarde";
  return (
    <div className="schedule-container">
    <Header />
    <div className="content">
    <p className="title">Entega de atividades</p>
    <p className="title2 margintop75rem">Tarde - 2°Bimestre</p>
    <ul className="default">
        <Link to="/help/classroom/1">
          <li className="hover">
            <strong>Atenção</strong>
            <p>As atividades já estão no Google Classroom, se ainda não acessou o Classroom, clique aqui para saber como acessá-lo</p>
          </li>
        </Link>
        <li>
          <strong>05/06</strong>
          <p>Ciências</p>
          <p>Educação Física</p>
        </li>
        <li>
          <strong>10/06</strong>
          <p>Geografia</p>
          <p>História</p>
        </li>
        <li>
          <strong>15/06</strong>
          <p>Matemática</p>
        </li>
        <li>
          <strong>20/06</strong>
          <p>Artes</p>
          <p>Inglês</p>
        </li>
        <li>
          <strong>25/06</strong>
          <p>Português</p>
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

export default ScheduleT;