import React, {Component} from 'react';
import ApiService from './ApiService';
import './Login.css';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            redirect:false,
            cpf:"",
            senha:""
        }
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    Login = () =>{
        ApiService.Login(JSON.stringify(this.state))
        .then(res => res.text())
        .then(result =>{
            if(result === "true")
                ApiService.paciente(this.state.cpf)
                .then(res => res.text())
                .then(result =>{ const nomes = JSON.parse(result).nome
                this.setState( { redirect: true, nome: nomes } ) })
        })
    }

  render () {
    if (this.state.redirect) {
        this.setState( { redirect: false } )
        return <Redirect to={{
          pathname: '/ClinicasP',
          state: {
            nome: this.state.nome
          }

        }} />
      } else
    return (
        <div class="entrar">


                <div class="login">
                <div class="campo">
                    <label for="usuario">CPF</label>
                    <input type="text"  onChange={ this.escutadorDeInput } id="usuario" name="cpf" style={{width: '10em'}} />
                    
                </div>

                <div class="campo">
                    <label for="senha">Senha</label>
                    <input type="text"  onChange={ this.escutadorDeInput } id="senha" name="senha" style={{width: '10em'}}/>
                </div>

                <button class="botao" onClick={ this.Login } name="botao" >Enviar</button>

             <p>Esqueceu sua senha? <a href="#">Clique aqui</a></p>
             </div>

        </div>
    );
  }
}

export default Login;
