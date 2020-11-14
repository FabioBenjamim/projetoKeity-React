import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Horarios = (props) => {
  const horas = props.horarios.map((hora) => {
    return (
      <tr key={hora.id}>
        <td> {hora.hora} </td>
        <td> {hora.pacienteSeg}</td>
        <td> {hora.pacienteTer}</td>
        <td> {hora.pacienteQua}</td>
        <td> {hora.pacienteQui}</td>
        <td> {hora.pacienteSex}</td>
        <td> {hora.pacienteSab}</td>
      </tr>
    );
  });

  return (
    <Fragment>
      <tbody>{horas}</tbody>
    </Fragment>
  );
};

class AgendaLocalCorpo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horarios: [
        {
          id: 1,
          hora: "7:00",
          pacienteSeg: "Jailson",
          pacienteTer: "Claudio",
          pacienteQua: "Maria",
          pacienteQui: "-",
          pacienteSex: "-",
          pacienteSab: "-",
        },
        {
          id: 2,
          hora: "7:15",
          pacienteSeg: "Mauricio",
          pacienteTer: "-",
          pacienteQua: "-",
          pacienteQui: "Jeferson",
          pacienteSex: "-",
          pacienteSab: "Douglas",
        },
        {
          id: 3,
          hora: "7:30",
          nome: "Ferdinando",
          pacienteSeg: "Mauricio",
          pacienteTer: "-",
          pacienteQua: "Rick",
          pacienteQui: "Viniribs",
          pacienteSex: "Marta",
          pacienteSab: "-",
        },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <Horarios horarios={this.state.horarios} />
      </Fragment>
    );
  }
}
export default AgendaLocalCorpo;
