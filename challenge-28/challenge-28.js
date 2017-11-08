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
  (function() {
    'use strict';

    function DOM(element) {
        this.element = document.querySelectorAll(element);
    }

    // DOM Methods
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

    // Array Methods
    DOM.prototype.forEach = function forEach() {
        return Array.prototype.forEach.apply(this.element, arguments);
    };

    DOM.prototype.map = function map() {
        return Array.prototype.map.apply(this.element, arguments);
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

    // Type Checking Methods
    DOM.prototype.isArray = function isArray(element) {
        return Object.prototype.toString.call(element) === '[object Array]';
    };

    DOM.prototype.isObject = function isObject(element) {
        return Object.prototype.toString.call(element) === '[object Object]';
    };

    DOM.prototype.isFunction = function isFunction(element) {
        return Object.prototype.toString.call(element) === '[object Function]';
    };

    DOM.prototype.isNumber = function isNumber(element) {
        return Object.prototype.toString.call(element) === '[object Number]';
    };

    DOM.prototype.isString = function isString(element) {
        return Object.prototype.toString.call(element) === '[object String]';
    };

    DOM.prototype.isBoolean = function isBoolean(element) {
        return Object.prototype.toString.call(element) === '[object Boolean]';
    };

    DOM.prototype.isNull = function isNull(element) {
        return Object.prototype.toString.call(element) === '[object Null]'
        || Object.prototype.toString.call(element) === '[object Undefined]';
    };

    var ajax = new XMLHttpRequest();
    var cep = new DOM('[data-js="cep"]');
    var cepSearch = new DOM('[data-js="cep-search"]');

    var cepField = new DOM('[data-js="cep-field"]');
    var cityField = new DOM('[data-js="city-field"]');
    var districtField = new DOM('[data-js="district-field"]');
    var stateField = new DOM('[data-js="state-field"]');
    var streetField = new DOM('[data-js="street-field"]');

    var status = new DOM('[data-js="status"');

    cepSearch.on('submit', submitForm);

    function clearCEP() {
        return cep.get()[0].value.replace(/\D/g, '');
    }

    function clearData() {
        return {
            cep: '-',
            localidade: '-',
            bairro: '-',
            uf: '-',
            logradouro: '-'
        };
    }

    function fillCEPFields() {
        var cepData = parseCEPData();

        if (!cepData) {
            getMessage('error');
            cepData = clearData();
            return;
        }

        cepField.get()[0].textContent = cepData.cep;
        cityField.get()[0].textContent = cepData.localidade;
        districtField.get()[0].textContent = cepData.bairro;
        stateField.get()[0].textContent = cepData.uf;
        streetField.get()[0].textContent = cepData.logradouro;
    }

    function getMessage(messageType) {
        var messages = {
            error: replaceCEP('CEP [CEP] não encontrado!'),
            loading: replaceCEP('Buscando CEP [CEP]...'),
            ok: replaceCEP('Busca do CEP [CEP] finalizada!')
        };
        status.get()[0].textContent = messages[messageType];
    }

    function getURL() {
        return replaceCEP('https://viacep.com.br/ws/[CEP]/json/');
    }

    function handleStateChange() {
        if (isRequestOK()) {
            getMessage('ok');
            fillCEPFields();
        }
    }

    function isRequestOK() {
        return ajax.readyState === 4 && ajax.status === 200;
    }

    function parseCEPData() {
        var result;

        try {
            result = JSON.parse(ajax.responseText);
        } catch (error) {
            result = null;
        }

        return result;
    }

    function replaceCEP(message) {
        return message.replace('[CEP]', clearCEP());
    }

    function submitForm(event) {
        event.preventDefault();
        var url = getURL();
        ajax.open('GET', url);
        ajax.send();
        getMessage('loading');
        ajax.addEventListener('readystatechange', handleStateChange);
    }
})();
