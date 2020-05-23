(function (document) {
  "use strict";
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

  function DOM(selector) {
    this.element = document.querySelector(selector);
    this.addEventListener = function (event, callback) {
      this.element.addEventListener(event, callback);
    };
    this.setContent = function (content) {
      this.element.innerHTML = content;
    };
    this.getValue = function () {
      return this.element.value;
    };
    this.setValue = function (value) {
      return (this.element.value = value);
    };
  }

  var $input = new DOM("#cep");
  var $button = new DOM("#button");
  var $message = new DOM("#message");
  var $street = new DOM("#street");
  var $neighborhood = new DOM("#neighborhood");
  var $state = new DOM("#state");
  var $city = new DOM("#city");
  var $zipCode = new DOM("#zipCode");

  const BASE_URL = "https://ws.apicep.com/cep.json?code=";

  $button.addEventListener("click", function (e) {
    e.preventDefault();
    _findAddressAsync($input.element.value);
  });

  async function _findAddressAsync(zipCode) {
    var formattedZipCode = formatZipCode(zipCode);
    showMessage(`Buscando informações para o CEP ${zipCode}...`);
    var ajax = new XMLHttpRequest();
    ajax.open("GET", `${BASE_URL}${formattedZipCode}`);
    ajax.send();
    ajax.addEventListener("readystatechange", function () {
      if (isResponseOk(ajax)) {
        try {
          getAddress(ajax);
        } catch (e) {
          console.log(e);
          showMessage(`Não encontramos o endereço para o CEP ${zipCode}`);
        }
      }
    });
  }

  function isResponseOk({ readyState, status }) {
    if (readyState === 4 && status === 200) return true;
    return false;
  }

  function formatZipCode(zipCode) {
    return zipCode.split("").reduce(function (t, v) {
      if (/\d/.test(v)) {
        return t + v;
      }
      return t;
    });
  }

  function getAddress({ response }) {
    var {
      address: street,
      district: neighborhood,
      state,
      city,
      code: zipCode,
    } = JSON.parse(response);
    var address = { street, neighborhood, state, city, zipCode };
    console.log("Address: ", address);
    showAddressInfo(address);
    showMessage(`Endereço referente ao CEP ${zipCode}: `);
  }

  function showAddressInfo(info) {
    $street.setContent(`Logradouro: ${info.street}`);
    $neighborhood.setContent(`Bairro: ${info.neighborhood}`);
    $state.setContent(`Estado: ${info.state}`);
    $city.setContent(`Cidade: ${info.city}`);
    $zipCode.setContent(`CEP: ${info.zipCode}`);
  }

  function showMessage(message) {
    $message.setContent(message);
  }
})(document);
