import React from 'react';
import { Link } from 'react-router-dom';

import { FiPlusCircle } from 'react-icons/fi'

import Header from '../../../../../assets/Header';
import Footer from '../../../../../assets/Footer';

// import '../../../css/bootstrap.css'

function HelpGC() {
  document.title = "Códigos - Ajuda";

  return (
    <div className="help-classroom-container vertical-align">
      <Header />
        <div className="content" >
          <section className="help-card">
            <a rel="noopener noreferrer" target="_blank" href="https://apps.apple.com/br/app/google-classroom/id924620788"><p className="margintop75rem hover align-center">Clique aqui para baixar o aplicativo para iPhone</p></a>
            <p className="margintop75rem">&emsp;Agora com o aplicativo instalado, devemos abri-lo e clicar em <strong>Primeiros Passos</strong>, será aberto um menu para que você escolha sua conta, clique em <strong>Adicionar conta</strong>, uma tela do Google aparecerá, cole seu e-mail no campo <strong>Email ou telefone</strong>, e em seguida, clique em <strong>Próxima</strong>, se seu nome aparecer, o e-mail está certo, caso contrário, volte ao passo em que buscamos o RA e geramos o e-mail. Digite sua senha e entre, o aplicativo deve abrir exibindo algumas salas, confira se estão todas da lista aí, se não estiverem, adicione-as clicando em <strong><FiPlusCircle /></strong> e colando ou digitando o código.</p>

            <section className="grid">
              <Link to="/help/classroom/4">
                <button className="button btn-red">
                  Voltar
                </button>
              </Link>
              <Link to="/help/classroom/6">
                <button className="button btn-green">
                  Próximo
                </button>
              </Link>
            </section>
          </section>






          {/* 


          





          <p>&emsp;<strong>COMPUTADOR:</strong> Certo, agora vamos configurar sua conta no Google Classroom. Primeiro, cliqe em <strong className="flex"><FiMenu />&nbsp;Menu</strong> no site ou aplicativo e em seguida, no canto superior esquerdo acima de turmas, onde normalmente teremos um nome com um e-mail em baixo. Na lista de contas, clique em <strong className="flex"><FiUserPlus />&nbsp;Adicionar conta</strong> e utilize seu e-mail, se seu nome aparecer, o e-mail está certo, caso contrário, volte ao passo em que buscamos o RA e geramos o e-mail, insira sua senha também e entre. O site deve abrir exibindo algumas salas, confira se estão todas da lista aí, se não estiverem, adicione-as clicando em <strong><FiPlusCircle /></strong> e colando ou digitando o código.</p>

          <p>&emsp;Pronto, se tudo deu certo, você deve pode acessar seu Google Classroom, neste caso, clique no botão abaixo, adicione os códigos e boas aulas. Se ainda não consegue acessar ou ver, tente novamente, se não funcionar, nos envie uma mensagem pelo Messenger, Instagram ou Twitter clicando em um dos ícones no fim desta página.</p>

          <Link to="/cdgs"><p className="button">Códigos das salas</p></Link> */}
          
        </div>
      <Footer />
    </div>
  )
}

export default HelpGC;