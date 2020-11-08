import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Local from './CadastroDeLocais'
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import ApiService from './ApiService'


const Locais = props => {

    const locais = props.agendas.map((local) => {
        return (
            <tr className="fundo-lista"key={local.idConsultorio}>
                <td   onClick = { () =>{ props.redirect(local.endereco, local.idConsultorio) } } >{local.nomeConsultorio}</td>
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

class Agenda extends Component {
    constructor(props) {
        super(props)
        this.state = {
            endereco:"",
            numero: "",
            pontoReferencia: "",
            nomeConsultorio: "",
            redirect:false,
            id: '',
            nome:'',
            agendas: [

            ],
        }
        
    }

    componentDidMount(){
        console.log(this.props.idMedico)
        var local = [
          { 
            nome:"arroz"
          },
          {
            nome:"feijao"
          }
        ]
        ApiService.buscaMedico(this.props.idMedico)
        .then(res => res.json())
        .then(res => { this.setState( { agendas: [...this.state.agendas, ...res.consultorios] } )  })
      }

    redirect = (nome,idConsultorio) =>{ 
        this.setState( { redirect: true, path:'/Agenda', loca:nome, id:idConsultorio } )
     }

    escutadorDeInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    adicionaNovoLocal = () =>{
        
    }

    render() {
        if (this.state.redirect) {
            this.setState( { redirect: false } )
            return <Redirect to={{
              pathname: this.state.path,
              state: {
                  local: this.state.loca,
                  idConsultorio:  this.state.id,
                  idMedico: this.props.idMedico
              }

            }} />
          } else
        return (
            <Fragment>
                <Locais agendas={this.state.agendas} redirect = { this.redirect }/>
                <Local  idMedico={ this.props.idMedico }escutadorDeInput = { this.escutadorDeInput } adicionar = { this.adicionaNovoLocal }/>
            </Fragment>
        );
    }
}
export default Agenda;
