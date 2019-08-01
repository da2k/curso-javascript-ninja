
//ajax.readyState
//ajax.readyStatechange
//ajax.status  HTTP Status (200, 403, 404, 500, etc)


let req = new XMLHttpRequest()
    req.open('GET', 'https://viacep.com.br/ws/41387180/json/')
    req.send(null)

    

    req.onload = function(){
        var dados = JSON.parse(req.responseText)
        if(dados.erro){
            console.log('CEP INVÁLIDO')
            return
        }

        for(key in dados){
            console.log(key+': '+dados[key])
        }

        console.log(req)
    }



