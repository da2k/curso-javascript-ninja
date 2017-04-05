(function (d, w) {

  'use strict';

  function DOM(elements) {
    this.element = d.querySelectorAll(elements);
  }

  DOM.prototype.isArray = function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(param) {
    return Object.prototype.toString.call(param) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(param) {
    return Object.prototype.toString.call(param) === '[object Number]';
  };

  DOM.prototype.isString = function isString(param) {
    return Object.prototype.toString.call(param) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(param) {
    return Object.prototype.toString.call(param) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(param) {
    return Object.prototype.toString.call(param) === '[object Null]' || Object.prototype.toString.call(param) === '[object Undefined]';
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  }

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

  DOM.prototype.on = function on(event, callback) {
    this.element.forEach(function (element) {
      element.addEventListener(event, callback);
    });
  }

  DOM.prototype.off = function off(event, callback) {
    this.element.forEach(function (element) {
      element.removeEventListener(event, callback);
    });
  }

  DOM.prototype.get = function get() {
    return this.element;
  }

  function $(element) {
    return new DOM(element);
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

  var $form = $('[data-cep="form"]');
  var $input = $('[data-cep="input"]');
  var $messages = $('[data-cep="messages"]');
  var $results = $('[data-cep="results"]');
  var $logradouro = $('[data-cep="logradouro"]');
  var $bairro = $('[data-cep="bairro"]');
  var $estado = $('[data-cep="estado"]');
  var $cidade = $('[data-cep="cidade"]');
  var $cep = $('[data-cep="cep"]');
  var ajax = new XMLHttpRequest();

  function clearCEP() {
    return $input.get()[0].value.replace(/\D/g, '');
  }

  function replaceCEP(message) {
    return message.replace('[CEP]', clearCEP());
  }

  function getUrl() {
    return replaceCEP('https://viacep.com.br/ws/[CEP]/json/');
  }

  function removeResults() {
    $results.get()[0].classList.remove('in');
  }

  function addResults() {
    $results.get()[0].classList.add('in');
  }

  function getMessages(type) {
    var messages = {
      loading: replaceCEP('Buscando informações para o CEP [CEP]...'),
      ok: replaceCEP('Endereço referente ao CEP [CEP]'),
      error: replaceCEP('Não encontramos o endereço para o CEP [CEP]')
    };

    $messages.get()[0].textContent = messages[type];
  }

  function createResponseFields() {
    var data = parseData();

    if (!data) {
      getMessages('error');
    }

    addResults();
    $logradouro.get()[0].textContent = data.logradouro;
    $bairro.get()[0].textContent = data.bairro;
    $estado.get()[0].textContent = data.uf;
    $cidade.get()[0].textContent = data.localidade;
    $cep.get()[0].textContent = data.cep;
  }

  function parseData() {
    var result;

    try {
      result = JSON.parse(ajax.responseText);
    } catch (e) {
      result = null;
    }

    return result;
  }

  function isRequestAmazing() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function isRequestWrong() {
    return ajax.readyState === 4 && ajax.status !== 200;
  }

  function handleReadyStateChange() {
    removeResults();

    if (isRequestAmazing()) {
      getMessages('ok');
      createResponseFields();
    }

    if (isRequestWrong()) {
      getMessages('error');
    }
  }

  function handleSubmitFormCEP(event) {
    event.preventDefault();

    var url = getUrl();

    ajax.open('GET', url);
    ajax.send();
    getMessages('loading');
    ajax.addEventListener('readystatechange', handleReadyStateChange);
  }

  $form.on('submit', handleSubmitFormCEP);

})(document, window);
