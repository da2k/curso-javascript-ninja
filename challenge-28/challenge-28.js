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
(function () {
  'use strict';

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function (eventName, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(eventName, callback, false);
    });
  };

  DOM.prototype.off = function (eventName, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(eventName, callback, false);
    });
  };

  DOM.prototype.get = function () {
    return this.element;
  };

  DOM.prototype.forEach = function () {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function () {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function () {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function () {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function () {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function () {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function () {
    return Array.prototype.some.apply(this.element, arguments);
  };

  function is(obj) {
    return Object.prototype.toString.call(obj);
  }

  DOM.isArray = function (obj) {
    return is(obj) === '[object Array]';
  };

  DOM.isObject = function (obj) {
    return is(obj) === '[object Object]';
  };

  DOM.isFunction = function (obj) {
    return is(obj) === '[object Function]';
  };

  DOM.isNumber = function (obj) {
    return is(obj) === '[object Number]';
  };

  DOM.isString = function (obj) {
    return is(obj) === '[object String]';
  };

  DOM.isBoolean = function (obj) {
    return is(obj) === '[object Boolean]';
  };

  DOM.isNull = function (obj) {
    return is(obj) === '[object Null]' || is(obj) === '[object Undefined]';
  };

  var $form = new DOM('[data-js="form"]');
  var $cep = new DOM('[data-js="cep"]');
  var $status = new DOM('[data-js="status"]');
  var $code = new DOM('[data-js="code"]');
  var $state = new DOM('[data-js="state"]');
  var $city = new DOM('[data-js="city"]');
  var $district = new DOM('[data-js="district"]');
  var $address = new DOM('[data-js="address"]');

  var ajax = new XMLHttpRequest();
  var data;
  var result;
  var messages;

  function clearCep() {
    return $cep.get()[0].value.replace(/\D/g, '');
  }

  function replaceCep(text) {
    return text.replace('<code>', clearCep());
  }

  function sanitizeUrl() {
    return replaceCep('http://apps.widenet.com.br/busca-cep/api/cep/<code>.json');
  }

  function getMessages(type) {
    messages = {
      loading: replaceCep('Buscando informações para o CEP <code>...'),
      ok: replaceCep('Endereço referente ao CEP <code>:'),
      error: replaceCep('Não encontramos o endereço para o CEP <code>.')
    };
    $status.get()[0].textContent = messages[type];
  }

  function isRequestReady() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function parseData() {
    try {
      result = JSON.parse(ajax.responseText);
    } catch (error) {
      result = null;
    }
    return result;
  }

  function clearData() {
    return {
      code: '-',
      state: '-',
      city: '-',
      district: '-',
      address: '-'
    };
  }

  function fillResponse() {
    data = parseData();
    if (data.status === 0) {
      getMessages('error');
      data = clearData();
    }
    $code.get()[0].textContent = data.code;
    $state.get()[0].textContent = data.state;
    $city.get()[0].textContent = data.city;
    $district.get()[0].textContent = data.district;
    $address.get()[0].textContent = data.address;
  }

  function handleReadyStateChange() {
    if (isRequestReady) {
      getMessages('ok');
      fillResponse();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    ajax.open('GET', sanitizeUrl());
    ajax.send();
    getMessages('loading');
    ajax.addEventListener('readystatechange', handleReadyStateChange);
  }

  $form.on('submit', handleSubmit, false);
}());
