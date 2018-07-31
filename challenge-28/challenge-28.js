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


  function DOM(elements) {
    this.elements = this.getDOMElements(elements)
  }

  DOM.prototype.getDOMElements = function getDOMElements(elements) {
    return doc.querySelectorAll(elements)
  }

  DOM.prototype.on = function (event, callback) {
    Array.prototype.forEach.call(this.elements, function (element) {
      element.addEventListener(event, callback, false)
    })
  }

  DOM.prototype.off = function (event, callback) {
    Array.prototype.forEach.call(this.elements, function (element) {
      element.removeEventListener(event, callback, false)
    })
  }

  DOM.prototype.get = function () {
    return this.elements
  }

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.elements, arguments)
  }

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.elements, arguments)
  }

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.elements, arguments)
  }

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.elements, arguments)
  }

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.elements, arguments)
  }

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.elements, arguments)
  }

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.elements, arguments)
  }

  DOM.prototype.isArray = function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]'
  }

  DOM.prototype.isObject = function isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]'
  }

  DOM.prototype.isFunction = function isFunction(param) {
    return Object.prototype.toString.call(param) === '[object Function]'
  }

  DOM.prototype.isNumber = function isNumber(param) {
    return Object.prototype.toString.call(param) === '[object Number]'
  }

  DOM.prototype.isString = function isString(param) {
    return Object.prototype.toString.call(param) === '[object String]'
  }

  DOM.prototype.isBoolean = function isBoolean(param) {
    return Object.prototype.toString.call(param) === '[object Boolean]'
  }

  DOM.prototype.isNull = function isNull(param) {
    return Object.prototype.toString.call(param) === '[object Null]' ||
      Object.prototype.toString.call(param) === '[object Undefined]'
  }

  var $formCEP = new DOM('[data-js="form-cep"]');
  var $inputCEP = new DOM('[data-js="input-cep"]').get()[0];
  var $logradouro = new DOM('[data-js="logradouro"]').get()[0];
  var $bairro = new DOM('[data-js="bairro"]').get()[0];
  var $cidade = new DOM('[data-js="cidade"]').get()[0];
  var $estado = new DOM('[data-js="estado"]').get()[0];
  var $cep = new DOM('[data-js="cep"]').get()[0];
  var $status = new DOM('[data-js="status"]').get()[0];
  var ajax = new XMLHttpRequest();

  $formCEP.on('submit', handleSubmitFormCEP);

  function handleSubmitFormCEP(event) {
    event.preventDefault();
    var url = getUrl();
    ajax.open('GET', url);
    ajax.send();
    getMessage('loading');
    ajax.addEventListener('readystatechange', handleReadyStateChange);
  }

  function handleReadyStateChange() {
    if (isRequestOK()) {
      getMessage('ok');
      fillCEPFields();
    } else {
      getMessage('error');
      fillFields();
    }
  }

  function getUrl() {
    var url = 'https://viacep.com.br/ws/[CEP]/json/';
    return replaceCEP(url);
  }

  function clearCEP() {
    return $inputCEP.value.replace(/\D/g, '');
  }

  function isRequestOK() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function fillCEPFields() {
    var data = parseData();
    if (!data) {
      getMessage('error');
      fillFields();
      return
    }
    fillFields(
      data.logradouro,
      data.bairro,
      data.localidade,
      data.uf,
      data.cep
    );
  }

  function fillFields(logradouro = '---', bairro = '---', cidade = '---', estado = '---', cep = '---') {
    $logradouro.textContent = logradouro;
    $bairro.textContent = bairro;
    $cidade.textContent = cidade;
    $estado.textContent = estado;
    $cep.textContent = cep;
  }

  function parseData() {
    var result = null;
    try {
      result = JSON.parse(ajax.responseText);
    } catch (error) {
      result = null;
    }
    return result;
  }

  function getMessage(type) {
    var messages = {
      loading: 'Buscando informações para o CEP [CEP]...',
      ok: 'Endereço referente ao CEP [CEP]:',
      error: 'Não encontramos o endereço para o CEP [CEP].'
    };
    $status.textContent = replaceCEP(messages[type]);
  }

  function replaceCEP(message) {
    return message.replace('[CEP]', clearCEP());
  }

})(window, document);
