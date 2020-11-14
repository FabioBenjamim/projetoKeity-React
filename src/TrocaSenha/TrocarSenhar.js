import React, { Component } from "react";
import "./TrocarSenha.css";

class TrocarSenha extends Component {
  render() {
    return (
      <div class="entrar">
        <form>
          <fieldset>
            <fieldset class="CPF">
              <div class="campo">
                <p>Insira os seus dados</p>
                <label for="usuario">CPF</label>
                <input
                  type="text"
                  id="usuario"
                  name="usuário"
                  style={{ width: "10em" }}
                />
              </div>

              <div class="campo">
                <label for="email">E-mail</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  style={{ width: "10em" }}
                />
              </div>
            </fieldset>
            <button class="botao" type="submit" name="botao">
              Enviar
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default TrocarSenha;
