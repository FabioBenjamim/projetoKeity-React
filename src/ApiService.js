const ApiService = {
    cadastraPaciente: body => {
      return fetch('http://localhost:8080/pacientes', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: body
      })
    },

    cadastraMedico: body => {
        return fetch('http://localhost:8080/medicos', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: body
        })
      },

      buscaMedico: () => {
        var formData = new FormData;
        formData.append("idMedico", "1");
        var requestOptions = {
          method: 'POST',
          body: formData,
          redirect: 'follow'
        };
        return fetch("http://localhost:8080/medicos/medico", requestOptions)
      },
      criaConsultorio: body => {
        return fetch('http://localhost:8080/medicos/consultorios ', {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: body
        })
      }
}
export default ApiService;