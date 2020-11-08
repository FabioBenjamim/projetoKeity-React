import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Link, Redirect } from 'react-router-dom';
import ApiService from './ApiService';
import Navbar from './Navbar';

const CorpoListaLivre = props => {
    const horarios = props.livres.map((hora) => {
        return (
            <tr key={hora.horario}>
                <td > {hora.horario} </td>
                <td> {hora.nomePaciente} </td>
            </tr>
        );
    })

    return (
        <Fragment>
            {horarios}
        </Fragment>
    );
}


class ListaDeHorariosLivre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            livre: []
        }
    }

    componentDidMount() {
        ApiService.HoraLivreMedico(this.props.location.state.idConsultorio)
            .then(res => res.text())
            .then(result => {
                const lista = JSON.parse(result)
                this.setState({ livre: [...this.state.livre, ...lista] })
            })
    }

    render() {
        return (
            <Fragment>
                <div className="">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="#">MySchedule</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#textoNavbar" aria-controls="textoNavbar" aria-expanded="false" aria-label="Alterna navegação">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="textoNavbar">
                            <ul class="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={{
                                        pathname: '/ListaLocais',
                                        state: {
                                            idMedico: this.props.location.state.idMedico
                                        }
                                    }}>
                                        Consultorios
                                    </Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto mr-5">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{this.props.location.state.nome}</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#"><Link className="nav-link" to={{
                                            pathname: '/Login',

                                        }}>
                                            Paciente
                                    </Link></a>
                                        <a class="dropdown-item" href="#"><Link className="nav-link" to={{
                                            pathname: '/LoginMedico',

                                        }}>
                                            Médico
                                    </Link></a>
                                        <div class="dropdown-divider"></div>
                                        <a disabled class="dropdown-item" href="#"><Link className="nav-link" to={{
                                            pathname: '/',

                                        }}>
                                            Sair
                                    </Link></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-6">
                        <table className="table agenda-meio fundo-lista">
                            <thead>
                                <tr>
                                    <th>Horario</th>
                                    <th scope="col">Paciente</th>
                                </tr>
                            </thead>
                            <CorpoListaLivre livres={this.state.livre} />
                            <button onClick={() => { console.log(this.state.livre) }} ></button>
                        </table>
                    </div>
                </div>
            </Fragment>
        );
    }
} export default ListaDeHorariosLivre