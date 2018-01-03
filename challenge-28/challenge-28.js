(function(doc) {
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
  'use strict';

  var DOM = function(selector) {
    this.element = document.querySelectorAll(selector);
  };

  DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.element, function($el) {
      $el.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.element, function($el) {
      $el.removeEventListener(event, callback, false);
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

  DOM.getParamType = function(param) {
    return Object.prototype.toString.call(param);
  };

  DOM.isArray = function(param) {
    return this.getParamType(param) === '[object Array]';
  };

  DOM.isObject = function(param) {
    return this.getParamType(param) === '[object Object]';
  };

  DOM.isFunction = function(param) {
    return this.getParamType(param) === '[object Function]';
  };

  DOM.isNumber = function(param) {
    return this.getParamType(param) === '[object Number]';
  };

  DOM.isString = function(param) {
    return this.getParamType(param) === '[object String]';
  };

  DOM.isBoolean = function(param) {
    return this.getParamType(param) === '[object Boolean]';
  };

  DOM.isNull = function(param) {
    return this.getParamType(param) === '[object Null]' || this.getParamType(param) === '[object Undefined]';
  };

  DOM.newElement = function(element) {
    return doc.createElement(element);
  };

  var $form = new DOM('[data-js="formFindAddress"]');
  var $status = new DOM('[data-js="ajaxStatus"]');
  var $cepUserInput = new DOM('[data-js="cepUserInput"]');
  var $logradouro = new DOM('[data-js="logradouro"]');
  var $bairro = new DOM('[data-js="bairro"]');
  var $estado = new DOM('[data-js="estado"]');
  var $cidade = new DOM('[data-js="cidade"]');
  var $cep = new DOM('[data-js="cep"]');
  var req = new XMLHttpRequest();
  var cep;

  var sanitizeCEP = function sanitizeCEP(string) {
    return string.replace(/\D/, '');
  };

  var flashStatus = function flashStatus(string) {
    var $newStatusEl = DOM.newElement('li');
    $newStatusEl.textContent = string;
    $status.get()[0].appendChild($newStatusEl);
  };

  var clearStatus = function cleanStatus() {
    while($status.get()[0].firstChild) {
      $status.get()[0].removeChild($status.get()[0].firstChild);
    }
  };

  var isRequestSuccessful = function isRequestSuccessful(request) {
    return request.readyState === 4 && request.status === 200;
  };

  var makeAjaxRequest = function makeAjaxRequest() {
    XMLHttpRequest.prototype.open.apply(req, arguments);
    req.send();
    req.addEventListener('readystatechange', handleReadyStateChange);
  };

  var handleReadyStateChange = function(request) {
    if(req.readyState === 4) {
      if(isRequestSuccessful(req)) {
        var data;

        try {
          fillAddressData(JSON.parse(req.response));
        }catch(e) {
          data = req.responseXML;
        }

        flashStatus('Endereço referente ao CEP ' + cep + '.');
      }else {
        flashStatus('Não encontramos o endereço para o CEP ' + cep);
      }
    }
  };

  var fillAddressData = function fillAddressData(data) {
    $logradouro.get()[0].textContent = data.logradouro;
    $bairro.get()[0].textContent = data.bairro;
    $estado.get()[0].textContent = data.uf;
    $cidade.get()[0].textContent = data.localidade;
    $cep.get()[0].textContent = data.cep;
  };

  var handleSubmitCEP = function handleSubmitCEP(event) {
    event.preventDefault();
    cep = sanitizeCEP($cepUserInput.get()[0].value);

    clearStatus();
    flashStatus('Buscando informações para o CEP ' + cep + '...');
    makeAjaxRequest('GET', 'https://viacep.com.br/ws/' + cep + '/json/');
  };

  $form.on('submit', handleSubmitCEP);
})(document);
