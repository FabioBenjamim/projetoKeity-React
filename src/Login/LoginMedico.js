import React, { Component } from "react";
import ApiService from "../Service/ApiService";
import "./Login.css";
import { Redirect } from "react-router-dom";

class LoginMedico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      cpf: "",
      senha: "",
    };
  }

  escutadorDeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  Login = () => {
    ApiService.LoginMedico(JSON.stringify(this.state))
      .then((res) => res.text())
      .then((result) => {
        if (result === "true")
          ApiService.medico(this.state.cpf)
            .then((res) => res.text())
            .then((result) => {
              const id = JSON.parse(result).idMedico;
              const nomes = JSON.parse(result).nome;
              this.setState({ nome: nomes, idMedico: id, redirect: true });
            });
      });
  };

  render() {
    if (this.state.redirect) {
      this.setState({ redirect: false });
      return (
        <Redirect
          to={{
            pathname: "/ListaLocais",
            state: {
              idMedico: this.state.idMedico,
              nome: this.state.nome,
            },
          }}
        />
      );
    } else
      return (
        <div class="center-div">
          <img
            src="https://moldura-pop.s3.sa-east-1.amazonaws.com/imagens-proprietarias/99929074-co69H2-T4UCjdMLNVuRfvKVPmrNOjdKj-cropped-1x1-browser.png"
            class="img"
          ></img>
          <h2 class="login-h2">Login</h2>

          <input
            class="form-control"
            type="text"
            id="input"
            placeholder="CPF"
            onChange={this.escutadorDeInput}
            name="cpf"
          ></input>
          <input
            class="form-control"
            id="input2"
            type="text"
            placeholder="CRI"
            onChange={this.escutadorDeInput}
            name="senha"
          ></input>
          <button
            type="button"
            class="btn btn-light"
            id="buttonLogin"
            onClick={this.Login}
          >
            Login
          </button>
          <a href="http://localhost:3000/CadastroMedico">
            <button type="button" class="btn btn-light" id="buttonEsqueciSenha">
              Cadastra
            </button>
          </a>
          <button type="button" class="btn btn-light" id="buttonEsqueciSenha">
            Esqueci Senha
          </button>

          <style>
            {
              "body { background-image: url(https://ababas.com.br/wp-content/uploads/2019/08/2-dialab-bg.jpg); }"
            }
          </style>
        </div>
      );
  }
}

export default LoginMedico;
