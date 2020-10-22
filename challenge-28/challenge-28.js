(function (DOM) {
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

    function app () {

      var ajax = new XMLHttpRequest();
      var $input = new DOM('[data-js="input"]');
      var $button = new DOM('[data-js="button"]');
      var $status = document.querySelector( '[data-js="status"]' );
      var $logradouro = document.querySelector( '[data-js="logradouro"]' );
      var $bairro = document.querySelector( '[data-js="bairro"]' );
      var $cidade = document.querySelector( '[data-js="cidade"]' );
      var $uf = document.querySelector( '[data-js="uf"]' );
      var $cep = document.querySelector( '[data-js="cep"]' );
      $input.on( 'input' , handleCep );
      $input.on( 'blur' , validateCep );
      $button.on( 'click' , requestToViaCep );

      function handleCep () {
        $input.element[0].value = $input.element[0].value.replace(/\D/g , '')
          .replace(/(\d{2})(\d)/ , '$1.$2' )
          .replace(/(\d{3})(\d)/ , '$1-$2' )
          .replace(/(-\d{3}).*$/ , '$1');
      }

      function validateCep () {
        var validate = /^\d{2}\.\d{3}-\d{3}$/
        var result = validate.test( $input.element[0].value );

        !result && alert('Informe um CEP válido!');

        return result;
      }

      function cleanCep () {
        var cep = $input.element[0].value.replace( /\D/g , '' );
        return cep;
      }

      function requestToViaCep (e) {
        e.preventDefault();
        if ( validateCep() ){
          ajax.open( 'GET' , 'https://viacep.com.br/ws/' + cleanCep()  + '/json/' );
          ajax.send( null )
          ajax.addEventListener( 'readystatechange' , searchAdressByCep , false )
        }
      }

      function searchAdressByCep () {
        changeSearchCepStatus();
        if ( ajax.readyState === 4 ){
          resetInputs();
          try {
            getResponse()
          } catch ( e ) {
            alert( 'Ops alo deu errado... tente novamente' );
          }
        }
      }

      function getResponse () {
        var result = JSON.parse( ajax.responseText );

        if( result.erro )
          return $status.textContent = 'Não encontramos o endereço para o CEP: '
            + $input.element[0].value;

        $status.nodeValue = checkRequestStatus( ajax.readyState );
        renderAdress( result );
      }

      function changeSearchCepStatus () {
        if ( ajax.readyState < 4 )
          $status.textContent = checkRequestStatus( ajax.readyState );
      }

      function resetInputs () {
        $logradouro.value = '';
        $bairro.value = '';
        $cidade.value = '';
        $cep.value = '';
        $uf.value = '';
      }

      function checkRequestStatus ( status ) {
        var request = [
          'Erro: não foi aberta conexão',
          'Aguarde...',
          'Buscando informações para o CEP: ' + $input.element[0].value,
          'Buscando informações para o CEP: ' + $input.element[0].value,
          'Endereço referente ao CEP: ' + $input.element[0].value,
        ]
        return request[status];
      }

      function renderAdress ( result ) {
        $logradouro.textContent = result.logradouro;
        $bairro.textContent = result.bairro;
        $cidade.textContent = result.localidade;
        $cep.textContent = result.cep;
        $uf.textContent = result.uf;
      }

      return {
        requestToViaCep: requestToViaCep
      }
    }
    window.app = app;
    app();

  })(window.DOM);
