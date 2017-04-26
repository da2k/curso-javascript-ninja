(function() {
  'use strict';




  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.getDOMElements = function getDOMElements(elements) {
    return document.querySelectorAll(elements);
  };

  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  //challenge 27

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  };


  DOM.prototype.isArray = function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(param) {
    return Object.prototype.toString.call(param) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(param) {
    return Object.prototype.toString.call(param) === '[object Number]';
  };

  DOM.prototype.isString = function isString(param) {
    return Object.prototype.toString.call(param) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(param) {
    return Object.prototype.toString.call(param) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(param) {
    return Object.prototype.toString.call(param) === '[object Null]' || Object.prototype.toString.call(param) === '[Object Undefined]';
  };


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
  "http://cep.correiocontrol.com.br/[CEP].json", onde [CEP] será o CEP passado
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
  
  
  https://viacep.com.br/ws/[CEP]/json/
  
  */


  /*var ajax = new XMLHttpRequest();
  ajax.open( 'GET', 'http://cep.correiocontrol.com.br/[CEP].json');
  ajax.send();*/

  var $formCep = new DOM('[data-js="form-cep"]');
  var $campoCep = new DOM('[data-js="input-cep"]');
  var $button = new DOM('[data-js="button"]');
  
  
  
  $formCep.on('submit', handleSubmitForCEP);
  var ajax = new XMLHttpRequest();

  function handleSubmitForCEP(event) {
    event.preventDefault();
    var url = 'https://viacep.com.br/ws/[CEP]/json/'.replace('[CEP]',$campoCep.get()[0].value);
    ajax.open('GET', 'https://viacep.com.br/ws/[CEP]/json/');
    ajax.send();
    ajax.addEventListener('readyStateChange', handleReadyStateChange);
  }

  function handleReadyStateChange() {
    if( ajax.readyState == 4 && ajax.status == 200 ){
      console.log('Popular formulário', ajax.responseText);
    }
    console.log('carregando');
  }
})();
