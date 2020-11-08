import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ApiService from './ApiService'
import Navbar from './Navbar'
import { Redirect, Link } from 'react-router-dom';


const Locais = props => {

    function toRadians(grau) {
        var pi = Math.PI
        return grau * (pi / 180)
    }

    const locais = props.clinicas.map((local) => {
        var dist = 6371 * Math.acos(Math.cos(toRadians(-23.526)) *
            Math.cos(toRadians(local.lat)) *
            Math.cos(toRadians(local.lng) - toRadians(-46.6388)) +
            Math.sin(toRadians(-23.526)) *
            Math.sin(toRadians(local.lat))
        )
        console.log(local)
        if (props.range >= dist && props.especialidade == "todas")
            return (
                <tr className="fundo-lista" key={local.idConsultorio}>
                    <td onClick={() => { props.redirect(local.endereco, local.idConsultorio) }} >{local.nomeConsultorio}</td>
                </tr>
            );
    }
    );

    return (
        <Fragment>
            <tbody>
                {locais}
            </tbody>
        </Fragment>
    );
}

class ListaClinicaPaciente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            range: 0,
            clinicas: [],
            redirect: false,
            especialidade: "todas"
        }
    }
    componentDidMount(){
        ApiService.buscaConsultorios()
        .then(res => res.text())
        .then(result =>{ const lista = JSON.parse(result)
            this.setState( { clinicas: [...this.state.clinicas, ...lista] } ) })
 
    }

    redirect = (nome, idConsultorio) => {
        this.setState({ redirect: true, path: '/X', id: idConsultorio, nome: this.props.location.state.nome, idPaciente: this.props.location.state.idPaciente })
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        if (this.state.redirect) {
            this.setState({ redirect: false })
            return <Redirect to={{
                pathname: this.state.path,
                state: {
                    nome: this.state.nome,
                    idConsultorio: this.state.id,
                    idPaciente: this.props.location.state.idPaciente
                }

            }} />
        } else
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
                                </ul>
                                <ul className="navbar-nav ml-auto mr-5">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Bem Vindo(a): { this.props.location.state.nome }</a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#"><Link className="nav-link" to={{
                                                pathname: '/Login',

                                            }}>
                                                Paciente
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
                            <div className="rangeKm mt-5">
                                <label for="formControlRange">distancia: {this.state.range} Km</label>
                                <input name="range" onChange={this.escutadorDeInput} type="range" value={this.state.range} min="0" step="0.5" max="100" class="form-control-range" ></input>
                                <label className="mt-1" for="formControlRange">Especialidade: </label>
                                <select onChange={this.escutadorDeInput} name="estado" id="estado">
                                    <option value="Todas">Todas</option>
                                </select>
                            </div>
                            <table className="table agenda-meio">
                                <thead>
                                    <tr>
                                        <th scope="col">Clinicas Disponiveis</th>
                                    </tr>
                                </thead>
                                <Locais range={this.state.range} especialidade={this.state.especialidade} clinicas={this.state.clinicas} redirect={this.redirect} />
                            </table>
                        </div>
                    </div>
                </Fragment>
            );
    }
}
export default ListaClinicaPaciente;