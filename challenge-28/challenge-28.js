(function(win, doc) {
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

  function DOM(string) {
    var element = doc.querySelectorAll(string);
    this.element = element;
  }
  DOM.prototype.on = function on( event, callback ) {
    return Array.prototype.forEach.call(this.element, function(element) {
      return element.addEventListener(event, callback, false);
    });
  };
  DOM.prototype.off = function off( event, callback ) {
    return Array.prototype.forEach.call(this.element, function(element) {
      return element.removeEventListener(event, callback, false);
    });
  };
  DOM.prototype.get = function get() {
    return this.element;
  };
  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply( this.element, arguments );
  };
  DOM.prototype.map = function map() {
    return Array.prototype.map.apply( this.element, arguments );
  };
  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply( this.element, arguments );
  };
  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply( this.element, arguments );
  };
  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply( this.element, arguments );
  };
  DOM.prototype.every = function every() {
    return Array.prototype.every.apply( this.element, arguments );
  };
  DOM.prototype.some = function some() {
    return Array.prototype.some.apply( this.element, arguments );
  };
  function is(obj) {
    return Object.prototype.toString.call(obj);
  }
  DOM.prototype.isArray = function isArray(obj) {
    return is(obj) === '[object Array]';
  }
  DOM.prototype.isObject = function isObject(obj) {
    return is(obj) === '[object Object]';
  }
  DOM.prototype.isFunction = function isFunction(obj) {
    return is(obj) === '[object Function]';
  }
  DOM.prototype.isNumber = function isNumber(obj) {
    return is(obj) === '[object Number]';
  }
  DOM.prototype.isString = function isString(obj) {
    return is(obj) === '[object String]';
  }
  DOM.prototype.isBoolean = function isBoolean(obj) {
    return is(obj) === '[object Boolean]';
  }
  DOM.prototype.isNull = function isNull(obj) {
    return is(obj) === '[object Null]' || is(obj) === '[object Undefined]';
  }

  var $form = new DOM('[data-js="form-cep"]');
  var $inputCEP = new DOM('[data-js="input-cep"]');
  var $logradouro = new DOM('[data-js="logradouro"]');
  var $bairro = new DOM('[data-js="bairro"]');
  var $uf = new DOM('[data-js="uf"]');
  var $localidade = new DOM('[data-js="localidade"]');
  var $cep = new DOM('[data-js="cep"]');
  var $status = new DOM('[data-js="status"]');
  var ajax = new XMLHttpRequest();

  $form.on('submit', handleFormCEP);

  function handleFormCEP(event) {
    event.preventDefault();
    var cep = justNumbers($inputCEP.get()[0].value);
    var url = 'https://viacep.com.br/ws/' + cep + '/json';
    ajax.open('GET', url);
    ajax.send();

    $status.get()[0].textContent = 'Buscando informações para o CEP ' + $inputCEP.get()[0].value + '...';
    ajax.addEventListener('readystatechange', handleAjaxState);
  }

  function justNumbers(value) {
    return value.replace(/\D/g, '');
  }

  function handleAjaxState() {
    var data = parseDataCep();

    if( isRequestOk() )
      $status.get()[0].textContent = 'Endereço referente ao CEP: '+ $inputCEP.get()[0].value;
    
    handleCepFields(data);
  }

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function handleCepFields(data) {
    if(!data) {
      $status.get()[0].textContent = 'Não encontramos o endereço para o CEP '+ $inputCEP.get()[0].value;
      data = clearFields();
    }

    $logradouro.get()[0].value = data.logradouro;
    $bairro.get()[0].value = data.bairro;
    $uf.get()[0].value = data.uf;
    $localidade.get()[0].value = data.localidade;
    $cep.get()[0].value = data.cep;
  }

  function parseDataCep() {
    var result;

    try {
      result = JSON.parse(ajax.responseText);
    } catch (e) {
      result = null;
    }
    return result;
  }

  function clearFields() {
    return {
      logradouro: '',
      bairro: '',
      uf: '',
      localidade: '',
      cep: ''
    }
  }

})(window, document);
