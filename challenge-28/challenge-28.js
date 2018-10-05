(function() {
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
  function DOM(selectorString) {
    this.element = document.querySelectorAll(selectorString);
  }

  DOM.isArray = function(element) {
    return Object.prototype.toString.call(element) === '[object Array]';
  }

  DOM.isObject = function(element) {
    return Object.prototype.toString.call(element) === '[object Object]';
  }

  DOM.isFunction = function(element) {
    return Object.prototype.toString.call(element) === '[object Function]';
  }

  DOM.isNumber = function(element) {
    return Object.prototype.toString.call(element) === '[object Number]';
  }

  DOM.isString = function(element) {
    return Object.prototype.toString.call(element) === '[object String]';
  }

  DOM.isBoolean = function(element) {
    return Object.prototype.toString.call(element) === '[object Boolean]';
  }

  DOM.isNull = function(element) {
    return Object.prototype.toString.call(element) === '[object Null]' || 
          Object.prototype.toString.call(element) === '[object Undefined]';
  }

  DOM.prototype.on = function(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(eventType, callback);
    });
  }

  DOM.prototype.off = function(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(eventType, callback);
    });
  }

  DOM.prototype.get = function() {
    return this.element;
  }

  DOM.prototype.forEach = function(callback) {
    Array.prototype.forEach.call(this.element, callback);
  }

  DOM.prototype.map = function(callback) {
    Array.prototype.map.call(this.element, callback);
  }

  DOM.prototype.filter = function(callback) {
    Array.prototype.filter.call(this.element, callback);
  }

  DOM.prototype.reduce = function(callback) {
    Array.prototype.reduce.call(this.element, callback);
  }

  DOM.prototype.reduceRight = function(callback) {
    Array.prototype.reduceRight.call(this.element, callback);
  }

  DOM.prototype.every = function(callback) {
    Array.prototype.every.call(this.element, callback);
  }

  DOM.prototype.some = function(callback) {
    Array.prototype.some.call(this.element, callback);
  }

  var $form = new DOM('[data-js="form"]').get(0)[0];
  var $cepInput = new DOM('[data-js="cep-input"]').get(0)[0];
  var $logradouro = new DOM('[data-js="logradouro"]').get(0)[0];
  var $bairro = new DOM('[data-js="bairro"]').get(0)[0];
  var $estado = new DOM('[data-js="estado"]').get(0)[0];
  var $cidade = new DOM('[data-js="cidade"]').get(0)[0];
  var $cep = new DOM('[data-js="cep"]').get(0)[0];
  var $status = new DOM('[data-js="status"]').get(0)[0];
  var ajax = new XMLHttpRequest();

  function init() {
    initEvents();
  }

  function initEvents() {
    $form.addEventListener('submit', handleFormSubmit);
  }

  function getCepClean() {
    return clearCep($cepInput.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    var cep = getCepClean();
    
    ajax.open('GET', 'https://viacep.com.br/ws/' + cep + '/json/');
    ajax.send();
    showMessage('loading', cep);
    ajax.addEventListener('readystatechange', handleReadyStateChange);
  }

  function handleReadyStateChange() {
    clearFields();

    if (isRequestOk()) {
      fillCepFields(ajax.responseText);
      showMessage('ok', getCepClean());
    }

    if (isRequestError()) {
      showMessage('error', getCepClean());
    }
  }

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function isRequestError() {
    return ajax.readyState === 4 && ajax.status === 0;
  }

  function fillCepFields(responseText) {
    var jsonData = parseResponseText(responseText);
    if (!jsonData)
      return showMessage('error', getCepClean());

    $logradouro.textContent = jsonData.logradouro;
    $bairro.textContent = jsonData.bairro;
    $estado.textContent = jsonData.uf;
    $cidade.textContent = jsonData.localidade;
    $cep.textContent = jsonData.cep;
  }

  function clearFields() {
    $logradouro.textContent = null;
    $bairro.textContent = null;
    $estado.textContent = null;
    $cidade.textContent = null;
    $cep.textContent = null;
  }
  
  function clearCep(cep) {
    return cep.replace(/\D/g, '');
  }

  function parseResponseText(responseText) {
    var result;

    try {
      result = JSON.parse(responseText)
    } catch(e) {
      result = null;
    }

    return result;
  }

  function replaceCepRegex(text, cep) {
    return text.replace(/\[CEP\]/, cep);
  }

  function showMessage(type, cep) {
    var message = {
      loading: 'Buscando informações para o CEP [CEP]...',
      ok: 'Endereço referente ao CEP [CEP]:',
      error: 'Não encontramos o endereço para o CEP [CEP].'
    }[type];

    $status.textContent = replaceCepRegex(message, cep);
  }

  init();
})();
