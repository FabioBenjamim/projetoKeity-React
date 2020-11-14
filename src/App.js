import React, { Component, Fragment } from "react";
import "./App.css";
import ApiService from "./Service/ApiService";
import Navbar from "./NavBar/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      rg: "",
      cpf: "",
      sexo: "",
      email: "",
      telefone: "",
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      cidade: "",
      estado: "",
    };
  }

  escutadorDeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  cadastraPaciente = () => {
    ApiService.cadastraPaciente(
      JSON.stringify({
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
        estado: this.state.estado,
        senha: this.state.rg,
      })
    );
  };

  render() {
    return (
      <div className="CadastroMedico ml-3 mt-3">
        <form>
          <div class="CadastroPaciente">
            <img
              src="https://moldura-pop.s3.sa-east-1.amazonaws.com/imagens-proprietarias/99929074-co69H2-T4UCjdMLNVuRfvKVPmrNOjdKj-cropped-1x1-browser.png"
              class="img"
            ></img>
            <fieldset class="formMedico">
              <fieldset class="grupo">
                <div class="campo">
                  <label for="nome">Nome</label>
                  <input
                    type="text"
                    id="snome"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="nome"
                    style={{ width: "10em" }}
                  />
                </div>
                <div class="campo">
                  <label for="sobrenome">Sobrenome</label>
                  <input
                    type="text"
                    id="sobrenome"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="sobrenome"
                    style={{ width: "10em" }}
                  />
                </div>
              </fieldset>

              <fieldset class="grupo">
                <div class="campo">
                  <label for="rg">RG</label>
                  <input
                    type="text"
                    id="rg"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="rg"
                    style={{ width: "10em" }}
                  />
                </div>

                <div class="campo">
                  <label for="cpf">CPF</label>
                  <input
                    type="text"
                    id="cpf"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="cpf"
                    style={{ width: "10em" }}
                  />
                </div>
              </fieldset>

              <fieldset class="grupo">
                <div class="campo">
                  <label>Sexo</label>
                  <label>
                    <input
                      type="radio"
                      onChange={this.escutadorDeInput}
                      name="sexo"
                      value="masculino"
                    />{" "}
                    Masculino
                  </label>
                  <label>
                    <input
                      type="radio"
                      onChange={this.escutadorDeInput}
                      name="sexo"
                      value="feminino"
                    />{" "}
                    Feminino
                  </label>
                </div>
              </fieldset>

              <fieldset class="grupo">
                <div class="campo">
                  <label for="email">E-mail</label>
                  <input
                    type="text"
                    id="email"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="email"
                    style={{ width: "21.5em" }}
                  />
                </div>
              </fieldset>

              <fieldset class="grupo">
                <div class="campo">
                  <label for="telefone">Telefone</label>
                  <input
                    type="text"
                    id="telefone"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="telefone"
                    style={{ width: "10em" }}
                  />
                </div>
              </fieldset>

              <fieldset class="grupo">
                <div class="campo">
                  <label for="cep">CEP</label>
                  <input
                    type="text"
                    id="cep"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="cep"
                    style={{ width: "5em" }}
                  />
                </div>

                <div class="campo">
                  <label for="rua">Endereço</label>
                  <input
                    type="text"
                    id="rua"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="rua"
                    style={{ width: "10em" }}
                  />
                </div>

                <div class="campo">
                  <label for="numero">Número</label>
                  <input
                    type="text"
                    id="numero"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="numero"
                    style={{ width: "3em" }}
                  />
                </div>
              </fieldset>

              <fieldset class="grupo">
                <div class="campo">
                  <label for="complemento">Complemento</label>
                  <input
                    type="text"
                    id="complemento"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="complemento"
                    style={{ width: "21.5em" }}
                  />
                </div>
              </fieldset>

              <fieldset class="grupo">
                <div class="campo">
                  <label for="cidade">Cidade</label>
                  <input
                    type="text"
                    id="cidade"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="cidade"
                    style={{ width: "17em" }}
                  />
                </div>
                <div class="campo">
                  <label for="estado">Estado</label>
                  <select
                    onChange={this.escutadorDeInput}
                    name="estado"
                    id="estado"
                  >
                    <option value="">--</option>
                    <option value="SP">SP</option>
                  </select>
                </div>
              </fieldset>
            </fieldset>
            <button
              type="button"
              class="btn btn-light"
              id="buttonLogin"
              onClick={this.cadastraPaciente}
            >
              Enviar
            </button>
          </div>
        </form>
        <style>
          {
            "body { background-image: url(https://ababas.com.br/wp-content/uploads/2019/08/2-dialab-bg.jpg); }"
          }
        </style>
      </div>
    );
  }
}

export default App;
