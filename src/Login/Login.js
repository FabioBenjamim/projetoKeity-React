import React, { Component } from "react";
import ApiService from "../Service/ApiService";
import "./Login.css";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idPaciente: 0,
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
    ApiService.Login(JSON.stringify(this.state))
      .then((res) => res.text())
      .then((result) => {
        if (result === "true")
          ApiService.paciente(this.state.cpf)
            .then((res) => res.text())
            .then((result) => {
              const idPacientes = JSON.parse(result).idPaciente;
              const nomes = JSON.parse(result).nome;
              this.setState({
                redirect: true,
                nome: nomes,
                idPaciente: idPacientes,
              });
              console.log(this.state);
            });
      });
  };

  render() {
    if (this.state.redirect) {
      this.setState({ redirect: false });
      return (
        <Redirect
          to={{
            pathname: "/HomePaciente",
            state: {
              nome: this.state.nome,
              idPaciente: this.state.idPaciente,
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
            placeholder="RG"
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
          <a href="http://localhost:3000/CadastroPaciente">
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

export default Login;
