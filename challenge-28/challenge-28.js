(function() {
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

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.elements, function(element) {
      element.removeEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
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

  DOM.isArray = function isArray(array) {
    return Object.prototype.toString.call(array) === "[object Array]";
  };

  DOM.isFunction = function isFunction(func) {
    return Object.prototype.toString.call(func) === "[object Function]";
  };

  DOM.isNumber = function isNumber(numb) {
    return Object.prototype.toString.call(numb) === "[object Number]";
  };

  DOM.isString = function isString(str) {
    return Object.prototype.toString.call(str) === "[object String]";
  };

  DOM.isBoolean = function isBoolean(bool) {
    return Object.prototype.toString.call(bool) === "[object Bollean]";
  };

  DOM.isNull = function isNull(nll) {
    return (
      Object.prototype.toString.call(nll) === "[object Null]" ||
      Object.prototype.toString.call(nll) === "[object Undefined]"
    );
  };

  var $formCEP = new DOM('[data-js="form-cep"]');
  var $inputCEP = new DOM('[data-js="input-cep"]');
  var $cep = new DOM('[data-js="cep"]');
  var $logadouro = new DOM('[data-js="logadouro"]');
  var $bairro = new DOM('[data-js="bairro"]');
  var $estado = new DOM('[data-js="estado"]');
  var $cidade = new DOM('[data-js="cidade"]');
  var $status = new DOM('[data-js="status"]');
  var ajax = new XMLHttpRequest();

  $formCEP.on("submit", handleSubmitFormCEP);

  function getURL() {
    return "http://apps.widenet.com.br/busca-cep/api/cep/[CEP].json".replace(
      "[CEP]",
      clearCEP()
    );
  }

  function clearCEP() {
    return $inputCEP.get()[0].value.replace(/\D/g, "");
  }

  function handleSubmitFormCEP(event) {
    event.preventDefault();
    var url = getURL();
    ajax.open("GET", url);
    ajax.send();
    getMessage("loading");
    ajax.addEventListener("readystatechange", handleReadyStateChange);
  }

  function handleReadyStateChange() {
    if (isRequestOk()) {
      getMessage("ok");
      preencheCampos();
    }
  }

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function parseDATA() {
    var result;

    try {
      result = JSON.parse(ajax.responseText);
    } catch (erro) {
      result = null;
    }

    return result;
  }

  function preencheCampos() {
    var data = parseDATA();

    if (data === null || data.status === 0) {
      getMessage("error");
      limpaCampos();
      return;
    }

    $cep.get()[0].textContent = data.code;
    $logadouro.get()[0].textContent = data.address;
    $bairro.get()[0].textContent = data.district;
    $cidade.get()[0].textContent = data.city;
    $estado.get()[0].textContent = data.state;
  }

  function limpaCampos() {
    $cep.get()[0].textContent = "--";
    $logadouro.get()[0].textContent = "--";
    $bairro.get()[0].textContent = "--";
    $cidade.get()[0].textContent = "--";
    $estado.get()[0].textContent = "--";
  }

  function getMessage(type) {
    var cep = clearCEP();
    var messages = {
      loading: "Buscando informações para o CEP " + cep + "...",
      ok: "Endereço referente ao CEP: " + cep + "",
      error: "Não encontramos o endereço para o CEP: " + cep + ""
    };
    $status.get()[0].textContent = messages[type];
  }
})();
