import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';

import { DialogTitle, DialogContent, CircularProgress, Dialog, Button } from '@material-ui/core';
// import { TextField } from '@material-ui/core';

import { FaDiscord, FaFacebookMessenger } from 'react-icons/fa';

import { FiMessageCircle, FiMail } from 'react-icons/fi';

import Header from '../../assets/Header';
import Footer from '../../assets/Footer';

import './style.css';

function Contact() {
  document.title = "Contato - Ermano Marchetti";

  const history = useHistory();

  const alert = useAlert();

  const [ studentMsgContent, setStudentMsgContent ] = useState('');
  const [ studentName, setStudentName ] = useState('');
  const [ studentClass, setStudentClass ] = useState('');
  const [ studentEmail, setStudentEmail ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ contactOptions, setContactOptions ] = useState(true);
  // eslint-disable-next-line
  const [ templateID, setTemplateID ] = useState('contato_site');

  async function handleContact(e) {
    e.preventDefault();

    try {
      setLoading(true)
      var responseButton = `
      <a 
        style="
          padding: 0.75rem 0;
          width: 100%;
          background: #3b444b;
          border: 0;
          border-radius: 8px;
          color: #ffffff;
          font-weight: bold;
          display: inline-block;
          text-align: center;
          text-decoration: none;
          line-height: 100%;
        "
        href="ermanomarchetti.herokuapp.com/admin/response/fj1lxshgpt/${studentEmail}/${studentName.replace(/ /g, "§")}/${studentMsgContent.replace(/ /g, "§")}" 
      >
        Responder
      </a>
      `

      const msgContent = { 
        studentMsgContent, 
        studentName, 
        studentEmail,
        studentClass,
        responseButton
      };  

      await window.emailjs.send(
        'gmail', templateID, msgContent
      )

      setLoading(false)

      alert.success('Mensagem enviada com sucesso!')
      alert.info('Responderemos sua mensagem em breve')

      history.push('/home');
    } catch(err) {
      setLoading(false)

      alert.error('Não foi possivel enviar a mensagem, verifique se você concluiu o teste "Não sou um robô"')
    }

  }

  return (
    <div className="contact-container">
      <Header />
      <Dialog open={contactOptions} fullScreen={false} className="contact-opt" >
        <DialogTitle>
          <p className="align-center">
            <span>Escolha como deseja entrar em contato</span>
          </p>
        </DialogTitle>
        <DialogContent>
          <Button
            aria-label="Discord"
            onMouseDown={(e) => {e.preventDefault()}}
            variant="outlined"
            className="contact-opt-button align-center" 
          >
            <a rel="noopener noreferrer" target="_blank" href="https://invite.gg/marchetti">
              <FaDiscord className="contact-opt-icon" />
              <p className="contact-opt-text">Entre no nosso servidor do Discord</p>
            </a>
          </Button>
          <Button
            aria-label="Messenger"
            onMouseDown={(e) => {e.preventDefault()}}
            variant="outlined"
            onClick={() => {}}
            className="contact-opt-button align-center" 
          >
            <a rel="noopener noreferrer" target="_blank" href="https://m.me/radiomarchetti?ref=contatosite">
              <FaFacebookMessenger className="contact-opt-icon" />
              <p className="contact-opt-text">Converse com a gente pelo Messenger</p>
            </a>
          </Button>
          <Button
            aria-label="E-mail"
            onMouseDown={(e) => {e.preventDefault()}}
            variant="outlined"
            className="contact-opt-button align-center" 
          >
            <a rel="noopener noreferrer" target="_blank" href="mailto:ermanomarchetti.radio@gmail.com?Subject=Dúvida%20site&body=Olá,%20boa%20tarde,%20meu%20nome%20é%20___%20e%20eu%20sou%20do%20_º%20ano%20_.%20Minha%20dúvida%20é:">
              <FiMail className="contact-opt-icon" />
              <p className="contact-opt-text">Mande um e-mail</p>
            </a>
          </Button>
          <Button
            aria-label="Site"
            onMouseDown={(e) => {e.preventDefault()}}
            onClick={() => {setContactOptions(false)}}
            variant="outlined"
            className="contact-opt-button align-center" 
          >
            <FiMessageCircle className="contact-opt-icon" />
            <p className="contact-opt-text">Mande mensagem por aqui</p>
          </Button>
        </DialogContent>
      </Dialog>
      <div className="content">
        <div className="formContainer">
          <form className="contactForm" onSubmit={handleContact}>
            <h2 className="title">Entre em contato</h2>
            <input 
              value={studentName} 
              onChange={e => setStudentName(e.target.value)}
              type="text" 
              name="name"
              placeholder="Insira seu nome completo" 
              required 
              autoComplete="name"
            />
            <select 
              className="input"
              value={studentClass} 
              type="text" 
              name="student-class"
              onChange={e => setStudentClass(e.target.value)}
              required 
            >
              <option value="" disabled selected>Escolha sua série</option>
              <optgroup label="Manhã">
                <option value="Manhã - 1° ano A">1° ano A</option>
                <option value="Manhã - 1° ano B">1° ano B</option>
                <option value="Manhã - 1° ano C">1° ano C</option>
                <option value="Manhã - 1° ano D">1° ano D</option>
                <option value="Manhã - 1° ano E">1° ano E</option>
                <option value="Manhã - 1° ano F">1° ano F</option>
                <option value="Manhã - 2° ano A">2° ano A</option>
                <option value="Manhã - 2° ano B">2° ano B</option>
                <option value="Manhã - 2° ano C">2° ano C</option>
                <option value="Manhã - 2° ano D">2° ano D</option>
                <option value="Manhã - 2° ano E">2° ano E</option>
                <option value="Manhã - 2° ano F">2° ano F</option>
                <option value="Manhã - 3° ano A">3° ano A</option>
                <option value="Manhã - 3° ano B">3° ano B</option>
                <option value="Manhã - 3° ano C">3° ano C</option>
                <option value="Manhã - 3° ano D">3° ano D</option>
              </optgroup>
              <optgroup label="Tarde">
                <option value="Tarde - 6° ano A">6° ano A</option>
                <option value="Tarde - 6° ano B">6° ano B</option>
                <option value="Tarde - 7° ano A">7° ano A</option>
                <option value="Tarde - 7° ano B">7° ano B</option>
                <option value="Tarde - 8° ano A">8° ano A</option>
                <option value="Tarde - 8° ano B">8° ano B</option>
                <option value="Tarde - 8° ano C">8° ano C</option>
                <option value="Tarde - 9° ano A">9° ano A</option>
                <option value="Tarde - 9° ano B">9° ano B</option>
                <option value="Tarde - 9° ano C">9° ano C</option>
                <option value="Tarde - 9° ano D">9° ano D</option>
              </optgroup>
              <optgroup label="Noite">
                <option value="Noite - 1° ano G">1° ano G</option>
                <option value="Noite - 2° ano G">2° ano G</option>
                <option value="Noite - 2° ano H">2° ano H</option>
                <option value="Noite - 3° ano E">3° ano E</option>
                <option value="Noite - 3° ano F">3° ano F</option>
              </optgroup>
            </select>
            <input 
              value={studentEmail} 
              onChange={e => setStudentEmail(e.target.value)}
              type="email" 
              placeholder="Insira seu email" 
              name="email"
              required 
              autoComplete="email"
            />
            <textarea 
              value={studentMsgContent} 
              onChange={e => setStudentMsgContent(e.target.value)}
              type="email" 
              placeholder="Insira aqui sua dúvida, sugestão ou crítica" 
              required 
            />
            <div className="align-center">
              <div className="g-recaptcha" data-sitekey="6LcpDwAVAAAAAGn7rFImPdXFA39HDZ5KlCKgxc9S"></div>
            </div>
            <button type="submit" className="button"> Enviar </button>
            <p className="align-center margintop75rem" onClick={() => {setContactOptions(true)}} >
              <span className="text align-center">Ou clique aqui para mais opções de contato</span>
            </p>
          </form>
          <Dialog open={loading}>
            <DialogTitle>
              Carregando...
            </DialogTitle>
            <DialogContent>
              <div className="align-center">
                <CircularProgress />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {/* <div class="fb-customerchat"
        attribution="setup_tool"
        page_id="201834726606981"
        theme_color="#447cce"
        logged_in_greeting="Oi, como podemos te ajudar?"
        logged_out_greeting="Oi, como podemos te ajudar?"
      >
      </div> */}
      <Footer />
    </div>
  )
}

export default Contact;