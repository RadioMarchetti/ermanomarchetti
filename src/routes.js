import React from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
// import { TransitionGroup, CSSTransition } from "react-transition-group";

// import Header from "./assets/Header"
// import Footer from "./assets/Footer"

import Home from './pages/Home';

import NotFound from './pages/NotFound';

import Contact from './pages/Contact';

import Response from './pages/Admin/Response';

import Tests from './pages/Admin/Tests';

import Articles from './pages/Articles';

import Codes from './pages/ClassroomCodes';

import HelpGC1 from './pages/Help/GoogleClassroom/1'

import HelpGC2 from './pages/Help/GoogleClassroom/2'

import HelpGC3 from './pages/Help/GoogleClassroom/3'

import HelpGC4 from './pages/Help/GoogleClassroom/4'

import HelpGCAndroid from './pages/Help/GoogleClassroom/4/Android'

import HelpGCPC from './pages/Help/GoogleClassroom/4/Pc'

import HelpGCIPhone from './pages/Help/GoogleClassroom/4/IPhone'

import HelpGC6 from './pages/Help/GoogleClassroom/6'

import Schedule from './pages/ClassroomSchedule'

import ScheduleMN from './pages/ClassroomSchedule/ManhaNoite'

import ScheduleT from './pages/ClassroomSchedule/Tarde'

import InfoEscola from './pages/InfoEscola'

import Manha from './pages/ClassroomCodes/Periodos/Manha';
  import PrimeiroManha from './pages/ClassroomCodes/Periodos/Manha/1';
    import PrimeiroAManha from './pages/ClassroomCodes/Periodos/Manha/1/A';
    import PrimeiroBManha from './pages/ClassroomCodes/Periodos/Manha/1/B';
    import PrimeiroCManha from './pages/ClassroomCodes/Periodos/Manha/1/C';
    import PrimeiroDManha from './pages/ClassroomCodes/Periodos/Manha/1/D';
    import PrimeiroEManha from './pages/ClassroomCodes/Periodos/Manha/1/E';
    import PrimeiroFManha from './pages/ClassroomCodes/Periodos/Manha/1/F';
  import SegundoManha from './pages/ClassroomCodes/Periodos/Manha/2';
    import SegundoAManha from './pages/ClassroomCodes/Periodos/Manha/2/A';
    import SegundoBManha from './pages/ClassroomCodes/Periodos/Manha/2/B';
    import SegundoCManha from './pages/ClassroomCodes/Periodos/Manha/2/C';
    import SegundoDManha from './pages/ClassroomCodes/Periodos/Manha/2/D';
    import SegundoEManha from './pages/ClassroomCodes/Periodos/Manha/2/E';
    import SegundoFManha from './pages/ClassroomCodes/Periodos/Manha/2/F';
  import TerceiroManha from './pages/ClassroomCodes/Periodos/Manha/3';
    import TerceiroAManha from './pages/ClassroomCodes/Periodos/Manha/3/A';
    import TerceiroBManha from './pages/ClassroomCodes/Periodos/Manha/3/B';
    import TerceiroCManha from './pages/ClassroomCodes/Periodos/Manha/3/C';
    import TerceiroDManha from './pages/ClassroomCodes/Periodos/Manha/3/D';


import Tarde from './pages/ClassroomCodes/Periodos/Tarde';
  import SextoTarde from './pages/ClassroomCodes/Periodos/Tarde/6';
    import SextoATarde from './pages/ClassroomCodes/Periodos/Tarde/6/A';
    import SextoBTarde from './pages/ClassroomCodes/Periodos/Tarde/6/B';
  import SetimoTarde from './pages/ClassroomCodes/Periodos/Tarde/7';
    import SetimoATarde from './pages/ClassroomCodes/Periodos/Tarde/7/A';
    import SetimoBTarde from './pages/ClassroomCodes/Periodos/Tarde/7/B';
  import OitavoTarde from './pages/ClassroomCodes/Periodos/Tarde/8';
    import OitavoATarde from './pages/ClassroomCodes/Periodos/Tarde/8/A';
    import OitavoBTarde from './pages/ClassroomCodes/Periodos/Tarde/8/B';
    import OitavoCTarde from './pages/ClassroomCodes/Periodos/Tarde/8/C';
  import NonoTarde from './pages/ClassroomCodes/Periodos/Tarde/9';
    import NonoATarde from './pages/ClassroomCodes/Periodos/Tarde/9/A';
    import NonoBTarde from './pages/ClassroomCodes/Periodos/Tarde/9/B';
    import NonoCTarde from './pages/ClassroomCodes/Periodos/Tarde/9/C';
    import NonoDTarde from './pages/ClassroomCodes/Periodos/Tarde/9/D';

import Noite from './pages/ClassroomCodes/Periodos/Noite';
  import PrimeiroNoite from './pages/ClassroomCodes/Periodos/Noite/1/G';
  import SegundoNoite from './pages/ClassroomCodes/Periodos/Noite/2';
    import SegundoGNoite from './pages/ClassroomCodes/Periodos/Noite/2/G';
    import SegundoHNoite from './pages/ClassroomCodes/Periodos/Noite/2/H';
  import TerceiroNoite from './pages/ClassroomCodes/Periodos/Noite/3';
    import TerceiroENoite from './pages/ClassroomCodes/Periodos/Noite/3/E';
    import TerceiroFNoite from './pages/ClassroomCodes/Periodos/Noite/3/F';

// import Register from './pages/Register';

// import Profile from './pages/Profile';

