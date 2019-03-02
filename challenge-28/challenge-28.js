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

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(event, callback, false);
    })
  };

  DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(event, callback, false);
    })
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  }

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  }

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  }

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  }

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  }

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  }

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  }

  DOM.prototype.isArray = function isArray(value) {
    return Object.prototype.toString.call( value ) === '[object Array]';
  }

  DOM.prototype.isObject = function isObject(value) {
    return Object.prototype.toString.call( value ) === '[object Object]';
  }

  DOM.prototype.isFunction = function isFunction(value) {
    return Object.prototype.toString.call( value ) === '[object Function]';
  }

  DOM.prototype.isNumber = function isNumber(value) {
    return Object.prototype.toString.call( value ) === '[object Number]';
  }

  DOM.prototype.isString = function isString(value) {
    return Object.prototype.toString.call( value ) === '[object String]';
  }

  DOM.prototype.isBoolean = function isBoolean(value) {
    return Object.prototype.toString.call( value ) === '[object Boolean]';
  }

  DOM.prototype.isNull = function isNull(value) {
    return Object.prototype.toString.call( value ) === '[object Null]'
    || Object.prototype.toString.call( value ) === '[object Undefined]';
  }

  var $formCEP = new DOM ('[data-js="form-cep"]');
  var $inputCEP = new DOM ('[data-js="input-cep"]');
  var $logradouro = new DOM ('[data-js="logradouro"]');
  var $cidade = new DOM ('[data-js="cidade"]');
  var $bairro = new DOM ('[data-js="bairro"]');
  var $estado = new DOM ('[data-js="estado"]');
  var $cep = new DOM ('[data-js="cep"]');
  var $status = new DOM ('[data-js="status"]');
  var xhr = new XMLHttpRequest ();

  $formCEP.on('submit', handleSubmitForm);

  function handleSubmitForm(e) {
    e.preventDefault();
    var url = getURL();
    xhr.open('GET', url);
    xhr.send();
    getMessage('loading');
    xhr.addEventListener('readystatechange', handleReadyStateChange);
  }

  function getURL() {
    return 'http://apps.widenet.com.br/busca-cep/api/cep/<cepCode>.json'
    .replace('<cepCode>', clearCEP());
  }

  function clearCEP() {
    return $inputCEP.get()[0].value.replace(/\D/g, '');
  }

  function handleReadyStateChange() {
    if ( isRequestOk() ) {
      getMessage('ready');
      fillFields();
    }
  }

  function isRequestOk() {
    return xhr.readyState === 4 && xhr.status === 200;
  }

  function fillFields() {
    var data = parseData();
    if ( data.status === 0 ) {
      getMessage('error');
      data = clearData();
    }

    $logradouro.get()[0].textContent = data.address;
    $cidade.get()[0].textContent = data.city;
    $bairro.get()[0].textContent = data.district ;
    $estado.get()[0].textContent = data.state;
    $cep.get()[0].textContent = data.code;

  }

  function clearData() {
    return {
      address: '-',
      city: '-',
      district: '-',
      state: '-',
      code: '-'
    }
  }

  function parseData() {
    var result;
    try {
      result = JSON.parse( xhr.responseText );
    }
    catch(error) {
      result = null;
    }
    return result;
  }

  function getMessage(type) {
    var cep = clearCEP();
    var messages = {
      loading: 'Buscando informações para o CEP [CEP]...'.replace('[CEP]', cep),
      ready: 'Endereço referente ao CEP [CEP]:'.replace('[CEP]', cep),
      error: 'Não encontramos o endereço para o CEP [CEP]!'.replace('[CEP]', cep),
    };

    $status.get()[0].textContent = messages[type];
  }

})();
