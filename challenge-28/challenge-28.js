(function () {
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

  function DOM (elements) {
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on (eventType, callback) {
    this.element.forEach(function (element) {
      element.addEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.off = function off (eventType, callback) {
    this.element.forEach(function (element) {
      element.removeEventListener(eventType, callback);
    });
  };

  DOM.prototype.get = function get () {
    return this.element;
  };

  DOM.prototype.forEach = function forEach () {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map () {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter () {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce () {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight () {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every () {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some () {
    return Array.prototype.some.apply(this.element, arguments);
  };

  DOM.isArray = function isArray (param) {
    return Object.prototype.toString.call(param) === '[object Array]';
  };

  DOM.isObject = function isObject (param) {
    return Object.prototype.toString.call(param) === '[object Object]';
  };

  DOM.isFunction = function isFunction (param) {
    return Object.prototype.toString.call(param) === '[object Function]';
  };

  DOM.isNumber = function isNumber (param) {
    return Object.prototype.toString.call(param) === '[object Number]';
  };

  DOM.isString = function isString (param) {
    return Object.prototype.toString.call(param) === '[object String]';
  };

  DOM.isBoolean = function isBoolean (param) {
    return Object.prototype.toString.call(param) === '[object Boolean]';
  };

  DOM.isNull = function isNull (param) {
    return Object.prototype.toString.call(param) === '[object Null]' ||
      Object.prototype.toString.call(param) === '[object Undefined]';
  };

  var $formCEP = new DOM('[data-js="form-cep"]');
  var $inputCEP = new DOM('[data-js="input-cep"]')
  var $logradouro = new DOM('[data-js="logradouro"]');
  var $bairro = new DOM('[data-js="bairro"]');
  var $estado = new DOM('[data-js="estado"]');
  var $cidade = new DOM('[data-js="cidade"]');
  var $cep = new DOM('[data-js="cep"]');
  var $status = new DOM('[data-js="status"]')
  var ajax = new XMLHttpRequest();
  $formCEP.on('submit', handleSubmitFormCEP);

  function handleSubmitFormCEP (event) {
    event.preventDefault();
    var url = getUrl();
    ajax.open('GET', url, true);
    ajax.send();
    getMessage('loading');
    ajax.addEventListener('readystatechange', handleReadyStateChange);
  }

  function getUrl () {
    return replaceCEP('https://viacep.com.br/ws/[CEP]/json/');
  }

  function clearCEP () {
    return $inputCEP.get()[0].value.replace(/\D+/g, '');
  }

  function handleReadyStateChange () {
    if (isRequestOk()) {
      getMessage('ok');
      fillCEPFields();
    }

    // A API do viacep retorna um erro de CORS quando passamos um número inválido
    // de CEP. Se você olhar o que vem em `ajax.status`, vai perceber que o valor
    // retornado é zero.
    // Como a função `isRequestOk` testa somente pelo status code 200, precisamos
    // fazer uma nova verificação aqui para garantir que a mensagem de erro seja
    // exibida corretamente. Se não fizermos essa verificação, a mensagem de
    // "Carregando" vai ficar na tela, ao invés de exibir a mensagem de erro.
    if (isCEPInvalid()) {
      getMessage('error');
    }
  }

  function isRequestOk () {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function isCEPInvalid () {
    return ajax.readyState === 4 && ajax.status === 0;
  }

  function fillCEPFields () {
    var data = parseData();
    if (!data) {
      getMessage('error');
      data = clearData();
    }

    $logradouro.get()[0].textContent = data.logradouro;
    $bairro.get()[0].textContent = data.bairro;
    $estado.get()[0].textContent = data.uf;
    $cidade.get()[0].textContent = data.localidade;
    $cep.get()[0].textContent = data.cep;
  }

  function clearData () {
    return {
      logradouro: '-',
      bairro: '-',
      uf: '-',
      localidade: '-',
      cep: '-'
    };
  }

  function parseData () {
    var result = JSON.parse(ajax.responseText);
    return result.erro ? null : result;
  }

  function getMessage (type) {
    var messages = {
      loading: 'Buscando informações para o CEP [CEP]...',
      ok: 'Endereço referente ao CEP [CEP]:',
      error: 'Não encontramos o endereço para o CEP [CEP].'
    };

    $status.get()[0].textContent = replaceCEP(messages[type]);
  }

  function replaceCEP (message) {
    return message.replace('[CEP]', clearCEP());
  }
})();
