(function( $ ) {
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

  function app () {
    var ajax = new XMLHttpRequest();
    var $title = $( '[data-js="title"]' );
    var $phone = $( '[data-js="phone"]' );
    var $carFeatures = $( '[data-js="input"]' );
    var $button = $( '[data-js="button"]' );
    var $carSalon = $( '[data-js="car-salon"]' );

    function initAddEvents () {
      ajax.addEventListener( 'readystatechange' , handleAjax );
      $button.on( 'click' , handleNewCar );
    }

    function chargeCompanyTitleAndPhone () {
      var response = JSON.parse( ajax.responseText );

      $title.get().textContent = response.name;
      $phone.get().textContent = response.phone;
    }

    function handleAjax () {
      if ( isRequestOk() ) {
        try {
          chargeCompanyTitleAndPhone();
        } catch ( e ) {
          console.log(e);
          alert('Ops... Algo deu errado, tente mais tarde!')
        }
      }
    }

    function openAjaxRequest () {
      ajax.open( 'GET' , 'company.json' );
      ajax.send( null );
    }

    function isRequestOk () {
      return ajax.status === 200 && ajax.readyState === 4;
    }

    function handleNewCar () {
      var $fragment = document.createDocumentFragment();
      var $divMain = document.createElement( 'div' );
      $divMain.className = 'table';
      $carFeatures.forEach( function ( item , index ) {
      item.hasAttribute('data-id') ?
        handleImage( item , index , $divMain , $fragment ) :
        handleElements( item , index , $divMain );
      } )
      $carSalon.get().appendChild( $fragment );
    }

    function handleImage ( item , index , $divMain , $fragment ) {
      var $img = document.createElement( 'img' )
      $img.setAttribute( 'src' , item.value )
      $img.style = handleStyleTable( index );
      $divMain.appendChild( $img );
      $fragment.appendChild( $divMain );
    }

    function handleElements ( item , index , $divMain ) {
      var $div = document.createElement( 'div' );
      $div.style = handleStyleTable( index )
      $div.textContent = item.value;
      $divMain.appendChild( $div )
    }

    function handleStyleTable ( index ) {
      var obj = [
        function model () { return 'grid-area: 1 / 2'; },
        function year () { return 'grid-area: 1 / 5'; },
        function plate () { return 'grid-area: 1 / 4'; },
        function color () { return 'grid-area: 1 / 3'; },
        function image () { return 'grid-area: 1 / 1'; }
      ];

      return obj[ index ]();
    }

    return {
      init: function () {
        openAjaxRequest();
        initAddEvents();
      }
    }
  }

  app().init();
})( window.DOM );
