import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Local extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            nome: ''
        }
    }

    render() {
        return (
                <Fragment>
                <div className="row mt-5">
                    <div className="col-6">
                        <input onChange={this.props.escutadorDeInput} type="text"
                            name="nome"
                            className="form-control"
                            placeholder="Local"
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-3">
                        <input onChange={this.props.escutadorDeInput} type="text"
                            name="HorarioEntrada"
                            className="form-control"
                            placeholder="Entrada"
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-3">
                        <input onChange={this.props.escutadorDeInput} type="text"
                            name="HorarioSaida"
                            className="form-control"
                            placeholder="Saida"
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-6 mt-3">
                        <input onChange={this.props.escutadorDeInput} type="text"
                            name="PontoRef"
                            className="form-control"
                            placeholder="Ponto de Referencia"
                            autoComplete="off"
                        />
                    </div>
                </div>
                <button type="button" onClick={this.props.adicionar} className="btn btn-primary mt-3">Adicionar</button>
            </Fragment>
        );
    }
}

export default Local;