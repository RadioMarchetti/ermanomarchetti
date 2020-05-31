import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../../../assets/Header';
import Footer from '../../../../../../assets/Footer';

function Sala() {
  document.title = "Códigos Manhã - 1° ano D";
  return (
    <div className="cdgs-container">
      <Header />
      <div className="content">
        <p className="title">Códigos 1°ano D</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>sh3di7q</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>qx3cnly</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>3bj4gvz</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>kkpbz7z</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>6oocr2x</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>fvjzsap</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>p555i44</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>ylnch34</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>b3bedhm</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>tasgxd7</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>jlpkap5</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>iu5sf3k</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>5ga54aa</p>
          </li>
          <li className="item-flex">
            <strong>Projeto de vida</strong>
            <p>xfnt72r</p>
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
