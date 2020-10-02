import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Local from './CadastroDeLocais'
import { Link, Redirect } from 'react-router-dom';
import AgendaLocalCorpo from './AgendaLocalCorpo';

class AgendaLocal extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                                    <th>Horario</th>
                                    <th scope="col">Seg</th>
                                    <th scope="col">Ter</th>
                                    <th scope="col">Qua</th>
                                    <th scope="col">Qui</th>
                                    <th scope="col">Sex</th>
                                    <th scope="col">Sab</th>
                                </tr>
                            </thead>
                            <AgendaLocalCorpo />
                        </table>
                    </div>
                </div>
            </Fragment>
        );
    }

}
export default AgendaLocal;