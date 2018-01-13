(function( window, document){

  'use strict';

  
//   No HTML:
//   - Crie um formulário com um input de texto que receberá um CEP e um botão
//   de submit;
//   - Crie uma estrutura HTML para receber informações de endereço:
//   "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
//   preenchidas com os dados da requisição feita no JS.
//   - Crie uma área que receberá mensagens com o status da requisição:
//   "Carregando, sucesso ou erro."

//   No JS:
//   - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
//   deve ser limpo e enviado somente os números para a requisição abaixo;
//   - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
//   "http://cep.correiocontrol.com.br/[CEP].json", onde [CEP] será o CEP passado
//   no input criado no HTML;
//   - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
//   com os dados recebidos.
//   - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
//   a mensagem: "Buscando informações para o CEP [CEP]..."
//   - Se não houver dados para o CEP entrado, mostrar a mensagem:
//   "Não encontramos o endereço para o CEP [CEP]."
//   - Se houver endereço para o CEP digitado, mostre a mensagem:
//   "Endereço referente ao CEP [CEP]:"
//   - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
//   adicionar as informações em tela.
  

  function $( el ){
    return document.querySelector(el);
  }

  // Form
  var $form = $('[data-js="form"]');
  var $inputCep = $('[data-js="cep"]');
  var $btnForm = $('[data-js="btn"]');  

  // Content controls 
  var $address = $('[data-js="fullAddress"]');     
  var $logradouro = $('[data-js="aLogradouro"]');
  var $bairro = $('[data-js="aBairro"]');
  var $estado = $('[data-js="aEstado"]');
  var $cidade = $('[data-js="aCidade"]');
  var $cep = $('[data-js="aCEP"]');

  // Status content
  var $status = $('[data-js="status"]');
  
  // Btn
  $form.addEventListener( 'submit', sendForm, false );

  // AJAX
  var ajax = new XMLHttpRequest();
  var response;

  // Is Request Ok Function
  function isRequestOk( ajax ) {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  // Get CEP Function
  function getCep() {
    return $inputCep.value.replace( /\D+/g, '' );
  }

  // Get Url CEP Function
  function getUrl( cep ) {    
    var cep = getCep();
    return 'https://viacep.com.br/ws/' + cep + '/json/';
  }

  // Reset Content Function
  function resetContent() {
    $address.style.display= 'none';
    $logradouro.innerHTML = '';
    $bairro.innerHTML     = '';
    $estado.innerHTML     = ''; 
    $cidade.innerHTML     = '';
    $cep.innerHTML        = '';
  }  

  // Status Request Function
  function requestStatus( text, classEl ) {
    this.innerHTML = text;
    this.className = 'request-status ';
    this.className += classEl;
  }  

  // Content Request Success Function
  function contentRequestSuccess( response ) {
    var cep = getCep();   

    if( response ) {
      $address.style.display= 'block';
      $logradouro.innerHTML = response.logradouro;
      $bairro.innerHTML     = response.bairro;
      $estado.innerHTML     = response.uf;
      $cidade.innerHTML     = response.localidade;
      $cep.innerHTML        = response.cep; 
    } 

    requestStatus.call(
      $status, 
      'Endereço referente ao CEP <strong>' + cep + '</strong>:', 
      'success'
    );
  }

  // Content Request Warning Function
  function contentRequestWarning() {
    var cep = getCep(); 
    
    resetContent();
    requestStatus.call(
      $status, 
      'Buscando informações para o CEP <strong>' + cep + '</strong>.', 
      'warning'
    );
  }

  // Content Request Error Function
  function contentRequestError() {
    var cep = getCep(); 
    
    requestStatus.call(
      $status, 
      'Não encontramos o endereço para o CEP <strong>' + cep + '</strong>.', 
      'error'
    );
  }

  // Send Form Function
  function sendForm(e) {
    e.preventDefault();   

    var cep = getCep();

    if ( !cep || cep.length !== 8 )
      return alert('Insira um CEP válido contendo 8 números.');

    var url = getUrl( cep );
    
    ajax.open( 'GET', url );
    ajax.send();

    contentRequestWarning();    
  }

  // AJAX Button Handle
  ajax.addEventListener( 'readystatechange', function(){
      //console.log( 'Terminou requisição', ajax.readyState, ajax.status );

      var cep = getCep();

      if( isRequestOk( ajax ) ) {

        try {
          response = JSON.parse( ajax.responseText ); 
          if( response.erro === true ) {
            contentRequestError();
          } else {            
            contentRequestSuccess( response );
          }                   
        }
        
        catch( e ) {
          response = ajax.responseText;
        }

      } else {
        contentRequestError();
      }

    }, false ); 

})( window, document);