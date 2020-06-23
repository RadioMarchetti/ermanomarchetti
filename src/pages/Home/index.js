import React from 'react';
// import { CollegeOrUniversity, Organization } from 'schema-dts'
// import { helmetJsonLdProp } from 'react-schemaorg'
// import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import { FiHash, FiHelpCircle, FiCalendar } from 'react-icons/fi';
// import { Graduation } from '../../assets/images/svg/Icons'

import Header from '../../assets/Header';
import Footer from '../../assets/Footer';

function Home() {
  document.title = "Ermano Marchetti";
  return (
    <div className="home-container vertical-align">
      {/* <Helmet script={[
        helmetJsonLdProp<Organization> ({
          "@context": "https://schema.org",
          "@type": "HighSchool",
          "name": "Ermano Marchetti",
          "alternateName": "Escola Estadual Ermano Marchetti",
          "email": "e000267a@educacao.sp.gov.br",
          "url": "https://ermanomarchetti.herokuapp.com/",
          "logo": "https://ermanomarchetti.herokuapp.com/emfull128.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Pedro Marigliani, 192",
            "addressLocality": "São Paulo",
            "postalCode": "05141-010",
            "addressCountry": "BR",
          },
          "sameAs": [
            "https://www.facebook.com/radiomarchetti",
            "https://www.instagram.com/radiomarchetti",
            "https://twitter.com/marchettiradio",
            "https://www.youtube.com/user/RadioMarchetti"
          ]
        })
      ]} /> */}
      <Header />
      <div className="content">
        <div className="home">
          {/* <Graduation /> */}
        </div>
        <ul className="default">
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
