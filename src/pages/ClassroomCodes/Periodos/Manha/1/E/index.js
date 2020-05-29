import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../../../assets/Header';
import Footer from '../../../../../../assets/Footer';

function Sala() {
  return (
    <div className="cdgs-container">
      <Header />
      <div className="content">
        <p className="title">Códigos 1°ano E</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>aojatao</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>syqKvcu</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>cier6kz</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>paxa4ma</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>3q4mjub</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>EM BREVE</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>c5jeg3q</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>6c3r7kv</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>dzmosic</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>wxsxmb6</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>ipcv4qc</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>47vvg3g</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>covtnfn</p>
          </li>
          <li className="item-flex">
            <strong>Projeto de vida</strong>
            <p>aqzugn6</p>
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
