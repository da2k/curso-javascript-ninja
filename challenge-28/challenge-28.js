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
  https://apicep.com/api-de-consulta/, onde [CEP] será o CEP passado
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
 
 function DOM(elements) {
  this.element = document.querySelectorAll(elements)
}

DOM.prototype.on = function(event, callback){
  Array.prototype.map.call(this.element, function(element){
      element.addEventListener(event, callback);
  });
}

DOM.prototype.off = function(event, callback){
  Array.prototype.map.call(this.element, function(element) {
    element.removeEventListener(event,  callback, false);
  }
)}

DOM.prototype.getDomElements = function() {
  return this.element;
}

DOM.prototype.forEach = function() {
  return Array.prototype.forEach.apply( this.element, arguments );
}

DOM.prototype.map = function() {
  return Array.prototype.map.apply( this.element, arguments );
}

DOM.prototype.filter = function() {
  return Array.prototype.filter.apply( this.element, arguments );
}

DOM.prototype.reduce = function() {
  return Array.prototype.reduce.apply( this.element, arguments );
}

DOM.prototype.reduceRight = function() {
  return Array.prototype.reduceRight.apply( this.element, arguments );
}

DOM.prototype.every = function() {
  return Array.prototype.every.apply( this.element, arguments );
}

DOM.prototype.some = function() {
  return Array.prototype.some.apply( this.element, arguments );
}

/*
Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.
@@ -19,3 +64,42 @@ Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

DOM.isArray= function(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}

DOM.isObject  = function(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

DOM.isFunction = function(value) {
  return Object.prototype.toString.call(value) === '[object Function]';
}

DOM.isNumber = function(value){
  return Object.prototype.toString.call(value) === '[object Number]';
}

DOM.isString = function(value){   
  return Object.prototype.toString.call(value) === '[object String]';
}

DOM.isBollean = function(value) {
  return Object.prototype.toString.call(value) === '[object Bollean]';
}

DOM.isNull = function(value){ 
  return Object.prototype.toString.call(value) === '[object Null]' || 
  Object.prototype.toString.call(value) === '[object Undefined]';
}

const $formCep = new DOM('[data-js="form-cep"]');
const $inputCep = new DOM('[data-js="input-cep"]');
const $address = new DOM('[data-js="address"]');
const $district = new DOM('[data-js="district"]');
const $state = new DOM('[data-js="state"]');
const $city = new DOM('[data-js="city"]');
const $code = new DOM('[data-js="code"]');
const $status = new DOM('[data-js="status"]');
const ajax = new XMLHttpRequest();

$formCep.on('submit', handleSubmitFormCep); 

function handleSubmitFormCep(event) {
  event.preventDefault();
  
  let url = 'https://ws.apicep.com/cep/[cepCode].json'.replace('[cepCode]', $inputCep.getDomElements()[0].value)

  ajax.open('GET', url );
  ajax.send();
  getMessage('loading');
  ajax.addEventListener('readystatechange', handleReadyStateChange);
}

function handleReadyStateChange(){
  if(isRequestOk()) {
    fillCepFields();
    getMessage('ok');
  }
 
}

function isRequestOk(){
   return ajax.readyState === 4 && ajax.status === 200; 
}

function fillCepFields() {
  const data = JSON.parse(ajax.responseText);

  console.log(data);
  $address.getDomElements()[0].textContent = data.address;
  $district.getDomElements()[0].textContent = data.district;
  $state.getDomElements()[0].textContent = data.state;
  $city.getDomElements()[0].textContent = data.city;
  $code.getDomElements()[0].textContent = data.code;

}

function getMessage(type) {
  const messages =  {
    loading: 'Buscando informações para o CEP',
    ok: 'Requisição realizada com sucesso', 
    error: 'Não encontramos o endereço para o CEP.'
  };
  
  $status.getDomElements()[0].textContent = messages[type];
}
