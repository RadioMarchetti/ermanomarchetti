import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAlert } from 'react-alert';

import { DialogTitle, DialogContent, CircularProgress, Dialog, Button, DialogActions } from '@material-ui/core';
// import { TextField } from '@material-ui/core';

import { FaDiscord } from 'react-icons/fa';

import discordDefaultAvatar from '../../assets/images/discord-default-avatar.png'

import Header from '../../assets/Header';
import Footer from '../../assets/Footer';

import api from '../../services/api'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function JoinDiscord() {
  document.title = "Discord - Ermano Marchetti";

  const history = useHistory();

  const alert = useAlert();

  const query = useQuery()

  const [ code, setCode ] = useState(query.get("code"));

  const [ studentName, setStudentName ] = useState('');
  const [ studentNumber, setStudentNumber ] = useState('')
  const [ studentEmail, setStudentEmail ] = useState('');
  const [ studentGrade, setStudentGrade ] = useState('');
  const [ username, setUsername ] = useState('')
  const [ discrim, setDiscrim ] = useState('')
  const [ avatar, setAvatar ] = useState('')
  const [ rules, setRules ] = useState(false)
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if (query.get("code") === "test") {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setUsername("rmtest")
        setDiscrim("#5675")
        setAvatar("")
      }, 1000)

      return
    } else if (query.get("code") !== null) {
      setLoading(true)
      alert.show(`${localStorage.getItem("nickname")}, ${localStorage.getItem("grade")}, ${localStorage.getItem("number")}, ${localStorage.getItem("nickname")}`)
      if (localStorage.getItem("nickname") !== null && localStorage.getItem("grade") !== null && localStorage.getItem("email") !== null) {
        sendData();
      } else {
        setLoading(false)
        query.delete("code")
        alert.error("Algo deu errado, por favor tente novamente. (E001)")
      }
    }
  }, [])

  useEffect(() => {
    var colorRefNum = discrim[4]
    if (colorRefNum === "0" || colorRefNum === "5") {
      alert.show("0 or 5")
      document.documentElement.style.setProperty("--discord-placeholder", "#7289da");
    } else if (colorRefNum === "1" || colorRefNum === "6") {
      alert.show("1 or 6")
      document.documentElement.style.setProperty("--discord-placeholder", "#747f8d");
    } else if (colorRefNum === "2" || colorRefNum === "7") {
      alert.show("2 or 7")
      document.documentElement.style.setProperty("--discord-placeholder", "#43b581");
    } else if (colorRefNum === "3" || colorRefNum === "8") {
      alert.show("3 or 8")
      document.documentElement.style.setProperty("--discord-placeholder", "#faa61a");
    } else if (colorRefNum === "4" || colorRefNum === "9") {
      alert.show("4 or 9")
      document.documentElement.style.setProperty("--discord-placeholder", "#f04747");
    }

    // #7289da 0, 5
    // #747f8d 1, 6
    // #43b581 2, 7
    // #faa61a 3, 8
    // #f04747 4, 9
  }, [discrim])

  async function handleUserJoin(e) {
    e.preventDefault();


    localStorage.removeItem("nickname")
    localStorage.removeItem("grade")
    localStorage.removeItem("number")
    localStorage.removeItem("email")

    try {
      setLoading(true)
      
      localStorage.setItem("nickname", studentName)
      localStorage.setItem("grade", studentGrade)
      localStorage.setItem("number", studentNumber)
      localStorage.setItem("email", studentEmail)

      
      setLoading(false)
    } catch(err) {
      setLoading(false)
      alert.error("Algo deu errado, por favor tente novamente. (E002)")
    }
    
    if (localStorage.getItem("nickname") !== null) {
      window.location.assign("https://discord.com/api/oauth2/authorize?client_id=700841760179617823&redirect_uri=http%3A%2F%2F179.153.102.132%3A3000%2Fdiscord%2Fjoin&response_type=code&scope=identify%20guilds.join")
    }
  }

  async function sendData() {
    try {
      const data = {
        "nickname": localStorage.getItem("nickname"),
        "grade": localStorage.getItem("grade"),
        "number": localStorage.getItem("number"),
        "email": localStorage.getItem("email"),
        "code": code,
      }

      const response = await api.post("discord/join", data)

      if (response.data.success) {
        setUsername(response.data.username)
        setAvatar(response.data.image)
        setDiscrim(response.data.discriminator)
      
        setLoading(false)
      }

    } catch(err) {
      setLoading(false)
      alert.error(JSON.stringify(err))
      alert.error("Algo deu errado, por favor tente novamente. (E003)")
    }
  }

  if (code !== null) {

    return (
      <div className="vertical-align">
        <Header />
          { username !== "" ? <div className="content">
            <div className="discord-user">
              <div className="avatar">
                <img src={discordDefaultAvatar} className="avatar-placeholder"/>
                <img src={avatar} className="user-avatar"/>
              </div>
              <p className="user-name">{username}<span className="user-discrim">{discrim}</span></p>
              <input value={discrim} onChange={e => setDiscrim(e.target.value)}></input>
            </div>
          </div> : null }
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
        <Footer />
      </div>
    )
  }

  return (
    <div className="discord-container vertical-align">
      <Header />
      <div className="content">
        { code === null ? <div className="formContainer">
            <form className="discordForm" onSubmit={handleUserJoin}>
              <h2 className="title">Cadastre-se</h2>
              <input 
                className="input"
                value={studentName} 
                onChange={e => setStudentName(e.target.value)}
                type="text" 
                name="name"
                placeholder="Insira seu nome completo" 
                required 
                autoComplete="name"
              />
              <input 
                className="input"
                value={studentNumber} 
                onChange={e => setStudentNumber(e.target.value)}
                type="text" 
                name="tel"
                placeholder="Insira seu número de celular"  
                autoComplete="tel"
              />
              <input 
                className="input"
                value={studentEmail} 
                onChange={e => setStudentEmail(e.target.value)}
                type="email" 
                placeholder="Insira seu e-mail" 
                name="email"
                required 
                autoComplete="email"
              />
              <select 
                className="input"
                value={studentGrade} 
                type="text" 
                name="student-class"
                onChange={e => setStudentGrade(e.target.value)}
                required 
              >
                <option value="" disabled selected>Escolha sua série</option>
                <optgroup label="Manhã">
                  <option value="1anoA">1° ano A</option>
                  <option value="1anoB">1° ano B</option>
                  <option value="1anoC">1° ano C</option>
                  <option value="1anoD">1° ano D</option>
                  <option value="1anoE">1° ano E</option>
                  <option value="1anoF">1° ano F</option>
                  <option value="2anoA">2° ano A</option>
                  <option value="2anoB">2° ano B</option>
                  <option value="2anoC">2° ano C</option>
                  <option value="2anoD">2° ano D</option>
                  <option value="2anoE">2° ano E</option>
                  <option value="2anoF">2° ano F</option>
                  <option value="3anoA">3° ano A</option>
                  <option value="3anoB">3° ano B</option>
                  <option value="3anoC">3° ano C</option>
                  <option value="3anoD">3° ano D</option>
                </optgroup>
                <optgroup label="Tarde">
                  <option value="6anoA">6° ano A</option>
                  <option value="6anoB">6° ano B</option>
                  <option value="7anoA">7° ano A</option>
                  <option value="7anoB">7° ano B</option>
                  <option value="8anoA">8° ano A</option>
                  <option value="8anoB">8° ano B</option>
                  <option value="8anoC">8° ano C</option>
                  <option value="9anoA">9° ano A</option>
                  <option value="9anoB">9° ano B</option>
                  <option value="9anoC">9° ano C</option>
                  <option value="9anoD">9° ano D</option>
                </optgroup>
                <optgroup label="Noite">
                  <option value="1anoG">1° ano G</option>
                  <option value="2anoG">2° ano G</option>
                  <option value="2anoH">2° ano H</option>
                  <option value="3anoE">3° ano E</option>
                  <option value="3anoF">3° ano F</option>
                </optgroup>
              </select>
              <button type="submit" className="button">Continuar</button>
              <p className="text align-center">Ao clicar em continuar você aceita e concorda com as nossas <span className="link" onClick={() => {setRules(true)}}>regras do Discord</span>.</p>
            </form>
            <Dialog open={rules} onClose={() => {setRules(false)}}>
              <DialogTitle>
                <p className="align-center">Regras</p>
              </DialogTitle>
              <DialogContent>
                <p>&nbsp;&nbsp;&nbsp;<b>1 - </b>É estritamente proibido desrespeitar qualquer um dos membros dentro ou através do servidor.</p>
                <p>&nbsp;&nbsp;&nbsp;<b>2 - </b>São proibidos nomes e mensagens contendo palavras de baixo calão ou ofensivas.</p>
                <p>&nbsp;&nbsp;&nbsp;<b>3 - </b>Evitar spam no servidor.</p>
                <p>&nbsp;&nbsp;&nbsp;<b>4 - </b>Sempre que precisar de ajuda, você pode chamar a gente utilizando @Suporte ou o canal #me-ajuda.</p>
                <p>&nbsp;&nbsp;&nbsp;<b>5 - </b>Caso haja algo que viole qualquer uma das regras, entre em contato com alguém da equipe.</p>
                <p>&nbsp;&nbsp;&nbsp;<b>6 - </b>A violação de qualquer que seja a regra poderá levar ao banimento temporário ou permanente do usuário e/ou outras medidas cabíveis.</p>
              </DialogContent>
              <DialogActions>
                <Button variant="outlined" onClick={() => {setRules(false)}}>
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        : null }
      </div>
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
      <Footer />
    </div>
  )
}

export default JoinDiscord;