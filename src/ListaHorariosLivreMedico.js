import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Link, Redirect } from 'react-router-dom';
import ApiService from './ApiService';
import Navbar from './Navbar';

const CorpoListaLivre = props => { 
    let semana = []
        const horarios = props.livres.map((hora) => {
            if(hora.idAgenda == props.idConsultorio){
                    semana = hora.semana 
            }
        })
        
        const semanas = semana.map((diaDaSemana) =>{
            return (
                <tr key={diaDaSemana.idAgenda}>
                    <td onClick={() => { props.redirect(diaDaSemana.idJornada) }} > {diaDaSemana.dia} </td>
                </tr>
            );
        })
    
    

return (
    <Fragment>
        {semanas}
    </Fragment>
);
    
}


class ListaDeHorariosLivre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            livre: [],
            semana: [],
            agenda: false
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

    redirect = (idJornada) => {
        this.setState({ idJornada: idJornada, redirect: true, path: '/y', id: this.props.location.state.idConsultorio, nome: this.props.location.state.nome, idPaciente: this.props.location.state.idPaciente })
    }

    verificaAgenda = (livres) => {
        if (livres[0] == null) {
            this.setState({ agenda: false })
        }
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    criaAgenda = () => {
        this.verificaAgenda(this.state.livre)
        if(this.state.agenda == false){
        ApiService.criaAgenda(this.props.location.state.idConsultorio, this.props.location.state.idMedico)
            .then(res => {
                if (res.ok) {
                    ApiService.ConfiguraAgendas(JSON.stringify({
                        idAgenda: this.props.location.state.idConsultorio,
                        nomePaciente: "Livre",
                        semana: {
                            diaDaSemana: this.state.DiaSemana,
                            inicioExpediente: this.state.HoraEntrada,
                            fimExpediente: this.state.HoraSaida,
                            nomeEscritorio: "XXX"
                        }
                    }))
                        .then(res => {
                            if (res.ok) {
                                window.location.reload()
                            }
                        })
                }
            })
        } 
        if(this.state.agenda == true){
            ApiService.ConfiguraAgendas(JSON.stringify({
                idAgenda: this.props.location.state.idConsultorio,
                nomePaciente: "Livre",
                semana: {
                    diaDaSemana: this.state.DiaSemana,
                    inicioExpediente: this.state.HoraEntrada,
                    fimExpediente: this.state.HoraSaida,
                    nomeEscritorio: "XXX"
                }
            }))
                .then(res => {
                    if (res.ok) {
                        window.location.reload()
                    }
                })
            }
    }

    render() {
        if (this.state.redirect) {
            this.setState({ redirect: false })
            return <Redirect to={{
                pathname: '/z',
                state: {
                    nome: this.state.nome,
                    idConsultorio: this.state.id,
                    idPaciente: this.props.location.state.idPaciente,
                    idJornada: this.state.idJornada
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
                                    <th>Dia</th>
                                </tr>
                            </thead>
                            <CorpoListaLivre  redirect={ this.redirect }  idConsultorio={ this.props.location.state.idConsultorio }livres={this.state.livre} />
                        </table>
                        <div className="row">
                            <div className="col-6 agenda-meio mt-3">
                                <input onChange={this.escutadorDeInput} type="text"
                                    name="DiaSemana"
                                    className="form-control"
                                    placeholder="Dia da semana"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="col-3 agenda-meio mt-3">
                                <input onChange={this.escutadorDeInput} type="text"
                                    name="HoraEntrada"
                                    className="form-control"
                                    placeholder="Entrada"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="col-3 mt-3">
                                <input onChange={this.escutadorDeInput} type="text"
                                    name="HoraSaida"
                                    className="form-control"
                                    placeholder="Saida"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="col-3 agenda-meio1 mt-3">
                                <button type="button" onClick={this.criaAgenda} className="btn btn-primary mt-3">Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
} export default ListaDeHorariosLivre