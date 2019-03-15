  (function( win , doc ){

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

    var $formCep = new DOM('[data-js="form-cep"]');
    var $inputCep = new DOM('[data-js="input-cep"]');
    var ajax = new XMLHttpRequest();

    $formCep.on('submit', ajaxformSubmit );

    function ajaxformSubmit(e){
      e.preventDefault();
      ajax.open('GET', getUrl());
      ajax.send();
      setMessage('loading');
      ajax.addEventListener('readystatechange' , function(){
        if( isRequestOk()){
          setMessage('success');
          fillCep();
        }
      });
    }

    function clearCep(){
      var url = $inputCep.get()[0].value.replace(/\D+/g , '').match(/\d{8}/g);
      return url;
    }

    function getUrl(){
      return 'http://apps.widenet.com.br/busca-cep/api/cep/<cepCode>.json'.replace('<cepCode>' , clearCep());
    }

    function isRequestOk(){
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function fillCep(){
      var data = ParseJson();
      if(!data || data.status === 0 || data === null)
        setMessage('error');
      var $logradouro = new DOM('[data-js="span-logradouro"]');
      var $bairro = new DOM('[data-js="span-bairro"]');
      var $estado = new DOM('[data-js="span-estado"]');
      var $cidade = new DOM('[data-js="span-cidade"]');
      var $cep = new DOM('[data-js="span-cep"]');
      $logradouro.get()[0].textContent = data.address;
      $bairro.get()[0].textContent = data.district;
      $estado.get()[0].textContent = data.state;
      $cidade.get()[0].textContent = data.city;
      $cep.get()[0].textContent = data.code;
    }

    function ParseJson() {
      var response;
      try{
        response = JSON.parse(ajax.responseText);
      }catch(error){
        response = error;
      }
      return response;
    }

    function setMessage( typeMessage ){
      var $status = new DOM('[data-js="span-status"]');
      var messages = {
        success : 'Endereço referente ao CEP '+ clearCep() +': ',
        loading : 'Buscando informações para o CEP ' + clearCep() + '...',
        error : 'Não encontramos o endereço para o CEP ' + clearCep() + '.'
      }
      $status.get()[0].textContent = messages[typeMessage];
    }

})( window , document , DOM);
