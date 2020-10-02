import React, {Component} from 'react';
import './CadastroMedico.css';

class CadastroMedico extends Component {

  render () {
    return (
      <div className="CadastroMedico">
        <header className="App-header">
        </header>
          <form>
            <fieldset>
              <fieldset class="grupo">
                <div class="campo">
                    <label for="nome">Nome</label>
                    <input type="text" id="nome" name="nome" style={{width: '10em'}} />
                    
                </div>

                <div class="campo">
                    <label for="sobrenome">Sobrenome</label>
                    <input type="text" id="sobrenome" name="sobrenome" style={{width: '10em'}} />
                </div>
                </fieldset>

                <fieldset class="grupo">
                <div class="campo">
                    <label for="cpf">CPF</label>
                    <input type="text" id="cpf" name="cpf" style={{width: '10em'}} />
                </div>

                <div class="campo">
                  <label>Sexo</label>
                    <label>
                        <input type="radio" name="sexo" value="masculino"/> Masculino
                    </label>
                    <label>
                        <input type="radio" name="sexo" value="feminino"/> Feminino
                  </label>
                </div>

                </fieldset>
                <fieldset class="grupo">
                <div class="campo">
                    <label for="cri">CRI</label>
                    <input type="text" id="cri" name="cri" style={{width: '10em'}} />
                </div>
                <div class="campo">
                    <label for="cro">CRO</label>
                    <input type="text" id="cro" name="cro" style={{width: '10em'}} />
                </div>
                </fieldset>

                <fieldset class="grupo">
                <div class="campo">
                    <label for="especializacao">Especialização</label>
                    <input type="text" id="especializacao" name="especializacao" style={{width: '21.5em'}} />
                </div>
                </fieldset>


            <fieldset class="grupo">
                <div class="campo">
                    <label for="email">E-mail</label>
                    <input type="text" id="email" name="email" style={{width: '21.5em'}} />
                </div>
            </fieldset>
            
            <fieldset class="grupo">
            <div class="campo">
                <label for="telefone">Telefone</label>
                <input type="text" id="telefone" name="telefone" style={{width: '10em'}}/>
            </div>
            </fieldset>

            <fieldset class="grupo">
                <div class="campo">
                    <label for="cep">CEP</label>
                    <input type="text" id="cep" name="cep" style={{width:'5em'}}/>
                </div>

                <div class="campo">
                    <label for="endereco">Endereço</label>
                    <input type="text" id="endereco" name="endereco" style={{width:'10em'}} />
                </div>

                <div class="campo">
                    <label for="numero">Número</label>
                    <input type="text" id="numero" name="numero" style={{width:'3em'}} />
                </div>

            </fieldset>

            <fieldset class="grupo">
                <div class="campo">
                    <label for="complemento">Complemento</label>
                    <input type="text" id="complemento" name="complemento" style={{width:'21.5em'}} />
                </div>
              </fieldset>

            <fieldset class="grupo">
                <div class="campo">
                    <label for="cidade">Cidade</label>
                    <input type="text" id="cidade" name="cidade" style={{width:'17em'}} />
                </div>
                <div class="campo">
                    <label for="estado">Estado</label>
                    <select name="estado" id="estado">
                        <option value="">--</option>
                        <option value="PR">SP</option>
                    </select>
                </div>
            </fieldset>
            <fieldset class="grupo">
            <button type="submit" name="submit" >Enviar </button>
           </fieldset>
       </fieldset>
    </form>
  </div>
    );
  }
}

export default CadastroMedico;
