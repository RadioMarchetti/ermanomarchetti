import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../../assets/Header';
import Footer from '../../../../assets/Footer';

// import '../../../css/bootstrap.css'

function HelpGC() {
  document.title = "Códigos - Ajuda";

  return (
    <div className="help-classroom-container vertical-align">
      <Header />
        <div className="content" >
          <section className="help-card">
          <p>&emsp;Pronto, agora você tem seu e-mail, ele será o e-mail utilizado para acessar sua conta no Google Classroom.</p>
          <a rel="noopener noreferrer" target="_blank" href="https://sed.educacao.sp.gov.br/esqueci-a-senha"><p>&emsp;É necessário uma senha também para acessar o Classroom, se você nunca acessou a Secretaria Escolar Digital, sua senha será sua data de nascimento (Ex.: 18042020), caso não tenha certeza ou tenha esquecido a senha, <span className="hover">clique aqui</span> para recuperá-la. (se necessário, clique em <strong>Esqueci a senha</strong>).</p></a>

            <section className="grid">
              <Link to="/help/classroom/2">
                <button className="button btn-red">
                  Voltar
                </button>
              </Link>
              <Link to="/help/classroom/4">
                <button className="button btn-green">
                  Próximo
                </button>
              </Link>
            </section>
          </section>






          {/*
          <p>&emsp;Agora que temos o e-mail e a senha, vamos acessar / instalar o Classroom. Para fazer isso, é necessário escolher o dispositivo que será utilizado para acessar as atividades, escolha o dispositivo que utilizará na lista a seguir.</p>

          <a rel="noopener noreferrer" target="_blank" href="https://classroom.google.com/"><p className="text hover align-center">PC/Mac (computador)</p></a>

          <a rel="noopener noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.google.android.apps.classroom&hl=pt_BR"><p className="text hover align-center">Android (celular)</p></a>

          <a rel="noopener noreferrer" target="_blank" href="https://apps.apple.com/br/app/google-classroom/id924620788"><p className="text hover align-center">iOS (iPhone)</p></a>

          <p>&emsp;<strong>CELULAR</strong> Agora com o aplicativo instalado, devemos abri-lo e clicar em <strong>Primeiros Passos</strong>, será aberto um menu para que você escolha sua conta, clique em <strong>Adicionar conta</strong> uma tela do Google aparecerá, cole seu e-mail no campo <strong>Email ou telefone</strong>, em seguida, clique em <strong>Próxima</strong>, se seu nome aparecer, o e-mail está certo, caso contrário, volte ao passo em que buscamos o RA e geramos o e-mail. Digite sua senha e entre, o aplicativo deve abrir exibindo algumas salas, confira se estão todas da lista aí, se não estiverem, adicione-as clicando em <strong><FiPlusCircle /></strong> e colando ou digitando o código.</p>

          <p>&emsp;<strong>COMPUTADOR:</strong> Certo, agora vamos configurar sua conta no Google Classroom. Primeiro, cliqe em <strong className="flex"><FiMenu />&nbsp;Menu</strong> no site ou aplicativo e em seguida, no canto superior esquerdo acima de turmas, onde normalmente teremos um nome com um e-mail em baixo. Na lista de contas, clique em <strong className="flex"><FiUserPlus />&nbsp;Adicionar conta</strong> e utilize seu e-mail, se seu nome aparecer, o e-mail está certo, caso contrário, volte ao passo em que buscamos o RA e geramos o e-mail, insira sua senha também e entre. O site deve abrir exibindo algumas salas, confira se estão todas da lista aí, se não estiverem, adicione-as clicando em <strong><FiPlusCircle /></strong> e colando ou digitando o código.</p>

          <p>&emsp;Pronto, se tudo deu certo, você deve pode acessar seu Google Classroom, neste caso, clique no botão abaixo, adicione os códigos e boas aulas. Se ainda não consegue acessar ou ver, tente novamente, se não funcionar, nos envie uma mensagem pelo Messenger, Instagram ou Twitter clicando em um dos ícones no fim desta página.</p>

          <Link to="/cdgs"><p className="button">Códigos das salas</p></Link> */}
          
        </div>
      <Footer />
    </div>
  )
}

export default HelpGC;