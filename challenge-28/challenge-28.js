(function(win, doc) {
  'use strict';

  DOM.is = function is(obj) {
    return Object.prototype.toString.call(obj);
  };

  DOM.isArray = function isArray(obj) {
    return this.is(obj) === '[object Array]';
  };

  DOM.isFunction = function isFunction(obj) {
    return this.is(obj) === '[object Function]';
  };

  DOM.isObject = function isObject(obj) {
    return this.is(obj) === '[object Object]';
  };

  DOM.isNumber = function isNumber(obj) {
    return this.is(obj) === '[object Number]';
  };

  DOM.isBoolean = function isBoolean(obj) {
    return this.is(obj) === '[object Boolean]';
  };

  DOM.isString = function isString(obj) {
    return this.is(obj) === '[object String]';
  };

  DOM.isNull = function isNull(obj) {
    return this.is(obj) === '[object Null]' || this.is(obj) === '[object Undefined]';
  };

  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(event, callback) {
      Array.prototype.forEach.call(this.element, function(element) {
        element.addEventListener(event, callback, false);
      });
    };

  DOM.prototype.off = function off(event, callback) {
      Array.prototype.forEach.call(this.element, function(element) {
        element.removeEventListener(event, callback, false);
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

  var $searchCEP = new DOM('[data-js="cep-form"]');
  $searchCEP.on('submit', handleCepSubmitForm);
  var $logradouro = new DOM('[data-js="logradouro"]');
  var $bairro = new DOM('[data-js="bairro"]');
  var $estado = new DOM('[data-js="estado"]');
  var $cidade = new DOM('[data-js="cidade"]');
  var $cep = new DOM('[data-js="cep"]');
  var $status = new DOM('[data-js="status"]');
  var ajax = new XMLHttpRequest();
  var $inputCEP = new DOM('[name="CEP"]');

  function handleCepSubmitForm(event) {
    event.preventDefault();
    console.log('submitted');
    var url = cleanUrl();
    console.log(url);
    ajax.open('GET', url);
    ajax.send();
    returnMessage('loading');
    ajax.addEventListener('readystatechange', handleReadyStateChange);
  }

  function cleanUrl() {
    return 'http://cep.correiocontrol.com.br/[CEP].json'.replace('[CEP]', $inputCEP.get()[0].value.replace(/\D/g, ''));
  }

  function handleReadyStateChange() {
    if (isRequestOk()) {
      fillAddressFields();
      returnMessage('ok');
    }
  }

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function fillAddressFields() {
    if (!data)
    returnMessage('error');

    var data = JSON.parse(ajax.responseText);
    $logradouro.get()[0].textContent = data.logradouro;
    $bairro.get()[0].textContent = data.bairro;
    $estado.get()[0].textContent = data.uf;
    $cidade.get()[0].textContent = data.localidade;
    $cep.get()[0].textContent = data.cep;
  }

  function returnMessage(type) {
    var messages = {
      ok: 'Endereço referente ao CEP ' + $cep.get()[0].textContent + '...',
      error: 'Não encontramos o endereço para o CEP ' + $cep.get()[0].textContent + '.',
      loading: 'Buscando informações para o CEP ' + $cep.get()[0].textContent + ' :'
    };
    $status.get()[0].textContent = messages[type];
  }

})(window, document);
