import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../../../assets/Header';
import Footer from '../../../../../../assets/Footer';

function Sala() {
  document.title = "Códigos Manhã - 1° ano B";
  return (
    <div className="cdgs-container">
      <Header />
      <div className="content">
        <p className="title">Códigos 1°ano B</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>24izx7t</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>64ynzt7</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>udatipp</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>qojedyw</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>cxugu7w</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>smjijlo</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>ig7d33p</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>yjntrqo</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>ur4lxnt</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>njeaccc</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>lxsiqef</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>v44pmmk</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>ckhmqmz</p>
          </li>
          <li className="item-flex">
            <strong>Projeto de vida</strong>
            <p>rq4o3in</p>
          </li>
          <li className="item-flex">
            <strong>Psicologia</strong>
            <p>wbhnufp</p>
          </li>
          <li className="item-flex">
            <strong>Estética</strong>
            <p>afuxulu</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia e informática</strong>
            <p>ve7u7d7</p>
          </li>
          <li className="item-flex">
            <strong>Intercâmbio</strong>
            <p>dyponzo</p>
          </li>
          <li className="item-flex">
            <strong>Marketing</strong>
            <p>qu32meu</p>
          </li>
          <li className="item-flex">
            <strong>Games</strong>
            <p>zw3rkrb</p>
          </li>
          <Link to="/cdgs/manha/1">
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

export default Sala;
