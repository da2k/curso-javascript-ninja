(function (doc) {
  'use strict;'
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
  var $form = new DOM('[data-js=formCep]');
  var $inputCep = new DOM('[data-js=inputCep]');
  var $inputLogradouro = new DOM('[data-js=inputLogradouro]');
  var $inputBairro = new DOM('[data-js=inputBairro]');
  var $inputCidade = new DOM('[data-js=inputCidade]');
  var $inputEstado = new DOM('[data-js=inputEstado]');
  var $inputCEP = new DOM('[data-js=inputCEP]');
  var $statusMessage = new DOM('[data-js=statusMessage]');

  function initialize() {
    initEvents();
  }

  function initEvents() {
    $form.get()[0].addEventListener('submit', handleSubmitForm);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    searchCep(getCep());
  }

  function getCep() {
    var cep = $inputCep.get()[0].value.replace(/\D/g, '');
    $inputCep.get()[0].value = cep;
    return cep;
  }

  function searchCep(cep) {
    const uri = 'https://viacep.com.br/ws/' + cep + '/json/';
    var xhr = new XMLHttpRequest();
    setRequestMessage('Buscando informações para o CEP ' + cep + '...');
    xhr.open('GET', uri);
    xhr.send();
    xhr.onreadystatechange = function () {
      try {
        if (isRequestOk(xhr)) {
          var responseJson = JSON.parse(xhr.responseText);
          if(responseJson.erro === true) {
            throw new Error('CEP não encontrado.');
          }
          fillFields(responseJson);
          setRequestMessage('Endereço referente ao CEP ' + cep + ':');
        } else if (isRequestError(xhr)) {
          throw new Error('CEP não encontrado.');
        }
      } catch (exception) {
        setRequestMessage('Não encontramos o endereço para o CEP ' + cep + '.');
      }
    }
  }

  function handlRequestStateChange () {

  }

  function isRequestOk(request) {
    return request.status === 200 && request.readyState === 4;
  }

  function isRequestError(request) {
    return request.status !== 200 && request.readyState === 4;
  }

  function fillFields(jsonAdress) {
    $inputLogradouro.get()[0].value = jsonAdress.logradouro;
    $inputBairro.get()[0].value = jsonAdress.bairro;
    $inputCidade.get()[0].value = jsonAdress.localidade;
    $inputEstado.get()[0].value = jsonAdress.uf;
    $inputCEP.get()[0].value = jsonAdress.cep;
  }

  function setRequestMessage(text) {
    $statusMessage.get()[0].textContent = text;
  }

  initialize();
})(document);
