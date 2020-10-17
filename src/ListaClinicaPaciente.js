import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ApiService from './ApiService'
import Navbar from './Navbar'
import { Redirect } from 'react-router-dom';


const Locais = props => {

    const locais = props.clinicas.map((local) => {
        return (
            <tr className="fundo-lista"key={local.idConsultorio}>
                <td onClick = { () =>{ props.redirect(local.endereco, local.idConsultorio) } } >{local.nomeConsultorio}</td>
            </tr>
        );
    }
    );

    return (
        <Fragment>
        <tbody>
            {locais}
        </tbody>
        </Fragment>
    );
}

class ListaClinicaPaciente extends Component{
    constructor(props){
        super(props);
        this.state={
            clinicas:[],
            redirect:false
        }
    }

    componentDidMount(){
        ApiService.buscaConsultorios()
        .then(res => res.text())
        .then(result =>{ const lista = JSON.parse(result)
            this.setState( { clinicas: [...this.state.clinicas, ...lista] } ) })

        console.log(this.props.location.state.nome)
    }

    redirect = (nome,idConsultorio) =>{ 
        this.setState( { redirect: true, path:'/X', id:idConsultorio, nome:this.props.location.state.nome} )
     }

    render(){
        if (this.state.redirect) {
            this.setState( { redirect: false } )
            return <Redirect to={{
              pathname: this.state.path,
              state: {
                  nome: this.state.nome,
                  idConsultorio:  this.state.id
              }

            }} />
          } else
        return(
            <Fragment>
                <Navbar />
                <div className="row">
          <div className="col-6">
            <table className="table agenda-meio">
              <thead>
                <tr>
                  <th scope="col">Clinicas Disponiveis</th>
                </tr>
              </thead>
              <Locais clinicas={ this.state.clinicas }  redirect={ this.redirect }/>
            </table>
          </div>
        </div>
            </Fragment>
        );
    }
}
export default ListaClinicaPaciente;