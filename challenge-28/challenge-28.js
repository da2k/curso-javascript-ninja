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
  */

  function DOM (elements) {
    this.element = doc.querySelectorAll(elements);
  }

  DOM.is = function (obj) {
    return Object.prototype.toString.call(obj);
  }

  DOM.isArray = function (obj) {
    return this.is(obj) === '[object Array]';
  }

  DOM.isObject = function (obj) {
    return this.is(obj) === '[object Object]';
  }

  DOM.isFunction = function (obj) {
    return this.is(obj) === '[object Function]';
  }

  DOM.isNumber = function (obj) {
    return this.is(obj) === '[object Number]';
  }

  DOM.isString = function (obj) {
    return this.is(obj) === '[object String]';
  }

  DOM.isBoolean = function (obj) {
    return this.is(obj) === '[object Boolean]';
  }

  DOM.isNull = function (obj) {
    return this.is(obj) === '[object Null]' || this.is(obj) === '[object Undefined]';
  }

  DOM.prototype.on = function on (event, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(event, callback, false);
    });
  }

  DOM.prototype.off = function off (event, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(event, callback, false);
    });
  }

  DOM.prototype.get = function get () {
    if (arguments === [])
      return this.element;
    return this.element[arguments[0]];
  }

  DOM.prototype.forEach = function forEach () {
    Array.protype.forEach.apply(this.element, arguments);
  }

  DOM.prototype.map = function map () {
    Array.protype.map.apply(this.element, arguments);
  }

  DOM.prototype.filter = function filter () {
    Array.protype.filter.apply(this.element, arguments);
  }

  DOM.prototype.reduce = function reduce () {
    Array.protype.reduce.apply(this.element, arguments);
  }

  DOM.prototype.reduceRight = function reduceRight () {
    Array.protype.reduceRight.apply(this.element, arguments);
  }

  DOM.prototype.every = function every () {
    Array.protype.every.apply(this.element, arguments);
  }

  DOM.prototype.some = function some () {
    Array.protype.some.apply(this.element, arguments);
  }

  var cepInput = new DOM('[data-js="cep-input"]');
  var warning = new DOM('[data-js="warning"]');
  var submitButton = new DOM('[data-js="submit-button"]');
  var logradouroOutput = new DOM('[data-js="logradouro"]');
  var bairroOutput = new DOM('[data-js="bairro"]');
  var estadoOutput = new DOM('[data-js="estado"]');
  var cidadeOutput = new DOM('[data-js="cidade"]');
  var cepOutput = new DOM('[data-js="cep"]');
  var cepRegex = /\d{5}-\d{3}/g;

  var ajax = new XMLHttpRequest();

  function isRequestOk () {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function changeWarning (message) {
    warning.get(0).textContent = message;
  }

  function makeRequest (method, url) {
    ajax.open(method, url);
    ajax.send();
  }

  function fillInputs (jsonFile) {
    logradouroOutput.get(0).value = jsonFile.logradouro;
    bairroOutput.get(0).value = jsonFile.bairro;
    estadoOutput.get(0).value = jsonFile.uf;
    cidadeOutput.get(0).value = jsonFile.localidade;
    cepOutput.get(0).value = jsonFile.cep;
  }

   function usingRequest() {
     if ( isRequestOk() ) {
      try {
        var data = JSON.parse(ajax.responseText);
        fillInputs(data);
        changeWarning('Endereço referente ao CEP ' + cepInput.get(0).value);
      }
      catch(e) {
        changeWarning('Não encontramos o endereço para o CEP ' + cepInput.get(0).value);
      }
    }
  }

  function submitAction(event) {
    event.preventDefault();
    if (cepInput.get(0).value.length < 9) {
      changeWarning('CEP inválido, submeta um CEP válido');
    } else {
      if ( cepRegex.test(cepInput.get(0).value) ) {
        var cleanCep = cepInput.get(0).value.slice(0, 5) + cepInput.get(0).value.slice(6);
        changeWarning('Buscando informações para o CEP ' + cepInput.get(0).value);
        makeRequest('GET', 'http://cep.correiocontrol.com.br/' + cleanCep + '.json');
      } else {
        changeWarning('CEP inválido, submeta um CEP válido');
      }
    }
  }

  submitButton.on('click', submitAction);

  ajax.addEventListener('readystatechange', usingRequest);

})(window, document);
