import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { Fi} from 'react-icons';

import Header from '../../assets/Header';
import Footer from '../../assets/Footer';

import './style.css';

function Contact() {
  const history = useHistory();

  const [ studentMsgContent, setStudentMsgContent ] = useState('');
  const [ studentName, setStudentName ] = useState('');
  const [ studentClass, setStudentClass ] = useState('');
  const [ studentEmail, setStudentEmail ] = useState('');
  // eslint-disable-next-line
  const [ templateID, setTemplateID ] = useState('contato_site');

  const publicIP = require('public-ip');

  async function handleContact(e) {
    e.preventDefault();

    const studentIPv4 = await publicIP.v4()
    const studentIPv6 = await publicIP.v6()
    try {
      const msgContent = { 
        studentMsgContent, 
        studentName, 
        studentEmail,
        studentClass,
        studentIPv4,
        studentIPv6
      };  

      console.log(templateID);

      await window.emailjs.send(
        'gmail', templateID, msgContent
      )
      
      console.log(templateID, msgContent);

      alert('Mensagem enviada com sucesso, vamos respondê-la em breve.')

      history.push('/home');
        
    } catch(err) {
        alert('Não foi possivel enviar a mensagem, verifique se você concluiu o teste "Não sou um robô"')
    }

}

  return (
    <div className="contact-container">
      <Header />
      <div className="content">
        <div className="formContainer">
          <form className="contactForm" onSubmit={handleContact}>
            <p className="title">Entre em contato</p>
            <input 
              value={studentName} 
              onChange={e => setStudentName(e.target.value)}
              type="text" 
              placeholder="Insira seu nome completo" 
              required 
            />
            <select 
              className="input"
              value={studentClass} 
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
                <option value="Tarde - 7° ano C">7° ano A</option>
                <option value="Tarde - 7° ano D">7° ano B</option>
                <option value="Tarde - 8° ano E">8° ano A</option>
                <option value="Tarde - 8° ano F">8° ano B</option>
                <option value="Tarde - 8° ano A">8° ano C</option>
                <option value="Tarde - 9° ano B">9° ano A</option>
                <option value="Tarde - 9° ano C">9° ano B</option>
                <option value="Tarde - 9° ano D">9° ano C</option>
                <option value="Tarde - 9° ano E">9° ano D</option>
              </optgroup>
              <optgroup label="Noite">
                <option value="Noite - 1° ano A">1° ano G</option>
                <option value="Noite - 2° ano B">2° ano G</option>
                <option value="Noite - 2° ano C">2° ano H</option>
                <option value="Noite - 3° ano D">3° ano E</option>
                <option value="Noite - 3° ano E">3° ano F</option>
              </optgroup>
            </select>
            <input 
              value={studentEmail} 
              onChange={e => setStudentEmail(e.target.value)}
              type="email" 
              placeholder="Insira seu email" 
              required 
            />
            <textarea 
              value={studentMsgContent} 
              onChange={e => setStudentMsgContent(e.target.value)}
              type="email" 
              placeholder="Insira aqui o conteúdo da sua mensagem" 
              required 
            />
            <div className="align-center">
              <div className="g-recaptcha" data-sitekey="6LcpDwAVAAAAAGn7rFImPdXFA39HDZ5KlCKgxc9S"></div>
            </div>
            <button type="submit" className="button"> Enviar </button>
            <a className="altEmailContact" href="mailto:ermanomarchetti.radio@gmail.com?Subject=Dúvida%20site&body=Olá,%20boa%20tarde,%20meu%20nome%20é%20___%20e%20eu%20sou%20do%20_º%20ano%20_.%20Minha%20dúvida%20é:">
              <p className="text align-center">Ou clique aqui para enviar um e-mail</p>
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;