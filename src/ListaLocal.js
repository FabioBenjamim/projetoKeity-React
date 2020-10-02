import React, { Fragment, Component } from 'react';
import './App.css';
import Agenda from './Agenda';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';


class ListaLocal extends Component {

  state = {
    usuario: {
      email: '',
      senha: ''
    }
  }


  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-6">
            <table className="table agenda-meio">
              <thead>
                <tr>
                  <th scope="col">Local</th>
                </tr>
              </thead>
              <Agenda />
            </table>
          </div>
        </div>
      </Fragment>

    );
  }
}
export default ListaLocal;
