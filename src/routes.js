import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

import Manha from './pages/Periodos/Manha';
  import PrimeiroManha from './pages/Periodos/Manha/1';
    import PrimeiroAManha from './pages/Periodos/Manha/1/A';
    import PrimeiroBManha from './pages/Periodos/Manha/1/B';
    import PrimeiroCManha from './pages/Periodos/Manha/1/C';
    import PrimeiroDManha from './pages/Periodos/Manha/1/D';
    import PrimeiroEManha from './pages/Periodos/Manha/1/E';
    import PrimeiroFManha from './pages/Periodos/Manha/1/F';
  import SegundoManha from './pages/Periodos/Manha/2';
    import SegundoAManha from './pages/Periodos/Manha/2/A';
    import SegundoBManha from './pages/Periodos/Manha/2/B';
    import SegundoCManha from './pages/Periodos/Manha/2/C';
    import SegundoDManha from './pages/Periodos/Manha/2/D';
    import SegundoEManha from './pages/Periodos/Manha/2/E';
    import SegundoFManha from './pages/Periodos/Manha/2/F';
  import TerceiroManha from './pages/Periodos/Manha/3';
    import TerceiroAManha from './pages/Periodos/Manha/3/A';
    import TerceiroBManha from './pages/Periodos/Manha/3/B';
    import TerceiroCManha from './pages/Periodos/Manha/3/C';
    import TerceiroDManha from './pages/Periodos/Manha/3/D';


import Tarde from './pages/Periodos/Tarde';
  import SextoTarde from './pages/Periodos/Tarde/6';
    import SextoATarde from './pages/Periodos/Tarde/6/A';
    import SextoBTarde from './pages/Periodos/Tarde/6/B';
  import SetimoTarde from './pages/Periodos/Tarde/7';
    import SetimoATarde from './pages/Periodos/Tarde/7/A';
    import SetimoBTarde from './pages/Periodos/Tarde/7/B';
  import OitavoTarde from './pages/Periodos/Tarde/8';
    import OitavoATarde from './pages/Periodos/Tarde/8/A';
    import OitavoBTarde from './pages/Periodos/Tarde/8/B';
    import OitavoCTarde from './pages/Periodos/Tarde/8/C';
  import NonoTarde from './pages/Periodos/Tarde/9';
    import NonoATarde from './pages/Periodos/Tarde/9/A';
    import NonoBTarde from './pages/Periodos/Tarde/9/B';
    import NonoCTarde from './pages/Periodos/Tarde/9/C';
    import NonoDTarde from './pages/Periodos/Tarde/9/D';

import Noite from './pages/Periodos/Noite';
  import PrimeiroNoite from './pages/Periodos/Noite/1/G';
  import SegundoNoite from './pages/Periodos/Noite/2';
    import SegundoGNoite from './pages/Periodos/Noite/2/G';
    import SegundoHNoite from './pages/Periodos/Noite/2/H';
  import TerceiroNoite from './pages/Periodos/Noite/3';
    import TerceiroENoite from './pages/Periodos/Noite/3/E';
    import TerceiroFNoite from './pages/Periodos/Noite/3/F';

// import Register from './pages/Register';

// import Profile from './pages/Profile';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />

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
            <Route path="/cdgs/noite/3a" exact component={TerceiroENoite} />
            <Route path="/cdgs/noite/3b" exact component={TerceiroFNoite} />


        <Route component={Home} />

      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
