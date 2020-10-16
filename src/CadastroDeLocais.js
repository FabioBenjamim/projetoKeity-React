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
        .then(res => {
                ApiService.BuscaidAgenda(1)
                .then(response => response.text())
                .then(result => {
                    ApiService.criaAgenda(1, 1)
                    .then(res =>{
                        ApiService.ConfiguraAgendas(JSON.stringify({
                            idAgenda: 1,
                            nomePaciente: "tamburu",
                            semana: {
                                diaDaSemana: this.state.DiaSemana,
                                inicioExpediente: this.state.HoraEntrada,
                                fimExpediente: this.state.HoraSaida,
                                nomeEscritorio: "XXX"
                            }
                        }))
                        .then(res =>{
                            if(res.ok){
                                console.log("deu certo primo")
                            }
                        }) 
                    })
                 
            })
        })
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
                    <div className="col-6 mt-3">
                        <input onChange={this.escutadorDeInput} type="text"
                            name="DiaSemana"
                            className="form-control"
                            placeholder="Dia da semana"
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-3 mt-3">
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
                </div>
                <button type="button" onClick={this.cadastraConsultorio} className="btn btn-primary mt-3">Adicionar</button>
            </Fragment>
        );
    }
}

export default Local;