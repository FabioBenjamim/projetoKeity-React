import React, { Component } from 'react';
import './CadastroMedico.css';
import ApiService from './ApiService';


class CadastroMedico extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: "",
            sobrenome: "",
            sexo: "",
            email: "",
            telefone: "",
            cep: "",
            endereco: "",
            numero: "",
            complemento: "",
            cidade: "",
            estado: "",
            rg: "",
            cri: "",
            cro: "",
            especializacao: "",
            cpf: ""
        }
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    cadastraMedico = () =>{
        ApiService.cadastraMedico(JSON.stringify(this.state))
        .then(res => res.json())
        .then(res => console.log(res))
    }

    render() {
        return (
            <div className="CadastroMedico ml-3 mt-3">
                <header className="App-header">
                </header>
                <form>
                    <fieldset>
                        <fieldset class="grupo">
                            <div class="campo">
                                <label for="nome">Nome</label>
                                <input type="text" id="nome" onChange={ this.escutadorDeInput } name="nome" style={{ width: '10em' }} />

                            </div>

                            <div class="campo">
                                <label for="sobrenome">Sobrenome</label>
                                <input type="text" id="sobrenome" onChange={ this.escutadorDeInput }  name="sobrenome" style={{ width: '10em' }} />
                            </div>
                        </fieldset>

                        <fieldset class="grupo">
                            <div class="campo">
                                <label for="cpf">CPF</label>
                                <input type="text" id="cpf"  onChange={ this.escutadorDeInput } name="cpf" style={{ width: '10em' }} />
                            </div>

                            <div class="campo">
                                <label>Sexo</label>
                                <label>
                                    <input type="radio" name="sexo"  onChange={ this.escutadorDeInput } value="masculino" /> Masculino
                    </label>
                                <label>
                                    <input type="radio" name="sexo"  onChange={ this.escutadorDeInput } value="feminino" /> Feminino
                  </label>
                            </div>

                        </fieldset>
                        <fieldset class="grupo">
                            <div class="campo">
                                <label for="cri">CRI</label>
                                <input type="text" id="cri"  onChange={ this.escutadorDeInput } name="cri" style={{ width: '10em' }} />
                            </div>
                            <div class="campo">
                                <label for="cro">CRO</label>
                                <input type="text" id="cro"  onChange={ this.escutadorDeInput } name="cro" style={{ width: '10em' }} />
                            </div>
                        </fieldset>

                        <fieldset class="grupo">
                            <div class="campo">
                                <label for="especializacao">Especialização</label>
                                <input type="text" id="especializacao"  onChange={ this.escutadorDeInput } name="especializacao" style={{ width: '21.5em' }} />
                            </div>
                        </fieldset>


                        <fieldset class="grupo">
                            <div class="campo">
                                <label for="email">E-mail</label>
                                <input type="text" id="email" onChange={ this.escutadorDeInput }  name="email" style={{ width: '21.5em' }} />
                            </div>
                        </fieldset>

                        <fieldset class="grupo">
                            <div class="campo">
                                <label for="telefone">Telefone</label>
                                <input type="text" id="telefone"  onChange={ this.escutadorDeInput } name="telefone" style={{ width: '10em' }} />
                            </div>
                        </fieldset>

                        <fieldset class="grupo">
                            <div class="campo">
                                <label for="cep">CEP</label>
                                <input type="text" id="cep"  onChange={ this.escutadorDeInput } name="cep" style={{ width: '5em' }} />
                            </div>

                            <div class="campo">
                                <label for="endereco">Endereço</label>
                                <input type="text" id="endereco"  onChange={ this.escutadorDeInput } name="endereco" style={{ width: '10em' }} />
                            </div>

                            <div class="campo">
                                <label for="numero">Número</label>
                                <input type="text" id="numero"  onChange={ this.escutadorDeInput } name="numero" style={{ width: '3em' }} />
                            </div>

                        </fieldset>

                        <fieldset class="grupo">
                            <div class="campo">
                                <label for="complemento">Complemento</label>
                                <input type="text" id="complemento"  onChange={ this.escutadorDeInput } name="complemento" style={{ width: '21.5em' }} />
                            </div>
                        </fieldset>

                        <fieldset class="grupo">
                            <div class="campo">
                                <label for="cidade">Cidade</label>
                                <input type="text" id="cidade"  onChange={ this.escutadorDeInput } name="cidade" style={{ width: '17em' }} />
                            </div>
                            <div class="campo">
                                <label for="estado">Estado</label>
                                <select  onChange={ this.escutadorDeInput } name="estado" id="estado">
                                    <option value="">--</option>
                                    <option value="PR">SP</option>
                                </select>
                            </div>
                        </fieldset>
                        <fieldset class="grupo">
                            
                        </fieldset>
                    </fieldset>
                </form>
                <button onClick={ this.cadastraMedico } >Enviar </button>
            </div>
        );
    }
}

export default CadastroMedico;
