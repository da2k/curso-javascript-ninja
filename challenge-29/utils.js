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

  (function(DOM) {

    'use strict';

    function app() {

      var $form = new DOM('form');
      var dom = new DOM();
      var ajax = new XMLHttpRequest();
      var $statusArea = new DOM('[data-js="load-area"]');
      var $inputCEP = new DOM('[data-js="input-cep"]');

      $form.on('submit', handleFormOnSubmit);

      function handleFormOnSubmit(evt) {
        evt.preventDefault();
        ajax.open('GET', createRequestURL($inputCEP.get()[0].value));
        ajax.send();
        getStatusMessage('loading');
        ajax.addEventListener('readystatechange', handleChangeState, false);
      }

      function getStatusMessage(status) {
        var message = {
          "loading" : "Carregando dados para o CEP " + $inputCEP.get()[0].value,
          "done" : "Dados referentes ao CEP " + $inputCEP.get()[0].value,
          "error" : "Nenhum dado para o CEP "  + $inputCEP.get()[0].value
        };
        return $statusArea.get()[0].innerHTML = message[status];
      }

      function handleChangeState() {
        getStatusMessage('done');
        if (isRequestOk(this.readyState, this.status))
        setFields();
      }

      function isRequestOk(readyState, status) {
        return readyState === 4 && status === 200;
      }

      function parseJSON() {
        try {
          return JSON.parse(ajax.responseText);
        } catch(e) {
          return ajax.responseText;
        }
      }

      function validateCEP(cep) {
        return cep.replace(/\D/g, '');
      }

      function createRequestURL(cep) {
        return 'https://apps.widenet.com.br/busca-cep/api/cep.json?code=[CEP]'.replace('[CEP]', validateCEP(cep));
      }

      function setFields() {
        var $inputLogradouro = new DOM('[data-js="input-logradouro"]');
        var $inputBairro = new DOM('[data-js="input-bairro"]');
        var $inputCidade = new DOM('[data-js="input-cidade"]');
        var $inputUf = new DOM('[data-js="input-estado"]');
        var data = parseJSON(ajax);
        if (!hasResponse(data)) {
          data = clearData();
          getStatusMessage('error');
        }
        setFieldValue($inputLogradouro, data.address);
        setFieldValue($inputBairro, data.district);
        setFieldValue($inputCidade, data.city);
        setFieldValue($inputUf, data.state);
      }

      function setFieldValue(field, data) {
        if (dom.isObjectOfGivenType(field.get()[0], 'HTMLInputElement')) {
          field.get()[0].value = data;
        } else if (dom.isObjectOfGivenType(field.get()[0], 'HTMLParagraphElement')) {
          field.get()[0].innerHTML = data;
        }
      }

      function clearData() {
        return {
          address : "-",
          district : "-",
          city : "-",
          state : "-"
        }
      }

      function hasResponse(dataObj) {
        switch (dataObj.status) {
          case 0:
          return false;
          case 1:
          return true;
        }
      }
      return {
        parseJSON : parseJSON,
        clearData : clearData
      };
    }

    window.app = app();
    app();

  })(window.DOM);
