import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Local from "../Cadastro/CadastroDeLocais";
import { Redirect, Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import ApiService from "../Service/ApiService";
import car from "../images/x.jpg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Medico: "active",
      Paciente: " ",
      cardTitle: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      cardText: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      href: "/CadastroMedico",
    };
  }

  trocaCard = (number) => {
    if (number == 1) {
      this.setState({
        Medico: " ",
        Paciente: "active",
        cardTitle: "Cansado com problemas para marcar uma consulta?",
        cardText:
          "Marque você mesmo suas consultas, não dependa de ninguem! Oferecemos uma gama de profissionais.",
        href: "/CadastroPaciente",
      });
    }
    if (number == 2) {
      this.setState({
        Medico: "active",
        Paciente: " ",
        cardTitle: "Possui um negocio Propio?",
        cardText: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        href: "/CadastroMedico",
      });
    }
  };

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
              <ul class="navbar-nav mr-auto"></ul>
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
                    Login
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
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="Home">
          <div className="container ">
            <div className="row ">
              <div className="col-3 mt-3">
                <h1 className="mt-5 texto-apresentacao ">Myschedule</h1>
                <p className="texto-apresentacao">
                  A ideia é aumentar a disponibilidade para agendamento de
                  consultas com médicos/dentistas. As pessoas precisam ter
                  “sorte” de ligar no dia e horário de atendimento do
                  profissional num determinado estabelecimento para que possa
                  agendar.
                </p>
              </div>
              <div className="col-3 mt-5 apresentação">
                <p className="texto-apresentacao">
                  A ideia é aumentar a disponibilidade para agendamento de
                  consultas com médicos/dentistas. As pessoas precisam ter
                  “sorte” de ligar no dia e horário de atendimento do
                  profissional num determinado estabelecimento para que possa
                  agendar.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card text-center border-primary">
          <div class="card-header border-dark">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a
                  onClick={() => this.trocaCard(2)}
                  class={"nav-link fundo-lista " + this.state.Medico}
                >
                  Medico
                </a>
              </li>
              <li class="nav-item">
                <a
                  onClick={() => this.trocaCard(1)}
                  class={"nav-link fundo-lista " + this.state.Paciente}
                >
                  Paciente
                </a>
              </li>
            </ul>
          </div>
          <div class="card-body ">
            <h5 class="card-title">{this.state.cardTitle}</h5>
            <p class="card-text">{this.state.cardText}</p>
            <a href={this.state.href} class="btn btn-primary">
              Cadastre-se já!
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Home;
