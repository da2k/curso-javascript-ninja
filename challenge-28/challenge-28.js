(function (win, doc) {
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

  function DOM(el) {
    if (typeof el === 'string') {
      this.elements = document.querySelectorAll(el);
      return this;
    }
    throw new Error('The element needs to be a string selector');
  }

  DOM._verifier = function _verifier(value) {
    return Object.prototype.toString.call(value);
  }

  DOM.isArray = function isArray(value) {
    return DOM._verifier(value) === '[object Array]';
  }

  DOM.isObject = function isObject(value) {
    return DOM._verifier(value) === '[object Object]';
  }

  DOM.isFunction = function isFunction(value) {
    return DOM._verifier(value) === '[object Function]';
  }

  DOM.isString = function isString(value) {
    return DOM._verifier(value) === '[object String]';
  }

  DOM.isNumber = function isNumber(value) {
    return DOM._verifier(value) === '[object Number]';
  }

  DOM.isBoolean = function isBoolean(value) {
    return DOM._verifier(value) === '[object Boolean]';
  }

  DOM.isNull = function isNull(value) {
    return DOM._verifier(value) === '[object Null]' || DOM._verifier(value) === '[object Undefined]';
  }

  DOM.prototype.forEach = function forEach(callback) {
    Array.prototype.forEach.call(this.elements, callback);
  }

  DOM.prototype.map = function map(callback) {
    return Array.prototype.map.call(this.elements, callback);
  }

  DOM.prototype.filter = function filter(callback) {
    return Array.prototype.filter.call(this.elements, callback);
  }

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.elements, arguments);
  }

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.elements, arguments);
  }

  DOM.prototype.every = function every(callback) {
    return Array.prototype.every.call(this.elements, callback);
  }

  DOM.prototype.some = function some(callback) {
    return Array.prototype.some.call(this.elements, callback);
  }

  DOM.prototype.on = function on(event, callback, useCapture) {
    this.forEach(function (el) {
      el.addEventListener(event, callback, useCapture || false);
    });
  }

  DOM.prototype.off = function off(event, callback, useCapture) {
    this.forEach(function (el) {
      el.removeEventListener(event, callback, useCapture || false);
    });
  }

  DOM.prototype.get = function get() {
    return this.elements;
  }

  DOM.prototype.getFirst = function getFirst() {
    return this.elements && this.elements[0] ? this.elements[0] : null;
  }

  function justNumbers(value) {
    if (value) {
      return value.replace(/\D/gi, '');
    }
  }

  function buildTableInformations(data) {

    doc.querySelector('[data-js="street"]').textContent = data.logradouro || ' - ';
    doc.querySelector('[data-js="neighborhood"]').textContent = data.bairro || ' - ';
    doc.querySelector('[data-js="state"]').textContent = data.uf || ' - ';
    doc.querySelector('[data-js="city"]').textContent = data.localidade || ' - ';
    doc.querySelector('[data-js="postal-code"]').textContent = data.cep || ' - ';

    doc.querySelector('[data-js="adress-info"]').classList.remove('adress-info--hide');
  }

  function hideTableInformations() {
    doc.querySelector('[data-js="adress-info"]').classList.add('adress-info--hide');
  }

  var $cepForm = new DOM('[data-js="cep-form"]');
  var $notification = new DOM('[data-js="notification"]');
  var $notificationText = new DOM('[data-js="notification-text"]');
  var timeNotification = null;

  function addTextInNotification(text) {
    clearTimeout(timeNotification);

    $notification.getFirst().classList.remove('notification--hide');
    $notificationText.getFirst().textContent = text;

    timeNotification = setTimeout(function () {
      $notification.getFirst().classList.add('notification--hide');
    }, 3000);
  }

  $cepForm.on('submit', function (e) {
    e.preventDefault();

    var $cepInput = new DOM('[data-js="cep-input"]');
    var valueCepInput = $cepInput.getFirst().value;
    var clearCode = justNumbers(valueCepInput);
    if (clearCode) {

      addTextInNotification('Searching informations to postal code ' + valueCepInput);

      setTimeout(function () {
        getDataByPostalCode(clearCode, function (data) {
          if (data.erro) {
            addTextInNotification('Sorry! We don\'t find an adress to postal code ' + clearCode);
            hideTableInformations();
          } else {
            addTextInNotification('Adress find to postal code ' + clearCode)
            buildTableInformations(data);
          }
        });
      }, 1000);
      return;
    }
    console.error('Error to do request to CEP ', valueCepInput);
  });

  function getDataByPostalCode(postalCode, callback) {
    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + postalCode + '/json/');
    ajax.send(null);

    ajax.addEventListener('readystatechange', function () {
      if (ajax.readyState === 4 && ajax.status === 200) {
        try {
          var data = JSON.parse(ajax.responseText);
          callback(data);
        } catch (err) {
          console.error(err);
          callback({ erro: true });
        }
      }

      if (ajax.readyState === 4 && ajax.status !== 200) {
        callback({ erro: true });
      }
    }, false);
  }

  // 0 - request does not send
  // 1 - connection open
  // 2 - headers received
  // 3 - loading body request
  // 4 - finished

})(window, document);
