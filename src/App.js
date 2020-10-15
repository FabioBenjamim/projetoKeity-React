import React, {Component, Fragment} from 'react';
import './App.css';
import ApiService from './ApiService';
import Navbar from './Navbar'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            nome: '',
            sobrenome: '',
            rg: '',
            cpf: '',
            sexo: '',
            email: '',
            telefone: '',
            cep: '',
            rua: '',
            numero: '',
            complemento: '',
            cidade: '',
            estado: ''
        }
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    cadastraPaciente = () =>{
        console.log(JSON.stringify({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            rg: this.state.rg,
            cpf: this.state.cpf,
            sexo: this.state.sexo,
            email: this.state.email,
            telefone: this.state.telefone,
            cep: this.state.cep,
            endereco: this.state.rua,
            numero: this.state.numero,
            complemento: this.state.complemento,
            cidade: this.state.cidade,
            estado: this.state.estado
        }))
    }

  render () {
    return (
        <Fragment>
        <Navbar />
      <div className="App ml-3 mt-3">
        <header className="App-header">
        </header>
          <form>
            <fieldset>
              <fieldset class="grupo">
                <div class="campo">
                    <label for="nome">Nome</label>
                    <input type="text" id="snome"  onChange={ this.escutadorDeInput } name="nome" style={{width: '10em'}} />
                </div>
                <div class="campo">
                    <label for="sobrenome">Sobrenome</label>
                    <input type="text" id="sobrenome"  onChange={ this.escutadorDeInput } name="sobrenome" style={{width: '10em'}} />
                </div>
                </fieldset>

                <fieldset class="grupo">
                <div class="campo">
                    <label for="rg">RG</label>
                    <input type="text" id="rg"  onChange={ this.escutadorDeInput } name="rg" style={{width: '10em'}} />
                </div>
                
                <div class="campo">
                    <label for="cpf">CPF</label>
                    <input type="text" id="cpf"  onChange={ this.escutadorDeInput } name="cpf" style={{width: '10em'}} />
                </div>
                </fieldset>

                <fieldset class="grupo">
                <div class="campo">
                  <label>Sexo</label>
                    <label>
                        <input type="radio"  onChange={ this.escutadorDeInput } name="sexo" value="masculino"/> Masculino
                    </label>
                    <label>
                        <input type="radio"  onChange={ this.escutadorDeInput } name="sexo" value="feminino"/> Feminino
                  </label>
            </div>
            </fieldset>

            <fieldset class="grupo">
                <div class="campo">
                    <label for="email">E-mail</label>
                    <input type="text" id="email"  onChange={ this.escutadorDeInput } name="email" style={{width: '21.5em'}} />
                </div>
            </fieldset>
            
            <fieldset class="grupo">
            <div class="campo">
                <label for="telefone">Telefone</label>
                <input type="text" id="telefone"  onChange={ this.escutadorDeInput } name="telefone" style={{width: '10em'}}/>
            </div>
            </fieldset>

            <fieldset class="grupo">
                <div class="campo">
                    <label for="cep">CEP</label>
                    <input type="text" id="cep"  onChange={ this.escutadorDeInput } name="cep" style={{width:'5em'}}/>
                </div>

                <div class="campo">
                    <label for="rua">Endereço</label>
                    <input type="text" id="rua"  onChange={ this.escutadorDeInput } name="rua" style={{width:'10em'}} />
                </div>

                <div class="campo">
                    <label for="numero">Número</label>
                    <input type="text" id="numero"  onChange={ this.escutadorDeInput } name="numero" style={{width:'3em'}} />
                </div>

            </fieldset>

            <fieldset class="grupo">
                <div class="campo">
                    <label for="complemento">Complemento</label>
                    <input type="text" id="complemento"  onChange={ this.escutadorDeInput } name="complemento" style={{width:'21.5em'}} />
                </div>
              </fieldset>

            <fieldset class="grupo">
                <div class="campo">
                    <label for="cidade">Cidade</label>
                    <input type="text" id="cidade"  onChange={ this.escutadorDeInput } name="cidade" style={{width:'17em'}} />
                </div>
                <div class="campo">
                    <label for="estado">Estado</label>
                    <select  onChange={ this.escutadorDeInput } name="estado" id="estado">
                        <option value="">--</option>
                        <option value="SP">SP</option>
                    </select>
                </div>
            </fieldset>
       </fieldset>
    </form>
    <button onClick={ this.cadastraPaciente } >Enviar </button>
  </div>
  </Fragment>
    );
  }
}

export default App;
