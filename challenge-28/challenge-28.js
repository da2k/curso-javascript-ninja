(function(){
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

   function DOM(elements){
        this.element = this.getDOMElements(elements);
    }

    DOM.prototype.getDOMElements = function getDOMElements(elements){
        return document.querySelectorAll(elements);
    }

    DOM.prototype.on = function on(eventType, callback){
        Array.prototype.forEach.call(this.element, element => {
            element.addEventListener(eventType, callback, false);
        });
    }

    DOM.prototype.off = function off(event, callback){
        Array.prototype.forEach.call(this.element, element => {
            element.removeEventListener(eventType, callback, false);
        });
    }

    DOM.prototype.get = function get(){
        return this.element;
    }

    DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply(this.element, arguments);
    }

    DOM.prototype.map = function map(){
        return Array.prototype.map.apply(this.element, arguments);
    }

    DOM.prototype.filter = function filter(){
        return Array.prototype.forEach.apply(this.element, arguments);
    }

    DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply(this.element, arguments);
    }

    DOM.prototype.every = function every(){
        return Array.prototype.every.apply(this.element, arguments);
    }

    DOM.prototype.some = function some(){
        return Array.prototype.some.apply(this.element, arguments);
    }

    DOM.prototype.is = function is(param, objectName){
        return Object.prototype.toString.call(param) === '[object ' + objectName + ']';
    }

    DOM.prototype.isArray = function isArray(param){
        return this.is(param, 'Array');
    }

    DOM.prototype.isObject = function isObject(param){
        return this.is(param, 'Object');
    }

    DOM.prototype.isFunction = function isFunction(param){
        return this.is(param, 'Function');
    }

    DOM.prototype.isNumber = function isNumber(param){
        return this.is(param, 'Number');
    }

    DOM.prototype.isString = function isString(param){
        return this.is(param, 'String');
    }

    DOM.prototype.isBoolean = function isBoolean(param){
        return this.is(param, 'Boolean');
    }

    DOM.prototype.isNull = function isNull(param){
        return  this.is(param, 'Null') || this.is(param, 'Undefined');
    }

    var $formCep = new DOM('[data-js="form-cep"]');
    var $inputCep = new DOM('[data-js="input-cep"]');
    $formCep.on('submit', handleSubmitFormCEP);
    var ajax = new XMLHttpRequest();

    function handleSubmitFormCEP(event){
        event.preventDefault();
        getMessage('loading');
        ajax.open('GET', getUrl());
        ajax.send();
        ajax.addEventListener('readystatechange', handleReadyStateChange);
    }

    function handleReadyStateChange(){
        if(isRequestOk()){
            fillCEPFields();
        }
    }

    function isRequestOk(){
        return ajax.readyState === 4;
    }

    function getUrl(){
        return replaceCep('https://viacep.com.br/ws/[CEP]/json/');
    }

    function replaceCep(text){
        return text.replace('[CEP]' , $inputCep.get()[0].value.replace(/\D/g, ''));
    }

    function fillCEPFields(){
        var data = parseData();
        if(!data){
            getMessage('error');
            data = getClearData();
        }else{
            getMessage('ok');
        }
        setContentText('logradouro', data.logradouro);
        setContentText('bairro', data.bairro);
        setContentText('cidade', data.localidade);
        setContentText('estado', data.uf);
        setContentText('cep', data.cep);
    }

    function setContentText(name, value){
        var $v = new DOM('[data-js="' + name +'"]');
        $v.get()[0].textContent = value;
    }

    function getClearData(){
        return {
            logradouro: "-",
            bairro: "-",
            localidade: "-",
            uf: "-",
            cep: "-"
        };
    }

    function parseData(){
        var result = null;
        try{
            result = JSON.parse(ajax.responseText);
        }catch(e){
            result = null;
        }
        return result;
    }

    function getMessage(type){
        var messages = {
            loading: 'Buscando informações para o CEP [CEP]...',
            ok: 'Endereço referente ao CEP [CEP]:',
            error: 'Não encontramos o endereço para o CEP [CEP].'
        };
        setContentText('status', replaceCep(messages[type]));
    }
})();
