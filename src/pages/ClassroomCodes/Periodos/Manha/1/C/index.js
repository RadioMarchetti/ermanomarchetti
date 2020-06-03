import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../../../assets/Header';
import Footer from '../../../../../../assets/Footer';

function Sala() {
  document.title = "Códigos Manhã - 1° ano C";
  return (
    <div className="cdgs-container">
      <Header />
      <div className="content">
        <p className="title">Códigos 1°ano C</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>6uvv2nf</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>ppr4ghx</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>hc3zacc</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>ocwbt75</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>r32srs3</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>tyxgdl7</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>ryf6ofn</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>mpw7j3k</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>nvu3w7w</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>bfz23aq</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>vubjx3q</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>egfebii</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>43rhfik</p>
          </li>
          <li className="item-flex">
            <strong>Projeto de vida</strong>
            <p>xihzc7l</p>
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
