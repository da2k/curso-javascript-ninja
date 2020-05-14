(function (win, doc) {
  'use strict'
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
  function DOM(string) {
    this.dom = doc.querySelectorAll(string);
  }

  DOM.prototype.on = function (event, callback) {
    Array.prototype.forEach.call(this.dom, function (element) {
      element.addEventListener(event, callback, false);
    })
  }

  DOM.prototype.off = function (event, callback) {
    Array.prototype.forEach.call(this.dom, function (element) {
      element.removeEventListener(event, callback, false);
    })
  }

  DOM.prototype.get = function () {
    return this.dom;
  }

  DOM.prototype.forEach = function forEach(callbackFunc) {
    return Array.prototype.forEach.call(this.dom, callbackFunc);
  }

  DOM.prototype.map = function map(callbackFunc) {
    return Array.prototype.map.call(this.dom, callbackFunc);
  }

  DOM.prototype.filter = function filter(callbackFunc) {
    return Array.prototype.filter.call(this.dom, callbackFunc);
  }

  DOM.prototype.reduce = function reduce(callbackFunc) {
    return Array.prototype.reduce.call(this.dom, callbackFunc);
  }

  DOM.prototype.reduceRight = function reduceRight(callbackFunc) {
    return Array.prototype.reduceRight.call(this.dom, callbackFunc);
  }

  DOM.prototype.every = function every(callbackFunc) {
    return Array.prototype.every.call(this.dom, callbackFunc);
  }

  DOM.prototype.some = function some(callbackFunc) {
    return Array.prototype.some.call(this.dom, callbackFunc);
  }

  DOM.isArray = function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }

  DOM.isFunction = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Function]'
  }

  DOM.isNumber = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Number]'
  }

  DOM.isObject = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
  }

  DOM.isString = function (obj) {
    return Object.prototype.toString.call(obj) === '[object String]'
  }
  DOM.isBoolean = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]'
  }
  DOM.isNull = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Null]' || Object.prototype.toString.call(obj) === '[object Undefined]'
  }

  var $formCep = new DOM('[data-js="form-cep"]');
  var $inputCep = new DOM('[data-js="inputCEP"]');
  var $logradouro = new DOM('[data-js="logradouro"]');
  var $bairro = new DOM('[data-js="bairro"]');
  var $estado = new DOM('[data-js="estado"]');
  var $cidade = new DOM('[data-js="cidade"]');
  var $cep = new DOM('[data-js="cep"]');
  var $status = new DOM('[data-js="status"]');
  var ajax = new XMLHttpRequest();

  $formCep.on('submit', handleSubmit);


  function handleSubmit(event) {
    event.preventDefault();
    var entrada = '' + $inputCep.get()[0].value.match(/\d+/g).join('')
    var url = 'https://viacep.com.br/ws/' + entrada + '/json/';
    console.log(url);
    ajax.open('GET', url);
    ajax.send();
    ajax.addEventListener('readystatechange', handleReadyStateChange)
  }

  function handleReadyStateChange() {

    console.log();
    if (isRequestOk()) {

      $status.get()[0].textContent = "Endereço referente ao CEP" + ' ' + $inputCep.get()[0].value;
      var response = JSON.parse(ajax.responseText);
      $logradouro.get()[0].textContent = response.logradouro;
      $bairro.get()[0].textContent = response.bairro;
      $estado.get()[0].textContent = response.uf;
      $cidade.get()[0].textContent = response.localidade;
      $cep.get()[0].textContent = response.cep;

    } else if (ajax.readyState !== 4) {

      $status.get()[0].textContent = 'Buscando informações para o CEP' + ' ' + $inputCep.get()[0].value;

    } else if (ajax.status === 200)
      $status.get()[0].textContent = 'Não encontramos o endereço para o CEP' + ' ' + $inputCep.get()[0].value;
  }

  function isRequestOk() {
    var response = JSON.parse(ajax.responseText);
    if (ajax.readyState === 4 && ajax.status === 200) {
      if (response.erro === true)
        return false
      return true
    }

  }

  //Logradouro, Bairro, Estado, Cidade e CEP

})(window, document)
