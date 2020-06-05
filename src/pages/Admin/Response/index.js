import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import { Fi} from 'react-icons';

import Header from '../../../assets/Header';
import Footer from '../../../assets/Footer';

import './style.css';

function Response() {
  document.title = "Resposta - Ermano Marchetti";

  const history = useHistory();

  let { pswd, mail, name, msg } = useParams();
  const [ responseMsg, setResponseMsg ] = useState('');
  // eslint-disable-next-line
  const [ templateID, setTemplateID ] = useState('resposta_contato_site');

  if (pswd !== 'fj1lxshgpt') {
    alert('Você não tem permissão para acessar essa página.');
    history.push('/home');
    return (
      <div>ACESSO NÃO AUTORIZADO</div>
    );
  }

  async function handleResponse(e) {
    e.preventDefault();

    try {
      const responseContent = { 
        studentMsg: msg.replace(/§/g, " "),
        studentEmail: mail,
        studentName: name.replace(/§/g, " "),
        responseMsg
      };  

      console.log(templateID);

      await window.emailjs.send(
        'gmail', templateID, responseContent
      )
      
      console.log(templateID, responseContent);

      alert('Resposta enviada com sucesso. Obrigado')

      history.push('/home');
        
    } catch(err) {
        alert('Não foi possivel enviar a mensagem, verifique se você concluiu o teste "Não sou um robô"')
    }

}

  return (
    <div className="response-container">
      <Header />
      <div className="content">
        <div className="formContainer">
          <form className="responseForm" onSubmit={handleResponse}>
            <p className="title">Responder e-mail</p>
            {/* <input 
              value={studentName} 
              onChange={e => setStudentName(e.target.value)}
              type="text" 
              placeholder="Insira seu nome completo" 
              required 
            /> */}
            <p className="response">
              {name.replace(/§/g, " ")}
            </p>

            <p className="response">
              {mail}
            </p>    

            <textarea className="response" readOnly>
              {msg.replace(/§/g, " ")}
            </textarea>
            
            <textarea 
              value={responseMsg} 
              onChange={e => setResponseMsg(e.target.value)}
              type="email" 
              placeholder="Insira aqui sua resposta" 
              required 
            />
            <div className="align-center">
              <div className="g-recaptcha" data-sitekey="6LcpDwAVAAAAAGn7rFImPdXFA39HDZ5KlCKgxc9S"></div>
            </div>
            <button type="submit" className="button"> Enviar </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Response;