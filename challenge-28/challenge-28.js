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

  (function (win, doc) {
    'use strict';


    function DOM(elements) {
      this.element = doc.querySelectorAll(elements);
    }

    DOM.prototype.on = function on(action, func) {
      Array.prototype.map.call(this.element, function (item) {
        item.addEventListener(action, func, false);
      })
    }

    DOM.prototype.off = function off(action, func) {
       Array.prototype.map.call(this.element, function (item) {
        item.removeEventListener(action, func, false);
      })
    }

    DOM.prototype.get = function get() {
      if(this.element.lenght > 0)
        return this.element;
      return this.element[0];
    }

    DOM.prototype.map = function map(func) {
      return Array.prototype.map.call(this.element, func);
    }

    DOM.prototype.forEach = function forEach(func) {
      return Array.prototype.forEach.call(this.element, func);
    }

    DOM.prototype.some = function some(func) {
      return Array.prototype.some.call(this.element, func);
    }

    DOM.prototype.every = function every(func) {
      return Array.prototype.every.call(this.element, func);
    }

    DOM.prototype.reduce = function reduce(func) {
      return Array.prototype.reduce.call(this.element, func);
    }

    DOM.prototype.reduceRight = function reduceRight(func) {
      return Array.prototype.reduceRight.call(this.element, func);
    }

    DOM.prototype.filter = function filter(func) {
      return Array.prototype.filter.call(this.element, func);
    }

    DOM.isArray = function isArray(element) {
      return Object.prototype.toString.call(element) === '[object Array]';
    }

    DOM.isNumber = function isNumber(element) {
      return Object.prototype.toString.call(element) === '[object Number]';
    }

    DOM.isObject = function isObject(element) {
      return Object.prototype.toString.call(element) === '[object Object]';
    }

    DOM.isFunction = function isFunction(element) {
      return Object.prototype.toString.call(element) === '[object Function]';
    }

    DOM.isString = function isString(element) {
      return Object.prototype.toString.call(element) === '[object String]';
    }


    DOM.isBoolean = function isBoolean(element) {
      return Object.prototype.toString.call(element) === '[object Boolean]';
    }

    DOM.isNull = function isNull(element) {
      return Object.prototype.toString.call(element) === '[object Null]'
       || Object.prototype.toString.call(element) === '[object Undefined]';

    }

    var $form = new DOM('form');
    var $status = new DOM('[data-js="status"]').get();
    var $logradouro = new DOM('[data-js="logradouro"]').get();
    var $bairro = new DOM('[data-js="bairro"]').get();
    var $estado = new DOM('[data-js="estado"]').get();
    var $cidade = new DOM('[data-js="cidade"]').get();
    var $cep = '';

    $form.on('submit', handleSubmitFormCEP, false);
    var ajax = new XMLHttpRequest();

    function handleSubmitFormCEP(event) {
      event.preventDefault();

      $cep = new DOM('[data-js="cep"]').get().value;
      console.log($cep);
      if(isValidCep($cep)){
        $cep = cleanCep($cep);
        ajax.open('GET','https://viacep.com.br/ws/' + $cep + '/json/');
        ajax.send();
        getMessage('loading');
        ajax.addEventListener('readystatechange',  handleReadyStateChange);

      }
    }

    function handleReadyStateChange(){
      if(isRequestOK()){
        populater();
      }
    }

    function isRequestOK(){
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function isValidCep(cep){
      if(cep == null)
        return false;

      if(cep.length < 8)
        return false;

      return true;
    }

    function cleanCep(cep){
       return cep.replace(/\D/g, '');
    }

    function populater(){
      var data = parseData();
      if(!data){
        getMessage('error');
        data = clearData();
        return;
      }

      $logradouro.value = data.logradouro;
      $estado.value = data.uf;
      $bairro.value = data.bairro;
      $cidade.value = data.localidade;

      getMessage('ok');

    }

    function clearData(){
      return{
        logradouro : ' ',
        uf: '',
        localidade: '',
        bairro: ''
      }
    }

    function parseData(){
      var result;
       try {
          result = JSON.parse(ajax.responseText);
        }
        catch(e){
          result = null;
        }
        return result;
    }

    function getMessage(type){
      var messages = {
        loading:'Buscando informações para o CEP ' + $cep + '...',
        ok: 'Endereço referente ao CEP ' + $cep + ':',
        error: 'Não encontramos o endereço para o CEP  ' + $cep + ':'
      };
      $status.innerHTML = messages[type];
    }


  })(window, document);
