(function (win, doc) {
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
  // DOM library
  function DOM(seletorCSS) {
    this.elements = doc.querySelectorAll(seletorCSS);
  };

  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.elements, function (element) {
      element.addEventListener(eventType, callback, false);
    })
  };

  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.elements, function (element) {
      element.removeEventListener(eventType, callback, false);
    })
  };

  DOM.prototype.get = function get() {
    return this.elements;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.elements, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.elements, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.elements, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.elements, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.elements, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.elements, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.elements, arguments);
  };

  DOM.prototype.isArray = function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
  };

  DOM.prototype.isString = function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(obj) {
    return Object.prototype.toString.call(obj) === '[object Null]'
      || Object.prototype.toString.call(obj) === '[object Undefined]';
  };

  // codigo inicial
  var ajax = new XMLHttpRequest();
  var $formCep = new DOM('[data-js-id="form-cep"]');
  var $inputCep = new DOM('[data-js-id="input-cep"]');

  $formCep.on('submit', formSubmit);

  function formSubmit(evt) {
    evt.preventDefault();
    ajax.addEventListener('readystatechange', handleReadyStateChange);
    ajax.open('GET', getUrl());
    ajax.send();
  }
  function getUrl() {
    return 'https://viacep.com.br/ws/' + getCep() + '/json/';
  }
  function getCep() {
    return $inputCep.get()[0].value.match(/\d/g).join('');
  }
  function handleReadyStateChange() {
    if (ajax.readyState === 4 && ajax.status === 200) {
      preencherCampos(parseResponse(ajax.responseText));
    }
  };

  function parseResponse(str) {
    var result;
    try {
      result = JSON.parse(str)
    } catch (e) {
      result = {
        logradouro: ' - ',
        bairro: ' - ',
        uf: ' - ',
        localidade: ' - ',
        cep: ' - ',
      }
    }
    return result;
  };

  function preencherCampos(objValores) {
    setCampo('logradouro', objValores.logradouro);
    setCampo('bairro', objValores.bairro);
    setCampo('estado', objValores.uf);
    setCampo('cidade', objValores.localidade);
    setCampo('cep', objValores.cep);
  }
  function setCampo(campo, valor) {
    var seletor = '[data-js-id="' + campo + '"]'
    console.log(seletor);

    var $campo = new DOM(seletor);
    $campo.get()[0].value = valor;
    console.log($campo.get()[0]);
  }



})(window, document);
