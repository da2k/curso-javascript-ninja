(function(doc){
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

  function DOM(elements){
      this.element = doc.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventType, callback){
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.get = function get(){
    return this.element;
  };

  var $cep = new DOM('[data-js="cep"]');
  var $submit = new DOM('[data-js="sendform"]');
  var $status = new DOM('[data-js="status"]');
  var $logradouro = new DOM('[data-js="logradouro"]');
  var $bairro = new DOM('[data-js="bairro"]');
  var $estado = new DOM('[data-js="estado"]');
  var $cidade = new DOM('[data-js="cidade"]');
  var $cepReturn = new DOM('[data-js="cepReturn"]');

  var ajax = new XMLHttpRequest();

  function cleanEntryCep(cep) {
      return (cep.replace(/\D/g, '')).match(/\d{8}/);      
    }

  function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200;
  }

  function cleanFields() {
      $logradouro.get()[0].value = '';
      $bairro.get()[0].value = '';
      $estado.get()[0].value = ''; 
      $cidade.get()[0].value = '';
      $cepReturn.get()[0].value = '';
  }

  $submit.on('click', function (e) {
    var cleanedCEP = cleanEntryCep($cep.get()[0].value);
    var linkToSend = 'https://viacep.com.br/ws/'+cleanedCEP+'/json/';
    e.preventDefault();
    ajax.open('GET', linkToSend);
    ajax.send();
    ajax.addEventListener('readystatechange', function() {
        if ( isRequestOk() ) {
            var dataReceived = JSON.parse(ajax.responseText);
            if (dataReceived.erro === undefined) {
                $status.get()[0].value = 'Endereço referente ao CEP '+cleanedCEP+':';
                $logradouro.get()[0].value = dataReceived.logradouro;
                $bairro.get()[0].value = dataReceived.bairro;
                $estado.get()[0].value = dataReceived.uf;
                $cidade.get()[0].value = dataReceived.localidade;
                $cepReturn.get()[0].value = dataReceived.cep;
                }
            else {
                $status.get()[0].value = 'Não encontramos o endereço para o CEP '+cleanedCEP+'.';
                cleanFields();
            }            
        } else {
            $status.get()[0].value = 'Buscando informações para o CEP '+cleanedCEP+'...';
        }
    }, false);
  });
})(document);
