( function( win, doc, $ ) {
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

  var app = ( function appController() {
    return {
      init: function init() {
        this.loadCompanyData();
        this.initEvents();
      },

      loadCompanyData: function loadCompanyData() {
        var ajax = new XMLHttpRequest();
        ajax.open( 'GET', '/company.json', true );
        ajax.send();
        ajax.addEventListener( 'readystatechange', this.handleReadyStateChange );
      },

      initEvents: function initEvents() {
        $( '[data-js="car-form"]' ).on( 'submit', this.handleSubmitCarForm );
      },

      handleReadyStateChange: function handleReadyStateChange() {
        if( app.isRequestOk( this ) ) app.fillCompanyData( this );
      },

      isRequestOk: function isRequestOk( ajax ) {
        return ajax.readyState === 4 && ajax.status === 200;
      },

      fillCompanyData: function fillCompanyData( ajax ) {
        var data = JSON.parse( ajax.responseText );
        var $companyName = $( '[data-js="company-name"]' ).get();
        var $companyPhone = $( '[data-js="company-phone"]' ).get();
        $companyName.textContent = data.name;
        $companyPhone.textContent = data.phone;
      },

      handleSubmitCarForm: function handleSubmitCarForm( event ) {
        event.preventDefault();
        var $carInputs = $( '[data-js="car-input"]' );
        app.insertCarInTable( $carInputs );
        app.clearForm( $carInputs );
      },

      insertCarInTable: function insertCarInTable( $carInputs ) {
        var $fragment = doc.createDocumentFragment();
        $fragment.append( this.createTableRow( $carInputs ) );
        $( '[data-js="table-body"]' ).get().append( $fragment );
      },

      createTableRow: function createTableRow( $carInputs ) {
        var $tr = doc.createElement( 'tr' );
        $carInputs.forEach( function( $input, index ) {
          if( index === 0 ) $tr.append( app.createTableDataWithImage( $input.value ) );
          else $tr.append( app.createTableData( $input.value ) );
        } );
        return $tr;
      },

      createTableData: function createTableData( value ) {
        var $td = doc.createElement( 'td' );
        $td.textContent = value;
        return $td;
      },

      createTableDataWithImage: function createTableDataWithImage( url ) {
        var $img = doc.createElement( 'img' );
        var $td = doc.createElement( 'td' );
        $img.setAttribute( 'src', url );
        $td.append( $img );
        return $td
      },

      clearForm: function clearForm( $carInputs ) {
        $carInputs.forEach( function( $input ) {
          $input.value = '';
        } );
      }
    }
  } )();

  app.init();
  win.app = app;

} )( window, document, window.DOM );
