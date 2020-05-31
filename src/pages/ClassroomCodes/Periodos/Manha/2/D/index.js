import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../../../assets/Header';
import Footer from '../../../../../../assets/Footer';

function Sala() {
  document.title = "Códigos Manhã - 2° ano D";
  return (
    <div className="cdgs-container">
      <Header />
      <div className="content">
        <p className="title">Códigos 2°ano D</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>rfnpdy4</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>lf6Kaoi</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>w5fxwu4</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>ib2rykh</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>itz6njy</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>scfvlqg</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>bbu7qft</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>hin7ysf</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>f5ocipm</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>glwbco5</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>betp5ee</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>7rf6bwa</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>bit3k3s</p>
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
