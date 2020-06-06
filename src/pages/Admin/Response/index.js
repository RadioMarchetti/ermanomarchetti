import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAlert } from 'react-alert';

// import { Fi} from 'react-icons';

import Header from '../../../assets/Header';
import Footer from '../../../assets/Footer';

import './style.css';

function Response() {
  document.title = "Resposta - Administração";

  const history = useHistory();

  const alert = useAlert();

  let { pswd, mail, name, msg } = useParams();
  const [ responseMsg, setResponseMsg ] = useState('');
  // eslint-disable-next-line
  const [ templateID, setTemplateID ] = useState('resposta_contato_site');
  const [ loaded, setLoaded ] = useState(true);

  if (pswd !== 'fj1lxshgpt' && loaded) {
    alert.error('Você não tem permissão para acessar essa página')
    history.push('/home');
    setLoaded(false)
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

      alert.success('Resposta enviada com sucesso. Obrigado')

      history.push('/home');
        
    } catch(err) {
        alert.error('Não foi possivel enviar a mensagem, verifique se você concluiu o teste "Não sou um robô"')
    }

}

  return (
    <div className="response-container">
      <Header />
      <div className="content">
        <div className="formContainer">
          <form className="responseForm" onSubmit={handleResponse}>
            <p className="title">Responder e-mail</p>

            <p className="response">
              {name.replace(/§/g, " ")}
            </p>

            <p className="response">
              {mail}
            </p>    

            <p className="response">
              {msg.replace(/§/g, " ")}
            </p>
            
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