function Routes() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        {/* <Header /> */}
        {/* <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={0}
              classNames="fade"
          > */}
            {/* // Change <Switch> to <Switch location={location}> */}
              <Switch>
                <Route path="/" exact component={Root} />
                <Route path="/home" exact component={Home} />

                <Route path="/articles" exact component={Articles} />

                <Route path="/cdgs" exact component={Codes} />

                <Route path="/help/googleclassroom" exact component={HelpGC1} />

                <Route path="/help/classroom/1" exact component={HelpGC1} />

                <Route path="/help/classroom/2" exact component={HelpGC2} />

                <Route path="/help/classroom/3" exact component={HelpGC3} />

                <Route path="/help/classroom/4" exact component={HelpGC4} />

                <Route path="/help/classroom/5/android" exact component={HelpGCAndroid} />

                <Route path="/help/classroom/5/windows-mac" exact component={HelpGCPC} />

                <Route path="/help/classroom/5/ios" exact component={HelpGCIPhone} />

                <Route path="/help/classroom/6" exact component={HelpGC6} />

                <Route path="/contact" exact component={Contact} />

                <Route path="/admin/response/:pswd/:mail/:name/:msg" exact component={Response} />

                <Route path="/admin/response" component={Response} />

                <Route path="/admin/tests" component={Tests} />

                <Route path="/cronograma" exact component={Schedule} />

                <Route path="/cronograma/manha-noite" exact component={ScheduleMN} />

                <Route path="/cronograma/tarde" exact component={ScheduleT} />

                <Route path="/infoescola" exact component={InfoEscola} />

                <Route path="/cdgs/manha" exact component={Manha} />

                  <Route path="/cdgs/manha/1" exact component={PrimeiroManha} />
                    <Route path="/cdgs/manha/1a" exact component={PrimeiroAManha} />
                    <Route path="/cdgs/manha/1b" exact component={PrimeiroBManha} />
                    <Route path="/cdgs/manha/1c" exact component={PrimeiroCManha} />
                    <Route path="/cdgs/manha/1d" exact component={PrimeiroDManha} />
                    <Route path="/cdgs/manha/1e" exact component={PrimeiroEManha} />
                    <Route path="/cdgs/manha/1f" exact component={PrimeiroFManha} />

                  <Route path="/cdgs/manha/2" exact component={SegundoManha} />
                    <Route path="/cdgs/manha/2a" exact component={SegundoAManha} />
                    <Route path="/cdgs/manha/2b" exact component={SegundoBManha} />
                    <Route path="/cdgs/manha/2c" exact component={SegundoCManha} />
                    <Route path="/cdgs/manha/2d" exact component={SegundoDManha} />
                    <Route path="/cdgs/manha/2e" exact component={SegundoEManha} />
                    <Route path="/cdgs/manha/2f" exact component={SegundoFManha} />

                  <Route path="/cdgs/manha/3" exact component={TerceiroManha} />
                    <Route path="/cdgs/manha/3a" exact component={TerceiroAManha} />
                    <Route path="/cdgs/manha/3b" exact component={TerceiroBManha} />
                    <Route path="/cdgs/manha/3c" exact component={TerceiroCManha} />
                    <Route path="/cdgs/manha/3d" exact component={TerceiroDManha} />

                <Route path="/cdgs/tarde" exact component={Tarde} />

                  <Route path="/cdgs/tarde/6" exact component={SextoTarde} />
                    <Route path="/cdgs/tarde/6a" exact component={SextoATarde} />
                    <Route path="/cdgs/tarde/6b" exact component={SextoBTarde} />

                  <Route path="/cdgs/tarde/7" exact component={SetimoTarde} />
                    <Route path="/cdgs/tarde/7a" exact component={SetimoATarde} />
                    <Route path="/cdgs/tarde/7b" exact component={SetimoBTarde} />
                    
                  <Route path="/cdgs/tarde/8" exact component={OitavoTarde} />
                    <Route path="/cdgs/tarde/8a" exact component={OitavoATarde} />
                    <Route path="/cdgs/tarde/8b" exact component={OitavoBTarde} />
                    <Route path="/cdgs/tarde/8c" exact component={OitavoCTarde} />

                  <Route path="/cdgs/tarde/9" exact component={NonoTarde} />
                    <Route path="/cdgs/tarde/9a" exact component={NonoATarde} />
                    <Route path="/cdgs/tarde/9b" exact component={NonoBTarde} />
                    <Route path="/cdgs/tarde/9c" exact component={NonoCTarde} />
                    <Route path="/cdgs/tarde/9d" exact component={NonoDTarde} />

                <Route path="/cdgs/noite" exact component={Noite} />

                  <Route path="/cdgs/noite/1" exact component={PrimeiroNoite} />

                  <Route path="/cdgs/noite/2" exact component={SegundoNoite} />
                    <Route path="/cdgs/noite/2g" exact component={SegundoGNoite} />
                    <Route path="/cdgs/noite/2h" exact component={SegundoHNoite} />

                  <Route path="/cdgs/noite/3" exact component={TerceiroNoite} />
                    <Route path="/cdgs/noite/3e" exact component={TerceiroENoite} />
                    <Route path="/cdgs/noite/3f" exact component={TerceiroFNoite} />


                <Route component={NotFound} />

              </Switch>
            {/* </CSSTransition>
          </TransitionGroup>
        )}/> */}
        {/* <Footer /> */}
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default Routes;

function Root() {
  const history = useHistory();

  history.replace('/home')
  return (
    <>
    </>
  )
}