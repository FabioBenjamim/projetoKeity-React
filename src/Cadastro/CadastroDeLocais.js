import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ApiService from "../Service/ApiService";

class Local extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endereco: "",
      numero: "",
      pontoReferencia: "",
      nomeConsultorio: "",
      consultorio: [],
    };
  }

  cadastraConsultorio = (body) => {
    ApiService.criaConsultorio(
      JSON.stringify({
        idMedico: this.props.idMedico,
        consultorios: [
          {
            endereco: this.state.endereco,
            numero: this.state.numero,
            pontoReferencia: this.state.pontoReferencia,
            nomeConsultorio: this.state.nomeConsultorio,
            lat: this.state.lat,
            lng: this.state.lng,
          },
        ],
      })
    ).then((res) => {
      if (res.ok) {
        window.location.reload();
      }
    });
  };

  escutadorDeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="row mt-5">
          <div className="col-6">
            <input
              onChange={this.escutadorDeInput}
              type="text"
              name="endereco"
              className="form-control"
              placeholder="Local"
              autoComplete="off"
            />
          </div>
          <div className="col-6">
            <input
              onChange={this.escutadorDeInput}
              type="text"
              name="numero"
              className="form-control"
              placeholder="Numero"
              autoComplete="off"
            />
          </div>
          <div className="col-6 mt-3">
            <input
              onChange={this.escutadorDeInput}
              type="text"
              name="pontoReferencia"
              className="form-control"
              placeholder="Ponto de Referencia"
              autoComplete="off"
            />
          </div>
          <div className="col-6 mt-3">
            <input
              onChange={this.escutadorDeInput}
              type="text"
              name="nomeConsultorio"
              className="form-control"
              placeholder="Nome Consultorio"
              autoComplete="off"
            />
          </div>

          <div className="col-3 mt-3">
            <input
              onChange={this.escutadorDeInput}
              type="text"
              name="lat"
              className="form-control"
              placeholder="Latitude"
              autoComplete="off"
            />
          </div>
          <div className="col-3 mt-3">
            <input
              onChange={this.escutadorDeInput}
              type="text"
              name="lng"
              className="form-control"
              placeholder="longitude"
              autoComplete="off"
            />
          </div>
          <div class="form-group row">
            <label for="example-date-input" class="col-2 col-form-label">
              Date
            </label>
            <div class="col-10">
              <input
                class="form-control"
                type="date"
                min="09:00"
                max="18:00"
              ></input>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={this.cadastraConsultorio}
          className="btn btn-primary mt-3"
        >
          Adicionar
        </button>
      </Fragment>
    );
  }
}

export default Local;
