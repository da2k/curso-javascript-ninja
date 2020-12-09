(function( win, doc ) {
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

  function DOM( selector ) {
    this.element = doc.querySelectorAll( selector );
  }
  
  DOM.prototype.on = function( eventType, callback ) {
    this.forEach( function( elem ) {
        elem.addEventListener( eventType, callback, false );
    } );
  };
  
  DOM.prototype.off = function( eventType, callback ) {
    this.forEach( function( elem ) {
        elem.removeEventListener( eventType, callback, false );
    } );
  };
  
  DOM.prototype.get = function() {
    return this.element;
  };
  
  [ 'forEach', 'map', 'filter', 'reduce', 'reduceRight', 'every', 'some' ].forEach( function( fn ) {
    DOM.prototype[fn] = function( callback ) {
        return Array.prototype[fn].call( this.element, callback );
    }
  } );
  
  [ 'isArray', 'isObject', 'isFunction', 'isNumber', 'isString', 'isBoolean' ].forEach( function( fn  ) {
    DOM[fn] = function( arg ) {
        return Object.prototype.toString.call( arg ) === '[object ' + fn.replace('is', '') + ']';
    };
  } );
  
  DOM.isNull = function( arg ) {
    return Object.prototype.toString.call( arg ) === '[object Null]' ||   Object.prototype.toString.call( arg ) === '[object Undefined]';
  }
  

    var $form = new DOM( '[data-js="form"]' );
    $form.on( 'submit', handleSubmit );

    var $cep = new DOM( '[data-js="cep"]' );
    var cep;

    var $status = new DOM( '[data-js="status"]' ).get()[0];
    var $logradouro = new DOM( '[data-js="logradouro"]' ).get()[0];
    var $bairro = new DOM( '[data-js="bairro"]' ).get()[0];
    var $cidade = new DOM( '[data-js="cidade"]' ).get()[0];
    var $estado = new DOM( '[data-js="estado"]' ).get()[0];
    var $cep2 = new DOM( '[data-js="cep2"]' ).get()[0];

    function handleSubmit( e ) {
      e.preventDefault();

      if ( !clearCEP() ) {
        $status.textContent = 'Caracteres inválidos';
  
        return;
      } 
      
      request();
    }
    
    function clearCEP() {
      cep = $cep.get()[0].value.replace( /\D/g, '' ).replace( /(\d{3})$/, '-$1' );

      return cep.length > 0 ? true : false;
    }

    function request() {            
        var xhr = new XMLHttpRequest();
        if ( xhr ) {
            getMessage( 'loading' );

            xhr.addEventListener( 'readystatechange', function() {
              handleReadyStateChange( xhr );
            }, false );
        }

        xhr.open( 'GET', 'https://ws.apicep.com/cep/'+ cep + '.json', false );
        xhr.send(null);
    }

    function handleReadyStateChange( xhr ) {
      if ( xhr.readyState == 4 ) {
        handleResponse( xhr );
      }
    }

    function handleResponse( xhr ) {
        if ( xhr.status == 200 || xhr.status == 304 ) {
          showResponse( xhr.responseText );
        }
        else {
          alert("Página não encontrada");
          $status.textContent = 'URL inválida';
        }
    }

    function showResponse( response ) {
      response = JSON.parse( response );

      if ( response.status == 200 ) {
        getMessage( 'ok' );

        $logradouro.value = response.address;
        $bairro.value = response.district;
        $cidade.value = response.city;
        $estado.value = response.state;
        $cep2.value = response.code;
      }
      else {
        getMessage( 'error' );

        $logradouro.value = '';
        $bairro.value = '';
        $cidade.value = '';
        $estado.value = '';
        $cep2.value = '';
      }
    }

    function getMessage( type ) {
        var messages = {
          loading: 'Buscando informações para o CEP ' + cep + '...',
          ok: 'Endereço referente ao CEP ' + cep,
          error: 'Não encontramos o endereço para o CEP ' + cep
        }

        $status.textContent = messages[type];
    }


  } )( window, document);
