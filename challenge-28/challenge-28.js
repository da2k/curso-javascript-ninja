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
    "http://apps.widenet.com.br/busca-cep/api-de-consulta", onde [CEP] será o CEP passado
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
    //Inicio libDOM
    function DOM(elements) {
        this.element = document.querySelectorAll(elements);
    }
    DOM.prototype.on = function on(eventType, callback) {
        Array.prototype.forEach.call(this.element, function(element) {
            element.addEventListener(eventType, callback, false);
        });
    };
    DOM.prototype.off = function off(eventType, callback) {
        Array.prototype.forEach.call(this.element, function(element) {
            element.removeEventListener(eventType, callback, false);
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

    DOM.prototype.isArray = function isArray(param) {
        return Object.prototype.toString.call(param) === '[object Array]';
    }
    DOM.prototype.isObject = function isObject(param) {
        return Object.prototype.toString.call(param) === '[object Object]';
    }
    DOM.prototype.isFunction = function isFunction(param) {
        return Object.prototype.toString.call(param) === '[object Function]';
    }
    DOM.prototype.isNumber = function isNumber(param) {
        return Object.prototype.toString.call(param) === '[object Number]';
    }
    DOM.prototype.isString = function isString(param) {
        return Object.prototype.toString.call(param) === '[object String]';
    }
    DOM.prototype.isBoolean = function isBoolean(param) {
        return Object.prototype.toString.call(param) === '[object Boolean]';
    }
    DOM.prototype.isNull = function isNull(param) {
        return Object.prototype.toString.call(param) === '[object Null]' 
        || Object.prototype.toString.call(param) === '[object Undefined]';
    }
    //Final LibDOM

    var $formCep = new DOM('[data-js="form-cep"]');
    $formCep.on('submit', handleSubmitFormCEP);
    var $inputCEP = new DOM('[data-js="input-cep"]');
    var ajax = new XMLHttpRequest();
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $cep = new DOM('[data-js="cep"]');
    var $status = new DOM('[data-js="status"]');

    function handleSubmitFormCEP(event) {
        event.preventDefault();
        var url = getUrl();
        ajax.open('GET', url);
        ajax.send();
        getMessage('loading');
        ajax.addEventListener('readystatechange', handleReadyStateChange);
    }

    function getUrl() {
        return 'http://apps.widenet.com.br/busca-cep/api/cep.json?code=<cepCode>'.replace (
            '<cepCode>', clearCEP()
        );
    }

    function clearCEP () {
        return $inputCEP.get()[0].value.replace(/\D/g, '');
    }

    function handleReadyStateChange() {
        if(isRequestOK()) {
            fillCEPFields();
            getMessage('ok');
        }
        
    }

    function isRequestOK () {
        return ajax.readyState === 4 && ajax.status === 200;
    }

    function fillCEPFields () {
        var data = JSON.parse(ajax.responseText);
    
        if(data.status != 1){
            data = clearData();
            getMessage('error');
        }
        
        $logradouro.get()[0].textContent = data.address;
        $bairro.get()[0].textContent = data.district;
        $estado.get()[0].textContent = data.state;
        $cidade.get()[0].textContent = data.city;
        $cep.get()[0].textContent = data.code;
    }

    function clearData() {
        return {
            address: '-',
            district: '-',
            state: '-',
            city: '-',
            code: '-'
        }
    }

    function getMessage(type) {
        var cep = clearCEP();
        var messages = {
            loading: 'Buscando informações para o CEP ' +cep +'...',
            ok: 'Endereço referente ao CEP: ' +cep,
            error: 'Não encontramos endereço para o CEP: ' +cep
        };
        $status.get()[0].textContent = messages[type];
    }

})(window, document);
