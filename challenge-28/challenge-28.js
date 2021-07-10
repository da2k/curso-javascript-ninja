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
  "https://viacep.com.br/ws/[CEP]/json/"  https://apicep.com/api-de-consulta/,
  onde [CEP] será o CEP passado
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

  let form = document.querySelector('#cepFind')
  let cep = document.querySelector('#cep')
  let bairro = document.querySelector('#bairro')
  let cidade = document.querySelector('#cidade')
  let estado = document.querySelector('#estado')
  let log = document.querySelector('#log')
  let req = document.querySelector('#req')
  let busca = document.querySelector('#buscaCep')
  let clear = document.querySelector('#apagarCampos')
  let ajax = new XMLHttpRequest();
  form.addEventListener('submit', findCep)


  function findCep(event){
    event.preventDefault();

    let url =  getUrl();

    // ajax.open('GET',url,true);
    // ajax.send();

    // ajax.addEventListener('readystatechange', fillCep);

    fetch(url).then((resp) => resp.json()).then(function(data){

      emptyCEP()

      if(data.status != 200){
        return req.value = data.message
      }
      fillCep(data)

    }).catch(function (error){
      console.log(error);
    })




  }

function fillCep(itens){
  //console.log(JSON.parse(ajax.responseText))
  //var data  = parseData()
  //console.log(data)
 //let ajaxParseado = JSON.parse(ajax.response)
    // console.log(JSON.parse(ajax.response)['city'])
    // console.log(ajaxParseado)

   cep.value = itens.code
   bairro.value = itens.district
   cidade.value = itens.city
   estado.value = itens.state
   log.value = itens.address
   req.value = itens.statusText

}

function emptyCEP(){
     cep.value = ''
  bairro.value = ''
  cidade.value = ''
  estado.value = ''
     log.value = ''
     req.value = ''
}


function getUrl(){
  return replaceCep('https://ws.apicep.com/cep.json?code=[CEP]')
 // let busca = document.querySelector('#buscaCep')
  //let urlAdd = urlApi + busca.value
}


function clearCEP(){
  return busca.value.replace(/\D+/g,'')
}


function replaceCep(message){
  return message.replace('[CEP]', clearCEP())
}


function parseData(){
  let result = JSON.parse(ajax.responseText);
  return result
}

