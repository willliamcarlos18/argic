function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.setRequestHeader('token', '59a5745e4c378017161d056be1c85df468285d82')
    request.send(JSON.stringify(body))

    request.onload = function () {
        console.log(this.responseText)
    }

    return request.responseText
}


function cadastraUsuario() {
    event.preventDefault()
    let url = "https://argic.cvcrm.com.br/api/cvio/lead"

    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value
    let empreendimento = document.getElementById("empreendimento").value
    let motivo = document.getElementById("motivo").value

    console.log(nome)
    console.log(email)
    console.log(telefone)
    console.log(empreendimento)
    console.log(motivo)


    body = {

        "nome": nome,
        "email": email,
        "telefone": telefone,
        "empreendimento": empreendimento,
        "motivo": motivo


    }

    fazPost(url, body)
}