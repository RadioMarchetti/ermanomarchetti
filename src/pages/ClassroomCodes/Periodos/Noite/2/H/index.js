import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../../../assets/Header';
import Footer from '../../../../../../assets/Footer';

function Sala() {
  document.title = "Códigos Noite - 2° ano H";
  return (
    <div className="cdgs-container">
      <Header />
      <div className="content">
        <p className="title">Códigos 2°ano H</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>i7xvyzf</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>xzgnxiu</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>w5ipcud</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>6th6qyr</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>6rffz5o</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>qtumrhf</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>lxatnb5</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>i5njtqu</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>zcccy37</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>4bnl7qr</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>3xl5ppl</p>
          </li>
          <Link to="/cdgs/noite/2">
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
