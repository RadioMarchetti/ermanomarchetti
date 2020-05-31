import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../../../assets/Header';
import Footer from '../../../../../../assets/Footer';

function Sala() {
  document.title = "Códigos Manhã - 1° ano F";
  return (
    <div className="cdgs-container">
      <Header />
      <div className="content">
        <p className="title">Códigos 1°ano F</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>i32h7yf</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>aamohyk</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>od5zve3</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>dxit6j4</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>tp2pxrd</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>7fakcso</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>d433upe</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>rx2lras</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>3eq4sks</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>94yltxt</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>ymnr3wa</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>je6e2kh</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>thsyvt3</p>
          </li>
          <li className="item-flex">
            <strong>Projeto de vida</strong>
            <p>qbd32vu</p>
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
