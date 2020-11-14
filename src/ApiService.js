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

      EscolheHorario: (idHorario, nomePaciente, idPaciente) =>{
        return fetch("http://localhost:8080/horarios/"+`${idHorario}`+'/'+`${nomePaciente}`+'/'+`${idPaciente}`,{
          method: "PUT"
        })
      },

      lastLogin: id =>{
        return fetch('http://localhost:8080/lastLogin/'+ `${id}`, {
          method: 'GET',
        })
      },

      BuscaidAgenda: id =>{
        return fetch('http://localhost:8080/medicos/'+ `${id}`, {
          method: 'GET',
        })
      },
      BuscaPorEspecializade: especializacao =>{
        return fetch('http://localhost:8080/medicos/buscaMedico/'+ `${especializacao}`, {
          method: 'GET',
        })
      },

      buscaConsultorios: () =>{
        return fetch('http://localhost:8080/consultorios', {
          method:'GET'
        })
      },

      Login: body =>{
        return fetch('http://localhost:8080/pacientes/autentica',{
        method:'POST',
        headers: { 'content-type': 'application/json' },
        body: body
      })
      },

      LoginMedico: body =>{
        return fetch('http://localhost:8080/medicos/autentica',{
        method:'POST',
        headers: { 'content-type': 'application/json' },
        body: body
      })
      },

      HoraLivreMedico: (id) =>{
        return fetch('http://localhost:8080/agendas', {
          method: 'GET',
        })
      },

      HoraLivreMedico1: (id) =>{
        return fetch('http://localhost:8080/horarios/'+ id, {
          method: 'GET',
        })
      },
      
      paciente:(cpf) =>{
        var formData = new FormData;
        formData.append("cpf", cpf)
        var requestOptions = {
          method: 'POST',
          body: formData,
          redirect: 'follow'
        };
        return fetch("http://localhost:8080/pacientes/paciente1", requestOptions)
      },


      pegaConsultas: (idPaciente)=>{
        return fetch('http://localhost:8080/horarios/paciente/'+ `${idPaciente}`)
      },
      
      medico:(cpf) =>{
        var formData = new FormData;
        formData.append("cpf", cpf)
        var requestOptions = {
          method: 'POST',
          body: formData,
          redirect: 'follow'
        };
        return fetch("http://localhost:8080/medicos/medico1", requestOptions)
      },

      buscaMedico: (id) => {
        var formData = new FormData;
        formData.append("idMedico", id);
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