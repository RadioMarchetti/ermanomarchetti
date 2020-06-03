import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../../../assets/Header';
import Footer from '../../../../../../assets/Footer';

function Sala() {
  document.title = "Códigos Manhã - 2° ano A";
  return (
    <div className="cdgs-container">
      <Header />
      <div className="content">
        <p className="title">Códigos 2°ano A</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>jmht2xe</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>eos3zw2</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>gnkcwmy</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>nzmunkl</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>4g2zpkk</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>oz3ijuw</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>m2vxi7e</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>6flsqk7</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>e5yk6wv</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>72usu7j</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>17qbw5b</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>x4z3qus</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>5mgw52d</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia e informática</strong>
            <p>2zznucx</p>
          </li>
          <li className="item-flex">
            <strong>Turismo</strong>
            <p>s3epndo</p>
          </li>
          <li className="item-flex">
            <strong>Mercado de Trabalho</strong>
            <p>3p6s4l5</p>
          </li>
          <li className="item-flex">
            <strong>Games</strong>
            <p>bxlizq3</p>
          </li>
          <li className="item-flex">
            <strong>Artes Visuais</strong>
            <p>mesuba6</p>
          </li>
          <li className="item-flex">
            <strong>Quatro Artes</strong>
            <p>3p6s4l5</p>
          </li>
          <Link to="/cdgs/manha/2">
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
