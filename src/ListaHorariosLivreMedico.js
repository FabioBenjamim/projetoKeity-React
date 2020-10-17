import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ApiService from './ApiService';
import Navbar from './Navbar';

const CorpoListaLivre = props =>{
    const horarios = props.livres.map((hora) =>{
        return(
            <tr key={hora.horario}>
                <td > { hora.horario } </td>
                <td> { hora.nomePaciente } </td>
            </tr>
        );
    })

    return(
        <Fragment>
            {horarios}
        </Fragment>
    );
}


class ListaDeHorariosLivre extends Component{
    constructor(props){
        super(props);
        this.state = {
            livre:[]
        }
    }

        componentDidMount(){
        ApiService.HoraLivreMedico(this.props.location.state.idConsultorio)
        .then(res => res.text())
        .then(result =>{ const lista = JSON.parse(result)
            this.setState( { livre: [...this.state.livre, ...lista] } ) })
    }

    render(){
        return(
            <Fragment>
                <Navbar />
                <div className="row">
                    <div className="col-6">
                        <table className="table agenda-meio fundo-lista">
                            <thead>
                                <tr>
                                    <th>Horario</th>
                                    <th scope="col">Paciente</th>
                                </tr>
                            </thead>
                            <CorpoListaLivre livres = { this.state.livre } />
                            <button onClick={ () =>{ console.log(this.state.livre) } } ></button>
                        </table>
                    </div>
                </div>
            </Fragment>
        );
    }
}export default ListaDeHorariosLivre