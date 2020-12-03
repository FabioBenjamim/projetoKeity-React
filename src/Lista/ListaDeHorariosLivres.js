import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Link } from "react-router-dom";
import "../App.css";
import ApiService from "../Service/ApiService";
import Navbar from "../NavBar/Navbar";

const CorpoListaLivre = (props) => {
  const horarios = props.livres.map((hora) => {
    return (
      <tr key={hora.horario}>
        <td
          onClick={() => {
            ApiService.EscolheHorario(hora.idHorario, props.nome, props.idPaciente);
          }}
        >
          {" "}
          {hora.horario}{" "}
        </td>
        <td> {hora.status} </td>
      </tr>
    );
  });

  return <Fragment>{horarios}</Fragment>;
};

class ListaDeHorariosLivre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livre: [],
    };
  }

  componentDidMount() {
    ApiService.HoraLivreMedico1(this.props.location.state.idJornada)
      .then((res) => res.text())
      .then((result) => {
        const lista = JSON.parse(result);
        this.setState({ livre: [...this.state.livre, ...lista] });
        console.log(this.state);
      });
    console.log(this.props.location.state.idJornada);
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
                      pathname: "/HomePaciente",
                      state: {
                        nome: this.props.location.state.nome,
                        idPaciente: this.props.location.state.idPaciente,
                      },
                    }}
                  >
                    Minha Agenda
                  </Link>
                </li>
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
                    Consultorios
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
                    {this.props.location.state.nome}
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
                        Médico
                      </Link>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a disabled class="dropdown-item" href="#">
                      <Link
                        className="nav-link"
                        to={{
                          pathname: "/",
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
            <table className="table agenda-meio fundo-lista">
              <thead>
                <tr>
                  <th>Horario</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <CorpoListaLivre
                livres={this.state.livre}
                nome={this.props.location.state.nome}
                idConsultorio={this.props.location.state.idConsultorio}
                idPaciente={this.props.location.state.idPaciente}
              />
              <button
                onClick={() => {
                  console.log(this.props.location.state);
                }}
              ></button>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ListaDeHorariosLivre;
