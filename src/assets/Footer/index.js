import React from 'react';

// import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';
import { FaYoutubeSquare, FaInstagramSquare, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';
import { Tooltip } from '@material-ui/core'
// import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <a className="button footer-text" href="/help/classroom/1">Meu código não funciona /<br /> Como acessar o Google Classroom</a>

        <div className="socialMedia">
          {/* <Tooltip title="Facebook" arrow={true} placement="top"> */}
            <a title="Facebook" className="hover" rel="noopener noreferrer" href="https://www.facebook.com/radiomarchetti" target="_blank"><FaFacebookSquare className="icons"/></a>
          {/* </Tooltip> */}
            <a title="Instagram" className="hover" rel="noopener noreferrer" href="https://www.instagram.com/radiomarchetti" target="_blank"><FaInstagramSquare className="icons"/></a>
            <a title="Youtube" className="hover" rel="noopener noreferrer" href="https://www.youtube.com/user/RadioMarchetti" target="_blank"><FaYoutubeSquare className="icons"/></a>
            <a title="Twitter" className="hover" rel="noopener noreferrer" href="https://twitter.com/marchettiradio" target="_blank"><FaTwitterSquare className="icons"/></a>
        </div>

        {/* <a href="mailto:ermanomarchetti.radio@gmail.com?Subject=Dúvida%20site&body=Olá,%20boa%20tarde,%20meu%20nome%20é%20___%20e%20eu%20sou%20do%20_º%20ano%20_.%20Minha%20dúvida%20é:">
          <p className="text footer-text align-center hover">Clique aqui para nos enviar um e-mail</p>
        </a> */}

        <a href="/contact">
          <p className="text footer-text align-center">Clique aqui para enviar uma mensagem</p>
        </a>

        <p className="text footer-text align-center copyright">Copyright &copy; 2020 Rádio Marchetti</p>
      </footer>
  )
}

export default Footer;