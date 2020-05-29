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
        <p className="title">Códigos 3°ano A</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>75cqek6</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>aebyofh</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>yrqmsbu</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>22rrofs</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>d3bsvg7</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>nhu2fod</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>mxdrta7</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>jolmjzx</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>blfzsdt</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>nhu2fod</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>rdk6toi</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>t2nypgv</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>ymijvuz</p>
          </li>
          <Link to="/home">
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
