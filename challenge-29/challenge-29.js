( function( win, doc, DOM ) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  function app() {
    var ajax = new XMLHttpRequest();
    var $companyName = new DOM( '[data-js="company-name"]' );
    var $companyPhone = new DOM( '[data-js="company-phone"]' );
    var $carInputs = new DOM( '[data-js="car-input"]' );
    var $carForm = new DOM( '[data-js="car-form"]' );
    var $tableBody = new DOM( '[data-js="table-body"]' );

    function initialize() {
      loadCompanyData();
      $carForm.on( 'submit', handleSubmitCarForm );
    }

    function loadCompanyData() {
      ajax.open( 'GET', 'company.json' );
      ajax.send();
      ajax.addEventListener( 'readystatechange', handleReadyStateChange );
    }

    function handleReadyStateChange() {
      if( isRequestOk() ) fillCompanyData();
    }

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function fillCompanyData() {
      var data = JSON.parse( ajax.responseText );
      $companyName.get()[ 0 ].textContent = data.name;
      $companyPhone.get()[ 0 ].textContent = data.phone;
    }

    function handleSubmitCarForm( event ) {
      event.preventDefault();
      insertCarInTable();
      clearForm();
    }

    function insertCarInTable() {
      var $fragment = doc.createDocumentFragment();
      $fragment.appendChild( createTableRow() );
      $tableBody.get()[ 0 ].appendChild( $fragment );
    }

    function createTableRow() {
      var $tr = doc.createElement( 'tr' );
      $carInputs.forEach( function( $input ) {
        $tr.append( createTableData( $input.value ) );
      } );
      return $tr;
    }

    function createTableData( value ) {
      var $td = doc.createElement( 'td' );
      $td.textContent = value;
      return $td;
    }

    function clearForm() {
      $carInputs.forEach( function( $input ) {
        $input.value = '';
      } );
    }

    initialize();
  }

  app();
  win.app = app;

} )( window, document, window.DOM );
