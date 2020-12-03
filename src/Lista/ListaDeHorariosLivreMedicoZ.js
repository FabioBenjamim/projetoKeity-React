import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Link } from "react-router-dom";
import "../App.css";
import ApiService from "../Service/ApiService";
import Navbar from "../NavBar/Navbar";

const CorpoListaLivre = (props) => {
  const horarios = props.livres.map((hora) => {
     var pontos = []
      var soma = 0
     ApiService.pegaPaciente(hora.idPaciente)
     .then(res =>res.json())
     .then(res =>{
       if(res.avaliacao != null){
      Array.from(res.avaliacao).reverse().forEach(function (y) {
        pontos.push(y)
        soma = y + soma
      })
    }
     })
    if (hora.consultaRealizada == null) {
      return (
        <tr key={hora.horario}>
          <td> {hora.horario} </td>
          <td> {hora.status} </td>
          <td> {hora.nomePaciente} </td>
          <td> Aberta </td>
          <td><button className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop" onClick={() => { props.montaModal(hora.idHorario, hora.nomePaciente, hora.idPaciente) }}>Alterar status</button></td>
          
        </tr>
      );
    } else {
      return (
        <tr key={hora.horario}>
          <td> {hora.horario} </td>
          <td> {hora.status} </td>
          <td> {hora.nomePaciente} </td>
          <td> {hora.consultaRealizada} </td>
          <td><button className="btn btn-primary">Alterar status</button></td>
          <td><button className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop1" onClick={() => { props.montaModal(hora.idHorario, hora.nomePaciente, hora.idPaciente) }}>Avaliar Paciente</button></td>
        </tr>
      );
    }
  });


  return <Fragment>{horarios}</Fragment>;
};



class ListaDeHorariosLivreMedicoZ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livre: [],
      status: ''
    };
  }

  escutadorDeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };


  montaModal = (idHorario, nomePaciente, idPaciente) => {
    this.setState({Horario: idHorario, nome: nomePaciente, idPaciente: idPaciente })
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

  alterarStatus = (idHorario, nomePaciente, idPaciente, consultaStatus) => {
    return ApiService.alterarStatus(idHorario, nomePaciente, idPaciente, consultaStatus)
      .then(res => res.json())
      .then(res => {
        if (res.ok) {
          window.location.reload()
        }
      })
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
                  <th scope="col">Paciente</th>
                  <th scope="col">Status Consulta</th>
                </tr>
              </thead>
              <CorpoListaLivre
                livres={this.state.livre}
                nome={this.props.location.state.nome}
                idConsultorio={this.props.location.state.idConsultorio}
                idPaciente={this.props.location.state.idPaciente}
                montaModal={this.montaModal}
                media={ this.media}
              />
            </table>
          </div>
        </div>
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">A previsão do investimento para a data selecionada é de R${this.state.descricao}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                nome do Paciente:{this.state.nome}
                <select onClick={this.escutadorDeInput} name="status" class="custom-select" id="inputGroupSelect02">
                  <option selected>QQHOUVE!</option>
                  <option name="status" value="Realizada">Realizada</option>
                  <option name="status" value="Atrasada">Atrasada</option>
                  <option name="status" value="Faltou">Faltou</option>
                </select>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={ () =>{ ApiService.AlterarStatus(this.state.Horario, this.state.nome, this.state.idPaciente, this.state.status) }}>Salvar</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="staticBackdrop1" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Avalie o Paciente</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              <label for="formControlRange">
                 Avalie o Paciente: {this.state.nome}<br></br>
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
                <button type="button" onClick={ () =>{ApiService.avaliaPaciente(JSON.stringify({ idPaciente: this.state.idPaciente, avaliacao: [this.state.range] })) }} className="btn btn-primary" >Salvar</button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ListaDeHorariosLivreMedicoZ;
