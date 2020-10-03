import React, { Fragment, Component } from 'react';
import './App.css';
import Agenda from './Agenda';
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiService from './ApiService';
//import 'bootstrap/dist/js/bootstrap.bundle.min';


class ListaLocal extends Component {
constructor(props){
  super(props);
  this.state = {
    filhos: [
      {
          agenda:[],
          id: 1,
          nome: 'Barra Funda'
      },
      {
          id: 2,
          nome: 'Penha'
      },
      {
          id: 3,
          nome: 'Vila ré'
      }
  ]
  }
}

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="row">
          <div className="col-6">
            <table className="table agenda-meio">
              <thead>
                <tr>
                  <th scope="col">Local</th>
                </tr>
              </thead>
              <Agenda   filhos = { this.state.filhos } cadastraConsultorio={ this.cadastraConsultorio }/>
            </table>
          </div>
        </div>
      </Fragment>

    );
  }
}
export default ListaLocal;
