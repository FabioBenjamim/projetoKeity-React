import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Local from './CadastroDeLocais'
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';


const Locais = props => {

    const locais = props.agendas.map((local) => {
        return (
            <tr className="fundo-lista"key={local.id}>
                <td   onClick = { () =>{ props.redirect(local.nome) } } >{local.nome}</td>
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
            redirect:false,
            id: '',
            nome:'',
            agendas: [
                {
                    id: 1,
                    nome: 'Barra Funda'
                },
                {
                    id: 2,
                    nome: 'Penha'
                },
                {
                    id: 3,
                    nome: 'Vila ré'
                },

            ]
        }
        
    }

    redirect = nome =>{ 
        this.setState( { redirect: true, path:'/Agenda', loca:nome } )
     }

    escutadorDeInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    adicionaNovoLocal = () =>{
        if(this.state.nome !== ''){
        const local = { 
            id: this.state.agendas[this.state.agendas.length-1].id +1,
            nome: this.state.nome
         }
        this.setState({ agendas: [...this.state.agendas, local] })
        }
    }

    render() {
        if (this.state.redirect) {
            this.setState( { redirect: false } )
            return <Redirect to={{
              pathname: this.state.path,
              state: {
                  local: this.state.loca
              }

            }} />
          } else
        return (
            <Fragment>
                <Locais agendas={this.state.agendas} redirect = { this.redirect }/>
                <Local  escutadorDeInput = { this.escutadorDeInput } adicionar = { this.adicionaNovoLocal }/>
            </Fragment>
        );
    }
}
export default Agenda;
