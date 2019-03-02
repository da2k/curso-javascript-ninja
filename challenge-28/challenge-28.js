(function(DOM, document) {
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

  function app() {
    var $formCEP = new DOM ('[data-js="form-cep"]');
    var $inputCEP = new DOM ('[data-js="input-cep"]');
    var $logradouro = new DOM ('[data-js="logradouro"]');
    var $cidade = new DOM ('[data-js="cidade"]');
    var $bairro = new DOM ('[data-js="bairro"]');
    var $estado = new DOM ('[data-js="estado"]');
    var $cep = new DOM ('[data-js="cep"]');
    var $status = new DOM ('[data-js="status"]');
    var xhr = new XMLHttpRequest ();

    $formCEP.on('submit', handleSubmitForm);

    function handleSubmitForm(e) {
      e.preventDefault();
      var url = getURL();
      xhr.open('GET', url);
      xhr.send();
      getMessage('loading');
      xhr.addEventListener('readystatechange', handleReadyStateChange);
    }

    function getURL() {
      return 'http://apps.widenet.com.br/busca-cep/api/cep/<cepCode>.json'
      .replace('<cepCode>', clearCEP());
    }

    function clearCEP() {
      return $inputCEP.get()[0].value.replace(/\D/g, '');
    }

    function handleReadyStateChange() {
      if ( isRequestOk() ) {
        getMessage('ready');
        fillFields();
      }
    }

    function isRequestOk() {
      return xhr.readyState === 4 && xhr.status === 200;
    }

    function fillFields() {
      var data = parseData();
      if ( data.status === 0 ) {
        getMessage('error');
        data = clearData();
      }

      $logradouro.get()[0].textContent = data.address;
      $cidade.get()[0].textContent = data.city;
      $bairro.get()[0].textContent = data.district ;
      $estado.get()[0].textContent = data.state;
      $cep.get()[0].textContent = data.code;
    }

    function clearData() {
      return {
        address: '-',
        city: '-',
        district: '-',
        state: '-',
        code: '-'
      }
    }

    function parseData() {
      var result;
      try {
        result = JSON.parse( xhr.responseText );
      }
      catch(error) {
        result = null;
      }
      return result;
    }

    function getMessage(type) {
      var cep = clearCEP();
      var messages = {
        loading: 'Buscando informações para o CEP [CEP]...'.replace('[CEP]', cep),
        ready: 'Endereço referente ao CEP [CEP]:'.replace('[CEP]', cep),
        error: 'Não encontramos o endereço para o CEP [CEP]!'.replace('[CEP]', cep),
      };

      $status.get()[0].textContent = messages[type];
    }
  }

  app();
})(window.DOM, document);
