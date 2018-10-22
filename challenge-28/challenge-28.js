(function (DOM) {
  'use strict'
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

  function app() {
    var $formCEP = new DOM('[data-js="form-cep"]');
    var $inputCEP = new DOM('[data-js="input-cep"]');
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $cep = new DOM('[data-js="cep"]');
    var $status = new DOM('[data-js="status"]');
    $formCEP.on('submit', handleSubmitFormCEP)
    var ajax = new XMLHttpRequest()

    function handleSubmitFormCEP(event) {
      event.preventDefault();
      var url = getUrl();
      ajax.open('GET', url)
      ajax.send()
      getMessage('loading')
      ajax.addEventListener('readystatechange', handleReadyStateChange)
    }

    function getUrl() {
      return replaceCEP('http://apps.widenet.com.br/busca-cep/api/cep/[CEP].json');
    }

    function clearCEP() {
      return $inputCEP.get()[0].value.replace(/\D/g, '')
    }

    function handleReadyStateChange() {
      clearData();

      if (isRequestOk()) {
        fillCEPFields();
        //getMessage('ok')
      }

      if (isRequestFailed()) {
        getMessage('error')
      }
    }

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function isRequestFailed() {
      return ajax.readyState === 4 && ajax.status === 0;
    }

    function fillCEPFields() {
      var data = parseData();

      if (data.status === 0) {
        getMessage('error')
        clearData()
      } else {
        getMessage('ok')
      }

      console.log('DATA', data)
      $logradouro.get()[0].textContent = data.address
      $bairro.get()[0].textContent = data.district
      $estado.get()[0].textContent = data.state
      $cidade.get()[0].textContent = data.city
      $cep.get()[0].textContent = data.code
    }

    function clearData() {
      $logradouro.textContent = '-';
      $bairro.textContent = '-';
      $estado.textContent = '-';
      $cidade.textContent = '-';
      $cep.textContent = '-'
    }

    function parseData() {
      var result;
      try {
        result = JSON.parse(ajax.responseText);
      }
      catch (e) {
        result = null;
      }
      return result
    }

    function getMessage(type) {
      var messages = {
        loading: replaceCEP('Buscando informações para o CEP [CEP]...'),
        ok: replaceCEP('Endereço referente ao CEP [CEP]:'),
        error: replaceCEP('Não encontramos o endereço para o CEP [CEP].')
      }
      $status.get()[0].textContent = messages[type]
    }

    function replaceCEP(message) {
      return message.replace('[CEP]', clearCEP())
    }

    return {
      getMessage: getMessage,
      replaceCEP: replaceCEP
    }
  }

  window.app = app();
  app();

})(window.DOM);
