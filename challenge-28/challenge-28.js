(function(doc){

  'use strict';
  function DOM(elementos){
   this.element = doc.querySelectorAll(elementos);
  }

  DOM.prototype.on = function on(event, callback){
    Array.prototype.forEach.call(this.element,function(item, index){
      item.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback){
    Array.prototype.forEach.call(this.element, function(item, index){
      item.removeEventListener(event, callback, false);
    });
  };

  DOM.prototype.get = function get(event, callback){
    return this.element;
  };

  DOM.prototype.forEach = function forEach(){
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map(){
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter(){
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight(){
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every(){
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some(){
    return Array.prototype.some.apply(this.element, arguments);
  };

  DOM.prototype.isArray = function isArray(tipoObject){
    return Object.prototype.toString.call(tipoObject) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(tipoObject){
    return Object.prototype.toString.call(tipoObject) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(tipoObject){
    return Object.prototype.toString.call(tipoObject) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(tipoObject){
    return Object.prototype.toString.call(tipoObject) === '[object Number]';
  };

  DOM.prototype.isString = function isString(tipoObject){
    return Object.prototype.toString.call(tipoObject) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(tipoObject){
    return Object.prototype.toString.call(tipoObject) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(tipoObject){
    return Object.prototype.toString.call(tipoObject) === '[object Null]' ||
    Object.prototype.toString.call(tipoObject) === '[object Undefined]';
  };

  var ajax = new XMLHttpRequest();
  var $formCEP = new DOM('[data-js="form-cep"]');
  var $inputCEP = new DOM('[data-js="input"]');
  var $mensagem = new DOM('[data-js="mensagem"]');
  $formCEP.on('submit', handleSubmitCep);

  function handleSubmitCep(event){
    event.preventDefault();
    $mensagem.get()[0].textContent = 'Buscando informações para o CEP ' + $inputCEP.get()[0].value.replace(/\D/g, '') + '...';
    var cepURL = getURL();
    ajax.open('GET', cepURL);
    ajax.send();
    ajax.addEventListener('readystatechange', function(){
      if(isRequestOK()) {
        var dados = JSON.parse(ajax.responseText);
        setCampos(dados);
        console.log(dados.code);
      }
    });
    console.log('submit');
  }

  function getURL(){
    var customCEP = $inputCEP.get()[0].value.replace(/\D/g, '');

    return 'http://apps.widenet.com.br/busca-cep/api/cep/' + customCEP + '.json'
  }
  function isRequestOK(){
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function setCampos(dados){
    if (dados.status === 1) {
      console.log('entrou nas informações');
      $mensagem.get()[0].textContent = 'Endereço referente ao CEP ' + $inputCEP.get()[0].value.replace(/\D/g, '');
      var $logradouro = new DOM('[data-js="logradouro"]');
      var $bairro = new DOM('[data-js="bairro"]');
      var $estado = new DOM('[data-js="estado"]');
      var $cidade = new DOM('[data-js="cidade"]');
      var $cep = new DOM('[data-js="cep"]');
      $logradouro.get()[0].textContent = dados.address;
      $bairro.get()[0].textContent = dados.district;
      $estado.get()[0].textContent = dados.state;
      $cidade.get()[0].textContent = dados.city;
      $cep.get()[0].textContent = dados.code;
    }
    else {
      console.log('nao achou informações');
      $mensagem.get()[0].textContent = 'Não encontramos o endereço para o CEP ' + $inputCEP.get()[0].value.replace(/\D/g, '');
    }
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
})(document);
