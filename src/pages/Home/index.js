// import React, { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
// import { FiHash, FiHelpCircle, FiCalendar, FiAlertTriangle } from 'react-icons/fi';
import { FiHash, FiHelpCircle, FiCalendar } from 'react-icons/fi';
// import updateWarning from '../../assets/warnings'

// import api from '../../services/api'

import Header from '../../assets/Header';
import Footer from '../../assets/Footer';

function Home() {
  document.title = "Escola Estadual Ermano Marchetti";
  // document.querySelector('meta[name=description]').setAttribute('content', 'Site oficial da Escola Estadual Ermano Marchetti, desenvolvido pelos alunos para os alunos.')

  // const [ warnings, setWarnings ] = useState("")
  // const [phrase, setPhrase] = useState("")
  // const [phraseList, setPhraseList] = useState([])
  // const [image, setImage] = useState([])
  // const [imageList, setImageList] = useState([])
  // const [rerendderImg, setRerendderImg] = useState("")

  // useEffect(() => {
  //   async function fetchData() {
  //     const warnMsg = await updateWarning()
  //     // const phraseMsg = await api.get('/random/phrase')
  //     const getPhraseList = await api.get('/phrase')
  //     const getImageList = await api.get('/images')
  //     setWarnings(warnMsg)
  //     // setPhrase(phraseMsg.data.phrase)
  //     setPhraseList(getPhraseList.data)
  //     setImageList(getImageList.data)
  //     setRerendderImg(String(Number(rerendderImg) + 1))
  //   }
  //   fetchData()
  // }, [])

  // setTimeout(() => {
  //   setPhrase(phraseList[0])
  //   setImage(imageList[0])
  //   alert(`${phrase}, ${image}`)
  // }, 3000);

  return (
    <div className="home-container vertical-align">
      
      <Header />
      <div className="content">
        {/* <div className="home">

        </div> */}
        <ul className="default">
          {/*
            warnings.length >= 1 ?
              <li 
                // style={{backgroundColor: '#e32636'}}
              >
                <img src={`http://179.153.102.132:3333${image}`} />
                <strong className="margintop75rem">{phrase}</strong>
              </li>
            : null
          */}
          <Link to="/cdgs">
            <li className="hover item-flex">
              <strong>Códigos - Google Classroom</strong>
              <FiHash className="arrow"/>
            </li>
          </Link>
          <Link to="/help/classroom/1">
            <li className="hover item-flex">
              <strong>Ajuda - Como acessar o Google Classroom</strong>
              <FiHelpCircle className="arrow"/>
            </li>
          </Link>
          <Link to="/cronograma">
            <li className="hover item-flex">
              <strong>Cronograma de entrega de atividades</strong>
              <FiCalendar className="arrow"/>
            </li>
          </Link>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
