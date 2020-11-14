import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Local from "../Cadastro/CadastroDeLocais";
import { Redirect, Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import ApiService from "../Service/ApiService";

const CorpoListaLivre = (props) => {
  const horarios = props.livres.map((hora) => {
    return (
      <tr key={hora.horario}>
        <td> {hora.horario} </td>
        <td> {hora.jornada.diaDaSemana} </td>
      </tr>
    );
  });

  return <Fragment>{horarios}</Fragment>;
};

class HomePaciente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consultas: [],
      retorno: [],
    };
  }

  componentDidMount() {
    ApiService.pegaConsultas(this.props.location.state.idPaciente)
      .then((response) => response.text())
      .then((result) => {
        const lista = JSON.parse(result);
        this.setState({ consultas: [...this.state.consultas, ...lista] });
        console.log(this.state);
      });
  }

  render() {
    return (
      <Fragment>
        <div className="">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              MySchedule
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#textoNavbar"
              aria-controls="textoNavbar"
              aria-expanded="false"
              aria-label="Alterna navegação"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="textoNavbar">
              <ul class="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={{
                      pathname: "/ClinicasP",
                      state: {
                        nome: this.props.location.state.nome,
                        idPaciente: this.props.location.state.idPaciente,
                      },
                    }}
                  >
                    Agendar Consultas
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto mr-5">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Bem Vindo(a): {this.props.location.state.nome}
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                      <Link
                        className="nav-link"
                        to={{
                          pathname: "/Login",
                        }}
                      >
                        Paciente
                      </Link>
                    </a>
                    <a class="dropdown-item" href="#">
                      <Link
                        className="nav-link"
                        to={{
                          pathname: "/LoginMedico",
                        }}
                      >
                        Sair
                      </Link>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="agenda-meio1">
              <table className="table agenda-meio fundo-lista">
                <thead>
                  <tr>
                    <th>Proxima Consulta</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <table className="table agenda-meio fundo-lista">
              <thead>
                <tr>
                  <th>Horario</th>
                  <th>Dia</th>
                </tr>
              </thead>
              <CorpoListaLivre livres={this.state.consultas} />
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="agenda-meio1">
              <table className="table agenda-meio fundo-lista">
                <thead>
                  <tr>
                    <th>Retornos de Consulta</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <table className="table agenda-meio fundo-lista">
              <thead>
                <tr>
                  <th>Horario</th>
                  <th>Dia</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default HomePaciente;
