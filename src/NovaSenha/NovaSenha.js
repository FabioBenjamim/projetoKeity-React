import React, { Component } from "react";
import "./NovaSenha.css";

class NovaSenha extends Component {
  render() {
    return (
      <div class="entrar">
        <form>
          <fieldset>
            <fieldset class="CPF">
              <div class="campo">
                <label for="usuario">Insira nova senha</label>
                <input
                  type="text"
                  id="usuario"
                  name="usuário"
                  style={{ width: "10em" }}
                />
              </div>

              <div class="campo">
                <label for="email">Repetir nova senha</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  style={{ width: "10em" }}
                />
              </div>
            </fieldset>
            <button class="botao" type="submit" name="botao">
              Redefinir
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default NovaSenha;
