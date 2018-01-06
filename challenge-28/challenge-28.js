( function( win, doc ) {
  'user strict';
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

  function DOM( query ) {
    this.element = doc.querySelectorAll( query );
  }

  DOM.prototype.on = function on( eventName, callback ) {
    Array.prototype.forEach.call( this.element, function( element ) {
      element.addEventListener( eventName, callback, false );
    } );
  }

  DOM.prototype.off = function off( eventName, callback ) {
    Array.prototype.forEach.call( this.element, function( element ) {
      element.removeEventListener( eventName, callback, false );
    } );
  }

  DOM.prototype.get = function get() {
    return this.element;
  }

  DOM.prototype.forEach = function forEach() {
    Array.prototype.forEach.apply( this.element, arguments );
  }

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply( this.element, arguments );
  }

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.call( this.element, arguments );
  }

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.call( this.element, arguments );
  }

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.call( this.element, arguments );
  }

  DOM.prototype.every = function every() {
    return Array.prototype.every.call( this.element, arguments );
  }

  DOM.prototype.some = function some() {
    return Array.prototype.some.call( this.element, arguments );
  }

  DOM.prototype.isArray = function isArray( object ) {
    return Object.prototype.toString.call( object ) === '[object Array]';
  }

  DOM.prototype.isFunction = function isFunction( object ) {
    return Object.prototype.toString.call( object ) === '[object Function]';
  }

  DOM.prototype.isNumber = function isNumber( object ) {
    return Object.prototype.toString.call( object ) === '[object Number]';
  }

  DOM.prototype.isString = function isString( object ) {
    return Object.prototype.toString.call( object ) === '[object String]';
  }

  DOM.prototype.isBoolean = function isBoolean( object ) {
    return Object.prototype.toString.call( object ) === '[object Boolean]';
  }

  DOM.prototype.isNull = function isNull( object ) {
    return
      Object.prototype.toString( object ) === '[object Null]' ||
      Object.prototype.toString( object ) === '[object Undefined]';
  }

  var $cep = new DOM( '[data-js="cep"]' );
  var $submit = new DOM( '[data-js="submit"]' );
  var $logradouro = new DOM( '[data-js="logradouro"]' );
  var $bairro = new DOM( '[data-js="bairro"]' );
  var $estado = new DOM( '[data-js="estado"]' );
  var $cidade = new DOM( '[data-js="cidade"]' );
  var $state = new DOM( '[data-js="state"]' );

  function initialize() {
    $submit.on( 'click', handleClickSubmit, false );
  }

  function handleClickSubmit( event ) {
    event.preventDefault();
    var cep = getCep();
    if( cep ) createRequestCep( cep );
  }

  function createRequestCep( cep ) {
    var ajax = new XMLHttpRequest();
    var url = 'https://viacep.com.br/ws/' + cep + '/json/';
    ajax.open( 'GET', url );
    ajax.send();
    ajax.addEventListener( 'readystatechange', insertDataInForm, false );
  }

  function insertDataInForm() {
    $state.get()[ 0 ].innerHTML = this.status;
    if( !isRequestOk( this ) ) return;
    var data = JSON.parse( this.responseText );
    $logradouro.get()[ 0 ].value = data.logradouro;
    $bairro.get()[ 0 ].value = data.bairro;
    $estado.get()[ 0 ].value = data.uf;
    $cidade.get()[ 0 ].value = data.localidade;
  }

  function getCep() {
    var cep = $cep.get()[ 0 ].value;
    cep = numbersOnly( cep );
    return isValidCep( cep ) ? cep : false;
  }

  function numbersOnly( value ) {
    return value.replace( /\D/g, '' );
  }

  function isValidCep( cep ) {
    return cep.length === 8;
  }

  function isRequestOk( ajax ) {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  initialize();

}( window, document ) );
