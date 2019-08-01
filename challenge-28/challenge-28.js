  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  $input = document.querySelector('input')
  $divStatus = document.querySelector('#status')
  $spanAviso = document.querySelector('#aviso')
  $btn = document.querySelector('.btn')

  $divDados = document.querySelector('#info')
  
  $input.addEventListener('input', valida)
  $btn.addEventListener('click', busca)


  function valida(){
    let cep = this.value

    if(cep.length == 5){
      this.value +='-'
    }

    if(cep.length <9){
      $divStatus.classList.remove("d-block")
      $divDados.classList.value = "list-group list-group-flush d-none"
      $btn.setAttribute("disabled","")
    }

    if(cep.length == 9){
      let regex = /^\d{5}-\d{3}$/gmi

      if(cep.match(regex)){
        console.log('CEP válido')

        $divStatus.classList.value = "alert alert-info d-block mt-2 p-1"
        $spanAviso.innerText = 'CEP VÁLIDO'
        $btn.removeAttribute("disabled")

      }else{
        console.log('Cep inválido')
        $divDados.classList.value = "list-group list-group-flush d-none"
        $divStatus.classList.value = "alert alert-danger d-block mt-2 p-1"
        $spanAviso.innerText = 'CEP INVÁLIDO'
      }
    }
  }


  function busca(){
    let cep = $input.value.replace("-","")
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    let request = new XMLHttpRequest()
        request.open('GET', url)
    
    

        request.addEventListener('readystatechange', function(){
          

          console.log(request.readyState)

          if(request.readyState < 4){
              $divStatus.classList.value = "alert alert-warning d-block mt-2 p-1"
              $spanAviso.innerText = 'CARREGANDO...'
          
            }else if(request.readyState == 4){  
              let dados = JSON.parse(request.responseText);

              if(!dados.erro){

                  $divStatus.classList.value = "alert alert-success d-block mt-2 p-1"
                  $spanAviso.innerText = 'CARREGADO COM SUCESSO'

                  $divDados.classList.value = "list-group list-group-flush d-block"
                  $liCep = document.querySelector('#cep')
                  $liLog = document.querySelector('#log')
                  $liBai = document.querySelector('#bai')
                  $liCid = document.querySelector('#cid')
                  $liUf = document.querySelector('#uf')

                  $liCep.innerText = 'CEP: '+dados.cep
                  $liLog.innerText = 'Logradouro: '+dados.logradouro
                  $liBai.innerText = 'Bairro: '+dados.bairro
                  $liCid.innerText = 'Cidade: '+dados.localidade

              }else{

                $divStatus.classList.value = "alert alert-dark d-block mt-2 p-1"
                $spanAviso.innerText = 'CEP NÃO ENCONTRADO'
              }

            }

    })

    request.send(null)

    console.log('Buscando cep: '+cep+' na url: '+url)
  }