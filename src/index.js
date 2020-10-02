import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CadastroMedico from './CadastroMedico';
import Listalocais from './ListaLocal';
import AgendaLocal from './AgendaLocal';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/CadastroMedico" exact={true} component={CadastroMedico} />
      <Route path="/Listalocais" exact={true} component={Listalocais} />
      <Route path="/Agenda" exact={true} component={AgendaLocal} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
