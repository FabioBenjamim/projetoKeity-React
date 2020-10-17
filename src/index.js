import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CadastroMedico from './CadastroMedico';
import Listalocais from './ListaLocal';
import Login from './Login';
import LoginMedico from './LoginMedico';
import ListaDeHorariosLivre from './ListaDeHorariosLivre'
import ListaHorariosLivreMedico from './ListaHorariosLivreMedico'
import ListaClinicaPaciente from './ListaClinicaPaciente';
import NovaSenha from './NovaSenha'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route path="/" exact={true} component={Login} />
    <Route path="/LoginMedico" exact={true} component={LoginMedico} />
    <Route path="/TrocaSenha" exact={true} component={NovaSenha} />
    <Route path="/ClinicasP" exact={true} component={ListaClinicaPaciente} />
      <Route path="/CadastroPaciente" exact={true} component={App} />
      <Route path="/CadastroMedico" exact={true} component={CadastroMedico} />
      <Route path="/Listalocais" exact={true} component={Listalocais} />
      <Route path="/Agenda" exact={true} component={ListaHorariosLivreMedico} />
      <Route path="/X" exact={true} component={ListaDeHorariosLivre} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
