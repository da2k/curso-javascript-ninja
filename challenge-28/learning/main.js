/*
  Anotações AJAX - Asynhrnous JavaScript and XML
  Basicamente, trazer informações sem ter que carregar toda a tela
  3 passos apra funcionar uma requisição ajax:

  1) instancia de objeto
  var ajax = new XMLHttpRequest();

  2)
  ajax.open(<protocol>, <URL>) -- Protocolos: post, get, put, delet

  3)
  ajax.send(<data>) -- Dados a ser enviados para o servidor

  métodos para tratar a requisição
  jax.readyState() - retorna um número, indicando como a requisição está no momento.
  retorno 0 - Conexão não iniciada
  retorno 1 - Conexão inciada
  apartir de agora é preciso adcionar um evento, que fique monitorando a conexão iniciada, para poder
  verificar os momentos dela
  para monitorar os eventos da conexão depois de inicada, usa o readystatecange

  ajax.addEventListener('readystatechange' function (){
    return ajax.readyState()
  })

  Apartir de agora os retornos serão,
  retorno 2 - headers recebidos
  retorno 3 - Carregando corpo da requisição
  retorno 4 - Requisição concuida

  ajax.responseText - Retorna um string com a reqisição do ajax

*/

(function () {
  'use strict';

  //Instância do xhr, abrindo a conexão e enviando
  var ajax = new XMLHttpRequest();
  ajax.open('GET', '/data/data.json');
  ajax.send();

  //Adcionando o evento readystatechange, salvando na variável data,
  //o retorno (data), vindo como texto, através do responseText
  //e tranformando em JSON usando o parte, do data recebido
  ajax.addEventListener('readystatechange', function () {
    if (requestOk()) {
      var data = JSON.parse(ajax.responseText)
      console.log(data.menssagem)
    }
  })

  //verificando se está tudo ok com a requisição
  function requestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  console.log(ajax.statusText)


})()

(function (doc) {
  'use strict';

  function DOM(element) {
    this.element = doc.querySelectorAll(element);
  }

  DOM.prototype.on = function (event, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(event, callback, false)
    })
  };

  DOM.prototype.off = function (event, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(event, callback, false)
    })
  };

  DOM.prototype.get = function () {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  }

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  }

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  }

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  }

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  }

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  }

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  }

  function is(obj) {
    return Object.prototype.toString.call(obj)
  }

  DOM.prototype.isArray = function isArray(obj) {
    return is(obj) === '[object Array]';
  }

  DOM.prototype.isObject = function isObject(obj) {
    return is(obj) === '[object Object]';
  }

  DOM.prototype.isNumber = function isNumber(obj) {
    return is(obj) === '[object Number]';
  }

  DOM.prototype.isFunction = function isFunction(obj) {
    return is(obj) === '[object Function]';
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


  var ajax = new XMLHttpRequest();


  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function isCepRangeOk() {
    return $inputCep.get()[0].value.length === 8;
  }

  var $inputs = new DOM('[data-js="input"]');
  var $inputCep = new DOM('[data-js="inputCep"]');
  var $cep = new DOM('[data-js="btnCEP"]');

  console.log($inputs, $cep)

  function getUrl() {
    return 'https://viacep.com.br/ws/[CEP]/json/'.replace('[CEP]', $inputCep.get()[0].value.replace(/\D/g, '')
    );
  }

  $cep.on('click', function () {
    var cepString = getUrl();
    event.preventDefault();
    ajax.open('GET', cepString)
    ajax.addEventListener('readystatechange', function () {
      if (isRequestOk()) {
        console.log(cepString)

        var data = JSON.parse(ajax.responseText)
        $inputs.get()[0].value = data.logradouro;
        $inputs.get()[1].value = data.bairro;
        $inputs.get()[2].value = data.uf;
        $inputs.get()[3].value = data.localidade;
        $inputs.get()[4].value = data.cep;
      }
    });
  })



})(document)
