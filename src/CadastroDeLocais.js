import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiService from './ApiService'

class Local extends Component {
    constructor(props) {
        super(props)
        this.state = {
            endereco:"",
            numero: "",
            pontoReferencia: "",
            nomeConsultorio: "",
            consultorio: []
        }
    }

    cadastraConsultorio = body =>{
       ApiService.criaConsultorio(JSON.stringify( {
            idMedico: 1,
            consultorios:[
                {
                    endereco: this.state.endereco,
                    numero: this.state.numero,
                    pontoReferencia: this.state.pontoReferencia,
                    nomeConsultorio: this.state.nomeConsultorio
                }
            ]
        } ))
      }

      escutadorDeInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
                <Fragment>
                <div className="row mt-5">
                    <div className="col-6">
                        <input onChange={this.escutadorDeInput} type="text"
                            name="endereco"
                            className="form-control"
                            placeholder="Local"
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-6">
                        <input onChange={this.escutadorDeInput} type="text"
                            name="numero"
                            className="form-control"
                            placeholder="Numero"
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-6 mt-3">
                        <input onChange={this.escutadorDeInput} type="text"
                            name="pontoReferencia"
                            className="form-control"
                            placeholder="Ponto de Referencia"
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-6 mt-3">
                        <input onChange={this.escutadorDeInput} type="text"
                            name="nomeConsultorio"
                            className="form-control"
                            placeholder="Nome Consultorio"
                            autoComplete="off"
                        />
                    </div>
                </div>
                <button type="button" onClick={this.cadastraConsultorio} className="btn btn-primary mt-3">Adicionar</button>
            </Fragment>
        );
    }
}

export default Local;