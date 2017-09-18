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

  function DOM(elemento){
    this.element = document.querySelectorAll(elemento);
  }

  DOM.prototype.on = function on(evento, callback){
    Array.prototype.forEach.call(this.element, function(item){
      item.addEventListener(evento, callback, false);
    });
  };

  DOM.prototype.off = function off(evento, callback){
    Array.prototype.forEach.call(this.element, function(item){
      item.removeEventListener(evento, callback, false);
    });
  };

  DOM.prototype.get = function get(){
    return this.element;
  };

  DOM.prototype.forEach = function forEach(callback){
    return Array.prototype.forEach.call(this.element, callback);
  }

  DOM.prototype.map = function map(callback){
    return Array.prototype.map.call(this.element, callback);
  }

  DOM.prototype.filter = function filter(callback){
    return Array.prototype.filter.call(this.element, callback);
  }

  DOM.prototype.reduce = function reduce(){
    return Array.prototype.reduce.apply(this.element, arguments);
  }
  
  DOM.prototype.reduceRight = function reduceRight(){
    return Array.prototype.reduceRight.apply(this.element, arguments);
  }

  DOM.prototype.every = function every(callback){
    return Array.prototype.every.call(this.element, callback);
  }

  DOM.prototype.some = function some(callback){
    return Array.prototype.some.call(this.element, callback);
  }

  DOM.prototype.isArray = function isArray(valor){
    return Object.prototype.toString.call(valor) === '[object Array]';
  }
  
  DOM.prototype.isObject = function isObject(valor){
    return Object.prototype.toString.call(valor) === '[object Object]';
  }

  DOM.prototype.isFunction = function isFunction(valor){
    return Object.prototype.toString.call(valor) === '[object Function]';
  }

  DOM.prototype.isNumber = function isNumber(valor){
    return Object.prototype.toString.call(valor) === '[object Number]';
  }

  DOM.prototype.isString = function isString(valor){
    return Object.prototype.toString.call(valor) === '[object String]';
  }

  DOM.prototype.isBoolean = function isBoolean(valor){
    return Object.prototype.toString.call(valor) === '[object Boolean]';
  }

  DOM.prototype.isNull = function isNull(valor){
    return Object.prototype.toString.call(valor) === '[object Undefined]' || 
            Object.prototype.toString.call(valor) ==='[object Null]';
  }

  var cep = new DOM('[data-js="cep"]');
  var btn = new DOM('[data-js="btnSubmit"]');
  var alerta = new DOM('[data-js="alerta"]');
  var endereco = new DOM('[data-js="endereco"]');
  var logradouro = new DOM('[data-js="logradouro"]');
  var bairro = new DOM('[data-js="bairro"]');
  var cidade = new DOM('[data-js="cidade"]');
  var estado = new DOM('[data-js="estado"]');
  var cep = new DOM('[data-js="cep"]');

  btn.on('click', function(event){
    event.preventDefault();

    if (!validaCep()) {
      msgAlerta('Informe um CEP válido com 8 dígitos!', 'danger');
      escondeEndereco();
      return;
    }

    var cepLimpo = limpaCep();
    
    if(!checaLength(cepLimpo)){
      msgAlerta('Tamanho do CEP inválido. Ele deve ter 8 dígitos!', 'warning');
      escondeEndereco();
      return;
    }

    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + cepLimpo + '/json/');
    ajax.send();
    msgAlerta('Buscando informações para o CEP ' + cepLimpo + '...', 'info');

    ajax.addEventListener('readystatechange', function(){
      if(ajax.readyState === 4 && ajax.status === 200){
        var endereco = JSON.parse(ajax.responseText);
        if(endereco.hasOwnProperty('erro')){
          msgAlerta('Não encontramos o endereço para o CEP ' + cepLimpo + '.', 'dark');
          escondeEndereco();
          return;
        }
        msgAlerta('Endereço referente ao CEP ' + cepLimpo + ':', 'success');
        console.log(endereco);
        alimentaEndereco(endereco);
        mostraEndereco();
      }


    }, false);

  }, false);


  function alimentaEndereco(end){
    Array.prototype.forEach.call(endereco.get()[0].children, function(item){
      if(item.hasAttribute('data-js')){
        if(item.firstChild !== null)
          item.removeChild(item.firstChild);
        
        if(end[item.getAttribute('data-js')] !== '')
          item.appendChild(document.createTextNode(end[item.getAttribute('data-js')]));
          
      }
    });
  }

  function mostraEndereco(){
    if(endereco.get()[0].getAttribute('class') === 'd-none')
      endereco.get()[0].setAttribute('class', '');
  }

  function escondeEndereco(){
    if(endereco.get()[0].getAttribute('class') === '')
    endereco.get()[0].setAttribute('class', 'd-none');
  }

  function checaLength(cep){
    return cep.length === 8 ? true : false;
  }

  function limpaCep(){
    return cep.get()[0].value.match(/\d/g).join('');    
  }

  function validaCep(){
    if(cep.get()[0].value === '')
      return false;
    if(cep.get()[0].value.match(/\d/g) === null)
      return false;
    return true;    
  }

  function msgAlerta(mensagem, tagCss){
    var msgErro = document.createTextNode(mensagem);
    var elementoErro = document.createElement('span');
    var erro = elementoErro.appendChild(msgErro);
    alerta.get()[0].replaceChild(erro, alerta.get()[0].firstChild);
    alerta.get()[0].className = 'alert alert-' + tagCss;
  }

})();