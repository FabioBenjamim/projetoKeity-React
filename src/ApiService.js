const ApiService = {
    cadastraPaciente: body =>{
        return fetch('http://localhost:8080/pacientes', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: body
          })
    },

    cadastraMedico: body =>{
        return fetch('http://localhost:8080/pacientes', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: body
          })
    }
}