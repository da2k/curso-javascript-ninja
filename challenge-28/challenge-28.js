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

  DOM.prototype.on = function(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.off = function(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.get = function() {
    return this.element;
  };

  DOM.prototype.forEach = function() {
    return Array.prototype.forEach.apply(this.element, arguments);
  }

  DOM.prototype.map = function() {
    return Array.prototype.map.apply(this.element, arguments);
  }

  DOM.prototype.filter = function() {
    return Array.prototype.filter.apply(this.element, arguments);
  }

  DOM.prototype.reduce = function() {
    return Array.prototype.reduce.apply(this.element, arguments);
  }

  DOM.prototype.reduceRight = function() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  }

  DOM.prototype.every = function() {
    return Array.prototype.every.apply(this.element, arguments);
  }

  DOM.prototype.some = function() {
    return Array.prototype.some.apply(this.element, arguments);
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
    return Object.prototype.toString.call(element) === '[object Null]' 
    || Object.prototype.toString.call(element) === '[object Undefined]';
  }

  var $formCEP = new DOM('[data-js="form-cep"]');
  var $inputCEP = new DOM('[data-js="input-cep"]');
  var $address = new DOM('[data-js="logradouro"]');
  var $district = new DOM('[data-js="bairro"]');
  var $state = new DOM('[data-js="estado"]');
  var $city = new DOM('[data-js="cidade"]');
  var $code = new DOM('[data-js="cep"]');
  var ajax = new XMLHttpRequest();
 
  $formCEP.on('submit', handleFormHTML); 

  function handleFormHTML(event) {
    event.preventDefault();
    var url = getUrl();
    ajax.open('GET', url);
    ajax.send();
    ajax.addEventListener('readystatechange', handleReadyStateChange);
    handleMessages();
  }
  
  function handleReadyStateChange() {
    if(isRequestOk()) {
      handleMessages();
      fillCEPFields();
    }
  }

  function getUrl() {
    return replaceCEP('http://apps.widenet.com.br/busca-cep/api/cep/[CEP].json');
  }

  function clearCEP() {
    return $inputCEP.get()[0].value.replace(/\D/g, '');
  }

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function fillCEPFields() {
    var data = JSON.parse(ajax.responseText);
    
    if(!data.ok) 
      data = clearData();
    $address.get()[0].textContent = data.address;
    $district.get()[0].textContent = data.district;
    $state.get()[0].textContent = data.state;
    $city.get()[0].textContent = data.city;
    $code.get()[0].textContent = data.code;
  }

  function clearData() {
    return {
      address: '-',
      district: '-',
      state: '-',
      city: '-',
      code: '-'
    }
  }

  function handleMessages() {
    var $status = new DOM('[data-js="status"]');
    var messages = { 
      ok: replaceCEP("Endereço referente ao CEP [CEP]."),
      error: replaceCEP('Não encontramos o endereço para o CEP [CEP].'),
      loading: replaceCEP('Buscando informações para o CEP [CEP]...')
    };
    if(isRequestOk()) 
      return $status.get()[0].textContent = checkCorrectMessage(messages);
    return $status.get()[0].textContent = messages.loading;
  }

  function replaceCEP(message) {
    return message.replace('[CEP]', clearCEP());
  }

  function checkCorrectMessage(messages) {
    var data = JSON.parse(ajax.responseText);
    var messageType = data.ok ? 'ok' : messageType = 'error';
    return messages[messageType];
  }

})();