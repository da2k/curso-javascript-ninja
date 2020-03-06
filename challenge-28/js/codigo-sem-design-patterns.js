(function (win, doc) {
  'use strict';

  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
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

  /**
   * - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
   */
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
    return Object.prototype.toString.call(param) === '[object Null]' ||
      Object.prototype.toString.call(param) === '[object Undefined]';
  };


  var $formCEP = new DOM('[data-js="form-cep"]');
  var $inputCEP = new DOM('[data-js="input-cep"]');
  var $cep = new DOM('[data-js="cep"]');
  var $logradouro = new DOM('[data-js="logradouro"]');
  var $bairro = new DOM('[data-js="bairro"]');
  var $estado = new DOM('[data-js="estado"]');
  var $cidade = new DOM('[data-js="cidade"]');
  var $status = new DOM('[data-js="status"]');

  var ajax = new XMLHttpRequest();

  $formCEP.on('submit', handleSubmitFormCEP, false);

  function handleSubmitFormCEP(event) {
    event.preventDefault();
    //console.log('Submit Form');
    var url = getUrl();

    //console.log('URL', url);

    ajax.open('GET', url);
    ajax.send();
    getMessage('loading');
    ajax.addEventListener('readystatechange', handleReadyStateChange, false);

  }

  // function getUrl() {

  //   return 'https://viacep.com.br/ws/[CEP]/json'.replace(
  //     '[CEP]',
  //     clearCEP()
  //   );

  // }

  function getUrl() {
    return replaceCEP('https://viacep.com.br/ws/[CEP]/json');
  }

  function clearCEP() {
    return $inputCEP.get()[0].value.replace(/\D/g, '');
  }

  function handleReadyStateChange() {
    if( isRequestOk() ) {
      getMessage('ok');
      fillCEPFields();

    }


    // if(ajax.readyState === 4 && ajax.status === 200 ) {
    //   console.log('Popular formulário', ajax.responseText);
    // }
    // if( isRequestOk() ) {
      // console.log('Popular formulário', ajax.responseText); //aqui se vê o JSON
    // }

    //console.log('Carregando...');
  }
  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function fillCEPFields() {
    var data = parseData();
    if(!data) {
      return getMessage('error');
      data = clearData();

    }


      //return console.log('DATA ERROR', data);
    console.log('DATA', data);


    $cep.get()[0].textContent = data.cep;
    $logradouro.get()[0].textContent = data.logradouro;
    $bairro.get()[0].textContent = data.bairro;
    $cidade.get()[0].textContent = data.localidade;
    $estado.get()[0].textContent = data.uf;


  }

  function clearData() {
    return {
      cep: '-',
      logradouro: '-',
      bairro: '-',
      localidade: '-',
      uf: '-'
    }
  }

  function parseData() {
    var result;

    try {
      result = JSON.parse(ajax.responseText);
    }
    catch(e) {
      result = null;
      console.log(e);
    }

    return result;
  }

  function getMessage(type) {



    //debugger;
    var messages = {
      loading: replaceCEP('Buscando informações para o CEP [CEP]...'),
      ok: replaceCEP('Endereço referente ao CEP [CEP]:'),
      error: replaceCEP('Não encontramos o endereço para o CEP [CEP].')
    };


    console.log($status);
    $status.get()[0].textContent = messages[type];
  }

  function replaceCEP(message) {
    return message.replace('[CEP]', clearCEP());
  }

  //console.log($formCEP);

})(window, document);
