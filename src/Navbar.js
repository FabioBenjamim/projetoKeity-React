import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className="">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="/">MySchedule</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link className="nav-link" to={{
                                        pathname: '/',
                                    }}>
                                        Cadastro Paciente
                                    </Link>
                                </li>
                                <li class="nav-item">
                                <Link className="nav-link" to={{
                                        pathname: '/CadastroMedico',
                                    }}>
                                        Cadastro de Medicos
                                    </Link>
                                </li>
                                <li class="nav-item">
                                <Link className="nav-link" to={{
                                        pathname: '/Listalocais',
                                    }}>
                                        Agenda
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </Fragment>
        );
    }

} export default Navbar;