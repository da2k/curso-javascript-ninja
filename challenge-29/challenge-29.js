(function( $, doc ) {
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

 var app = ( function() { 
   
  return {
     init: function() {
        request( 'http://127.0.0.1:5501/challenge-29/company.json' );
       
        var $btnInsert = $( '[data-js="btnInsert"]' );
        $btnInsert.on( 'click', insert );

        list();
      },
  }  
  
  function request( url ) {
    var xhr = new XMLHttpRequest();
    
    if ( xhr ) {
      xhr.addEventListener( 'readystatechange', function() {
        handleStateChange( xhr );
      }, false ); 
      
      xhr.open( 'GET', url, true );
      xhr.send( null );
    }
      
  }
    
  function handleStateChange( xhr ) {
    if ( xhr.readyState === 4 ) {
      if ( xhr.status === 200 || xhr.status === 304 ) {
        handleResponse( xhr );
      }
    }
  }
    
  function handleResponse( xhr ) {    
        var $name = $( '[data-js="company-name"]' );
        var $phone = $( '[data-js="company-phone"]' );

        var response = xhr.responseText;
        response = JSON.parse( response );

        $name.get().textContent = response.name;
        $phone.get().textContent = response.phone;
  }


  function insert( e ) {
      e.preventDefault();
    
      var img = $( '[data-js="img"]' ).get().value;
      var brand = $( '[data-js="brand"]' ).get().value;
      var model = $( '[data-js="model"]' ).get().value;
      var year = $( '[data-js="year"]' ).get().value;
      var plate = $( '[data-js="plate"]' ).get().value;
      var color = $( '[data-js="color"]' ).get().value;
      
      var cars = [];
      
      if ( localStorage.getItem( 'cars' ) ) {
        cars = JSON.parse( localStorage.getItem( 'cars' ) )

      }

      cars.push({
        img: img, brand: brand, model: model, year: year, plate: plate, color: color
      });

      localStorage.setItem( 'cars', JSON.stringify( cars ) );

      list();
      
      clear();
  }

  function clear() {
    $( '[data-js="img"]' ).value = '';
    $( '[data-js="brand"]' ).value = '';
    $( '[data-js="model"]' ).value = '';
    $( '[data-js="year"]' ).value = '';
    $( '[data-js="plate"]' ).value = '';
    $( '[data-js="color"]' ).value = '';
  }

  function list() {
      var cars = [];

      if ( localStorage.getItem( 'cars' ) ) {
          cars =  JSON.parse( localStorage.getItem( 'cars' ) );
      }
      
      var tbody = '';
      var length = cars.length;
      
      for ( var i = 0; i < length; i++ ) {
          tbody += '<tr><td>' + cars[i].img + '</td>' +
                        '<td>' + cars[i].brand + '</td>' +
                        '<td>' + cars[i].model + '</td>' + 
                        '<td>' + cars[i].year + '</td>' +
                        '<td>' + cars[i].plate + '</td>' +
                        '<td>' + cars[i].color + '</td></tr>';
      }
      
      var $tbody = $( '[data-js="body"]' ).get( 0 );
      $tbody.innerHTML = tbody;
  }
} )();  

app.init();

})( window.DOM, document );
