import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Local from "../Cadastro/CadastroDeLocais";
import { Redirect, Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import ApiService from "../Service/ApiService";

class HomeMedico extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.location.state.idMedico);
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
                      pathname: "/Listalocais",
                      state: { idMedico: this.props.location.state.idMedico },
                    }}
                  >
                    Agendas
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
                    Dr.Naruto
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
      </Fragment>
    );
  }
}
export default HomeMedico;
