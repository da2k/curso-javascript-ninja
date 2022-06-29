(function () {
  'use strict'; 

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



   class DOM {
     constructor(elements) {
       this.element = document.querySelectorAll(elements); 
     }
   }

 DOM.prototype.on = function on(eventType , callback) {
   Array.prototype.forEach(this.element , function(element) {
     element.addEventListener( eventType , callback , false );
   }); 
 } ; 

 DOM.prototype.off = function off( eventType , callback){ 
   Array.prototype.forEach(this.element , function(element){
     element.removeEventListener( eventType , callback , false ); 
   })} 

 DOM.prototype.get = function get () {
   return this.element; 
}; 


var $formCep = document.querySelector('[data-js="form-cep"]'); 
var $inputCEP = document.querySelector('[data-js="input-cep"]');
var $lagradouro = document.querySelector('[data-js="lagradouro"]'); 
var $bairro = document.querySelector('[data-js="bairro"]');
var $estado = document.querySelector('[data-js="estado"]');
var $cep = document.querySelector('[data-js="cidade"]'); 

$formCep.addEventListener('click', handleSubmitFormCep , false ); 
var ajax = new XMLHttpRequest(); 


function handleSubmitFormCep (event){ 
   event.defaultPrevented(); 
   var url =  getUrl(); 
   ajax.open( 'get' , url); 
   ajax.send(); 
   ajax.addEventListener('readystatechange', handleReadyStateChange); 
}


function getUrl () { 
   return 'http://cep.correiosControl.com.br/[cep].json'.replace(
    'CEP',
    cleanrCep()) 
} 


function handleReadyStateChange () { 
  if( isrequestOk()) 
    fillCepfilds(); 
    getMenssage('ok'); 
}

function isrequestOk () { 
  return ajax.readyState === 4 && ajax.status === 200; 
}

function fillCepfilds () { 
  var data = parseData();
   if (!data) 
     getMenssage('erro'); 
   console.log('DATA' , data );  
  var $lagradouro = document.querySelector('[data-js="lagradouro"]'); 
  var $bairro = document.querySelector('[data-js="bairro"]');
  var $estado = document.querySelector('[data-js="estado"]');
  var $cep = document.querySelector('[data-js="cidade"]');

  $lagradouro.get()[0].responseText = data.lagradouro;  
  $bairro.get()[0].responseText = data.lagradouro;  
  $estado.get()[0].responseText = data.uf;  
  $cep.get()[0].responseText = data.localidade;  
}

function parseData () { 
  result = null ; 
  try { 
    result = JSON.parse(ajax.responseText) ; 
  }
  catch(e) { 
    result = null; 
  }
  return result
}

function getMenssage(type) { 
  var cep = $cep.get()[0].value ; 
  var  mensagem = {  
    loading: "Buscando informações para o CEP [CEP]...", 
    ok: "Não encontramos o endereço para o CEP [CEP]." , 
    erro: "Endereço referente ao CEP [CEP]:"
  }
   var $status = new DOM ('[data-js"status"]') 
   $status.get()[0].responseText = mensagem[type]; 
}; 

})()
