(function(win, doc) {
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
  - Essa requisição trará dados de um CEP em JSON. Preencha os campos na tela
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
    this.element = doc.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventName, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(eventName, callback, false);
    });
  };

  DOM.prototype.off = function off(eventName, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(eventName, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    Array.prototype.forEach.apply(this.element, arguments);
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

  function getObjType(obj) {
    return Object.prototype.toString.call(obj);
  }

  DOM.prototype.isArray = function isArray(obj) {
    return getObjType(obj) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(obj) {
    return getObjType(obj) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(obj) {
    return getObjType(obj) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(obj) {
    return getObjType(obj) === '[object Number]';
  };

  DOM.prototype.isString = function isString(obj) {
    return getObjType(obj) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(obj) {
    return getObjType(obj) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(obj) {
    return getObjType(obj) === '[object Null]'
    || getObjType(obj) === '[object Undefined]';
  };

  var $formCep = new DOM('[data-js="form-cep"]');
  var $inputCep = new DOM('[data-js="input-cep"]');
  var $status = new DOM('[data-js="status"]');
  var ajax = new XMLHttpRequest();

  $formCep.on('submit', handleFormSubmit);

  function handleFormSubmit(e) {
    e.preventDefault();
    ajax.open('GET', getClearUrl());
    ajax.send();
    getMsg('loading');
    ajax.addEventListener('readystatechange', handleStateChange);
  }

  function getClearUrl() {
    return 'https://viacep.com.br/ws/[CEP]/json/'.replace('[CEP]', $inputCep.get()[0].value.replace(/\D+/g, ''));
  }

  function handleStateChange() {
    if(isRequestOk()) {
      getMsg('ok');
      fillCepFields();
    }
  }

  function getMsg(type) {
    var messages = {
      loading: 'Buscando informações para o CEP [CEP]',
      error: 'Não encontramos o endereço para o CEP [CEP]',
      ok: 'Endereço referente ao CEP [CEP]'
    };
    $status.get()[0].textContent = messages[type];
  }

  function fillCepFields() {
    var data = parseData();
    if(!data) {
      getMsg('error');
      return console.log('data error', data);
    }
    appendToField('[data-js="field-logradouro"]', data.logradouro);
    appendToField('[data-js="field-bairro"]', data.bairro);
    appendToField('[data-js="field-estado"]', data.uf);
    appendToField('[data-js="field-cidade"]', data.localidade);
    appendToField('[data-js="field-cep"]', data.cep);
  }

  function parseData() {
    var result;
    try {
      result = JSON.parse(ajax.responseText);
    }
    catch(e) {
      result = null;
    }
    return result;
  }

  function appendToField(selectedField, dataInfo) {
    var field = new DOM(selectedField);
    field.get()[0].appendChild(createNewInfoP(dataInfo));
  }

  function createNewInfoP(text) {
    var newP = doc.createElement('p');
    newP.textContent = text;
    return newP;
  }

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})(window, document);
