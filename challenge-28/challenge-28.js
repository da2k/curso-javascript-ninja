(function(win, doc) {
  "use strict";
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

  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(eventType, callback, false);
    });
  };
  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(eventType, callback, false);
    });
  };
  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map() {
    Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    Array.prototype.some.apply(this.element, arguments);
  };

  DOM.isArray = function isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]"
      ? true
      : false;
  };

  DOM.isObject = function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]"
      ? true
      : false;
  };

  DOM.isFunction = function isFunction(obj) {
    return Object.prototype.toString.call(obj) === "[object Function]"
      ? true
      : false;
  };

  DOM.isNumber = function isNumber(obj) {
    return Object.prototype.toString.call(obj) === "[object Number]"
      ? true
      : false;
  };

  DOM.isString = function isString(obj) {
    return Object.prototype.toString.call(obj) === "[object String]"
      ? true
      : false;
  };

  DOM.isBoolean = function isBoolean(obj) {
    return Object.prototype.toString.call(obj) === "[object Boolean]"
      ? true
      : false;
  };

  DOM.isNull = function isNull(obj) {
    return Object.prototype.toString.call(obj) === "[object Null]" ||
      Object.prototype.toString.call(obj) === "[object Undefined]"
      ? true
      : false;
  };

  var $formCep = new DOM('[data-js="form-cep"]');
  var $inpuCep = new DOM("#cepInput");
  var ajax = new XMLHttpRequest();
  $formCep.on("submit", handleSubmit);

  function handleSubmit(evt) {
    evt.preventDefault();
    var url = getUrl();
    ajax.open("GET", url);
    ajax.send();
    getMessage("loading");
    ajax.addEventListener("readystatechange", handleReadyStateChange);
  }

  function getUrl() {
    return replaceCep(
      "http://apps.widenet.com.br/busca-cep/api/cep/[CEP].json"
    );
  }

  function clearCep() {
    return $inpuCep.get()[0].value.replace(/\D/g, "");
  }

  function handleReadyStateChange() {
    if (isRequestOk()) {
      getMessage("ok");
      fillCepFields();
    }
  }

  function isRequestOk() {
    return ajax.readyState == 4 && ajax.status === 200;
  }

  function fillCepFields() {
    var data = parseData();
    if (data.status === 0) {
      getMessage("error");
      data = clearData();
    }
    var $logradouro = new DOM('[name="Logradouro"]');
    $logradouro.get()[0].value = data.address;
    var $bairro = new DOM('[name="Bairro"]');
    $bairro.get()[0].value = data.district;
    var $estado = new DOM('[name="Estado"]');
    $estado.get()[0].value = data.state;
    var $cidade = new DOM('[name="Cidade"]');
    $cidade.get()[0].value = data.city;
    var $CEP = new DOM('[name="CEP"]');
    $CEP.get()[0].value = data.code;
  }

  function clearData() {
    return {
      address: "-",
      district: "-",
      state: "-",
      city: "-",
      code: "-"
    };
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

  function getMessage(type) {
    var message = {
      loading: replaceCep("Buscando informações para o CEP [CEP]..."),
      ok: replaceCep("Endereço referente ao CEP [CEP]:"),
      error: replaceCep("Não encontramos o endereço para o CEP [CEP].")
    };
    var $status = new DOM("#Status");
    $status.get()[0].value = message[type];
  }

  function replaceCep(message) {
    return message.replace("[CEP]", clearCep());
  }
})(window, document);
