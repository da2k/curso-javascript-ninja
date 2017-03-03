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
(function(doc, win) {
  'use strict';

  var inputCEP = document.querySelector('[data-js="enter-cep"]');
  var $status = document.querySelector('[data-js="status"]');

  function clickButton() {
    var clickButton = document.querySelector('[data-js="button-send"]');

    clickButton.addEventListener('click', function(e) {
      e.preventDefault();
      var cep = cleanInputCEP(inputCEP);
      getAjaxresponse(cep);
      $status.innerHTML = '';
    });
  }

  function maskInputCEP() {
    inputCEP.addEventListener('keyup', function() {
      inputCEP.value = inputCEP.value.replace(/[^0-9\-]/, '');
      if(inputCEP.value.length === 5) {
        inputCEP.value += '-';
      }
    });
  }

  function cleanInputCEP(string) {
    return string.value.replace(/-/g, '');
  }

  function readData(data) {
    document.querySelector('[data-js="logradouro"]').innerHTML = data.logradouro;
    document.querySelector('[data-js="bairro"]').innerHTML = data.bairro;
    document.querySelector('[data-js="uf"]').innerHTML = data.uf;
    document.querySelector('[data-js="localidade"]').innerHTML = data.localidade;
    document.querySelector('[data-js="cep"]').innerHTML = data.cep;
  }

  function getAjaxresponse(cep) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://viacep.com.br/ws/' + cep + '/json/');
    xhr.onload = function() {
      if (xhr.status === 200) {
        readData(JSON.parse(xhr.responseText));
        getMessage('ok');
      }else {
        getMessage('error');
      }
    };
    xhr.send();
    getMessage('loading');
  }

  function getMessage(type) {
    var cep = cleanInputCEP(inputCEP);
    var messages = {
      loading: 'Buscando informações para o CEP [CEP]...'.replace('[CEP]', cep),
      ok: 'Endereço referente ao CEP [CEP]: '.replace('[CEP]', cep),
      error: 'Não encontramos o endereço para o CEP [CEP].'.replace('[CEP]', cep)
    };
    $status.textContent = messages[type];
  }

  function init() {
    clickButton();
    maskInputCEP();
  }

  init();

})(document, window);
