(function(win, doc){
  'use strict';

  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
  }

  // Array nodeliss

  DOM.prototype.on = function methodDomOn(eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(eventType, callback, false);
    })
  };

  DOM.prototype.off = function methodDomOff(eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(eventType, callback, false);
    })
  }

  DOM.prototype.get = function methodDomGet(params) {
    return this.element;
  }

  // test object
  function createTestObj() {
    this.createObj = function createObjectProto(objectTarget) {
      return Object.prototype.toString.call(objectTarget)
    };

    this.valueObj = function valueObject(stringNameObject) {
      var listType = ['Array', 'Object', 'Function', 'Number', 'String', 'Boolean', 'Null', 'Undefined'];
      var letterIntial = stringNameObject.split('').slice(0, 1).join().toUpperCase();
      var remainingValue = stringNameObject.slice(1).split('').join('');
      var valueParam = letterIntial + remainingValue;
      var resultList;

      listType.forEach(function (item, index) {
        if (valueParam === item) { resultList = item }
      })

      return '[' + 'object' + ' ' + resultList + ']';
    };

  }

  DOM.prototype.isArray = function isArray(param) {
    return testObject.createObj(param) === testObject.valueObj('Array');
  }

  DOM.prototype.isObject = function isObject(param) {
    return testObject.createObj(param) === testObject.valueObj('object');
  }

  DOM.prototype.isFunction = function isFunction(param) {
    return testObject.createObj(param) === testObject.valueObj('function');
  }

  DOM.prototype.isNumber = function isNumber(param) {
    return testObject.createObj(param) === testObject.valueObj('number');
  }

  DOM.prototype.isString = function isString(param) {
    return testObject.createObj(param) === testObject.valueObj('string');
  }

  DOM.prototype.isBoolean = function isBoolean(param) {
    return testObject.createObj(param) === testObject.valueObj('boolean');
  }

  DOM.prototype.isNull = function isNull(param) {
    return testObject.createObj(param) === testObject.valueObj('null') ||
      testObject.createObj(param) === testObject.valueObj('undefined');
  }

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

  var $formCEP = new DOM('[data-js="form-cep"]');
  var $inputCEP = new DOM('[data-js="input-cep"]');
  var ajax = new XMLHttpRequest();
  $formCEP.on('submit', handleSubmitFormCEP);

  function handleSubmitFormCEP(event){
    event.preventDefault();

    var url = getUrl();

    ajax.open('GET', url);
    ajax.send();
    ajax.addEventListener('readystatechange', handleReadyStateChange);
  }

  function handleReadyStateChange(){
    if( isRequestOk() )
      fillCEPFields();
  }

  function getUrl(){
    return 'https://viacep.com.br/ws/[CEP]/json/'.replace(
      '[CEP]',
      $inputCEP.get()[0].value.replace(/\D/g, '') );
  }

  function isRequestOk(){
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function fillCEPFields(){
    var data = parseData();
    if(!data)
      return console.log('DATA ERROR', data);

    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $cep = new DOM('[data-js="cep"]');
    $logradouro.get()[0].textContent = data.logradouro;
    $bairro.get()[0].textContent = data.bairro;
    $estado.get()[0].textContent = data.uf;
    $cidade.get()[0].textContent = data.localidade;
    $cep.get()[0].textContent = data.cep;

  }

  function parseData(){
    var result;

    try {
      result = JSON.parse(ajax.responseText);

    } catch (error) {
      result = null;
    }

    return result;
  }

  function getMessage(type){
    return {
      loading: 'Buscando informações para o CEP [CEP]...',
      ok: 'Endereço referente ao CEP [CEP]:',
      error: 'Não encontramos o endereço para o CEP [CEP].'
    }[type]

  }

  console.log(getMessage(loading))



})(window, document);

