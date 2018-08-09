  (function(win, doc) {
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
      'use strict';

      function DOM(element) {
          this.element = element;
      }

      DOM.prototype.on = function on(event, callback) {
          document.addEventListener(event, callback);
      };

      DOM.prototype.off = function off(event, callback) {
          document.removeEventListener(event, callback);
      };

      DOM.prototype.get = function get(element) {
          return this.element;
      };

      DOM.prototype.foreach = function forEach() {
          return Array.prototype.forEach.apply(this.element, arguments);
      };

      DOM.prototype.map = function map() {
          return Array.prototype.map.apply(this.element, arguments);
      };

      DOM.prototype.reduce = function reduce() {
          return Array.prototype.reduce.apply(this.element, arguments);
      };

      DOM.prototype.reduce = function reduce() {
          return Array.prototype.reduceRight.apply(this.element, arguments);
      };

      DOM.prototype.every = function every() {
          return Array.prototype.every.apply(this.element, arguments);
      };

      DOM.prototype.some = function some() {
          return Array.prototype.every.some.apply(this.element, arguments);
      };

      DOM.prototype.isString = function isBoolean(param) {
          return Object.prototype.toString.call(param) === '[Object String]';
      };

      DOM.prototype.isBolean = function isBoolean(param) {
          return Object.prototype.toString.call(param) === '[Object Boolea]n';
      };

      DOM.prototype.isNumber = function isNumber(param) {
          return Object.prototype.toString.call(param) === '[Object Number]';
      };

      DOM.prototype.isFunction = function isFunction(param) {
          return Object.prototype.toString.call(param) === '[Object Function]';
      };

      DOM.prototype.isObject = function isFunction(param) {
          return Object.prototype.toString.call(param) === '[Object Object]';
      };

      DOM.prototype.isArray = function isArray(param) {
          return Object.prototype.toString.call(param) === '[Object Array]';
      }

      DOM.prototype.isNull = function isNull(param) {
          return Object.prototype.toString.call(param) === '[Object Null]' ||
              Object.prototype.toString.call(param) === '[Object undefined]';
      }
      var $formCEP = new DOM('[data-js="form-cep"]');
      var $inputCEP = new DOM('[data-js="input-cep"]');
      var $logradouro = new DOM('[data-js="logradouro"]');
      var $bairro = new DOM('[data-js="bairro]"');
      var $estado = new DOM('[data-js="estado"]');
      var $cidade = new DOM('data-js="cidade"');
      var $cep = new DOM('[data-js="cep"]');
      var $status = new DOM('[data-js="status"]');
      var ajax = new XMLHttpRequest();

      $formCEP.on('submit', hundleSubmitFormCep);

      function hundleSubmitFormCep(event) {
          event.preventDefault();
          var url = getUrl();
          ajax.open('GET', 'http://apps.widenet.com.br/busca-cep/api/cep/07941120.json');
          ajax.send();
          getMessage('loading');
          ajax.addEventListener('readystatechange', hundleReadyStateChange);
      }

      function getUrl() {
          debugger;
          return 'http://apps.widenet.com.br/busca-cep/api/cep/[CEP].json'.replace(
              '[CEP]', $inputCEP.get()[0].value
          );
      }

      function hundleReadyStateChange() {
          if (isRequestOk) {
              fillCEPFields();
              getMessage('ok');
          }
      }

      function isRequestOk() {
          return ajax.readyState === 4 && ajax.status === 200;
      }

      function fillCEPFields() {
          var data = parseData();
          if (!data)
              getMessage('error');
          console.log(data);
          $logradouro.get()[0].textContent = data.address;
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
          var messages = {
              loading: 'Buscando informações para o CEP [CEP]...',
              ok: 'Endereço referente ao CEP [CEP]:',
              erro: 'Não encontramos o endereço para o CEP [CEP].'
          }[type];
          $status.get()[0].textContent = messages[type];

      }

  })(Window, document);