import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Local from "../Cadastro/CadastroDeLocais";
import { Redirect, Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import ApiService from "../Service/ApiService";

const CorpoListaLivre = (props) => {
  const horarios = props.livres.map((hora) => {
    console.log(hora)
    if(hora.consultaRealizada != null){
      return (
      <tr key={hora.horario}>
        <td> {hora.horario} </td>
        <td> {hora.jornada.dia} </td>
        <td data-toggle="modal" data-target="#staticBackdrop1" onClick={ () =>{ props.montaModalMedico(hora.idMedico) } }> {hora.consultaRealizada} </td>
        <td><button className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop" onClick={ () =>{ props.montaModal(hora.idMedico) } } >Avaliar</button></td>
      </tr>
    );
    }else{
      return (
        <tr key={hora.horario}>
          <td> {hora.horario} </td>
          <td> {hora.jornada.dia} </td>
          <td data-toggle="modal" data-target="#staticBackdrop1" onClick={ () =>{ props.montaModalMedico(hora.idMedico) } }> Em Aberto </td>
          
        </tr>
      );
    }
  });

  return <Fragment>{horarios}</Fragment>;
};

class HomePaciente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consultas: [],
      retorno: [],
      range: 0
    };
  }

  escutadorDeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    ApiService.pegaConsultas(this.props.location.state.idPaciente)
      .then((response) => response.text())
      .then((result) => {
        const lista = JSON.parse(result);
        this.setState({ consultas: [...this.state.consultas, ...lista] });
        console.log(this.state);
      });
  }

  montaModal = (idMedico) => {
    this.setState({Medico: idMedico})
  }

  montaModalMedico = (idMedico) =>{
    var pontos = []
        var soma = 0 
    ApiService.buscaMedico(idMedico)
     .then(res =>res.json())
     .then(res =>{ 
       if(res.avaliacao != null){
      Array.from(res.avaliacao).reverse().forEach(function (y) {
        pontos.push(y)
        soma = y + soma
      })
    }
    this.setState( { media: soma/pontos.length, nome:res.nome, espcialidade: res.especializacao } )
     })
  }

  render() {
    return (
      <Fragment>
        <div className="home-Paciente-Color">
          <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5 home-Paciente-Color">
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
          <div className="home-Paciente">
            <div className="col-md-7 col-md-offset-3" style={{ textAlign: "center", float: "none", margin: " 0 auto", backgroundcolor: "#C7EBFC" }}>
              <div class="card bg-light ">
                <div class="card-header">Proxima Consulta</div>
                <div class="card-body">
                  <div className="row">
                    <div className="col-6">
                      <table className="table agenda-meio fundo-lista">
                        <thead>
                          <tr>
                            <th>Horario</th>
                            <th>Dia</th>
                            <th >Status Consulta</th>
                          </tr>
                        </thead>
                        <CorpoListaLivre livres={this.state.consultas} montaModal={this.montaModal} montaModalMedico={ this.montaModalMedico }/>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-md-offset-3" style={{ textAlign: "center", float: "none", margin: " 0 auto" }}>
              <div class="card bg-light mt-5">
                <div class="card-header">Retornos de Consulta</div>
                <div class="card-body">
                  <div className="row">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Avalie o Medico</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              <label for="formControlRange">
                 Avalie o Doutore<br></br>
                 {this.state.range}
                </label>
              <input
                  name="range"
                  onChange={this.escutadorDeInput}
                  type="range"
                  value={this.state.range}
                  min="0"
                  step="1"
                  max="5"
                  class="form-control-range"
                ></input>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={ () =>{ ApiService.avaliaMedico(JSON.stringify({ idMedico: this.state.Medico, avaliacao: [this.state.range] })) } }  >Salvar</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="staticBackdrop1" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Dados do Medico</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                  Nome: { this.state.nome}<br></br>
                  Avaliação do Medico: {this.state.media}<br></br>
                  Especialidade: { this.state.espcialidade }
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={ () =>{ ApiService.avaliaMedico(JSON.stringify({ idMedico: this.state.Medico, avaliacao: [this.state.range] })) } }  >Fechar</button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default HomePaciente;
