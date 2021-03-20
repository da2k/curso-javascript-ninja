(function (DOM, doc) {

  'use strict';

  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit; --- OK
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS. --- OK
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro." --- OK

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo; --- Ok
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://ws.apicep.com/cep/CepDeExemplo.json", onde [CEP] será o CEP passado
  no input criado no HTML; -- OK
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos. --- OK
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..." --- OK
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]." --- OK
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:" --- OK
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela. --- OK
  */

  var app = function () {

    var $formCep = new DOM('[data-js="form-cep"]');
    var $inputReceberCep = new DOM('[data-js="inputReceberCep"]');
    var $mensagemStatus = new DOM('[data-js="mensagem-status"]');
    var $inserirLogradouro = new DOM('[data-js="logradouro"]');
    var $inserirBairro = new DOM('[data-js="bairro"]');
    var $inserirEstado = new DOM('[data-js="estado"]');
    var $inserirCidade = new DOM('[data-js="cidade"]');
    var $inserirCep = new DOM('[data-js="cep"]');
    var ajax = new XMLHttpRequest();

    $formCep.on('submit', handleSubmit);

    function handleSubmit(event) {
      event.preventDefault();
      var url = getUrl();
      ajax.open('GET', url);
      ajax.send(null);
      statusMessage('loading');
      ajax.addEventListener('readystatechange', handleInformation);
    }

    function handleInformation() {
      if (isRequestOk()) {
        statusMessage('ok')
        fillFields();
      }
    }

    function isRequestOk() {
      return ajax.status === 200 && ajax.readyState === 4;
    }

    function statusMessage(type) {
      var messages = {
        loading: replaceCep('Loading information about this [CEP]!'),
        ok: replaceCep('Information about this [CEP]!'),
        error: replaceCep('[CEP] not found!!')
      };

      return $mensagemStatus.get()[0].textContent = messages[type];
    }

    function clearFields() {
      $inserirLogradouro.get()[0].textContent = '404 - Not Found!!';
      $inserirBairro.get()[0].textContent = '404 - Not Found!!';
      $inserirEstado.get()[0].textContent = '404 - Not Found!!';
      $inserirCidade.get()[0].textContent = '404 - Not Found!!';
      $inserirCep.get()[0].textContent = '404 - Not Found!!';
    }

    function fillFields() {
      var data = parsedData();
      if(data.status === 400){
        return clearFields()
      }
      $inserirLogradouro.get()[0].textContent = data.address;
      $inserirBairro.get()[0].textContent = data.district;
      $inserirEstado.get()[0].textContent = data.state;
      $inserirCidade.get()[0].textContent = data.city;
      $inserirCep.get()[0].textContent = data.code;
    }

    function parsedData() {
      var result;

      try {
        result = JSON.parse(ajax.responseText);
      } catch {
        result = null;
      }

      return result;
    }

    function clearCep() {
      return $inputReceberCep.get()[0].value.replace(/\D/g, '');
    }

    function getUrl() {
      return replaceCep('https://ws.apicep.com/cep/[CEP].json');
    }

    function replaceCep(urlToTreat) {
      return urlToTreat.replace('[CEP]', clearCep());
    }


  }

  window.app = app;
  app();


})(window.DOM, document)
