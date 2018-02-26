(function(win, doc, DOM){
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

    var $cepForm =new DOM('[data-js=cep-form]');
    var $message = new DOM('[data-js=cep-message]');
    var $cepNumber = new DOM('[data-js=cep-number]');
    var $cepButton = new DOM('[data-js=cep-button]');
    var $logradouro = new DOM('[data-js=logradouro]');
    var $bairro = new DOM('[data-js=bairro]');
    var $estado = new DOM('[data-js=estado]');
    var $cidade = new DOM('[data-js=cidade]');
    var $cep = new DOM('[data-js=cep]');
    var $logradouro = new DOM('[data-js=logradouro]');

    var ajax;

    $cepForm.on('submit', handleSubmitForm);

    function handleSubmitForm (event) {
      event.preventDefault();
      ajax = new XMLHttpRequest();
      getMessage('loading');
      if (isInvalidCPF()) {
        getMessage('invalid');
        fillFields();
        return;
      }
      var url = getUrl();
      ajax.open('GET', url);
      ajax.send();
      ajax.addEventListener('readystatechange', handleReadyStateChange, false);
    }

    function isInvalidCPF() {
      return getCEP().length < 8;
    }

    function getCEP() {
      return $cepNumber.get()[0].value.match(/\d/g).join('').slice(0,8);
    }

    function getUrl() {
      return 'https://viacep.com.br/ws/'+ getCEP() +'/json/';
    }

    function handleReadyStateChange() {
      if (isRequestOK()) {
        getMessage('success');
        fillFields();
        return;
      }
      getMessage('error');
      fillFields();
    }

    function isRequestOK() {
      return ajax.status === 200 && ajax.readyState === 4;
    }

    function clearData() {
      var fields = {
        logradouro: '-',
            bairro: '-',
                uf: '-',
        localidade: '-',
               cep: '-'
      };
      return fields;
    }

    function fillFields() {
      var data = parseData();
      if (!data || data.erro) {
        getMessage('error');
        data = clearData();
      }

      $logradouro.get()[0].value = data.logradouro;
      $bairro.get()[0].value = data.bairro;
      $estado.get()[0].value = data.uf;
      $cidade.get()[0].value = data.localidade;
      $cep.get()[0].value = data.cep;
    }

    function parseData() {
      var response;
      try {
        response = JSON.parse(ajax.responseText);
      } catch (error) {
        response = null;
      }
      return response;
    }

    function getMessage(type) {
      var message =  {
        loading: 'Não encontramos o endereço para o CEP ' + getCEP() + '.',
        success: 'Endereço referente ao CEP ' + getCEP(),
        error: 'Não encontramos o endereço para o CEP ' + getCEP() + '.',
        invalid: 'CEP inválido. Digite um CEP válido. Ex: 11950-000'
      }
      $message.get()[0].textContent = message[type];
    }
  }
  app();

})(window, document, DOM);
