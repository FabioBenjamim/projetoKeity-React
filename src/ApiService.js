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

      ConfiguraAgendas: body =>{
        return fetch('http://localhost:8080/agendas', {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: body
        })
      },

      criaAgenda: ( idConsultorio, idMedico ) =>{
        var formData = new FormData;
        formData.append("idConsultorio",idConsultorio);
        formData.append("idMedico", idMedico);
        var requestOptions = {
          method: 'PUT',
          body: formData,
          redirect: 'follow'
        };
        return fetch("http://localhost:8080/consultorios/agenda", requestOptions)
      },

      BuscaidAgenda: id =>{
        return fetch('http://localhost:8080/medicos/'+ `${id}`, {
          method: 'GET',
        })
      },

      HoraLivreMedico: () =>{
        return fetch('http://localhost:8080/horarios/1', {
          method: 'GET',
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