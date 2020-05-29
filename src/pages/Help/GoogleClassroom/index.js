import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../assets/Header';
import Footer from '../../../assets/Footer';

import './style.css';

function HelpGC() {
  return (
    <div className="help-classroom-container">
      <Header />
        <div className="content" >
          <p className="title">Ajuda - Google Classroom</p>

          <form>
            <section className="grid">
              <input 
                placeholder="RA"
                size=""
              />
              
              <input 
                id="digito-ra"
                placeholder="Dígito"
                size=""
              />

            </section>
            

          </form>

          <p className="text">Há também como obter o RA através do link https://sed.educacao.sp.gov.br/NCA/CadastroAluno/ConsultaRAAluno</p>
          <p className="text">E recuperar a senha através de https://sed.educacao.sp.gov.br/esqueci-a-senha caso necessário.</p>
          <p className="text">Entrando no site, é necessário encontar o e-mail institucional do Google provido no site, como visto a seguir:</p>
          <br />
          <p></p>
        </div>
      <Footer />
    </div>
  )
}

export default HelpGC;