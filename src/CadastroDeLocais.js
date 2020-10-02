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
                    <div className="col-6">
                        <input onChange={this.props.escutadorDeInput} type="text"
                            name="horario"
                            className="form-control"
                            placeholder="Horario de Serviço"
                            autoComplete="off"
                        />
                    </div>
                    <button type="button" onClick={this.props.adicionar} className="btn btn-primary">Adicionar</button>
                </div>
            </Fragment>
        );
    }
}

export default Local;