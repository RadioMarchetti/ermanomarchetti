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
        <p className="title">Códigos 3°ano E</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>jwvpvhf</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>upgod6v</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>67qaow5</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>7bgcdpu</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>muxgjq5</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>mpmzysj</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>p7c2dby</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>o27qdvc</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>3kta22a</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>4ew5rt6</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>einecj3</p>
          </li>
          <Link to="/cdgs/noite/3">
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
