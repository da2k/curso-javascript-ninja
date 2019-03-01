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

(function(doc) {
  "use strict";

  // get the dom for each element
  var $form = new DOM("[data-js=formCep]");
  var $inputCep = new DOM("[data-js=inputCep]");
  var $endereco = new DOM("[data-js=endereco]");
  var $bairro = new DOM("[data-js=bairro");
  var $cidade = new DOM("[data-js=cidade]");
  var $cep = new DOM("[data-js=cep]");
  var $estado = new DOM("[data-js=estado]");
  var $statusMessage = new DOM("[data-js=status]");

  // Http request for call api
  var xhr = new XMLHttpRequest();

  // Start Events
  function initialize() {
    initEvents();
  }

  // Set event for button submit
  function initEvents() {
    $form.get()[0].addEventListener("submit", handleSubmitForm);
  }

  // When the button submit was click, they'll do this
  function handleSubmitForm(e) {
    e.preventDefault(); // cancel refresh page
    searchCep(getCep()); // callback for searchCep and get Cep
  }

  // Get the cep value
  function getCep() {
    var getInputCep = $inputCep.get()[0].value.replace(/\D/g, "");
    return getInputCep;
  }

  // Search for cep, the params are the cep
  function searchCep(cep) {
    // url for api
    const uri = `http://apps.widenet.com.br/busca-cep/api/cep/${cep}.json`;
    xhr.open("GET", uri);
    xhr.send();
    xhr.onreadystatechange = handleRequestStateChange; // state change
    setRequestMessage("loading");
  }

  // promise for request
  function handleRequestStateChange() {
    try {
      if (isRequestOk(xhr)) {
        // define the format of data
        var data = JSON.parse(xhr.responseText);
        // callback for set all the fields of html
        fillFields(data);
        // if success, will show the msg
        setRequestMessage("success");
      } else if (isRequestError(xhr)) {
        throw new Error("Cep nao encontrado");
      }
    } catch (exception) {
      setRequestMessage("error");
    }
  }

  // check if request are success
  function isRequestOk(request) {
    return request.status === 200 && request.readyState === 4;
  }

  // check if request error
  function isRequestError(request) {
    return request.status !== 200 && request.readyState === 4;
  }

  // population data for fields
  function fillFields(data) {
    if (!data.erro) {
      $bairro.get()[0].innerHTML = data.district;
      $endereco.get()[0].innerHTML = data.address;
      $bairro.get()[0].innerHTML = data.district;
      $cidade.get()[0].innerHTML = data.city;
      $cep.get()[0].innerHTML = data.code;
      $estado.get()[0].innerHTML = data.state;
    } else {
      throw new Error("Cep nao encontrado");
    }
  }

  // set msg status
  function setRequestMessage(messageKey) {
    $statusMessage.get()[0].textContent = getMessage(messageKey);
  }

  // get msg status
  function getMessage(messageKey) {
    var messages = {
      success: "Encereço referente ao CEP: [CEP]",
      loading: "Buscando informacoes para o CEP [CEP]...",
      error: "nao encontramos o endecero para o CEP: [CEP]"
    };
    return messages[messageKey].replace("[CEP]", getCep());
  }

  initialize();
})(document);
