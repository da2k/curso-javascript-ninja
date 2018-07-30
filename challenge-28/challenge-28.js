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

//"https://viacep.com.br/ws/[CEP]/json/"

(function(){

  'use strict'

  function DOM(string){
    this.element = document.querySelectorAll(string);
  }

  DOM.prototype.on = function on(event, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.addEventListener(event, callback, false);
    });
  }

  DOM.prototype.off = function off(event, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.removeEventListener(event, callback, false);
    });
  }

  DOM.prototype.get = function get(){
      return this.element;
  }

  DOM.prototype.forEach = function forEach(){
    return Array.prototype.forEach.apply(this.element, arguments);
  }

  DOM.prototype.map = function map(){
    return Array.prototype.map.apply(this.element, arguments);
  }

  DOM.prototype.filter = function filter(){
    return Array.prototype.filter.apply(this.element, arguments);
  }

  DOM.prototype.reduce = function reduce(){
    return Array.prototype.reduce.apply(this.element, arguments);
  }

  DOM.prototype.reduceRight = function reduceRight(){
    return Array.prototype.reduceRight.apply(this.element, arguments);
  }

  DOM.prototype.every = function every(){
    return Array.prototype.every.apply(this.element, arguments);
  }

  DOM.prototype.some = function some(){
    return Array.prototype.some.apply(this.element, arguments);
  }

  DOM.prototype.isArray = function isArray(params){
    return Object.prototype.toString.call(params) === '[object Array]';
  }

  DOM.prototype.isObject = function isObject(params){
    return Object.prototype.toString.call(params) === '[object Object]';
  }

  DOM.prototype.isFunction = function isFunction(params){
    return Object.prototype.toString.call(params) === '[object Function]';
  }

  DOM.prototype.isString = function isString(params){
    return Object.prototype.toString.call(params) === '[object String]';
  }

  DOM.prototype.isNumber = function isNumber(params){
    return Object.prototype.toString.call(params) === '[object Number]';
  }

  DOM.prototype.isBoolean = function isBoolean(params){
    return Object.prototype.toString.call(params) === '[object Boolean]';
  }

  DOM.prototype.isNull = function isNull(params){
    return Object.prototype.toString.call(params) === '[object Null]'
    || Object.prototype.toString.call(params) === '[object Undefined]';
  }

  var $form = new DOM('[data-js="form"]');
  var $inputCEP = new DOM ('[data-js="input-cep"]')
  var $street = new DOM('[data-js="street"]')
  var $neighboorhood = new DOM('[data-js="neighboorhood"]')
  var $city = new DOM('[data-js="city"]')
  var $state = new DOM('[data-js="state"]')
  var $message = new DOM('[data-js="return-message"]')
  $form.on('submit', handleSubmitFormCEP);
  var ajax = new XMLHttpRequest();

  function handleSubmitFormCEP(event) {
    event.preventDefault();
    var url = getUrl();
    ajax.open('GET', url)
    ajax.send();
    getMessage('loading');
    ajax.addEventListener('readystatechange', handleReadyStateChange);
  }
  function getUrl(){
    return "https://viacep.com.br/ws/[CEP]/json/".replace(
      '[CEP]', clearCEP())
  }

  function clearCEP(){
    return $inputCEP.get()[0].value.replace(/\D/g, '');
  }

  function handleReadyStateChange() {
    if ( isRequestOk()){
      getMessage('ok');
      fillFields();
    }
  }

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function fillFields() {
    var data = parseData();
    if(!data)
      getMessage('error');

    console.log(data)
    $street.get()[0].textContent = data.logradouro;
    $neighboorhood.get()[0].textContent = data.bairro;
    $city.get()[0].textContent = data.localidade;
    $state.get()[0].textContent = data.uf;

  }

  function parseData() {
    var result;
    try {
      result = JSON.parse(ajax.responseText);
    } catch (e) {
      result = null;
    }
    return result;
  }

  function getMessage(type) {
    var cep = clearCEP();
    $message.get()[0].textContent = {
      loading: "Buscando informações para o CEP [CEP]...".replace('[CEP]', cep),
      ok: "Endereço referente ao CEP [CEP]:".replace('[CEP]', cep),
      error: "Não encontramos o endereço para o CEP [CEP].".replace('[CEP]', cep)
    }[type]
  }

})();
